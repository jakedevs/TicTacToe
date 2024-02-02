const grid = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

const player = {
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
	return true;
}

function setCellValue(X, Y) {
	grid[Y][X] = activePlayer;
	const updatedGrid = grid;
	console.table(updatedGrid);
	return updatedGrid;
}

function checkWinConditions(activePlayer, currentGrid) {
	const filled = (currentValue) => currentValue === activePlayer;

	const columnCheck = [
		[currentGrid[0][0], currentGrid[1][0], currentGrid[2][0]],
		[currentGrid[0][1], currentGrid[1][1], currentGrid[2][1]],
		[currentGrid[0][2], currentGrid[1][2], currentGrid[2][2]],
	];

	for (let i = 0; i < grid.length; i++) {
		if (columnCheck[i].every(filled) === true || grid[i].every(filled)) {
			return true;
		}
	}

	return false;
}

function getInput() {
	const X = prompt("X location");
	const Y = prompt("Y location");
	return { X, Y };
}

function playRound() {
	//TODO: fix placing in unavailable cell, diagonal check
	const inputValues = getInput();
	const checkCellValidity = isValidCell(inputValues.X, inputValues.Y);
	const updateGrid = setCellValue(inputValues.X, inputValues.Y);
	console.log(`active player before checkGameOver: ${activePlayer}`);
	const checkGameOver = checkWinConditions(activePlayer, updateGrid);
	alternatePlayers();
	return checkGameOver;
}

function startGame() {
	while (playRound() === false) {}
}

startGame();
