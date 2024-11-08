{
    //Access modifires
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount
        }
        getBalance(){
            return this._balance;
        }
    }
    const goribManusherBankAccount = new BankAccount(1552, 'Mr. Sahin', 20);
    // goribManusherBankAccount.balance = 0;
    goribManusherBankAccount.addDeposit(3000);

    const myBalance = goribManusherBankAccount.getBalance();

    console.log(myBalance);

    //
}