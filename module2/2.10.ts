{
    //mapped type

    // using map operator of js for example
    const arrayOfNumber: number[] = [14, 11, 9, 6, 3];
    const arrayOfString: string[] = arrayOfNumber.map(number => 
        number.toString()
    )
    console.log(arrayOfString);

    // mapped type
    type AreaNumber = {
        height: number;
        width: number;
        squar: number;
    }
    type Height = AreaNumber['height'] //lookup type
    type AreaString = {
        [key in keyof AreaNumber]: string
    }
    
    // mapped type with generic
    type AreaString2<T> = {
        [key in keyof T] : T[key]
    }
    const area1: AreaString2<{height: string, width: number}> = {
        height: '14',
        width: 14
    }
    //
}