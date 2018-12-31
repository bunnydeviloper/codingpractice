// practice writing dijkstra fn
// input: graph,  output: optimal path and total distance cost

const myGraph = {
  'start': {'A': 6, 'B': 2},
  'A': {'finish': 1},
  'B': {'A': 3, 'finish': 5},
  'finish': {}
};

function lowestCostNode (costObj, processedArr) {
  //
}

function createParentObj (graph) {
  const parentObj = {'finish': null};
  for (let node in graph.start) {
    parentObj[node] = 'start';
  }
  return parentObj;
}

function dijkstra (graph) {
  const costObj = { ...graph.start, ...{'finish': Infinity} };
  const processedArr = [];
  const parentObj = createParentObj(graph);

  console.log(parentObj);
}

dijkstra(myGraph);
