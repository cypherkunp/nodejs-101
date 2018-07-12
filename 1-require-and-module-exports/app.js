const add = require('./calculator').add;
require('./sum');

// This demonstrates nodejs caching mechanism.
// calculator.js is called twice but the code outside the module.exports is executed only once
// as node caches the module being imported.

console.log(add([2, 5, 3]));
