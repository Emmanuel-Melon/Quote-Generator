import Quote from "./quotes";
import { compareObjects } from "./helpers";

/**
 * main js file
 */
const generateButton = document.querySelector("#generate");
const customizeButton = document.querySelector("#customize");
const quotes = document.querySelector("#quotes");
const quoteType = document.querySelector("#quoteType");
let customization = document.querySelector("#customization");

/**
 * @type {Config}
 */
const defaultConfig = {
  num: 1,
  type: "motivational"
};

function Config ({ num, type } = defaultConfig) {
  this.num = num;
  this.type = type;
};

// new config object
let config = new Config();
let customConfig;


/**
 * Main heading
 */
quoteType.innerText = "Motivational Quotes";

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

/**
 * @description handles quote generation
 */
generateButton.addEventListener("click", () => {
  let generatedQuotes;
  let newQuote = new Quote();
  // displays default config if no custom config is provided
  (typeof customConfig === "undefined") ? generatedQuotes = newQuote.generate(config) : generatedQuotes = newQuote.generate(customConfig);
  quotes.innerHTML = displayQuotes(generatedQuotes);
});

/**
 * @description compares options to default config, returns options if changes were made
 * @param options
 * @return {{num: number, type: string}|*}
 */
const setCustomConfig = options => {
  if(compareObjects(options, defaultConfig)) return defaultConfig;
  return options;
};

customizeButton.addEventListener("click", () => {

  let options = {};

  customization.addEventListener("click", (e) => {
    options[e.target.name] = e.target.value;
  });

  // animate appearance of customization
  customization.style.visibility = "visible";
  // extract num and type from customization

  // returns a new custom config object
  // TODO: change values from UI
  customConfig = setCustomConfig(options);
});