function fizzBuzz(n) {
    for(let i = 6; i <= n; i++){
        i % 3 === 0 && i % 5 === 0 ? console.log("FizzBuzz") : i % 3 === 0 ? console.log("Fizz") : i % 5 === 0 ? console.log("Buzz") : console.log(i);
    }
}

fizzBuzz(15)