// import Quote from "./quotes";
/**
 * main js file
 */
const generateButton = document.querySelector("#generate");
// const customizeButton = document.querySelector("#customize");
const quotes = document.querySelector("#quotes");
// const info = document.querySelector(".info");
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
 *
 * @param quotesArray
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

generateButton.addEventListener("click", () => {
  let newQuote = new Quote(defaultConfig);
  let generatedQuotes = newQuote.generate();
  // you might wanna do something about this!
  quotes.innerHTML = displayQuotes(generatedQuotes);
});
