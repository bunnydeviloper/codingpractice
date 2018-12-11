// write a fn that takes in a number to represent total solar panels you have
// return a list of area of the largest squares you could make out of those panels
// eg: area(15324) will return [15129, 169, 25, 1]

function splitArea(solarPanels, list = []) {
  const square = Math.pow(Math.floor(Math.sqrt(solarPanels)), 2);
  if (solarPanels === 0) {
    console.log('Final result: ', list);
    return list;
  }
  else if (solarPanels === 1) { list.push(solarPanels); }
  else { list.push(square); }
  return splitArea(solarPanels - square, list);
}

splitArea(12); // [9, 1, 1, 1]
splitArea(15324); // [15129, 169, 25, 1]
splitArea(1); // [1]
splitArea(0); // []
