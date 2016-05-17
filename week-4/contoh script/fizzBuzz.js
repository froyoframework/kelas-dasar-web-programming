

function fizzBuzz(initial, condition) { 

  for(var x = initial; x < condition; x++) { 
  	var result; 	
    if(x % 15 === 0) {
      result = "FizzBuzz";
    } else if(x % 3 === 0) {
      result = "Fizz";
    } else if(x % 5 === 0) {
      result = "Buzz";
    } else {
      result = x;
    }
    return result;
  }
}

fizzBuzz(10, 30);
