class VigenereCipheringMachine {
    constructor(direction = true){
        this.direct = direction;
        this.code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.pattern =  /[1234567890!@#$():^,.*\-&%\/\\\| ]/;
    }

    generateSeq(letter) {
        letter = letter.toUpperCase();
        let index = this.code.findIndex(x => x === letter);
        if(index === 0) return this.code;
        return this.code.slice(index).concat(this.code.slice(0, index));
    }

    encrypt(str, key) {
        if(!this.direct) str = str.split('').reverse().join('');
        if(str === undefined || key === undefined) throw new Error();
        let result = [];
        let keyCount = 0;
        for(let i = 0; i < str.length; i++) {
            if(this.pattern.test(str[i])) {
                result.push(str[i]);
                continue;
            }
            else 
                result.push(this.generateSeq(key[keyCount])[this.code.findIndex( x => x === str[i].toUpperCase())]);
            keyCount++;
            if(keyCount === key.length) 
                keyCount = 0;
        }
        return result.join('');
    }

    decrypt(str, key) {
        if(!this.direct) str = str.split('').reverse().join('');
        if(str === undefined || key === undefined) throw new Error();
        let result = [];
        let keyCount = 0;
        for(let i = 0; i < str.length; i++) {
            if(this.pattern.test(str[i])) {
                result.push(str[i]);
                continue;
            }
            else
                result.push(this.code[this.generateSeq(key[keyCount]).findIndex(x => x === str[i].toUpperCase())]);
            keyCount++;
            if(keyCount === key.length) 
                keyCount = 0;
        }
        return result.join('');
    }
}

module.exports = VigenereCipheringMachine;
