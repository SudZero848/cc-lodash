const _ = {

  clamp(number, lower, upper) {
    var lowerClampedValue = Math.max(number, lower);
    var clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    } 
    let isInRange = start <= number && number < end 
    return isInRange;
  },

  words(string) {
    let words = string.split(' ');
    return words;
  },

  pad(string, length) {
    if (string.length >= length) {
      return string;
    }
    let padStart = Math.floor((length - string.length) / 2);
    let padEnd = length - (string.length + padStart);
    let paddedString = ' '.repeat(padStart) + string + ' '.repeat(padEnd);
    return paddedString;
  },

  has(obj, key) {
    let hasValue = obj[key] === undefined ? false : true;
    return hasValue;
  },

  invert(obj) {
    let invertedObj = {};
    for (let key in obj) {
      let originalValue = obj[key];
      invertedObj[originalValue] = key;
    }
    return invertedObj;
  },

  findKey(obj, predicate) {
    for (let key in obj) {
      let value = obj[key]
      let predicateReturnValue = predicate(value)
      if (predicateReturnValue) {
        return key
      }
      return undefined
    }
  },


  drop(array, number) {
    if (number === undefined) {
      number = 1;
    };
    let dropped = array.slice(number);
    return dropped;
  },

  dropWhile(array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },


  chunk(array, size=1) {
    let newArrChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i+size);
      newArrChunks.push(arrayChunk);
    }
    return newArrChunks
  },

}




// Do not write or modify code below this line.
module.exports = _;