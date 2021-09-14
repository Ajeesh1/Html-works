var arr=[10,11,12,13,14,15,16]
// for( let a of arr){
//     if(a%2==0){
//         console.log(a);
//     }
// } //even printing




// var sum=0
// for (let num of arr){
// sum+=num;
// }
// console.log(sum);//sum of array

// arr.push(100)
// console.log(arr);//adding value in array


// arr.push(100)
// console.log(arr);//removing value in array


var odd=[]
var even=[]
for (let d of arr){
    if(d%2==0){
        even.push(d)
        
    }
    else{
        odd.push(d)
    }
}
console.log(odd);
console.log(even);



