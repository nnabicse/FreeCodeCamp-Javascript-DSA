function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();;
}

console.log(nextInLine([1,2,3,4,5],6));
