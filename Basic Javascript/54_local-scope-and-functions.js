function myLocalScope() {
    let myVar = "Variable";
    console.log("Inside myLocalScope", myVar);
}

myLocalScope();

console.log("Outside myLocalScope", myVar); // this line will through an error