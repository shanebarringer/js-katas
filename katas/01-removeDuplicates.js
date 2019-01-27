// write a function that returns a single array without duplicates

const removeDuplicates = (...values) => {
  return [...new Set(values.reduce((acc, curr) => acc.concat(curr), []))];
};

module.exports = removeDuplicates;
