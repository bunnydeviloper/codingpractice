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
  let optimalPathArr = [];
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

  return optimalResult(parentObj);
}

dijkstra(myGraph);

// step1: create graph, init dijkstra fn
// step2: init var inside dijkstra fn, identify helper fns, write outside
// step3: write while loop inside dijkstra, update costObj + parentObj each iteration
// step4: once while loop finished, write optimalResult helper fn
