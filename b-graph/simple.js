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
// Now we can remove users!
devBook.removeVertex('Linus Torvalds');
