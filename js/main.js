/**
 * main js file
 * handles stuff like animations, pop ups etc
 */
const generateButton = document.querySelector("#generate");
const customizeButton = document.querySelector("#customize");
const quotes = document.querySelector("#quotes");
const info = document.querySelector(".info");
const quoteType = document.querySelector("#quoteType");

/**
 * have this dynamically set
 */
quoteType.innerText = "Buddha Quotes";

/**
 * DOM manipulation methods
 */
const hide = element => {
  element.style.display = "none";
};

/**
 * helper methods
 */
const getLength = iter => {
  if(iter.length === 0 || iter.length === undefined) {
    return null;
  } else {
    return iter.length;
  }
};

const getRandom = (iter) => {
  return iter[Math.floor(Math.random() * Math.floor(getLength(iter)))];
};

const limitElements = (limit = 1) => {
  return limit;
}

/**
 * element creators
 */
const createQuote = () => {
  let text = generateQuote();
  const quote = document.createElement("article");
  const quoteText = document.createElement("blockquote");
  const hr = document.createElement("hr");
  quoteText.innerText = text;
  quote.appendChild(quoteText);
  quote.appendChild(hr);
  hr.className = "styled";
  quote.className = "quote";
  quotes.appendChild(quote);

  /**
  * attach ids and classes
  */

  /**
  * hide info
  */
  hide(info);
};

/**
 * event listenrs
 */
generateButton.addEventListener("click", createQuote);
customizeButton.addEventListener("click", customizeQuotes);