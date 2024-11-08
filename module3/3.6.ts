{
    //Getter and Setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // Setter
        set addDeposit(amount: number){
            this._balance = this._balance + amount;
        }
        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }
        //Getter
        get balance(){
            return this._balance;
        }
        // getBalance() {
        //     return this._balance;
        // }
    }
    const goribManusherBankAccount = new BankAccount(1552, 'Mr. Sahin', 50);
    // goribManusherBankAccount.balance = 0;
    // goribManusherBankAccount.addDeposit(3000);
    goribManusherBankAccount.addDeposit = 51;
    // const myBalance = goribManusherBankAccount.getBalance();
    const myBalance = goribManusherBankAccount.balance;
    console.log(myBalance);
    //
}