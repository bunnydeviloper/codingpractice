// practice writing dijkstra fn
// input: graph,  output: optimal path and total distance cost

const myGraph = {
  'start': {'A': 6, 'B': 2},
  'A': {'finish': 1},
  'B': {'A': 3, 'finish': 5},
  'finish': {}
};

function lowestCostNode (costObj, processedArr) {
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

  let lowest = lowestCostNode(costObj, processedArr);
  console.log(lowest);
}

dijkstra(myGraph);

// step1: create graph, init dijkstra fn
// step2: init var, identify helper fns
// step3: write while loop inside dijkstra
// step4: write optimalResult helper fn
