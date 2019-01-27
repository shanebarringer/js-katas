// Write a function named combine() that takes two arguments and returns a single array

const combine = (first, ...rest) => {
  return [first, ...rest].reduce((acc, curr) => acc.concat(curr), []);
};

module.exports = combine;
