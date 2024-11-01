{
    // object destructuring
    const user = {
        id: 1454,
        name: {
            firstName: 'Antor',
            middleName: 'Chandra',
            lastName: 'Karmaker'
        },
        contactNo: '01500000000',
        address: 'Dhaka, Bangladesh'
    }
    const { address, name: {
        firstName
    } } = user || {};

    // array destructuring
    const myFriends: string[] = ['Sakil', 'Rumon', 'Elius', 'Dipto', 'Navil', 'Asif'];
    const [,,, bestFriend, ...rest] = myFriends;
}