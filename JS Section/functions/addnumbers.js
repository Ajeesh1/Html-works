function addNumbers(...parameter){
let res=0;
for (let num of parameter){
    res+=num
}
return res
}


console.log(addNumbers(10,20));
console.log(addNumbers(10,20,30));
console.log(addNumbers(10,20,30,40));