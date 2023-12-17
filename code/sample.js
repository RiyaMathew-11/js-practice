/* These are just some sample JS programs written for practice */

const age = 18; 
console.log(`I am ${age} years old.`);

function isPrime(num){

    if (num < 2) {
        return false;
    }

    for(let i=2; i <= num/2; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

/* --------------------------------------------------------------------------- */

let count_primes = 0;

for (let i=1; i<=100; i++){
    if(isPrime(i)){
        count_primes++;
    }
}

console.log(`There are ${count_primes} primes between 1 and 100.`);

/* --------------------------------------------------------------------------- */

function foo(x, condition) {
    if (condition) {
      console.log(x);
      const x = 2;
      console.log(x);
    }
  }
  
foo(1, true);


  