// Story, objectives, data logs and zone names.
export const TITLE = 'AEGIS';
export const SUBTITLE = 'Deep-Ocean Research Colony';

export const OBJECTIVES = [
  { id: 'arrive', text: 'Cross the bridge and enter AEGIS Colony', target: 'lobby', hint: 'Follow the lit bridge north from the landing pad.' },
  { id: 'mc', text: 'Restore systems at the Mission Control console (Level 2)', target: 'mcConsole', hint: 'The glass lift is in the entrance lobby.' },
  { id: 'keycard', text: "Recover Commander Reyes' Level-3 keycard", target: 'keycard', hint: 'Last logged in the Crew Lounge, Level 1. Engineers know other ways in…' },
  { id: 'cryo', text: 'Enter the Cryogenic Laboratory', target: 'cryoDoor', hint: 'Level 1, sector 4 — the red door off the ring corridor.' },
  { id: 'scan', text: 'Scan specimen AX-7 in the primary cryo pod', target: 'specimen', hint: 'Stand at the pod and hold [E].' },
  { id: 'uplink', text: 'Transmit the research data from the Comms Uplink (Observation Roof)', target: 'uplink', hint: 'Take the lift to Level 3, or climb the terrace stairs.' },
  { id: 'done', text: 'Mission complete — explore the colony freely', target: null, hint: '' },
];

export const LOGS = {
  log_landing: { title: 'Arrival Notice', by: 'AEGIS Flight Ops', text: 'Relief engineer inbound on VTOL-3. Colony has been silent for 36 hours after the Tuesday storm cell. Last telemetry: partial power fault, cryo containment on backup. Crew relocated to the Energy Platform shelters as a precaution. Restore systems, secure the specimen data, transmit.' },
  log_lobby: { title: 'Welcome to AEGIS', by: 'Reception Terminal', text: 'AEGIS Deep-Ocean Research Colony, Pacific Sector 7. Displacement 184,000 tonnes. Crew complement 46. Eight sectors on Level 1, the observation gallery and Mission Control on Level 2, the uplink array on the roof. Please do not feed the atrium tree after 22:00. It knows.' },
  log_atrium: { title: 'Atrium Garden', by: 'Dr. Ines Moreau, Botany', text: 'The ficus has grown 40 cm since the nutrient loop was rerouted through the hydro core below the floor. The roots now reach the reservoir. Whatever we are feeding it, it likes. The hydroponic rings are producing 30% of our greens; the rest still comes by drone.' },
  log_lounge: { title: 'Personal — Cdr. Reyes', by: 'Cmdr. Elena Reyes', text: 'If anyone reads this: I left my Level-3 card on the lounge table when the alarms went. Stupid. The lab doors fail closed on a power fault, which is the right design and the wrong afternoon. Tell Lindqvist the service ring under Engineering still connects to the cryo sublevel.' },
  log_lab: { title: 'Sample AX-7 — Preliminary', by: 'Dr. Kofi Okafor, Xenobiology', text: 'Recovered at 7,900 m from the Hadal Rift vent field. Bilateral, cephalopod-like, but the tissue fluoresces at 488 nm without any known luciferin. Neural activity persists at -196 C. That should not be possible. Recommend full sequencing before we tell anyone on shore.' },
  log_cryo: { title: 'Containment Protocol', by: 'Cryo Bay Control', text: 'Primary pod AX-7: liquid nitrogen jacket, triple-redundant power. On main-power loss the bay seals and the pods fall back to the local cells for 72 hours. Access restricted to Level-3 clearance. Do not open the pods. Do not tap the glass. It taps back.' },
  log_dock: { title: 'Suit Room Checklist', by: 'Marine Ops', text: 'Hardsuits A through D serviced. Moon pool depth 38 m under the dock. Submersible NEREID rated to 8,000 m, currently on the gantry for seal replacement. Anyone taking the sub past the buoy line files a plan with Mission Control first. That means you, Tanaka.' },
  log_eng: { title: 'Engineering Shift Log', by: 'Chief Eng. Sofia Lindqvist', text: 'Storm surge tripped breaker bank 3, which took Mission Control and the cryo bay with it. Generators are fine — it is the command bus. Anyone who can reach the main console on Level 2 can re-sequence it. The maintenance stair beside the gennies drops to the service ring. Mind your head.' },
  log_quarters: { title: 'Letter Home (unsent)', by: 'Pilot Kenji Tanaka', text: 'You would love it here. The sea is so calm some mornings it looks like glass, and the drones leave little green lights under the water all night. I fly the supply runs, twice a week. Some nights I think the sea glows back. Probably just the buoys.' },
  log_mess: { title: 'Galley Notice', by: 'Galley', text: 'Tuesday is algae pasta. Wednesday is algae pasta with a different sauce. Thursday the drone brings real tomatoes. Whoever keeps putting kelp in the coffee machine: the coffee machine has filed a complaint with Mission Control.' },
  log_gallery: { title: 'Observation Gallery', by: 'Facilities', text: 'Level 2 gallery runs the full ring except Mission Control. Telescopes are calibrated for the horizon line; the offshore wind farm is 900 m to the north. On clear evenings the energy platform turbines are visible from here, and so is the aquaculture ring to the north-west.' },
  log_gallery2: { title: 'Watch Rota', by: 'Security', text: 'Two on the gallery, one on the roof, rotating every four hours. Report any contact on the sonar board that the buoys do not see first. Last week the buoys saw something the sonar did not. We logged it as a whale.' },
  log_mc: { title: 'Command Bus Fault', by: 'Mission Control', text: 'Automatic diagnostic: command bus B offline since 14:12. Cryo bay sealed (fail-closed). Uplink array parked. Manual re-sequencing required from the main console. Commander authentication bypass enabled for relief crew.' },
  log_roof: { title: 'Uplink Array', by: 'Comms Officer Layla Haddad', text: 'The dish tracks the relay satellite over the southern horizon. When it fires you can see the beam in the haze — do not stand in it. Shore command expects the AX-7 dataset the moment we are back online. They have been very insistent. More insistent than usual.' },
  log_service: { title: 'Service Ring', by: 'Maintenance', text: 'The service ring runs under the whole Level 1 corridor. Stairs up at Engineering (sector 6) and — unofficially — at the cryo sublevel (sector 4). The hatch there is meant to be for nitrogen line inspection. It is also how the night shift gets snacks to the cryo team.' },
  log_pump: { title: 'Hydro Core', by: 'Dr. Ines Moreau', text: 'Found it. The tree roots have grown through the reservoir inlet and into the nutrient tank. The water here glows the same 488 nm as AX-7 tissue. I have not told Okafor. I am not sure what I would tell him.' },
  log_energy: { title: 'Energy Platform', by: 'Chief Eng. Lindqvist', text: 'Twelve solar arrays, three vertical-axis turbines, 40 MWh of storage. The crew is sheltering in the battery hall until the command bus is restored. Morale is fine. Someone brought cards. Someone else brought a kazoo. Please hurry.' },
  log_dock2: { title: 'Moon Pool Log', by: 'Marine Ops', text: 'NEREID hoisted for seal service. Moon pool clear. Note: sensor buoy S-14 reports a large, slow return under the dock at 03:10, 03:40 and 04:10. Regular as a heartbeat. Diver check found nothing but the glow.' },
  log_comms: { title: 'Relay Mast', by: 'Comms Officer Haddad', text: 'The mast backs up the roof array for short-range links: drones, buoys, the VTOLs. It stays up on its own batteries, which is why you could still land. You are welcome.' },
};

export const ZONES = {
  landing: 'Landing Platform', energy: 'Energy Platform', dock: 'Marine Dock', comms: 'Comms Platform',
  bridge: 'Connecting Bridge', promenade: 'Main Deck · Courtyards', obs: 'Observation Deck',
  lobby: 'Main Entrance Lobby', lounge: 'Crew Lounge', lab: 'Research Laboratory', cryo: 'Cryogenic Laboratory',
  airlock: 'Dock Airlock', eng: 'Engineering', quarters: 'Crew Quarters', mess: 'Mess Hall',
  corridor: 'Ring Corridor', atrium: 'Central Atrium', gallery: 'Observation Gallery', mc: 'Mission Control',
  terrace: 'Terrace Deck', roof: 'Observation Roof', service: 'Service Ring', pump: 'Hydro Core', ocean: 'Open Ocean', stairs: 'Terrace Stairs', lift: 'Glass Lift',
};
export const ROOM_BY_SECTOR = ['lobby', 'lounge', 'lab', 'cryo', 'airlock', 'eng', 'quarters', 'mess'];
