// // LOOP - A loop repeateadly executes a block of code while some iteration conditon/rule says to continue
// // for 
// //while
// //for...of
// //for...in

// // COntrol statement 
// //break and continue

// //for(const key in object){}
// //       vs
// //for(const value of array){}
// // both are not interchangeable


// // for( initialization ; condition ;update){}

// for ( let i =0 ; i<5 ; i++) {
//     console.log(i);
// }

//  i = 0
// while(i <= 5){
//     console.log(i);
//     i++ ;
// }
// For.....of
//INstead of this 

// const numbers = [10, 20, 30]

// for(let i = 0 ; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// we can write this

//for(const number of numbers){
    //console.log(number);
//}

// for...in

const person ={
    name  : "Suraj",
    age : 25
};

for(const key in person){
    console.log(key, person[key]);
}