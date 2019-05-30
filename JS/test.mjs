import { rollTen } from "./diceroll";

const judge = (quan, crit, count) => {
  const rollArray = [];
  let nextDice = 0;
  let readyNext = false;
  let success = 0;
  const sumNow = count * 10;
  for (let i = 0; i < quan; i++) {
    const rollResult = rollTen();
    rollArray.push(rollResult);
    if (rollResult >= crit) {
      success++;
      nextDice++;
      readyNext = true;
    }
  }
  console.log(`[ ${rollArray} ],${success}=>`);
  if (readyNext) {
    const countNow = count + 1;
    judge(nextDice, crit, countNow);
  } else {
    //console.log(rollArray);
    const rollMax = Math.max.apply(null, rollArray);
    const result = sumNow + rollMax;
    //return result;
    console.log(result);
  }
};
