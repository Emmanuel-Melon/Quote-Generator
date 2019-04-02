const fragments = {
  begins: [
    "I'm gonna",
    "I Know",
    "Youth moves",
    "Everything you",
    "It takes a long time",
    "life ain't meant",
    "Happiness is a butterfly"
  ],
  mid: [
    "take my horse",
    "I can be",
    "pay dividends",
    "can imagine",
    "to happen so fast to realize",
    "which when pursued is always beyond your grasp"
  ],
  end: [
    "to the old town road",
    "be whatever I wanna be",
    "as an old man",
    "is real",
    "your future is somebody else's past",
    "but which if you will sit down quietly may alight upon you"
  ]
};

/**
 * can I map or reduce stuff in here?
 * @param {map} fragments 
 */
const extractFragments = fragments => {
  return `${getRandom(fragments.begins)} ${getRandom(
    fragments.mid
  )} ${getRandom(fragments.end)}`; 
};

// 0704609455