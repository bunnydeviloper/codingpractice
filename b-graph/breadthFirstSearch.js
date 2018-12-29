// make a graph of your friends network
const myNetwork = {};

myNetwork['you'] = ['hg', 'sophie', 'trang']; // 3 close friends (1st degree connections)
myNetwork['hg'] = ['khoa']; // friends of friends (2nd degree connections)
myNetwork['sophie'] = ['caroline', 'steph', 'mimi']; // 2nd degree
myNetwork['trang'] = ['thomas', 'mike'] // 2nd degree
myNetwork['khoa'] = ['mimi']; // 3rd degree
myNetwork['caroline'] = [];
myNetwork['steph'] = [];
myNetwork['mimi'] = []; // undirected graph, so mimi doesn't point back to 'khoa'
myNetwork['thomas'] = [];
myNetwork['mike'] = [];

// console.log(myNetwork);

// try to find if anyone in your network sells mango
// (same as: is there a path from A (you) to B (mango seller)
function findMangoSellerBFS(graph) {
  let searchQueue = graph['you']; // use enqueue and dequeue

  while (searchQueue.length > 0) {
    const person = searchQueue.shift();
    if (isMangoSeller(person)) {
      console.log('Found one mango seller name: ', person);
      return true;
    } else {
      // if person is not mango seller, we add his/her friends to the searchQueue
      graph[person].forEach(e => searchQueue.push(e));
    }
  }
  console.log('Cannot find mango seller');
  return false;
}

// note: if a person's name contains 'm', they do sell mangos
function isMangoSeller(name) {
  if (name.includes('m')) return true;
  return false;
}

findMangoSellerBFS(myNetwork); // true

// who is the closest mango seller
// what is the shortest path from A to B?