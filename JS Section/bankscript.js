// localStorage.setItem("accno",1000)
// localStorage.setItem("pswd",10001)


// var abc=localStorage.getItem("accno")
// console.log(abc);

// var abd=localStorage.getItem("pwd")
// console.log(abc);

// for(let i=0; i<localStorage.length;i++){
//     let ke=localStorage.key(i)
//     let val=localStorage.getItem(ke)
//     console.log(ke,val);
// }


// localStorage.clear()

var user={username:"user2",password:"password2",name:"ravi",balance:3000}
localStorage.setItem(user.username,JSON.stringify(user))
