module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members))
    return false;
  return members.map(x => typeof x === 'string' ? x.trim()[0].toLocaleUpperCase() : "").sort().join('');
};