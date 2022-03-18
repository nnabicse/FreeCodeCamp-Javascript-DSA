const myArray= [];

function countBack(range) {
    for(let i=range;i>0;i--){
        if(i%2 !=0){
            myArray.push(i);
        }
    }
    return myArray;
}

console.log(countBack(9));