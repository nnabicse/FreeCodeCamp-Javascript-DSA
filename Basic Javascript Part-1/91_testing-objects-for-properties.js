function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp) == true){
        return obj[checkProp];
    }
    else{
        return "Not Found";
    }
}


const myObj = {
    top: "hat",
    bottom: "pants"
  };

console.log(checkObj(myObj, "top"));

