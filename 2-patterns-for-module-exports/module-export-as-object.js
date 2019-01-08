const path = require("path");
const appPath = path.resolve('app.js');

module.exports = {
  appPath: appPath,
  locale: "en, sw, ta",
  sayHelloInEnglish: function() {
    console.log("Hello");
  },
  sayHelloInSwedish: function() {
    console.log("Hej");
  },
  sayHelloInTatar: function() {
    console.log("Isänme");
  }
};
