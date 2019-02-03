const fifteen = {
  value: 15,
  left: {
    value: 13,
    left: null,
    right: { value: 14, left: null, right: null }
  },
  right: { value: 22, left: null, right: null }
};
const five = {
  value: 5,
  left: {
    value: 2,
    left: { value: 1, left: null, right: null },
    right: null
  },
  right: { value: 5, left: null, right: null }
};

const ten = { value: 10, left: five, right: fifteen };
const myBst = { root: ten };

