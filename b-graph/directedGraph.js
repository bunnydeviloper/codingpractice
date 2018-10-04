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
    console.log('Each node: ', node);
    this.dfsUtils(node, visited);
  }
};

Graph.prototype.dfsUtils = function(vertex, visited) {
  // only perform the function on new vertex (un-visited)
  if (!visited[vertex]) {
    visited[vertex] = true;
    console.log('visited list: ', visited);

    // loop through array of neighbors and call dfsUtils function on each neighbor (precaution step)
    const neighbors = this.adjList[vertex];
    console.log('current vertex(node): ', vertex, ' and its neighbors are: ', neighbors);
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      console.log('calling dfsUtils on neighbor: ', neighbor);
      this.dfsUtils(neighbor, visited);
    }
  }
};

graph.dfs();
