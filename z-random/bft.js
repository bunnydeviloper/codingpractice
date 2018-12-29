a = { v:1 };
b = { v:2 };
c = { v:3 };
d = { v:4 };
e = { v:5 };
f = { v:6 };

a.children = [ b, c, d ];
c.children = [ e, f ];

const bft = ( n, c = [] ) => {
  if (!n && !c.length) return; //stop recursive function
  console.log('a object: ', a);
  console.log('***this is the new first parameter :', n);
  console.log('this is n.v', n.v);
  console.log('***c array: ', c);
  console.log('-----this is n.children ', n.children);
  c = c.concat(n.children);
  console.log('... this is c after concat', c);
  //c.children = [ ...n.children ]
  return bft( c.shift(), c);
  //return bft( Object.assign({}, c), c);
};

bft(a);
