"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//learn spread operator
var friends1 = ['Kanon', 'Rumon', 'Bipu', 'Rifat'];
var friends2 = ['Shakil', 'Bishow', 'Monir', 'Nazmul'];
friends1.push.apply(friends1, friends2);
var mentors1 = {
    mezbaul: 'Typescript',
    firoz: 'GraphQL Pro',
    mir: 'redux',
};
var mentors2 = {
    tonmay: 'next js',
    rahatul: 'Job placement',
    ravi: 'AWS & Docker'
};
var allMentors = __assign(__assign({}, mentors1), mentors2);
//learn rest operator
function greetFriends() {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
}
greetFriends('safin', 'bipu', 'kanon', 'bishow');
