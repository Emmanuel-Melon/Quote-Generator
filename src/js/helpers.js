/***********************************************************
 * Author: Emmanuel Gatwech
 * Description: helper functions
 * *********************************************************
 */

/**
 * @description does X
 * @param element
 */
exports.hide = element => {
  element.classList.add("hidden");
};

/**
 * @description adds elements to DOM
 * @param htmlString
 * TODO: concatenate, don't append!
 */
exports.append = (htmlString) => {
  let fragment = document.createDocumentFragment();
  let temp = document.createElement("div");
  // temp.className = "quote";
  temp.innerHTML = htmlString;
  while(temp.firstChild) {
    fragment.appendChild(temp.firstChild);
  }
  return fragment;
};

/**
 * @description does X
 * @param data
 * @returns {boolean}
 */
exports.isEmpty = data => {
  return data.length === 0 || typeof data === undefined;
};

/**
 * @description does X
 * @param iter
 * @returns {number}
 */
const getLength = iter => {
  if(isEmpty(iter)) {
    throw new Error("Iterable is empty");
  }
    return iter.length;
};

/**
 * @description does X
 * @param iter
 * @returns {*}
 */
exports.getRandom = (iter) => {
  if(isEmpty(iter)) {
    throw new Error("Iterable is empty");
  }
  return iter[Math.floor(Math.random() * Math.floor(getLength(iter)))];
};

/**
 * @description does X
 * @param event
 */
exports.customizeQuotes = config => {
  // TODO: return a new config object or modify existing config object?
};

/**
 * @description Sets up a new global config object
 * @param event
 * ? should event handlers return anything?
 */
const handleSubmit = event => {
  event.preventDefault();
  let value = event.target.choice.value;
  let type = event.target.type.value;

  if(isEmpty(value) && isEmpty(type)) {
    throw new Error("Empty form values");
  }
  return {
    value,
    type
  }
};
