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

function rowCoordinate(coordinate) {
  return coordinate.charAt(1) - 1;
}

function calcDistance(coord1, coord2){
  const first = Math.pow((convertColumn(coord2) - convertColumn(coord1)),2);
  const second = Math.pow((rowCoordinate(coord2) - rowCoordinate(coord1)), 2);
  return Math.sqrt(first + second).toFixed(2);
}

console.log(calcDistance("A3", "D8"));

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

function howDangerous(coordinate) {
  return isCurrent(coordinate) ? 50 : isRock(coordinate) ? 100 : false;
}

function safetyReport() {
  return GRID.map(row => {
    return row.map(cell => {
      return (cell === "~") ? cell = 50 : (cell === "^") ? cell = 100 : cell = 0;
    })
  })
}
// console.log(safetyReport());

function getCoordinate(columnIndex, rowIndex) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const columnLetter = letters.charAt(columnIndex);
  return `${columnLetter}${rowIndex + 1}`;
}

function allRocks() {
  const rocksArr = [];
  GRID.map((row, rowIndex) => {
    if (row.includes("^")) {
      row.map((column, columnIndex) => {
        if (column === "^") rocksArr.push(getCoordinate(columnIndex, rowIndex));
      });
    }
  })
  return rocksArr;
}

// console.log(allRocks());

function firstRock() {
  return allRocks()[0];
}

function allCurrents() {
  const currentsArr = [];
  GRID.map((row, rowIndex) => {
    if (row.includes("^")) {
      row.map((column, columnIndex) => {
        if (column === "^") currentsArr.push(getCoordinate(columnIndex, rowIndex));
      });
    }
  })
  return currentsArr;
}

// console.log(allCurrents());

function firstCurrent() {
  return allCurrents()[0];
}

function percentageReport() {
  return [(allRocks().length / totalCells() * 100).toFixed(2), (allCurrents().length / totalCells() * 100).toFixed(2)];
}
// console.log(percentageReport());

function allShips() {
  const shipsArr = [];
  GRID.map((row, rowIndex) => {
    if (row.includes("v")) {
      row.map((column, columnIndex) => {
        if (column === "v") shipsArr.push(getCoordinate(columnIndex, rowIndex));
      })
    }
  })
  return shipsArr;
}

function shipReport() {
  let temp = [];
  temp.push(allShips()[0]);
  const last = allShips().pop();
  temp.push(last);
  return temp;
}

function lightRow(number) {
  return GRID[number - 1];
}
function lightColumn(letter) {
  let column = [];
  GRID.forEach(e => column.push(e[convertColumn(letter)]))
  return column;
}

