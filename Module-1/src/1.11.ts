{
    //
    // nullish operator
    const authentication = null;
    const userAuthentication = authentication ?? 'Gauest';
    console.log(userAuthentication)

    type User = {
        name: string;
        age: number;
        address: {
            city: string;
            presentAddress: string;
            pastAddress?: string;
        }
        contact: string;
    }

    const user: User = {
        name: 'Antor Karmoker',
        age: 26,
        address: {
            city: 'Dhaka',
            presentAddress: 'Pakutia, Ghatail'
        },
        contact: 'example@gmail.com',
    }
    const pastAddress = user?.address?.pastAddress ?? 'No past address';
    console.log(pastAddress)
    //
}