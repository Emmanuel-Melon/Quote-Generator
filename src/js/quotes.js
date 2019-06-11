/***********************************************************
 * Author: Emmanuel Gatwech
 * Description: An application that generates random quotes
 * *********************************************************
 */

import Fragment from "./fragments";

/**
 * @description creates new quote objects with specified config
 * @constructor
 */
function Quote () {

};

/**
 * @returns {array}
 */
Quote.prototype.generate = config => {
  // destructuring values from config
  let { type, num } = config;

  // new fragment
  let fragment = new Fragment();

  // choose fragment type
  fragment.selectFragmentType(type);

  /**
   * TODO: generate n number of quotes
   */
  return fragment.generateFragments(num);
};


export default Quote;