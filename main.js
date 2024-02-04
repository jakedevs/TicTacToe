const grid = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

const player = {
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

function checkWinConditions(currentGrid) {
	const filled = (currentValue) => currentValue === (player.one || player.two);

	const transpose = [
		[currentGrid[0][0], currentGrid[1][0], currentGrid[2][0]],
		[currentGrid[0][1], currentGrid[1][1], currentGrid[2][1]],
		[currentGrid[0][2], currentGrid[1][2], currentGrid[2][2]],
	];

	const diagonals = [
		[currentGrid[0][0], currentGrid[1][1], currentGrid[2][2]],
		[currentGrid[0][2], currentGrid[1][1], currentGrid[2][0]],
	];
	for (let i = 0; i < grid.length; i++) {
		const rowCheck = grid[i].every(filled);
		const columnCheck = transpose[i].every(filled);
		const diagCheck = diagonals[0].every(filled) || diagonals[1].every(filled);
		if (rowCheck === true || columnCheck === true || diagCheck === true) {
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
function playRound(activeGrid) {
	const saveInput = getInput();

	if (isValidCell(saveInput.X, saveInput.Y)) {
		const getGrid = setCellValue(saveInput.X, saveInput.Y);
		const checkWin = checkWinConditions(getGrid);

		if (checkWin === true) {
			return "gg";
		}
		alternatePlayers();
		playRound(getGrid);
	}
}

playRound();
