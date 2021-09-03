const arr = ['um','dois','tres']

var object = arr.reduce((obj, item) => ((obj[item] = item), obj),{});

object = Object.assign( object);

console.log('object',object);