// import Quote from "./quotes";
/**
 * main js file
 */
const generateButton = document.querySelector("#generate");
const customizeButton = document.querySelector("#customize");
const quotes = document.querySelector("#quotes");
const info = document.querySelector(".info");
const quoteType = document.querySelector("#quoteType");

/**
 * Main heading
 */
quoteType.innerText = "Motivational Quotes";


/**
 * element creators
 */
const createQuotes = () => {
  let newQuote = new Quote();
  let generatedQuote = newQuote.generate();
  const quote = document.createElement("li");
  const quoteText = document.createElement("blockquote");
  quoteText.innerText = generatedQuote;
  quote.className = "quote";
  append(quote, quoteText);

  /**
  * hide info
  */
  hide(info);
  return quote;
};


const generateQuote = () => {
  let quote = createQuotes();
  append(quotes, quote);
};
/**
 * event listenrs
 */
generateButton.addEventListener("click", generateQuote);