"""Voice acting for the radio lines.

Reads RADIO from src/story.js, speaks every line with a Piper neural voice,
adds a radio (or colony-PA) effect with ffmpeg, and writes:
  audio/voice/<beat>-<n>.mp3   one file per line
  src/voices.js                durations + text hashes the game reads

Only lines whose text changed are rendered again.  Run from the repo root:
  python tools/voices/make_voices.py            (add --all to redo everything)

Setup once:  pip install piper-tts imageio-ffmpeg
Voice models go in tools/voices/models (see GUIDE.md for the download list).
"""
import json, os, re, subprocess, sys, wave, tempfile
from piper import PiperVoice, SynthesisConfig
import imageio_ffmpeg

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
MODELS = os.path.join(ROOT, 'tools', 'voices', 'models')
OUT = os.path.join(ROOT, 'audio', 'voice')
MANIFEST = os.path.join(ROOT, 'src', 'voices.js')
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

# who speaks with which voice.  length > 1 = slower.  fx: 'radio' or 'pa'
CAST = {
    'haddad':    dict(model='en_GB-cori-high', length=1.0, fx='radio'),
    'lindqvist': dict(model='en_GB-alba-medium', length=0.95, fx='radio'),
    'okafor':    dict(model='en_GB-northern_english_male-medium', length=1.0, fx='radio'),
    'shore':     dict(model='en_US-norman-medium', length=1.1, fx='radio'),
    'reyes':     dict(model='en_US-kristin-medium', length=1.05, fx='radio'),
    'aegis':     dict(model='en_US-libritts_r-medium', speaker=20, length=1.08, fx='pa'),
}

# spoken form of words the voices would read badly
SAY = [
    (r'7-7-OMEGA', 'seven, seven, omega'), (r'AX-7', 'A X seven'), (r'VTOL-3', 'V-tol three'),
    (r'S-14', 'S fourteen'), (r'2\.4', 'two point four'), (r'\bAEGIS\b', 'Aegis'),
    (r'minus one-ninety-six', 'minus one hundred and ninety six'), (r'—', ', '), (r'\.\.\.', '… '),
]

FX = {
    # small radio: band-limited, squashed, with a little pink-noise hiss
    'radio': '[0:a]highpass=f=320,lowpass=f=3300,acompressor=threshold=0.1:ratio=5:attack=4:release=90,volume=1.8,apad=pad_dur=0.2[v];'
             '[1:a]volume=0.5[n];[v][n]amix=inputs=2:duration=first:normalize=0[a]',
    # the colony's own voice: clean but doubled, like a building speaking
    'pa': '[0:a]chorus=0.6:0.9:35|55:0.35|0.3:0.25|0.4:2|1.3,aecho=0.8:0.5:40:0.2,highpass=f=110,volume=1.4,apad=pad_dur=0.2[a]',
}


def djb2(s):  # must match voiceHash() in game.js
    h = 5381
    for c in s:
        h = ((h * 33) ^ ord(c)) & 0xFFFFFFFF
    return format(h, 'x')


def load_radio():
    url = 'file:///' + os.path.join(ROOT, 'src', 'story.js').replace('\\', '/')
    js = f"const m = await import('{url}'); console.log(JSON.stringify(m.RADIO));"
    out = subprocess.run(['node', '--input-type=module', '-e', js], capture_output=True, text=True, encoding='utf-8', check=True)
    return json.loads(out.stdout)


def load_manifest():
    if not os.path.exists(MANIFEST):
        return {}
    m = re.search(r'export const VOICES = (\{.*\});', open(MANIFEST, encoding='utf-8').read(), re.S)
    return json.loads(m.group(1)) if m else {}


def render(voice, cfg, text, dst):
    spoken = text
    for a, b in SAY:
        spoken = re.sub(a, b, spoken)
    with tempfile.TemporaryDirectory() as tmp:
        raw = os.path.join(tmp, 'raw.wav')
        with wave.open(raw, 'wb') as w:
            voice.synthesize_wav(spoken, w, SynthesisConfig(speaker_id=cfg.get('speaker'), length_scale=cfg['length'], noise_scale=0.6, noise_w_scale=0.75))
        with wave.open(raw, 'rb') as w:
            dur = w.getnframes() / w.getframerate() + 0.2
        cmd = [FFMPEG, '-y', '-loglevel', 'error', '-i', raw]
        if cfg['fx'] == 'radio':
            cmd += ['-f', 'lavfi', '-i', 'anoisesrc=c=pink:a=0.02:r=22050']
        cmd += ['-filter_complex', FX[cfg['fx']], '-map', '[a]', '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '48k', dst]
        subprocess.run(cmd, check=True)
    return round(dur, 2)


def main():
    redo = '--all' in sys.argv
    os.makedirs(OUT, exist_ok=True)
    radio, old = load_radio(), load_manifest()
    voices, new = {}, {}
    for beat, lines in radio.items():
        for i, (who, text) in enumerate(lines):
            key, h = f'{beat}-{i}', djb2(text)
            dst = os.path.join(OUT, key + '.mp3')
            if not redo and key in old and old[key][1] == h and os.path.exists(dst):
                new[key] = old[key]; continue
            cfg = CAST[who]
            if cfg['model'] not in voices:
                voices[cfg['model']] = PiperVoice.load(os.path.join(MODELS, cfg['model'] + '.onnx'))
            new[key] = [render(voices[cfg['model']], cfg, text, dst), h]
            print(f'{key:22s} {who:10s} {new[key][0]:5.2f}s  {text[:60]}')
    for f in os.listdir(OUT):  # drop files for lines that no longer exist
        if f.endswith('.mp3') and f[:-4] not in new:
            os.remove(os.path.join(OUT, f))
    with open(MANIFEST, 'w', encoding='utf-8', newline='\n') as f:
        f.write('// Generated by tools/voices/make_voices.py: [seconds, text hash] per radio line.\n')
        f.write('export const VOICES = ' + json.dumps(new, indent=0).replace('\n', '') + ';\n')
    print(len(new), 'lines ·', sum(os.path.getsize(os.path.join(OUT, k + '.mp3')) for k in new) // 1024, 'KB')


if __name__ == '__main__':
    main()
