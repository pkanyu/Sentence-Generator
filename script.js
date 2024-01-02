//make the storage.
const objectSentence = {
  nouns: [
    "cat",
    "dog",
    "fish",
    "bird",
    "tree",
    "flower",
    "car",
    "train",
    "book",
    "phone",
  ],
  verbs: [
    "sees",
    "likes",
    "touches",
    "eats",
    "hears",
    "smells",
    "finds",
    "watches",
    "reads",
    "calls",
  ],
  adjectives: [
    "big",
    "small",
    "red",
    "blue",
    "loud",
    "quiet",
    "bright",
    "dark",
    "soft",
    "hard",
  ],
  adverbs: [
    "quickly",
    "slowly",
    "loudly",
    "quietly",
    "brightly",
    "darkly",
    "softly",
    "hardly",
    "eagerly",
    "calmly",
  ],
};

const word = () => {
    const randomNoun = objectSentence.nouns[Math.floor(Math.random() * objectSentence.nouns.length)];
    const randomVerb = objectSentence.verbs[Math.floor(Math.random() * objectSentence.verbs.length)];
    const randomAdjective = objectSentence.adjectives[Math.floor(Math.random() * objectSentence.adjectives.length)];
    const randomAdverb = objectSentence.adverbs[Math.floor(Math.random() * objectSentence.adverbs.length)];
   
    const sentence = `${randomAdjective} ${randomNoun} ${randomVerb} ${randomAdverb} `;
    return sentence;
}

console.log(word());
console.log(word());
console.log(word());

const asciiArt = [
  `
     /\\_/\\  
    ( o.o ) 
     > ^ <
    `,
  `
     ____
    / . .\\
    \\  ---<
     \\  /
    ___|___
    `,
  `
     (\\_/)
    =(^.^)=
    (")(")
    `,
];

function getRandomAsciiArt() {
  const index = Math.floor(Math.random() * asciiArt.length);
  return asciiArt[index];
}

console.log(getRandomAsciiArt());
