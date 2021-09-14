var arr = [1, 2, 3, 4]
var cnt = 0;
var elem = 6;


var low = 0; upp = arr.length - 1;

while (low < upp) {

    let total = arr[low] + arr[upp];
    if (elem == total) {
        console.log(`pairs ${arr[low]} ${arr[upp]} `);
        low++;

    }
    else if (elem > total) {
        low == low + 1;

    }
    else if (elem < total) {
        upp = upp - 1
    }
}
console.log("counter" + cnt);