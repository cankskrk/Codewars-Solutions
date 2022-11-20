const sumStrings = (a, b) => {
  if (!a) {
    a = 0;
  }

  if (!b) {
    b = 0;
  }

  let total = +a + +b;
  return console.log(String(total));
};

sumStrings(250, 200);
