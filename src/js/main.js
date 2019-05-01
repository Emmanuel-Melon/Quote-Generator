// import Quote from "./quotes";
/**
 * main js file
 */
const generateButton = document.querySelector("#generate");
const quotes = document.querySelector("#quotes");
const info = document.querySelector(".info");
const quoteType = document.querySelector("#quoteType");
const modal = document.querySelector("#modal");
const customizeButton = document.querySelector("#customize");

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
  defaultType: "motivational",
  currentType: "wisdom",
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

/*
this is could be handled in a better way
 */
generateButton.addEventListener("click", () => {
  let newQuote = new Quote();
  let generatedQuotes = newQuote.generate();
  // you might wanna do something about this!
  quotes.innerHTML = displayQuotes(generatedQuotes);
});

// modal.classList.remove("modalHidden");
// modal.classList.add("modalVisible");
// console.log(modal);