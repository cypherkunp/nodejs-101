const greet1 = require('./module-export-as-function');
const greet2 = require('./module-export-as-object');
const greet3 = require('./module-exports-as-multiple-functions');
const greet4 = require('./module-export-as-multiple-objects');

greet1('Hello Devvrat!');

// using exports as an object
console.log(greet2.locale);
console.log(greet2.appPath);
greet2.sayHelloInEnglish();
greet2.sayHelloInSwedish();
greet2.sayHelloInTatar();

// using exports as multiple functions
greet3.sayHello();
greet3.sayHi();
greet3.saybye();

// using exports as multiple objects
greet4.greetInEn.sayHi();
greet4.greetInEn.sayHello();
greet4.greetInEn.saybye();

greet4.greetInFr.sayHi();
greet4.greetInFr.sayHello();
greet4.greetInFr.saybye();