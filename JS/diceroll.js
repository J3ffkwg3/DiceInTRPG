const rollDice = max => {
  return Math.floor(Math.random() * (max - 1) + 1);
};

const rollThree = () => {
  rollDice(3);
};

const rollFour = () => {
  rollDice(4);
};

const rollSix = () => {
  rollDice(6);
};

const rollEight = () => {
  rollDice(8);
};

const rollTen = () => {
  rollDice(10);
};

const rollTwelve = () => {
  rollDice(12);
};

const rollTwenty = () => {
  rollDice(20);
};

const rollHundred = () => {
  rollDice(100);
};

export {
  rollThree,
  rollFour,
  rollSix,
  rollEight,
  rollTen,
  rollTwelve,
  rollTwenty,
  rollHundred
};
