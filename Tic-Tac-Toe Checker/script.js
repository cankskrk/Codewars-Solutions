function isSolved(board) {
  // Horizontal
  const Hor = () => {
    let result;
    board.forEach((item) => {
      if (
        item[0] == item[1] &&
        item[0] == item[2] &&
        item[1] == item[2] &&
        item[0] != 0
      )
        result = item[0];
    });

    return console.log(result);
  };

  // Vertical
  const Ver = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] == board[1][i] &&
        board[1][i] == board[2][i] &&
        board[2][i] == board[0][i] &&
        board[0][i] != 0
      ) {
        return console.log(board[0][i]);
      }
    }
  };

  // Diagonal
  const Dia = () => {
    if (
      (board[0][0] == board[1][1] &&
        board[1][1] == board[2][2] &&
        board[2][2] == board[0][0]) ||
      (board[0][2] == board[1][1] &&
        board[1][1] == board[2][0] &&
        board[2][0] == board[0][2])
    ) {
      return console.log(board[1][1]);
    }
  };

  // Draw or Not Finished
  const gameOver = () => {
    for (var x = 0; x < 3; x++)
      for (var y = 0; y < 3; y++) if (board[x][y] == 0) return console.log(-1);
    return console.log(0);
  };

  return Ver() || Hor() || Dia() || gameOver();
}

isSolved([
  [2, 1, 1],
  [2, 0, 2],
  [2, 1, 0],
]);
