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
 * * Turn this into a factory, but why?
 */
function Quote (config = defaultConfig) {
  this.config = config;
};

/**
 * @returns {array}
 */
Quote.prototype.generate = function () {
  // destructuring values from config
  let { currentType, num } = this.config;

  // new fragment
  let fragment = new Fragment();

  // choose fragment type
  fragment.selectFragmentType(currentType);

  /**
   * TODO: generate n number of quotes
   */
  return fragment.generateFragments(num);
};

// keepoing it SOLID
Quote.prototype.configureQuote = () => {
  // should be responsible for handling the form
};


// export default Quote;