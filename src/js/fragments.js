// import { getRandom } from "./helpers";

const fragments = {
  motivational: {
    begin: [
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
  },
  wisdom: {
    begin: [
        "you are"
    ],
    mid: [
      "what"
    ],
    end: [
      "you eat"
    ]
  }
};

/**
 * @description - Generates new sentence fragments
 * @constructor
 * @return {object}
 */
const Fragment = function () {
  this.fragments = fragments || {};
  this.currentType = this.fragments.motivational || {};
};

/**
 * @description - Specifies the type of quotes in this context
 * @param type - a string indicating the type of quotes
 * @returns {*}
 */
Fragment.prototype.selectFragmentType = function (type) {
  if(isEmpty(type)) {
    throw new Error("quotes type must be a valid string");
  } else if (type === "motivational" || type === "wisdom") {
    return this.currentType = type;
  } else {
    throw new Error("quotes could only be motivational or wisdom only");
  }
};

/**
 * @description - generates n instances of quotes
 * @param {number} num - a number representing currentNumber
 * @return {array} fragments - an array representing fragments
 */
Fragment.prototype.generateFragments = function (num) {
  if(isEmpty(num)) {
    throw new Error("num type must be a valid number");
  } else if (num < 1 || num > 5) {
    throw new Error("invalid range for num. Must be between 1 and 5");
  } else {
    // ! same quote is repeated
    let begin = getRandom(fragments[this.currentType].begin);
    let mid = getRandom(fragments[this.currentType].mid);
    let end = getRandom(fragments[this.currentType].end);
    let quotes = [];
    for(let i = 0; i <= num; i++) {
      quotes[i] = `${begin} ${mid} ${end}`;
    }
    return quotes;
  }
};