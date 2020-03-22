module.exports = function getSeason(date) {
  const seasons = new Map([
    [11,"winter"], [0,"winter"], [1,"winter"], 
    [2,"spring"], [3,"spring"], [4,"spring"],
    [5,"summer"], [6,"summer"], [7,"summer"],
    [8,"autumn"], [9,"autumn"], [10,"autumn"],
  ]);

  if(date === undefined || !date instanceof Date) {
    return 'Unable to determine the time of year!';
  }

  if(isNaN(date.getMonth()) || date.getUTCMonth() === undefined) {
    throw new Error();
  }

  return seasons.get(date.getMonth());
};
