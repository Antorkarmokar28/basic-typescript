{
    //conditional type
    type a1 = null;
    type x = a1 extends null ? true : false;
    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        tracktor: string
    }
    type checkVehicle<T> =  T extends keyof Sheikh ? true : false;
    type hasBike = checkVehicle<'tracktor'>;
    //
}