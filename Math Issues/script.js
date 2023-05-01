const myMath = {};

myMath.myRound = function (number) {
  const strNumberArr = String(number).split(".");

  if (!strNumberArr[1]) {
    return number;
  }

  if (parseInt(strNumberArr[1][0]) >= 5) {
    return parseInt(strNumberArr[0]) + 1;
  } else {
    return parseInt(strNumberArr[0]);
  }
};

myMath.myCeil = function (number) {
  const strNumberArr = String(number).split(".");

  if (!strNumberArr[1]) {
    return number;
  }

  if (parseInt(strNumberArr[1]) >= 0) {
    return parseInt(strNumberArr[0]) + 1;
  }
};

myMath.myFloor = function (number) {
  const strNumberArr = String(number).split(".");

  if (!strNumberArr[1]) {
    return number;
  }

  return parseInt(strNumberArr[0]);
};

console.log(myMath.myCeil(639.0610854700733));
