function gameBoard() {
	let grid = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	];

	const getBoard = () => grid;

	// const getCellStatus = (y, x) => {
	//   return grid[y][x];
	// };

	const changeCell = (y, x, team) => {
		if (grid[y][x] === "") {
			grid[y][x] = team;
		} else if (grid[y][x] !== team) {
			console.log("You cannot place a tictac here!");
		}
	};

	return { changeCell, getBoard };
}

function playerData() {
	const player1 = {
		name: "Player 1",
		team: "X",
	};
	const player2 = {
		name: "Player 2",
		team: "O",
	};
	return { player1, player2 };
}

function gameController() {
	const board = gameBoard();

	const checkWin = () => {
		for (let i = 0; i < gameBoard().getBoard().length; i++) {}
	};
	return { checkWin };
}

gameController().checkWin();
