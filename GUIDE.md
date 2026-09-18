# AEGIS — Player & Voice Guide

The same player guide is in the game: **Guide** on the title screen or in the Esc menu.

## 1. How to play

You are the relief engineer sent to AEGIS, a research colony floating in the Pacific.
It went silent in a storm 36 hours ago and its commander is missing. There is no
combat and you cannot die. If you fall in the sea, a drone fishes you out.

| Do this | Key |
| --- | --- |
| Move / look | `W A S D` / mouse |
| Sprint / jump / crouch | `Shift` / `Space` / `C` |
| Use things (hold for big actions) | `E` |
| Map / journal (logs + radio history) | `M` / `J` |
| Lift floors (stand inside the glass lift) | `1` lobby · `2` Mission Control · `3` roof |
| Skip a film | `Space` or the SKIP button |
| Fly mode / photo mode / hide HUD | `F` / `P` / `H` |

- The objective is top-left. The **orange marker** on the compass, minimap and map shows where to go.
- Radio messages have voices and subtitles. They pause while a menu is open.
  **Settings → Voice volume** changes how loud they are.

## 2. Walkthrough (spoilers)

1. **Silent Water.** Walk north over the bridge into the lobby. Take the lift to floor 2
   and **hold E** at the Mission Control console.
2. **Clearance.** On Level 1, take Commander Reyes' orange keycard from the **Crew Lounge**
   table, then go through the red **Cryo Lab** door. (Shortcut: the stair in Engineering
   leads down to the service ring, and a secret stair there goes up into the cryo lab.)
3. **The Cold Room.** **Hold E** at the main cryo pod to scan specimen AX-7. It wakes up.
4. **Heartbeat.** The alarm sounds. In **Engineering** (the room with two generators),
   **hold E** at the striped breaker cabinet with the red light.
5. **Moon Pool.** Cross to the **Marine Dock** (yellow crane, submarine). Read **Reyes' suit
   recorder** on the crate by the moon pool railing. Look out to sea for the glow.
6. **The Choice.** On the **Observation Roof**, **hold E** at the uplink and choose:
   - **Send everything:** you obey Shore Command, and AX-7 is frozen for good.
   - **Send the science only:** AX-7 goes home.
   Each choice has its own ending. Play again to see the other one.

**All 20 data logs.** *Outside:* Landing Platform, Energy Platform, Comms Platform,
Marine Dock ×2. *Level 1:* Lobby desk, Atrium (tree), Crew Lounge, Research Lab, Cryo Lab,
Dock Airlock, Engineering, Crew Quarters, Mess Hall. *Level 2:* Mission Control,
Observation Gallery ×2. *Roof:* Observation Roof. *Hidden:* Service Ring, Hydro Core.

**Hidden areas.** The *service ring* is down the stairs under the amber
"SERVICE LEVEL" sign in Engineering. The *Hydro Core* is the green pump room under the
atrium tree, reached from the service ring.

## 3. Voice acting guide

Every radio line is a small MP3 in `audio/voice/`, one file per line, named
`<beat>-<number>.mp3` (for example `landed-0.mp3` is the first line Haddad says).
The lines themselves are written in `src/story.js` under `RADIO`.

### Cast

| Character | Voice (Piper) | Effect | Licence of the voice data |
| --- | --- | --- | --- |
| Layla Haddad, comms | `en_GB-cori-high` | radio | Public domain (LibriVox) |
| Sofia Lindqvist, chief engineer | `en_GB-alba-medium` | radio | CC BY 4.0 (Univ. of Edinburgh) |
| Dr. Kofi Okafor, xenobiology | `en_GB-northern_english_male-medium` | radio | CC BY-SA 4.0 (OpenSLR 83) |
| Shore Command | `en_US-norman-medium` | radio | Public domain (LibriVox) |
| Cmdr. Elena Reyes | `en_US-kristin-medium` | radio | Public domain (LibriVox) |
| AEGIS, colony system | `en_US-libritts_r-medium` speaker 20 | colony PA | CC BY 4.0 (LibriTTS-R) |

Voices are made with [Piper](https://github.com/OHF-Voice/piper1-gpl) using the voice
models from [rhasspy/piper-voices](https://huggingface.co/rhasspy/piper-voices).

### Change a line or make new voices

1. Install once: `pip install piper-tts imageio-ffmpeg`
2. Download the six voice models (`.onnx` and `.onnx.json`) from
   https://huggingface.co/rhasspy/piper-voices into `tools/voices/models/`.
   They are about 60–110 MB each, so they are not kept in git.
3. Edit the text in `src/story.js`.
4. Run `python tools/voices/make_voices.py`. Only lines whose text changed are made
   again. Add `--all` to redo everything, for example after changing a voice.
5. Run `npm run build`.

To recast someone, change their entry in `CAST` at the top of
`tools/voices/make_voices.py`. `length` above 1 makes the voice slower, and `fx` picks
`radio` (crackly handset) or `pa` (the colony's own voice).
If a word comes out wrong, add a spoken spelling to `SAY`.

### Use real actors instead

1. Record each line as its own file and name it like the existing one (`landed-0` etc.).
   A quiet room and a phone are fine, because the radio effect hides a lot.
2. Put the recordings (WAV or MP3) in a folder and run each one through the same
   effect, for example:
   `ffmpeg -i landed-0.wav -f lavfi -i anoisesrc=c=pink:a=0.02 -filter_complex "[0:a]highpass=f=320,lowpass=f=3300,acompressor=threshold=0.1:ratio=5,volume=1.8[v];[1:a]volume=0.5[n];[v][n]amix=inputs=2:duration=first:normalize=0" -ac 1 -b:a 48k audio/voice/landed-0.mp3`
3. Update that line's length in seconds (the first number) in `src/voices.js`, then run `npm run build`.
   The subtitle stays on screen for that long.

If a line's text in `story.js` no longer matches the voice file, the game shows the
subtitle without playing the old audio, so a voice never says the wrong words.
