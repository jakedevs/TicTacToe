function gameBoard() {
  const gridSize = {
    grid: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  };

  const getCellStatus = (y, x) => {
    let status = gridSize.grid[y][x];

    switch (status) {
      case 1:
        return "circle";
      case 2:
        return "cross";
      default:
        return "empty";
    }
  };
}

function player(name) {
  return {
    name: name,
  };
}

let player1 = player("Jake");
