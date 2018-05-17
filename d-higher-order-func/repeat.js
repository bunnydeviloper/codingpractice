const repeat = (n, action) => {
  for (let i=0; i<n; i++) {
    action(i); // return a function
  }
};

repeat(3, console.log); // take in a function as argument

let labels = [];

repeat(5, i => {
  labels.push(`Unit ${i + 1}`); // take in a function as argument
});

console.log(labels);
