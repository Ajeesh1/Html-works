var exp=[00,200,100]
// exp[1]=200;
// console.log(exp);
// for(let i=0;i<=exp.length;i++){
//     console.log(exp[i]);
// }


for (let amount of exp){
    console.log(amount);
}

exp[2]+=100;
console.log(exp);//add 100 in array 2

for (let abc of exp){
    if(abc>150){
        console.log(abc);//print above 150
    }
}