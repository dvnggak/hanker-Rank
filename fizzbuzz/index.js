function fizzBuzz(n) {
    // Write your code here
    const getRange = []
    const fizz = 'Fizz';
    const buzz = 'Buzz';
    const fizzBuzz = 'FizzBuzz';
    for (var i = 1; i <= n; i++) {
        getRange.push(i)
    }
    // console.log(getRange)
    
    const checker = getRange.map((element) => {
        element % 3 === 0 && element % 5 === 0 ? console.log(fizzBuzz) 
            : element % 3 === 0 ? console.log(fizz) 
            : element % 5 === 0 ? console.log(buzz) 
            : console.log(element);
    })
    
}
function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}