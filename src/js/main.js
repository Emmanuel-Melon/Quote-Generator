import Quote from "./quotes";

/**
 * main js file
 */
const generateButton = document.querySelector("#generate");
const quotes = document.querySelector("#quotes");
const info = document.querySelector(".info");
const quoteType = document.querySelector("#quoteType");
const quoteNumberButtons = document.querySelectorAll(".form-group__input");
const quoteTypeButtons = document.querySelectorAll(".form-group__input-type");

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
  let newQuote = new Quote();
  let generatedQuotes = newQuote.generate();
  quotes.innerHTML = displayQuotes(generatedQuotes);
});

// this is only specific to the radio buttons
// you need to combine this to
// how you gon' trigger this function?
  let number, type;
  quoteNumberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      console.log(event.target.value);
      number = event.target.value;
    });
  });

  quoteTypeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      console.log(event.target.value);
      type = event.target.valueOf;
    })
  });

  // consider running predeploy scripts