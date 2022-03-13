const myArray = [];
function buildArray(range) {
    for(let i=1;i<=range;i++){
        myArray.push(i);
    }
    return myArray;
}

console.log(buildArray(50));