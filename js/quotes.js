const motivationalQuotes = [
  {
    id: 1,
    owner: "Ronnie Coleman.",
    content: "Ain't nothing to it but to do it."
  },
  {
    id: 2,
    owner: "Swami Vivekananda",
    content:
      "Take up one idea.Make that one idea your life-- think of it, dream of it, live on that idea.Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone.This is the way to success."
  },
  {
    id: 3,
    owner: "Dolly Parton",
    content:
      "The way I see it, if you want the rainbow, you gotta put up with the rain."
  },
  {
    id: 4,
    owner: "Nathaniel Hawthorne",
    content:
      "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you."
  },
  {
    id: 5,
    owner: "Mary Kay Ash",
    content:
      "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."
  },
  {
    id: 6,
    owner: "Audrey Hepburn",
    content:
      "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others."
  },
  {
    id: 7,
    owner: "John Quincy Adams",
    content:
      "If your actions inspire others to dream more, learn more, do more, and become more, you are a leader."
  },
  {
    id: 8,
    owner: "Lupe Fiasco",
    content:
      "Life ain’t made to come around twice, that’s why I gotta get it right."
  },
  {
    id: 9,
    owner: "Pablo Picasso",
    content: "Everything you can imagine is real."
  },
  {
    id: 10,
    owner: "T.I",
    content: "No way should reflection be mistaken for glorification"
  }
];

/**
 * allows you to customize different types of quotes
 */
const customizeQuotes = () => {
  console.log("customizing these quotes!");
};

/**
 * generates new quotes
 */
const generateQuote = () => {
  console.log("customizing these quotes!");
  let quote = getRandom(motivationalQuotes);
  return quote.content;
};