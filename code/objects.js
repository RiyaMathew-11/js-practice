// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York',

//     details:{
//         hobbies: ['music', 'sports'],
//         address: '123 Street'
//     },

//     get_details: function(){
//         return this.details;
//     }
// }

// console.log(`Hobbies of ${obj.name} are: ${obj.get_details().hobbies}`)

/* --------------------------------------------------------------------------- */

let x = "foo".includes("oo")
console.log(typeof(x))

/* --------------------------------------------------------------------------- */


function avg(...args) {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  }
  
console.log(avg(2, 3, 4, 5)); // 3.5

/* --------------------------------------------------------------------------- */


  
