//123 change to 321

var num=123;
var res=""
while(num!=0){
    let digit=num%10;
    console.log(digit);
    res+=digit
    num=Math.floor(num/10)
}
console.log(res);