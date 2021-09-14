class bank{

    createAccount(account_number,name,balance){
        this.account_number=account_number;
        this.name=name;
        this.balance=balance;

    }
    deposit(amt){
        this.balance+=amt;
        console.log(`you account${this.account_number}, has been credited with amount ${amt} your available balance;${this.balance}`);

    }
    withdrawal(amt){
        if(this.balance<amt){
            console.log("transaction failed insufficent balance");
        }
        else{
            this.balance-=amt;
            console.log(`you account${this.account_number}, has been debited with amount ${amt} your available balance;${this.balance}`);
        }

    }
    balanceEnq(){
        console.log(`your aval balace${this.balance}`);

    }

}

var obj1=new bank()
obj1.createAccount(1000,"ajay",50000)
obj1.deposit(2000)
obj1.balanceEnq()