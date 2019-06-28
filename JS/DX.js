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
  const result = [quan, crit, fixed];
  //console.log(result);
  return result;
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
  console.log(rollArray);
  if (readyNext) {
    const countNow = count + 1;
    const result = achievement(nextDice, crit, fixed, countNow);
    //console.log(result);
    return result;
  } else {
    const rollMax = Math.max.apply(null, rollArray);
    const result = sumNow + rollMax + fixed;
    //console.log(result);
    return result;
  }
};

const showDown = (achievement, oppositeAchievement) => {
  if (achievement > oppositeAchievement) {
    return true;
  } else {
    return false;
  }
};

const arraySum = array => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = array.reduce(reducer);
  return sum;
};

const damage = (achievement, fixed) => {
  const dice = Math.floor(achievement / 10);
  const damArray = [];
  for (let i = 0; i < dice; i++) {
    const dam = rollTen() + fixed;
    damArray.push(dam);
  }
  //console.log(damArray);
  const damageSum = arraySum(damArray);
  //console.log(damageSum);
  return damageSum;
};

const reaction = () => {
  return "guard";
};

const attack = () => {
  const ext = extract(test);
  const ach = achievement(ext[0], ext[1], ext[2], 0);
  const fixed = 12;
  const dam = damage(ach, fixed);
  const guard = 3;
  const react = reaction();
  if (react == "guard") {
    const finalDam = Math.max(0, dam - guard);
    console.log(finalDam);
  } else if (react == "avoid") {
    const opoAch = achievement(2, 10, 4, 0);
    if (showDown(ach, opoAch)) {
      console.log(dam);
    } else {
      console.log(0);
    }
  } else {
    console.log(dam);
  }
};

attack();
