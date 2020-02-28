/***********************************************************
 * Author: Emmanuel Gatwech
 * Description: Fragement generator
 * *********************************************************
 */

import { getRandom } from './helpers'

const fragments = {
  motivational: {
    begin: [
      "I'm gonna",
      'I Know',
      'Youth moves',
      'Everything you',
      'It takes a long time',
      "life ain't meant",
      'Happiness is a butterfly'
    ],
    mid: [
      'take my horse',
      'I can be',
      'pay dividends',
      'can imagine',
      'to happen so fast to realize',
      'which when pursued is always beyond your grasp'
    ],
    end: [
      'to the old town road',
      'be whatever I wanna be',
      'as an old man',
      'is real',
      "your future is somebody else's past",
      'but which if you will sit down quietly may alight upon you'
    ]
  },
  wisdom: {
    begin: ['You are', 'Life is', 'Vision', 'Success is', 'Today is'],
    mid: ['what', 'nothing but', 'hard but', 'a present', 'a real goal'],
    end: [
      'you eat',
      'you make it',
      'powers nation',
      'hard work and dedication',
      'giving up is harder'
    ]
  }
}

/**
 * @description - Generates new sentence fragments
 * @constructor
 * @return {object}
 */
const Fragment = function ({ num, type }) {
  this.fragments = fragments || {}
  this.currentType = null
  this.num = num
  this.type = type
}

/**
 * @description - Specifies the type of quotes in this context
 * @param quoteType - a string indicating the type of quotes
 * @returns {*}
 */
Fragment.prototype.selectFragmentType = function () {
  try {
    if (this.type === 'motivational' || this.type === 'wisdom') {
      this.currentType = this.type
    } else {
      throw new Error('quotes could only be motivational or wisdom only')
    }
  } catch (error) {
    return ({
      error,
      message: 'Cannot select fragment type'
    })
  }
}

/**
 * @description - generates n instances of quotes
 * @param {number} num - a number representing currentNumber
 * @return {array} fragments - an array representing fragments
 */
Fragment.prototype.generateFragments = function () {
  try {
    if (this.num < 1 || this.num > 5) {
      throw new Error('invalid range for num. Must be between 1 and 5')
    } else {
      let quotes = []
      for (let i = 0; i < this.num; i++) {
        quotes[i] = `${getRandom(
          this.fragments[this.currentType].begin
        )} ${getRandom(this.fragments[this.currentType].mid)} ${getRandom(
          this.fragments[this.currentType].end
        )}`
      }
      return quotes
    }
  } catch (error) {
    return ({
      error,
      message: 'Cannot generate fragments'
    })
  }
}

export default Fragment
