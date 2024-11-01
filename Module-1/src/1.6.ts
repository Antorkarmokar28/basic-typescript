function sum(num1: number, num2: number): number {
    return num1 + num2;
}
sum(4, 4);

const sum2 = (num1: number, num2: number = 40): number => num1 + num2;
sum2(10, 14);

const poorUser = {
    name: 'Antor Karmaker',
    balance: 0,
    totalBalance(balance: number): string {
        return `My balance is: ${this.balance + balance}`
    }
}

const array: number[] = [4, 6, 10];

const newArray: number[] = array.map((elem: number): number => elem * elem);