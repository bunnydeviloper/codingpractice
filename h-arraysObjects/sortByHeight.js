// some people are standing in a row in a park
// there are tree between them which cannot be moved
// rearrange the people by their heights in ascending order
// you cannot move the trees (denote by -1)

function sortByHeight (array) {
  const indexesOfTrees = [];
  const heightsOfPeople = [];

  array.forEach((value, i) => {
    if (value === -1) indexesOfTrees.push(i);
    else heightsOfPeople.push(value);
  });

  const sortedHeight = heightsOfPeople.sort((prev, next) => prev - next);

  // insert trees back into sorted height array
  indexesOfTrees.forEach((treeIndex, i) => {
    sortedHeight.splice(indexesOfTrees[i], 0, -1);
  });

  return sortedHeight;
}

const original = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(sortByHeight(original)); // [-1, 150, 160, 170, -1, -1, 180, 190]
