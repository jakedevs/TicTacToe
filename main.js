let grid = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

let player = {
	//One will be represented as X, and two as O
	one: 1,
	two: 2,
};

let activePlayer = player.one;

    function alternatePlayers() {
	activePlayer === player.one
		? (activePlayer = player.two)
		: (activePlayer = player.one);
	return activePlayer;
}

    function isValidCell(X, Y) {
  if (grid[Y][X] !== 0) {
    return false;
  }
   else if (grid[Y][X] === undefined) {
    return false 
   }
  else {
    return true;
  }
}

function setCellValue(X, Y) {
  if (isValidCell(X, Y) === true) {
	  grid[Y][X] = activePlayer;
    console.table(grid);
	  alternatePlayers();
    return grid;
  }
  else {
    //Will loop until checkWinConditions() is true
  }
}

function checkWinConditions(activePlayer) {
	const rowFilled = (currentValue) => currentValue === activePlayer;
	return grid[0].every(rowFilled);
}

function playRound() {
  while (checkWinConditions(activePlayer) === false) {
	let X = prompt("X location");
	let Y = prompt("Y location");
	setCellValue(X, Y);
  }
}

console.log(playRound());
