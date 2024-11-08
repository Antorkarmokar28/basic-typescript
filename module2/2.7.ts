{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };

    type Owner = "bike" | "car" | "ship"; //manualy

    type Owner2 = keyof Vehicle;

    const getKeyOfObject = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'Mr. Antor Karmaker',
        age: 20,
        address: 'Tangail'
    }
    const car = {
        brand: 'TOYOTA',
        year: 2001,
    }
    const result = getKeyOfObject(car, 'brand');

    //
}