module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1) {
        arr = arr.filter( x => Array.isArray(x));
        var resultCount = count;
        arr.forEach(x => {
            resultCount = Math.max(this.calculateDepth(x, count + 1), resultCount);
        });
        return resultCount;
    }
};