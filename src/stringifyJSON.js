// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //primitive
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  if (obj === null || obj === NaN || obj === Infinity) {
    return 'null';
  }
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return null;
  }
  //array & object
  if (Array.isArray(obj)) {
    var mappedArr = obj.map(function(item) {
      return stringifyJSON(item);
    })
    return '[' + mappedArr.join() + ']';
  } else {
    var mappedObj = [];
    for (var key in obj) {
      if (stringifyJSON(obj[key]) !== null) {
        mappedObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + mappedObj.join() + '}';
  }
};
