const myArr = [2,3,4,5,6];
function addition(val) {
    let sum = 0;
    for(let i=0; i < val.length;i++){
        sum = sum+val[i];
    }
    return sum;
}

console.log(addition(myArr));