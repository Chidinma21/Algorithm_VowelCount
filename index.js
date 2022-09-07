let readSentence = (str) => {
  const lengthCount = str.length;
  const wordsCount = str.split(" ").length;
  const vowelCount = str.match(/[aeiou]/gi).length;

  return `The sentence is ${lengthCount} characters long. It consists of ${wordsCount} words, with ${vowelCount} vowels.`;
};
