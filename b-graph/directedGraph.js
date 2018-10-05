// make a directed graph

// initialize Graph object
function Graph() {
  this.adjList = {};
}

// add methods to Graph object
Graph.prototype.addVertex = function(vertex) {
  this.adjList[vertex] = [];
};

Graph.prototype.addEdge = function(v1, v2) {
  this.adjList[v1].push(v2);
};

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'C');
graph.addEdge('D', 'E');
graph.addEdge('C', 'E');
graph.addEdge('E', 'B');
graph.addEdge('D', 'B');

console.log(graph);

// DFS on graph
Graph.prototype.dfs = function() {
  // get all vertexes of graph and save them as array of nodes
  const nodes = Object.keys(this.adjList);
  console.log('All nodes: ', nodes);
  const visited = {}; // initialize visited object to make sure we don't visit any node twice

  // loop through array of nodes and call dfsUtils function (below) on each node
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    let str = node;

    console.log('Each node: ', node);
    this.dfsUtils(node, visited, str);
  }
};

Graph.prototype.dfsUtils = function(vertex, visited, str) {
  // only perform the function on new vertex (un-visited)
  if (!visited[vertex]) {
    visited[vertex] = true;
    console.log('visited list: ', visited);

    // loop through array of neighbors and call dfsUtils function on each neighbor (precaution step)
    const neighbors = this.adjList[vertex];
    console.log('current vertex(node): ', vertex, ' and its neighbors are: ', neighbors);
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      // this string will list the order of dfs traversal
      str = str + neighbor;
      console.log(str);

      console.log('calling dfsUtils on neighbor: ', neighbor);
      this.dfsUtils(neighbor, visited, str);
    }
  }
};

graph.dfs();
console.log('================================================');

// Modify DFS to check whether our graph is cyclic or acylic (detecting cycles)
Graph.prototype.detectCycle = function() {
  const nodes = Object.keys(this.adjList);
  const visited = {};
  const recursionStack = {};

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (this.detectCycleUtils(node, visited, recursionStack)) return 'There is a cycle!';
  }

  return 'No cycle detected';
};

Graph.prototype.detectCycleUtils = function(vertex, visited, recursionStack) {
  if (!visited[vertex]) {
    visited[vertex] = true;
    recursionStack[vertex] = true;
    const neighbors = this.adjList[vertex];
    console.log('visited: ', visited, ' and recStack: ', recursionStack);
    for (let i = 0; i < neighbors.length; i++) {
      const node = neighbors[i];
      console.log('parent: ', vertex, ' and child: ', node);
      if (this.detectCycleUtils(node, visited, recursionStack) || recursionStack[node]) return true;
    }
    recursionStack[vertex] = false;
  }
  /*
  if (!visited[vertex]) {
    visited[vertex] = true;
    recursionStack[vertex] = true;
    const neighbors = this.adjList[vertex];
    console.log('visited: ', visited, ' and recStack: ', recursionStack);
    for (let i = 0; i < neighbors.length; i++) {
      const currentNode = neighbors[i];
      console.log('parent: ', vertex, ' and child: ', currentNode);
      if (!visited[currentNode] && this.detectCycleUtils(currentNode, visited, recursionStack)) {
        return true;
      } else if (recursionStack[currentNode]) {
        return true;
      }
    }
  }
  recursionStack[vertex] = false;
  return false;
  */
};

console.log(graph.detectCycle()); // No cycle detected
console.log('================================================');

graph.addEdge('E', 'A');
console.log(graph.detectCycle()); // There is a cycle!

console.log('================================================');
const graph2 = new Graph();
graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');
graph2.addEdge('A', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('C', 'A');
console.log(graph2);

console.log(graph2.detectCycle()); // There is a cycle!
