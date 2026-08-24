// //Conditionals

// // Truthy and Falsy
// //HOw things go

// if (10){        // Here it is more like Boolean(10) thats why True
//     console.log("Run");
// }

// Boolean()  // lets us test in javascript how values are interpreted in a boolean context.


// /* The falsy values
// false,
// 0,
// -0,
// 0n,
// null,
// undefined,
// NaN
// */
// "all the above values  gonna give false if tested"

// "Everything else is truthy value"

// //console.log(Boolean([]));   // empty does not mean falsy



// /* *************************Logical Conditionals ********************/
// age = 19;   
// isLoggedIn = true
// if (age >= 18 && isLoggedIn) {   // && simply means AND
//     console.log("Welcome");
// }


// if (age >= 18 || isLoggedIn) {   // || simply means OR
//     console.log("OR it is");
// }

// isBanned = false;


// if(age >= 18 && isLoggedIn && !isBanned){  //&& is evaluated before ||
//     console.log("Welcome to the Club")
// }

// ****** SHORT-CIRCUITING **********

//let username = "Suraj";

//a = username || "guest" ; //This is Or so it asks is username truthy or true if yes then it doesn't check other condition as one is sufficient.
//console.group(a);

//a = username && "guest" ; //This is AND so it asks if  username truthy or true if yes then it checks second one as bot has to be true if first one fails condition fails.
//console.group(a);

// ****************** Ternary  Operator ************************

// ?

"condition ? valueIftrue : valueIffalse "

//it is called ternary operator because it has three operands

const age = 10 ;

const status = age >= 18 ? "Adult" : "Minor" ;

console.log(status) ;