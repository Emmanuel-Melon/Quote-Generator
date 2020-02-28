/***********************************************************
 * Author: Emmanuel Gatwech
 * Description: Quote generator
 * *********************************************************
 */

import Fragment from './fragments'

/**
 * @description creates new quote objects with specified config
 * @constructor
 */
function Quote (config) {
  const { num, type } = config
  this.num = num // default
  this.type = type
}

/**
 * @returns {array}
 */
Quote.prototype.generate = function () {
  // new fragment
  const options = {
    num: this.num,
    type: this.type
  }
  const fragment = new Fragment(options)

  // choose fragment type
  fragment.selectFragmentType()

  // generates num random quotes
  return fragment.generateFragments()
}

export default Quote
