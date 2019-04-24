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
 *
 * @type {{isLoading: boolean, num: number, type: string}}
 */
const defaultConfig = {
  num: 5,
  type: "motivational",
  isLoading: true
};

/**
 * element creators
 * Should return an array
 */
const createQuotes = () => {
  let newQuote = new Quote();
  let generatedQuote = newQuote.generate();
  /**
  * hide info
  */
  // hide(info);
  return quote;
};

/**
 *
 * @param quotesArray
 * @param number
 * @returns {*}
 */
const displayQuotes = (quotesArray) => {
  return quotesArray.map(quote => {
    return (
        `<li class='quote'>
            <p>${quote}</p>
        </li>`
    );
  });
};

// can event listeners take inputs?
generateButton.addEventListener("click", () => {
  let newQuote = new Quote(defaultConfig);
  let generatedQuotes = newQuote.generate();
  let data = displayQuotes(generatedQuotes);
  // console.log(data);
  // you might wanna do something about this!
  quotes.innerHTML = data.join();
});
