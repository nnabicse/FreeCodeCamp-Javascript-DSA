//change the below code with rest param and arrow //func
// const product = (n1, n2, n3) => {
//     const args = [n1, n2, n3];
//     return args.reduce((a, b) => a * b, 1);
//   }
//   console.log(product(2, 4, 6));




const sum = (...args) => args.reduce((a, b) => a + b, 0);