// import extractFragments from "./fragments";
/**
 * generates new quotes
 */
function Quote (iter) {
  this.quotes = iter;
};

Quote.prototype.generate = function () {
  return extractFragments(fragments);
};

// export default Quote;