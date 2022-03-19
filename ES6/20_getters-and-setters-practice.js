class Thermostat {
    constructor (fahrenheit){
        this.fahrenheit = fahrenheit;
    }
    //getter

    get temperature (){
        return (5 / 9) * (this.fahrenheit - 32);
    }

    //setter
    set temperature (celsius){
        this.fahrenheit = (celsius*9.0)/ 5+32
    }

}

const thermos = new Thermostat(76);
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);