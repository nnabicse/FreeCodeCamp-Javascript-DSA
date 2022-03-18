const outerWear = "T-Shirt"; //declared in global scope

function myOutfit() {
    const outerWear = "sweater"; // declared in local scope
    return outerWear; // function will return the local outerWear because   local variable for heigher precidence over global scope.
}


console.log(myOutfit());