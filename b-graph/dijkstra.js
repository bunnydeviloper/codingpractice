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
const lowestCostNode = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) lowest = node;
    }
    return lowest;
  }, null);

  // 2nd way to write, but this will NOT work in the case if we visited the node already
  // return Object.keys(costs).filter(e => {
  //   return (!processed.includes(e)) && costs[e] === Math.min(...Object.values(costs));
  // })[0];
};

// console.log(lowestCostNode({A:5, B:2, finish:Infinity}, [])); // B

const dijkstra = (graph) => {
  // ------ initialize some variables -------

  // create costs object to keep track of the cost to each neighboring nodes
  const costs = Object.assign({finish: Infinity}, graph.start);
  // example: costs = { A: 5, B: 2, finish: Infinity }

  // create parents object so later on we can retrace the steps from 'start' to 'finish'
  const parents = {finish: null};
  for (let child in graph.start) { // add children of start node
    parents[child] = "start";
  }
  // example: parents = { A: "start", B: "start", finish: null };

  // create processed array to keep track of the nodes we already visited
  const processed = []; // example: processed = ["start", "A", "B"]

  // ------ calculate the lowest cost node -------
  let node = lowestCostNode(costs, processed);
  while (node) {
    console.log('CURRENT NODE (parent): ', node, 'costs: ', costs, 'processed: ', processed);
    let cost = costs[node]; // get cost of current node (current node is "B", cost is 2)

    let children = graph[node]; // get all "neighbors" of current node (children = { A:8, D:7 })

    for (let n in children) {
      let newCost = cost + children[n];

      if (!costs[n] || (newCost < costs[n])) {
        console.log('CURRENT N (children): ', n, 'COSTS[N]: ', costs[n], 'NEWCOST: ', newCost);
        costs[n] = newCost; // newCost is lower, reassign newCost to current cost
        parents[n] = node;
      }
    }
    processed.push(node); // once done, push node to processed array
    node = lowestCostNode(costs, processed); // reset the current node and repeat the cycle with new "processed" array
  }

  // Once the while loop is complted, we'll have the lowest cost to reach "finish" node
  // We'll trace back the path from "start" to "finish" using parents object
  console.log('parents: ', parents);
  let optimalPath = ['finish']; // initialize optimal path with end point at 'finish'

  let prevStop = parents.finish;
  while (prevStop) {
    optimalPath.unshift(prevStop); // add prevStop to the beginning of optimalPath (if use 'push', will need to reverse)
    prevStop = parents[prevStop]; // update the prevStop
  }

  return result = { distance: costs.finish, path: optimalPath };
};

console.log(dijkstra(myGraph)); // { distance: 8, path: ['start', 'A', 'D', 'finish'] }
