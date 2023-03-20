function reverseString(str) {
    try {
      if (typeof str === 'string') {
        return str.split("").reverse().join("");
      } else {
        throw new Error("is not a string")
      }
    }
    catch (error) {
      console.log(error);
    }
    return str;
  }
  
  console.log(reverseString("5897A"));
   
  