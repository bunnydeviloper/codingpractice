// make a graph of your friends network
const myNetwork = {};

myNetwork['me'] = ['hg', 'sophie', 'trang']; // 3 close friends (1st degree connections)
myNetwork['hg'] = ['khoa']; // friends of friends (2nd degree connections)
myNetwork['sophie'] = ['caroline', 'steph', 'mimi']; // 2nd degree
myNetwork['trang'] = ['thomas', 'mike'] // 2nd degree
myNetwork['khoa'] = ['mimi']; // 3rd degree
myNetwork['caroline'] = [];
myNetwork['steph'] = [];
myNetwork['mimi'] = []; // undirected graph, so mimi doesn't point back to 'khoa'
myNetwork['thomas'] = [];
myNetwork['mike'] = [];

console.log(myNetwork);

// use enqueue and dequeue

// try to find if anyone in your network sells mango
// (same as: is there a path from A (you) to B (mango seller)

// who is the closest mango seller
// what is the shortest path from A to B?
