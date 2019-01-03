// suppose you're starting a radion show, and you want to reach all listeners in all states
// you have a list of stations, each on covers a couple states, but not all
// you have to select minimal number of stations but still covering all the states

// this is a set-covering problem, and solve with greedy / approximation approach
// NOTE: you can't solve this fast enough if you're looking for 'perfect' solution (= O(2^n))
// 1) pick the station that covers the most states that haven't been covered yet
// (it's ok if the station covers some states that have been covered already)
// 2) repeat until all the states are covered
// => greedy algorithm runs in O(n^2) time, where n is the number of radio stations

const stations = {};
stations['one'] = new Set(['ID', 'NV', 'UT']);
stations['two'] = new Set(['WA', 'ID', 'MT']);
stations['three'] = new Set(['OR', 'NV', 'CA']);
stations['four'] = new Set(['NV', 'UT']);
stations['five'] = new Set(['CA', 'AZ']);

const statesNeeded = new Set(['MT', 'WA', 'OR', 'ID', 'NV', 'UT', 'CA', 'AZ']);

function intersection (set1, set2) {
  let _intersection = new Set();

  for (let elem in set2) {
    if (set1.has(elem)) _intersection.add(elem);
  }
  return _intersection;
}

function difference (set1, set2) {
  // helper
}

function radioSet (stations, statesNeeded) {
  // main
}

const result = radioSet(stations, statesNeeded);
console.log(result);
