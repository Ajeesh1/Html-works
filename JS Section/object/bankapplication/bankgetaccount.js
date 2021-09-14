class bank{
    getAccountDetails(){
        let accounts={
            1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
            1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
            1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
            1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
        }
        return accounts
    }
authenticate(username,pwd){
    let account_details=this.getAccountDetails()
    if(username in account_details){
        if(pwd==account_details[username]["password"]){
            this.status=1;
            return1
        }
        else{
            this
        }
        }
    }
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
var user=obj1.authenticate(1000,"test")
