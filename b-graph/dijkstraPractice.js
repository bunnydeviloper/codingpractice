// practice writing dijkstra fn
// input: graph,  output: optimal path and total distance cost

const myGraph = {
  'start': {'A': 6, 'B': 2},
  'A': {'finish': 1},
  'B': {'A': 3, 'finish': 5},
  'finish': {}
};

function findLowestCostNode (costObj, processedArr) {
  return Object.keys(costObj).reduce((accum, currNode) => {
    if (accum === null || costObj[currNode] < costObj[accum]) {
      if (!processedArr.includes(currNode)) {
        accum = currNode;
      }
    }
    return accum;
  }, null);
}

function createParentObj (graph) {
  const parentObj = {'finish': null};
  for (let node in graph.start) {
    parentObj[node] = 'start';
  }
  return parentObj;
}

function optimalResult (parentObj) {
  let optimalPathArr = ['finish'];
  while (optimalPathArr[0] !== 'start') {
    optimalPathArr.unshift(parentObj[optimalPathArr[0]]);

  }
  return optimalPathArr;
}

function dijkstra (graph) {
  const costObj = { ...graph.start, ...{'finish': Infinity} };
  const processedArr = [];
  const parentObj = createParentObj(graph);

  let currLowestCostNode = findLowestCostNode(costObj, processedArr);

  while (currLowestCostNode) {
    let costOfCurrLowest = costObj[currLowestCostNode];

    let children = graph[currLowestCostNode]; // add all children
    for (let child in children) {
      let newCost = costOfCurrLowest + children[child];
      if (newCost < costObj[child] || !costObj[child]) {
        costObj[child] = newCost;
        parentObj[child] = currLowestCostNode;
      }
    }
    processedArr.push(currLowestCostNode);
    currLowestCostNode = findLowestCostNode(costObj, processedArr);
  }

  return { distance: costObj['finish'], path: optimalResult(parentObj) };
}

const result = dijkstra(myGraph);
console.log(result);

// step1: create graph, init dijkstra fn
// step2: init var inside dijkstra fn, identify helper fns, write outside
// step3: write while loop inside dijkstra, update costObj + parentObj each iteration
// step4: once while loop finished, write optimalResult helper fn

const testInput1 = {
  'start': { 'A': 5, 'C': 2 },
  'A': { 'B': 4, 'D': 2 },
  'B': { 'D': 6, 'finish': 3 },
  'C': { 'A': 8, 'D': 7 },
  'D': { 'finish': 1 },
  'finish': {}
}
const testInput2 = { // circular graph, avoid the cycle
  'start': { 'A': 10 },
  'A': { 'B': 20 },
  'B': { 'C': 1, 'finish': 30 },
  'C': { 'A': 1 },
  'finish': {}
}
const testInput3 = { // graph w/ -weight, dijkstra won't give optimalPath
  'start': { 'A': 2, 'B': 2 },
  'A': { 'C': 2, 'finish': 2 },
  'B': { 'A': 2 },
  'C': { 'B': -1, 'finish': 2 },
  'finish': {}
}
console.log('testinput1 result: ', dijkstra(testInput1));
console.log('testinput2 result: ', dijkstra(testInput2));
console.log('testinput3 result: ', dijkstra(testInput3)); // expect error

// note: Dijkstra works when all the weight are positive
// If you have negative weights, use the Bellman-Ford algorithm
