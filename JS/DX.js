const rollTen = () => {
  return Math.floor(Math.random() * (10 - 1) + 1);
};

const test = "12dx7+1";

const extract = text => {
  const spl = text.split("dx");
  const quan = Number(spl[0]);
  const spl2 = spl[1].split("+");
  const crit = Number(spl2[0]);
  const fixed = Number(spl2[1]);
  return [quan, crit, fixed];
};

const achievement = (quan, crit, fixed, count) => {
  const rollArray = [];
  let nextDice = 0;
  let readyNext = false;
  const sumNow = count * 10;
  for (let i = 0; i < quan; i++) {
    const rollResult = rollTen();
    rollArray.push(rollResult);
    if (rollResult >= crit) {
      nextDice++;
      readyNext = true;
    }
  }
  if (readyNext) {
    const countNow = count + 1;
    const result = achievement(nextDice, crit, fixed, countNow);
    console.log(result);
    return result;
  } else {
    const rollMax = Math.max.apply(null, rollArray);
    const result = sumNow + rollMax + fixed;
    console.log(result);
    return result;
  }
};

const arraySum = array => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = array.reduce(reducer);
  return sum;
};

const damage = num => {
  const dice = Math.floor(num / 10);
  const damArray = [];
  for (let i = 0; i < dice; i++) {
    const dam = rollTen();
    damArray.push(dam);
  }
  console.log(damArray);
  const damageSum = arraySum(damArray);
  console.log(damageSum);
  return damageSum;
};

const attack = () => {
  const ext = extract(test);
  const arc = achievement(ext[0], ext[1], ext[2], 0);
  const dam = damage(arc);
  console.log(dam);
};

attack();
