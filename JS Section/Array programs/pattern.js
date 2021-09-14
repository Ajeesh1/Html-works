var arr=[3,4,5]
 
var sum=0;
for(let num of arr){
    sum+=num;

}
console.log(sum);
var op=[]
for (let num of arr){
    let res=sum+num
    op.push(res)
}
console.log(op);