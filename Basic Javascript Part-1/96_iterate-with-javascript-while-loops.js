function buildArray(range) {
    const myArray = [];
    let i=0;
    while(i<range){
        myArray.push(i);
        i++;
    }
    return myArray;
    
}

console.log(buildArray(50));