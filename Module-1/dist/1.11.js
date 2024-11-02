"use strict";
var _a, _b;
{
    //
    // nullish operator
    var authentication = null;
    var userAuthentication = authentication !== null && authentication !== void 0 ? authentication : 'Gauest';
    console.log(userAuthentication);
    var user_1 = {
        name: 'Antor Karmoker',
        age: 26,
        address: {
            city: 'Dhaka',
            presentAddress: 'Pakutia, Ghatail'
        },
        contact: 'example@gmail.com',
    };
    var pastAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.pastAddress) !== null && _b !== void 0 ? _b : 'No past address';
    console.log(pastAddress);
    //
}
