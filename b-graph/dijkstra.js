// Dijkstra algorithm, find the cheapest path from 'start' to 'finish' in weighted graph

const graph = {
  start: {A: 5, B: 2},
  A: {C: 4, D: 2},
  B: {A: 8, D: 7},
  C: {D: 6, finish: 3},
  D: {finish: 1},
  finish: {}
};

// use an object to keep track of the cost
const costs = {
  A: 5,
  B: 2,
  finish: Infinity
};

// keep track of the parent nodes of each node
const parents = {
  A: 'start',
  B: 'start',
  finish: null
};

// keep track of the nodes we already visited ('processed')
const processed = [“start”, “A”, “B”];


const dijkstra = (graph) => {
  // initialize some variables
  const costs = Object.assign({finish: Infinity}, graph.start);
  const parents = {finish: null};
  const processed = [];

};
