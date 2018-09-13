const a = { info: { ceo: "Peter" } };
console.log('1st', a);
setTimeout( () => {
  a.info.ceo = "Dan"
  console.log('3rd', a);
}, 0);
console.log('2nd', a);

// alert(foo()); // Error!
// Function expression
// var foo = function() { return 'Enki'; }

// Exercise: Given a binary tree, find its maximum depth.

const d = (n=1) => {
  setTimeout( () => {
    n = n + 1;
  }, 0);
  return n;
};
console.log(d()); // 1

h = {
  name: 'joe',
  getFriend: function() {
    return {
      name: 'sally',
      set: () => {
        console.log('console log inside getFriend', this.name); // Joe
      }
    }
  }
}
console.log(h.getFriend().set()); // undefined, lost context

const e = (arr) => {
  const result = {data: []};
  setTimeout(() => {
    result.data = arr;
    return 5;
  }, 0);
  return result;
}
console.log(e([1,2,3])); // {data: []}
