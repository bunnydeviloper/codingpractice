// resource: https://medium.freecodecamp.org/a-gentle-introduction-to-data-structures-how-graphs-work-a223d9ef8837

let MakeGraph = () => {
  let graph = {};
  graph.contains = (node)=> {
    return !!graph[node];
  }

  graph.addVertex = (node) => {
    if(!graph.contains(node)){
      graph[node] = {edges:{}};
    }
  }

  graph.removeVertex = (node) => {
    if(graph.contains(node)) {
    // We need to remove any existing edges the node has
      for(let connectedNode in graph[node].edges) {
        graph.removeEdge(node, connectedNode);
      }
      delete graph[node];
    }
  }

  graph.addEdge = (startNode, endNode) => {
    if(graph.contains(startNode) && graph.contains(endNode)){
      graph[startNode].edges[endNode] = true;
      graph[endNode].edges[startNode] = true;
    }
  }

  graph.removeEdge = (startNode, endNode) => {
    if(graph.contains(startNode) && graph.contains(endNode)){
      delete graph[startNode].edges[endNode]
      delete graph[endNode].edges[startNode]
    }
  }
return graph;
}

// TESTING
let devBook = MakeGraph();
devBook.addVertex('James Gosling');
devBook.addVertex('Guido Rossum');
devBook.addVertex('Linus Torvalds');
devBook.addVertex('Michael Olorunnisola');

console.log(devBook);

// We'll add the edges here!
devBook.addEdge('James Gosling', 'Guido Rossum');
devBook.addEdge('Linus Torvalds', 'Michael Olorunnisola');

console.log('Our graph after adding edges: \n', devBook);

// Remove Relationship
devBook.removeEdge('Linus Torvalds', 'Michael Olorunnisola');
console.log('Our graph after remove relationship b/w Linus and Michael: \n', devBook);

// Now we can remove users!
devBook.removeVertex('Linus Torvalds');
console.log('Our graph after remove user Linus: \n', devBook);
