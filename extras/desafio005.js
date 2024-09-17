function myFunction(a, b) {

    return a.filter(item => item !== b)

   /* const filtered = []
    for(const item of a) {
      if(item !==b) {
        filtered.push(item)
      }
    }
    return filtered*/
  }
  
  console.log(myFunction([1, 2, 3], 2));
  console.log(myFunction([1, 2, "3"], "3"));                      
  console.log(myFunction(["1", false, 2, "3"], false));                      
  console.log(myFunction([5, 1, 2, 3, 5], 5));                      