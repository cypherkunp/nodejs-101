module.exports.greetInEn = {
    sayHi: function(param) {
        param = param || '';
        console.log('Hi' + param);
    },
    sayHello: function (param) {
        param = param || '';
        console.log('Hello' + param);
    },
    saybye : function (param) {
        param = param || '';
        console.log('Bye' + param);
    }
};

module.exports.greetInFr = {
    sayHi: function (param) {
        param = param || '';
        console.log("salut" + param);
    },
    sayHello: function (param) {
        param = param || '';
        console.log("Bonjour" + param);
    },
    saybye: function (param) {
        param = param || '';
        console.log('au revoir' + param);
    }
};
