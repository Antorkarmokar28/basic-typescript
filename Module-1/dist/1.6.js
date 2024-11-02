"use strict";
function sum(num1, num2) {
    return num1 + num2;
}
sum(4, 4);
var sum2 = function (num1, num2) {
    if (num2 === void 0) { num2 = 40; }
    return num1 + num2;
};
sum2(10, 14);
var poorUser = {
    name: 'Antor Karmaker',
    balance: 0,
    totalBalance: function (balance) {
        return "My balance is: ".concat(this.balance + balance);
    }
};
var array = [4, 6, 10];
var newArray = array.map(function (elem) { return elem * elem; });
