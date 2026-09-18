# AEGIS — Deep-Ocean Research Colony

A first-person sci-fi exploration game that runs in the browser. You arrive by VTOL
at a floating research colony in the middle of a calm ocean, restore its systems,
reach the specimen in the cryo lab and send the data home.

**Play online:** https://g1jeevan06.github.io/aegis-ocean-colony/

## How to play

1. Double-click `index.html` (Chrome or Edge work best). No install is needed.
2. Wait for the loading bar, then choose **Begin mission** (story) or **Free explore** (all doors open).
3. Click the game once so the mouse controls the camera.

| Key | Action |
| --- | --- |
| W A S D | Move |
| Mouse | Look (or hold the mouse button and drag) |
| Shift | Sprint |
| Space | Jump |
| C | Crouch |
| E | Use / hold to scan |
| 1 2 3 | Choose a floor inside the glass lift |
| M | Colony map |
| J | Journal (data logs) |
| P | Photo mode — free camera, 16:9 frame, scroll to zoom |
| F | Fly mode (for level review) |
| H | Hide the HUD |
| Esc | Menu |

Settings (menu → Settings) change graphics quality, mouse speed, field of view and volume.
If the game is slow, pick **Medium** or **Low**.

## What is in the colony

- **Main platform**: an octagonal floating hull with a stepped mechanical skirt and 8 numbered
  corner pylons on legs with cyan thrusters under the water; a tall outer ring of buildings
  (window bands, rooftop equipment, CFT KINETIC signs) with gateways to the bridges and
  observation decks; 8 garden courtyards between the outer ring and the main building,
  linked by arches; the terrace deck, the observation roof and a faceted octagonal central tower.
- **Level 1** (8 sectors around a ring corridor): entrance lobby with the glass lift,
  crew lounge (orange sofas, wall display, kitchen), research lab (workstations, fume hoods,
  robot arm, specimen jars), cryogenic lab (glowing pods with creatures, gantry machinery —
  restricted), dock airlock (suits, lockers), engineering (generators), crew quarters, mess hall.
- **Central atrium**: a circular garden with a big tree, two rings of hydroponic beds with grow lights, café tables.
- **Level 2**: the observation gallery ring and Mission Control (consoles, holo table, screen wall).
- **Roof**: the comms uplink dish, antenna masts, telescopes.
- **Service level (hidden)**: a maintenance ring under the deck, stairs down from Engineering,
  a secret stair up into the cryo lab, and the Hydro Core pump room under the tree.
- **Around it**: landing platform (with a parked VTOL), energy platform (solar, turbines, batteries),
  marine dock (moon pool, gantry crane, submersible, boat), comms platform (50 m mast),
  a research outpost, aquaculture rings, an offshore wind farm, VTOL traffic, patrol drones,
  sea drones and sensor buoys that glow cyan-green under the water, sea mist and haze.
- **Story**: an opening film, then six chapters told over the radio by the crew
  (Silent Water, Clearance, The Cold Room, Heartbeat, Moon Pool, The Choice).
  Commander Reyes is missing, the specimen in the cryo lab wakes up, and at the end
  you choose what to send to Shore Command. There are two endings, each with its own
  closing film. Also 20 data logs to find and 2 hidden areas. Press **J** to read the
  logs and replay every radio message. Press **Space** to skip a film.
- **Voice acting**: every radio line is voiced (synthetic neural voices with a radio
  effect). See [GUIDE.md](GUIDE.md) for the player walkthrough, the cast, and how to
  change lines or swap in real actors.

## Unreal Engine

Menu → **Export level for Unreal (.glb)** downloads `AEGIS_Colony.glb` (about 32 MB):
all of the static architecture and props, grouped by area (`SM_ring1_3`, `SM_atrium`,
`SM_sat_dock` …), with PBR materials and textures. In Unreal 5 use
**File → Import Into Level** (or drag the file into the Content Browser with the glTF
importer). Units are metres with Y up; the importer converts to centimetres and Z up.

The layout follows one modular grid: an octagon whose flat sides face the 8 sectors.
Key heights: sea 0 m, service floor 2 m, Level 1 floor 6 m, Level 2 / terrace 12 m,
roof 18 m, dome top about 35 m. Ring radii (centre to flat side): atrium 22 m,
ring corridor 22–27 m, rooms 27–42 m, promenade 42–56.5 m, Level 2 24–34 m.

## For developers

The game is written with three.js and bundled with esbuild. Everything (textures,
models, sounds) is generated in code, so there are no asset files.

1. Install once: `npm install`
2. Rebuild after editing `src/`: `npm run build` (writes `dist/game.js`)
3. Optional local server: `npm run serve` then open http://localhost:8080
4. Check for overlapping faces ("double faces" that flicker): `node tools/geocheck/run.mjs`.
   It loads the game in a hidden Chrome and lists every pair of source lines whose faces sit
   on top of each other. While loading, the game itself also cuts away faces hidden under
   another face (`src/dedupe.js`). Thin strips, lamps and screens use a depth offset
   (`decal()` in `materials.js`) so they always draw on top of the surface they sit on.

Source files in `src/`:

| File | What it does |
| --- | --- |
| `main.js` | Loading, render loop, quality presets |
| `env.js` | Sky, sun, image lighting, fog, mist, bloom and colour grade |
| `ocean.js` | Ocean shader (waves, reflections, foam, underwater glows) |
| `colony.js` | Hull, decks, ring buildings, dome, stairs, lift, atrium, service level |
| `interiors.js` | Room furniture and equipment |
| `props.js` | Reusable props (railings, sofas, desks, consoles, pods, tree, creature, doors) |
| `satellites.js` | Satellite platforms, bridges, outposts, wind farm |
| `vehicles.js` | VTOLs, drones, buoys, sea drones, holograms, animations |
| `game.js` | Player, doors, lift, pickups, objectives, zones, photo mode |
| `ui.js` | HUD, compass, minimap, map, journal |
| `textures.js` / `materials.js` | Procedural PBR textures and materials |
| `builder.js` / `physics.js` | Geometry batching and collision |
| `exterior.js` | Central tower, outer ring + courtyards, corner pylons, signs, ocean rigs |
| `data.js` | Objectives, data logs, zone names |
| `story.js` | Chapters, opening film, radio lines, the choice and both endings |
| `voices.js` | Generated list of voice clips (length + text check) — made by `tools/voices/make_voices.py` |
| `export.js` | glTF export for Unreal |
| `dedupe.js` | Removes hidden double faces while loading, so surfaces do not flicker |
