const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
    for (const item in arr){
      const string = `<li class="text-warning">${arr[item]}</li>`
      failureItems.push(string)
    }
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList)