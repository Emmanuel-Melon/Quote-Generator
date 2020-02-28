/***********************************************************
 * Author: Emmanuel Gatwech
 * Description: main interface with the dom
 * *********************************************************
 */
import Quote from "./quotes";

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
  heading: "Motivational",
  num: document.querySelector("input[name = num]:checked").value,
  type: document.querySelector("input[name = type]:checked").value
};

function Config({ heading, num, type } = defaultConfig) {
  this.heading = heading;
  this.num = num;
  this.type = type;
}

/**
 * set heading
 */
Config.prototype.setHeading = function() {
  quoteType.innerText = this.heading;
};

/**
 * set custon config
 */
Config.prototype.setCustomConfig = function() {
  this.num = document.querySelector("input[name = num]:checked").value;
  this.type = document.querySelector("input[name = type]:checked").value;
  this.heading = this.type.toUpperCase();
};

// new default config object
let config = new Config();
// set default heading
config.setHeading();

/**
 *
 * @param quotesArray
 * @returns {*}
 */
const displayQuotes = quotesArray => {
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
  // set custom config
  config.setCustomConfig();
  let newQuote = new Quote(config);
  const generatedQuotes = newQuote.generate();

  // add class visible
  // customization.style.display = "block";
  quotes.innerHTML = displayQuotes(generatedQuotes);
});

/**
 * @description customizes quote numbers and types
 */
customizeButton.addEventListener("click", () => {
  // hide existing quotes
  const quotes = document.querySelector("#quotes");
  quotes.style.display = "none";

  // disable generatbe button
  generateButton.classList.add("disabled");

  const saveButton = document.querySelector("#save");
  let options = {};

  customization.addEventListener("click", e => {
    options[e.target.name] = e.target.value;
  });

  // remove hidden class
  customization.style.display = "block";

  saveButton.addEventListener("click", () => {
    // set custom config
    config.setCustomConfig(options);

    // set new heading
    config.setHeading();

    // generate new quotes
    const newQuote = new Quote(config);
    const generatedQuotes = newQuote.generate();
    quotes.innerHTML = displayQuotes(generatedQuotes);

    // display quotes again
    quotes.style.display = "block";

    // remove class disabled
    generateButton.classList.remove("disabled");

    // hide after saving config
    customization.style.display = "none";
  });
});
