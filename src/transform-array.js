module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error();
    const resultArr = [];
    for(let i=0; i<arr.length; i++) {
        switch(arr[i]) {
            case '--discard-next': {
                i++;
                break;
            }
            case '--discard-prev': {
                resultArr.pop();
                break;
            }
            case '--double-next': {
                if((i+1) < arr.length) resultArr.push(arr[i+1]);
                break;
            }
            case '--double-prev': {
                if(i !== 0) resultArr.push(arr[i-1]);
                break;
            }
            default: {
                resultArr.push(arr[i]);
            }
        }
    }
    return resultArr;
};
