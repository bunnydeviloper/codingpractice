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
