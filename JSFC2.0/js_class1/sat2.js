// 7 //int
// 2.5 //float
// //in js both are number

// ("Soumya")
// ('soumya')
// //sting values

// true =>1
// false =>0
// //Boolean values

// null
// undefined
// //empty Values

// //primitive datatype => only single value

// // non primitive =>multiple value
// //array And Object
// [keep all string values inside this]
// [1,2,3,4,5,6,7]
// [a,1,2,'soumya',true,b]
//  [1 ,2 ,3 ,4 ,5 ,6 ]; //--> array
// //0  1  2  3  4  5   ->position  => index

// //{}  => object

// {
//     key:value
//     //key can be anything
//     srm:soumya
//     one:value3
//     fname:soumya
//     lname:mahanta

// }


//variables => place-holder for values.

//var y = 25;
// let x = 25;
// const z = '33679270200'; //constant(value doesnt change in period of time) like bank account number.
// let bal = 15000; //bank balance keep changing so cant be constant 


// let firstname = "Soumya";
// let lastname = "mahanta";
// const Mobmo = 9937446657;

// // console.log("My first name is: ",firstname);
// // console.log("MY last name is:" + lastname);
// // console.log("my number is",Mobmo,"My first name is: ",firstname);


// //template literal

// console.log(`my first name is ${firstname},my lastname is ${lastname},my contactno is ${Mobmo}`);



//Operators
// //assigment operator
// let x = 10;
// let y = 10;
// //arithmatic operators
// //+ ,- ,* ,/ ,(%=> remainder)

// let z = x + y;
// console.log(z);
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

//comparition operator

// let abc = 10;
// let xyz = '10';

// // console.log(abc > xyz);
// // console.log(abc < xyz);
// // console.log(abc >= xyz);

// //== or ===
// // == compare values where as === compare values as well as data-types
// console.log(abc == xyz );
// console.log(abc === xyz );

//decisions or conditions

// let age = 18;
// if (age>=18) {
//     console.log("You are Allowed inside the park");   
// }
// else{
//     console.log("Out of the park");

// }

let std = 4;

if (std==1) {
    console.log("Room One");
} else if(std==2) {
    console.log("room two");
}else if (std==3) {
    console.log("Room three");
}
else{
    console.log("You are principal");
}