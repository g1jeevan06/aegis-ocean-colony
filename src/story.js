// Story script: chapter cards, the opening cinematic, radio transmissions
// and the two endings.  Pure data; game.js decides when each part plays.

export const CHAPTERS = {
  1: { n: 'CHAPTER ONE', t: 'Silent Water' },
  2: { n: 'CHAPTER TWO', t: 'Clearance' },
  3: { n: 'CHAPTER THREE', t: 'The Cold Room' },
  4: { n: 'CHAPTER FOUR', t: 'Heartbeat' },
  5: { n: 'CHAPTER FIVE', t: 'Moon Pool' },
  6: { n: 'CHAPTER SIX', t: 'The Choice' },
};

export const SPEAKERS = {
  haddad: { name: 'LAYLA HADDAD · COMMS', color: '#4ff2ff' },
  lindqvist: { name: 'SOFIA LINDQVIST · CHIEF ENGINEER', color: '#ffb347' },
  okafor: { name: 'DR. KOFI OKAFOR · XENOBIOLOGY', color: '#56ff9a' },
  shore: { name: 'SHORE COMMAND', color: '#ff7a6a' },
  reyes: { name: 'CMDR. ELENA REYES', color: '#ffd28a' },
  aegis: { name: 'AEGIS · COLONY SYSTEM', color: '#b9c8ff' },
};

// opening cinematic: one card per camera beat
export const INTRO = [
  'PACIFIC SECTOR 7 · 340 KM FROM THE NEAREST COAST',
  'AEGIS Deep-Ocean Research Colony. Forty-six crew. One storm.',
  'Thirty-six hours ago, the colony went silent.',
  'The crew made it to the shelters. Commander Elena Reyes did not.',
  'You are the relief engineer. Find out what happened.',
];

// radio lines by story beat: [speaker, text]
export const RADIO = {
  landed: [
    ['haddad', 'VTOL-3, this is Haddad on the Energy Platform. Good to hear an engine out there.'],
    ['haddad', 'The crew are safe in the battery hall. All except the Commander. Nobody has seen Reyes since the storm.'],
    ['haddad', 'Get inside and bring the command bus back. Mission Control is on Level 2.'],
  ],
  inside: [
    ['aegis', 'Welcome, relief engineer. Main power partial. Command bus B offline. Cryo bay sealed.'],
    ['haddad', 'That voice is the colony. The glass lift in the lobby will take you up to Mission Control.'],
  ],
  restored: [
    ['aegis', 'Command bus re-sequenced. Uplink array on standby. Cryo bay still sealed: Level-3 clearance required.'],
    ['shore', 'AEGIS, this is Shore Command. Good work, engineer. Priority directive: secure the AX-7 dataset and transmit. Further instructions will follow.'],
    ['haddad', "Further instructions. They never say that. Reyes' Level-3 card should be in the Crew Lounge. She dropped it when the alarms went."],
  ],
  keycard: [
    ['haddad', "That's her card. She'd laugh at you for finding it before she did."],
  ],
  keycardEarly: [
    ['haddad', "That's her card. Hang on to it. Mission Control first, or those red doors won't care who you are."],
  ],
  cryo: [
    ['okafor', 'This is Okafor. Please don\'t open anything. Just scan it and step back. It should be asleep.'],
    ['okafor', 'Should be.'],
  ],
  scanned: [
    ['aegis', 'Scan complete. 2.4 petabytes. Warning: neural activity in pod AX-7 is rising.'],
    ['okafor', "It's awake. At minus one-ninety-six. That is not possible."],
    ['aegis', 'Containment power draw exceeds reserve. Local cells failing.'],
    ['lindqvist', 'Lindqvist here. The scan has tripped bank 3 again. Engineering, sector 6. Reset it by hand, and be quick about it.'],
  ],
  power: [
    ['lindqvist', 'Containment is holding. Nice work.'],
    ['haddad', 'Engineer, buoy S-14 is lighting up under the dock. Same rhythm as the thing in the pod.'],
    ['haddad', "And we've got a suit beacon down there. Suit D. That's Reyes' suit."],
    ['shore', "Engineer, the Commander's status is not your priority. Proceed to the uplink."],
  ],
  reyes: [
    ['haddad', "...You heard all that. So did I. The uplink is on the roof, and what you send from it is up to you."],
    ['shore', 'Engineer. Proceed to the uplink. That is an order.'],
  ],
  powerAfterReyes: [
    ['lindqvist', 'Containment is holding. Nice work.'],
    ['haddad', "You already found her recorder, didn't you? Then you know. The uplink is yours. What you send is up to you."],
  ],
  uplinkReady: [
    ['shore', 'Dataset received. Transmit authorisation code 7-7-OMEGA to complete the protocol.'],
  ],
  endingPurge: [
    ['aegis', 'Authorisation 7-7-OMEGA accepted. Cryo purge in progress.'],
    ['aegis', 'Purge complete. Pod AX-7: vital signs none.'],
    ['shore', 'Thank you, AEGIS. A recovery team will arrive in seventy-two hours. The crew will be reassigned.'],
    ['haddad', "...Buoy S-14 has gone dark. So has Suit D's beacon."],
  ],
  endingRelease: [
    ['aegis', 'Purge authorisation withheld. Opening pod AX-7 to the moon pool.'],
    ['okafor', 'It\'s moving. It\'s going down the pool. Oh — look at the water.'],
    ['reyes', "This is Reyes. I'm on the moon pool ladder. She let me go. She didn't say anything, but I understood her."],
    ['shore', 'AEGIS, respond. AEGIS—'],
    ['haddad', 'Sorry, Shore Command. The uplink is acting up. Storm damage, probably.'],
  ],
};

export const ENDINGS = {
  purge: {
    eyebrow: 'ENDING · ORDERS FOLLOWED',
    title: 'The water went dark',
    text: 'The dataset is on its way to shore, and the protocol is complete. AEGIS is back online. The crew come home from the Energy Platform to a colony that works perfectly. The water under the dock stays dark, and nobody on AEGIS talks about why.',
    cards: ['Seventy-two hours later, the recovery team arrived on schedule.', 'Nobody ever found Suit D.'],
  },
  release: {
    eyebrow: 'ENDING · THE SEA REMEMBERS',
    title: 'Two lights, heading home',
    text: 'The science went to shore. The purge code never did. Commander Reyes climbed out of the moon pool at dawn. Two lights sank past the buoy line, one large and one small. Some nights the sea under AEGIS still glows, slow and regular as a heartbeat. The crew call it a thank-you.',
    cards: ['Shore Command sent a very angry inspection team.', 'They never found anything in the water. The crew never told them where to look.'],
  },
};

export const CHOICE = {
  eyebrow: 'COMMS UPLINK · AUTHORISATION REQUIRED',
  title: 'What do you send?',
  text: 'Shore Command wants code 7-7-OMEGA, which freezes AX-7 for good. Reyes asked you not to send it. Whatever you choose, the dataset goes to shore.',
  purge: ['Send everything', 'Transmit the dataset and the purge code. Follow orders.'],
  release: ['Send the science only', 'Withhold the purge. Open the pod and let AX-7 go home.'],
};
