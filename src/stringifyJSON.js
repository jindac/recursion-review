// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  var stringify = function(value) {
    //if statement to check if array or string 
    if (Array.isArray(value)) {
      result += '[';
      _.each(value, function(value, index, collection) {
        stringify(value);
        if (index !== collection.length - 1) {
          result += ',';
        }
      });
      result += ']';
    } else if (typeof value === 'object' && value !== null) {
      result += '{';
      // console.log('value =', value);
      if (!jQuery.isEmptyObject(value)) {
        _.each(value, function(value, key, collection) {
          if (typeof value !== 'function' && value !== undefined) {
            // console.log('in each');
            result += '\"' + key + '\"' + ':';
            stringify(value);
            result += ',';
          }
        });
        // console.log('result: ', result);
        if (!(result.charAt(result.length - 1) === '{')) {
          result = result.substring(0, result.length - 1);
        }
      }
      // console.log('result = ', result);
      result += '}';
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      result += value.toString();
      //stringify();
    } else if (value === null) {
      result += 'null';
    } else if (typeof value === 'string') {
      result += '\"' + value + '\"';
    }
  };
  stringify(obj);
  return result;
};
