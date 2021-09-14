var num1=14, num2=63;
let result;
for(let i=1;i<=num1;i++){
    if((num1 % i==0)&(num2%i==0)){
        result=i;
    }
}
console.log(result);