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
        "you are",
        "life is",
        "vision",
        "success is",
        "today is"
    ],
    mid: [
      "what",
      "nothing but",
      "hard but",
      "a present",
      "a real goal"
    ],
    end: [
      "you eat",
      "you make it",
      "powers nation",
      "hard work and dedication",
      "giving up is harder"
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
  this.currentType = null;
};

/**
 * @description - Specifies the type of quotes in this context
 * @param type - a string indicating the type of quotes
 * @returns {*}
 */
Fragment.prototype.selectFragmentType = function (quoteType) {
  console.log(quoteType);
  if (quoteType === "motivational" || quoteType === "wisdom") {
    this.currentType = quoteType;
    console.log("ayo!");
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
    let quotes = [];
    for(let i = 0; i < num; i++) {
      quotes[i] = `${getRandom(this.fragments[this.currentType].begin)} ${getRandom(this.fragments[this.currentType].mid)} ${getRandom(this.fragments[this.currentType].end)}`;
    }
    return quotes;
  }
};