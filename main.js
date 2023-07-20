// const name ="Great";
// let num = 4;
// var x = 45;

// console.log(num)

// const text = "for";
//  let _food = 'Rice';
//  var myBestFood = 'Loaves of Bread';
//  let $name =`Micheal`;

//  console.log(num, myBestFood, text, $name)

//  console.log(num)
//  console.log(myBestFood)
//  console.log(text)
//  console.log($name)

// alert("Hello")
// const name = prompt("What is your name?")

// alert("Welcome " + name)


// let a = 50;
// let b = 60;
// let c = "90";
// let d = "49";
// let e = "boy";


// console.log(a+b) //Answer is 110
// console.log(b-a) //Answer is 10
// console.log(c+d) //Answer is 9049
// console.log("Charles is" + e) //Answer is Charles isboy
// console.log(a*b) //Answer is 3000
// console.log(b/a) //Answer is 6/5 or 1.2


// const age = 21;

// if (age >= 21){
//     console.log("Just the right Age");
// }
// else{
//     console.log("Too young");
// }

// if (age<21){
//     console.log("too young")
// }
//  else{
//     console.log("Just the right age")
//  }
//  let A = true;
//  let B = false;

// console.log(!A) //Answer is false
// console.log(A && B) //Answer is false
// console.log(A || B) //Answer is true
// console.log(!A && B) //Answer is false
// console.log(A || !B) //Answer is true



// if and else statement


// let age = 16

// if (age >= 60){
//     console.log("you shouldn't be driving");
// }
// else if(age < 16){
//     console.log('too young to drive');
// }
// else{
//     console.log("Perfect age for driving");
// }



// const day = "monday"

// switch(day){
//     case 'monday':
//         console.log('Time for Edo-bits');
//         console.log('Meet Uncle Davison');
//         break;

//     case 'tuesday':
//         console.log('Visit Uniben');
//         console.log('Go to work');
//         break;

//     case 'wednesday':
//         console.log('Meet the president ');
//         break;

//     case 'thursday':
//         console.log('Prepare for your vacation');
//         console.log('Relax in the evening');
//         break;

//     case 'friday':
//         console.log('Go on vacation');
//         break;

//     case 'saturday':
//         console.log('Enjoy the weekend');
//         break;

//     case 'sunday':
//         console.log('Go to church and pray to God');
//         break;

// }


// if (day == "monday"){
//     console.log('Time for Edo-bits');
//     console.log('Meet Uncle Davison');
// }
// else if(day == "tuesday"){
//     console.log('Visit Uniben');
// }
// else if(day == "wednesday"){
//     console.log('Meet the president ');
// }
// else if(day == "thursday"){
//     console.log('Relax in the evening');
// }
// else if(day == "friday"){
//     console.log('Go on vacation');
// }
// else if(day == "saturday"){
//     console.log('Enjoy the weekend');
// }
// else{
//     console.log('Go to church and pray to God!')
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function save(){
    let countStr = " "+ count + " - "
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0

    console.log("The saved number is " + countStr)

}