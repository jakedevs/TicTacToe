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
	if (isValidCell(X, Y) === true) {
		grid[Y][X] = activePlayer;
		const updatedGrid = grid;
		console.table(updatedGrid);
		alternatePlayers();
		return updatedGrid;
	}
}

function checkWinConditions(activePlayer) {
	// Horizontal win check
	// const rowFilled = (currentValue) => currentValue === activePlayer;
	// Don't forget to make this an iterator
	// grid[0].every(rowFilled);

	// Vertical check requirements
	// grid[0][0] grid[1][0] grid[2][0]
	// grid[0][1] grid[1][1] grid [2][1]

	let counter = 0;
	for (let i = 0; i < grid.length; i++) {
		const columnFilled = () => {
			return grid[i][0] === activePlayer;
		};
		if (columnFilled() === true) {
			counter++;
			console.log(`counter = ${counter}`);
			if (counter === 3) {
				return true;
			}
		}
	}
	return false;
}

function playRound() {
	do {
		const X = prompt("X location");
		const Y = prompt("Y location");
		setCellValue(X, Y);
	} while (checkWinConditions(activePlayer) === false);
}

console.log(playRound());
