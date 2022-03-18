function findOdd(range) {
    const oddArray = [];
    for(let i=1; i<=range; i++){
        if(i%2!=0){
            oddArray.push(i);
        }
    }
    return oddArray; 
}

console.log(findOdd(100));