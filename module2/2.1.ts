{
    //

    //type assertion
    let anything: any;
    anything = 'Next level web development';
    anything = 458;
    // (anything as number).

    const kgToGrm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    }
    const result1 = kgToGrm(500) as number;
    const result2 = kgToGrm('250') as string;

    type CustomMessage = {
        message: string;
    }

    try {

    } catch (error) {
        console.log((error as CustomMessage).message);
    }
    // 
}