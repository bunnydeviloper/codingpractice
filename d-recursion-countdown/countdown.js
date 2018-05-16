const countdown = (input, number) => {
  if (number === 0) return console.log(input);
  console.log(number);
  return countdown(input, number -1);
};

countdown('lets go', 3);
countdown('run run run', 5);
