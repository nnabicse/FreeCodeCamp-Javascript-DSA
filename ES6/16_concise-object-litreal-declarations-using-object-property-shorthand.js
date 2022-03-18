/* convert this code to shorthand objectliteral

const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
  
}; */




const createPerson = (name, age, gender)=>({name, age,gender});
console.log(createPerson("NNabi M.Engg", 23, "Male"));