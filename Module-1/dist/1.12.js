"use strict";
// nullable type
var searchName = function (value) {
    if (value) {
        console.log('Searching');
    }
    else {
        console.log('there is nothing to search');
    }
};
// never type
searchName(null);
var throwError = function (msg) {
    throw new Error(msg);
};
throwError('Erro hogiya');
