/***********************************************************
 * Author: Emmanuel Gatwech
 * Description: helper functions
 * *********************************************************
 */

/**
 * @description does X
 * @param element
 */
const hide = element => {
  element.classList.add("hidden");
};

/**
 * @description adds elements to DOM
 * @param htmlString
 * TODO: concatenate, don't append!
 */
const append = (htmlString) => {
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
 * animate position from top to center
 * triggering animations
 * 1 - pseudo classes
 * 2 - class changes
 */
const showModal = () => {
  const modal = document.createElement("div");
  modal.className = "modal";
  const modalContent = document.createElement("div");
  const modalHead = document.createElement("div");
  const modalBody = document.createElement("div");
  const modalFooter = document.createElement("div");
  document.appendChild(modal);
};

/**
 * @description does X
 * @param data
 * @returns {boolean}
 */
const isEmpty = data => {
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
const getRandom = (iter) => {
  if(isEmpty(iter)) {
    throw new Error("Iterable is empty");
  }
  return iter[Math.floor(Math.random() * Math.floor(getLength(iter)))];
};

/**
 * @description does X
 * @param event
 */
const customizeQuotes = config => {
  // TODO: return a new config object or modify existing config object?
};

/**
 * @description Sets up a new global config object
 * @param event
 */
const handleSubmit = event => {
  event.preventDefault();
  let value = event.target.choice.value;
  let type = event.target.type.value;

  // TODO: call customizeQuotes
};