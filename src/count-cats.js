module.exports = function countCats(matrix) {
  return matrix.map(x => x.filter(y => y === '^^').length).reduce((x, c) => x + c, 0);
};
