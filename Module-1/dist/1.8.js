"use strict";
{
    // object destructuring
    var user_1 = {
        id: 1454,
        name: {
            firstName: 'Antor',
            middleName: 'Chandra',
            lastName: 'Karmaker'
        },
        contactNo: '01500000000',
        address: 'Dhaka, Bangladesh'
    };
    var _a = user_1 || {}, address = _a.address, firstName_1 = _a.name.firstName;
    // array destructuring
    var myFriends = ['Sakil', 'Rumon', 'Elius', 'Dipto', 'Navil', 'Asif'];
    var bestFriend = myFriends[3], rest = myFriends.slice(4);
}
