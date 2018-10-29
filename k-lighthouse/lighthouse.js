const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

function countRows() {
  return GRID.length;
}

function countColumns() {
  return GRID[0].length;
}

function gridSize() {
  return countColumns() + ' x ' + countRows();
}

function totalCells() {
  return countColumns() * countRows();
}

function convertColumn(coordinate) {
  const arrayLetters = ["A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  return arrayLetters.indexOf(coordinate.charAt(0));
}

function convertRow(coordinate) {
  return GRID[coordinate.charAt(1) - 1];
}
function lightCell(coordinate) {
  if (convertColumn(coordinate) < countColumns() && (coordinate.substr(1) - 1) <= countRows()) {
    // create subArr to get one specific row inside GRID
    const subArr = GRID[coordinate.substr(1) - 1];
    // returning value at the given coordinate
    return subArr[convertColumn(coordinate)];
  } else return false;
}

function isRock(coordinate) {
  return lightCell(coordinate) === "^" ? true : false;
}

function isCurrent(coordinate) {
  return lightCell(coordinate) === "~" ? true : false;
}

function isShip(coordinate) {
  return lightCell(coordinate) === "v" ? true : false;
}

function allRocks() {
  return GRID.filter(row => {
    row.filter(cell => cell === "^");
  })
}

function allCurrents() {
  return GRID.filter(row => {
    row.filter(cell => cell === "~");
  })
}

function lightRow(number) {
  return GRID[number - 1];
}
function lightColumn(letter) {
  let column = [];
  GRID.forEach(e => column.push(e[convertColumn(letter)]))
  return column;
}

