{
    //Type Gaurd with type operator
    type AlphaNewmaric = string | number;

    const add = (param1: AlphaNewmaric, param2: AlphaNewmaric): AlphaNewmaric => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
        }else{
            return param1.toString() + param2.toString()
        };
    }

    const result1 = add('Hello', 5)
    console.log(result1)

    //Type Gaurd with in Operator
    type NormalUser = {
        name: string;
    }
    interface IAdminUser {
        name: string;
        role: string;
    }
    const normalUser: NormalUser = {
        name: 'Ashik Mondol',
    }
    const adminUser: IAdminUser = {
        name: 'Antor Karmaker',
        role: 'Admin',
    }
    const defineUser = (user: NormalUser | IAdminUser) => {
        if('role' in user){
            console.log(`Admin user name is ${user?.name} and my role is ${user?.role}`);
        }else{
            console.log(`Normal user name is ${user?.name}`)
        }
    }
    defineUser(adminUser)
    //
}