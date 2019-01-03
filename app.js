var contrast = require('get-contrast');
var a = '#fff';
var b = '#666';
console.log( contrast.isAccessible(a, b), contrast.score(a, b), contrast.ratio(a, b) );
