/**
 * DOM manipulation methods
 */
const hide = element => {
  element.classList.add("hidden");
};

const append = (target, element) => {
  target.append(element);
};

const showModal = () => {
  const modal = document.createElement("div");
  modal.className = "modal";
  const modalContent = document.createElement("div");
}

/**
 * helper methods
 */
const getLength = iter => {
  if (iter.length === 0 || iter === undefined) {
    return [];
  } else {
    return iter.length;
  }
};

const getRandom = (iter) => {
  return iter[Math.floor(Math.random() * Math.floor(getLength(iter)))];
};

/**
 * 
 */