{
    //

    //Promise
    interface ITodo {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }
    const getTodo = async (): Promise<ITodo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        return data;
        // console.log(data)
    }

    getTodo();

    type UserObject = {
        user: string;
    }

    const createPromise = (): Promise<UserObject> => {
        return new Promise<UserObject>((resolve, reject) => {
            const data: UserObject = {user: 'Antor Karmaker'};
            if (data) {
                resolve(data);
            } else {
                reject('Failed to load data');
            }
        });
    }

    //calling creat promise function 

    const showData = async () => {
        const data: UserObject = await createPromise();
        return data;
    }
    console.log(showData());
    //
}