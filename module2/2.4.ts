{
    //
    // generic type with interface
    interface Developer<T, X = null> {
        name: string,
        computer: {
            brand: string,
            model: string,
            display: string,
            relesingYear: number,
        }
        smartWatch?: T;
        bike?: X;
    }

    type PoorDeveloper = {
        brand: string, 
        display: string
    }

    interface ReachDeveloper {
        brand: string,
        display: string,
        heartTracker: boolean,
        sleepTracker: boolean
    }

    const poorDeveloper: Developer<PoorDeveloper> = {
        name: 'Antor Karmaker',
        computer: {
            brand: 'ASUS',
            model: '154-AS',
            display: 'Omled',
            relesingYear: 2014,
        },
        smartWatch: {
            brand: 'Titan',
            display: 'hd capacity'
        }
    }

    interface Bike {
        brand: string,
        engine: string,
        price: number
    }

    const richDeveloper: Developer<ReachDeveloper, Bike> = {
        name: 'Mezbaul Abedin',
        computer: {
            brand: 'IOS',
            model: '475Mac',
            display: 'Super Omled',
            relesingYear: 2022,
        },
        smartWatch: {
            brand: 'Apple',
            display: 'Omuled',
            heartTracker: true,
            sleepTracker: true
        },
        bike: {
            brand: 'Yamaha',
            engine: '100cc',
            price: 120000
        }
    }
    //
}