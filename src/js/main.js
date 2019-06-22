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
// quoteType.innerText = customConfig.type;
// value doesn't change
//   console.log(customConfig.type);
//   quoteType.innerText = customConfig.type;
console.log(config.type);
if(customConfig) {
  console.log("it's defined");
  console.log(customConfig);
  quoteType.innerText = customConfig.type;
} else {
  console.log("whew");
  quoteType.innerText = config.type;
}

/**
 *
 * @param quotesArray
 * @returns {*}
 */
const displayQuotes = (quotesArray) => {
  let quotes = "";
  quotesArray.forEach(quote => {
    // dynamically add class
    quotes += `<li class="quote"><p>${quote}</p></li>`;
  });
  return quotes;
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
const setCustomConfig = (options = config) => {
  // returns a boolean
  if(compareObjects(options, defaultConfig)) return defaultConfig;
  return options;
};

/**
 * ! bug: quotes don't get generated unless you explicitly specify {type, num} from form
 */
customizeButton.addEventListener("click", () => {

  let options = {};

  customization.addEventListener("click", (e) => {
    options[e.target.name] = e.target.value;
  });

  // animate appearance of customization
  customization.style.display = "block";
  // extract num and type from customization

  // returns a new custom config object
  // TODO: change values from UI
  customConfig = setCustomConfig(options);
});
