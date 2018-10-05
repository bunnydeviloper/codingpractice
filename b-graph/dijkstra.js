// Dijkstra algorithm, find the cheapest path from 'start' to 'finish' in weighted graph

const myGraph = {
  start: {A: 5, B: 2},
  A: {C: 4, D: 2},
  B: {A: 8, D: 7},
  C: {D: 6, finish: 3},
  D: {finish: 1},
  finish: {}
};

// function to return the cheapest node that hasn't been processed
const lowestCostNode = (cost, processed) => {
  //
};

const dijkstra = (graph) => {
  // initialize some variables
  // create costs object to keep track of the cost to each neighboring nodes
  const costs = Object.assign({finish: Infinity}, graph.start);
  // example: costs = { A: 5, B: 2, finish: Infinity }

  // create parents object to keep track of the parents' nodes
  const parents = {finish: null};
  for (let child in graph.start) { // add children of start node
    parents[child] = "start";
  }
  // example: parents = { A: "start", B: "start", finish: null };

  // create processed array to keep track of the nodes we already visited
  const processed = []; // example: processed = ["start", "A", "B"]

};
