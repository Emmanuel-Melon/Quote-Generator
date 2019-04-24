/***********************************************************
 * Author: Emmanuel Gatwech
 * Description: An application that generates random quotes
 * *********************************************************
 */

// import extractFragments from "./fragments";

/**
 * @description creates new quote objects with specified config
 * @param config
 * @constructor
 */
function Quote (config = defaultConfig) {
  this.config = config;
};

/**
 * @returns {array}
 */
Quote.prototype.generate = function () {
  // destructuring values from config
  let { type, num } = this.config;

  // new fragment
  let fragment = new Fragment();
  fragment.selectFragmentType(type);

  /**
   * TODO: generate n number of quotes
   */
  return fragment.generateFragments(num);
};

// export default Quote;