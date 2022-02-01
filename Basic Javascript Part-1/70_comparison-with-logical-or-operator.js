function testLogicalOr(val) {
    if(val>20 || val<10){
        return "Outside";
    }
    return "Inside";
    
}

console.log(testLogicalOr(15));