// code your solution here
//FUNCTIONS - A SECTION OF REUSABLE CODE!!!
//DECLARE A CODE ONCE AND USE IT WHENEVER
//CALL THE FUNCTION TO THE EXECUTE THAT CODE

function happyBirthday(firstName, age){
console.log("Happy Birthday to you!")
  console.log("Happy Birthday to you!")
   console.log(`Happy Birthday dear ${firstName}!`)
    console.log(`You are ${age} years old!`)
}
   happyBirthday("Kevin", 29 );
   happyBirthday("Valentine", 27);
  happyBirthday("Zahra", 1);

 // function to add 2 numbers. then we need 2 arguments name x and y. when we ivoke the function i want to add x to y.
 
 function add(x,y){
let result = x + y;
return result; 
 }
 let answer = add(2,3);
 console.log(answer);

 //USE RETURN INSTEAD OF LET
 function add(x, y){
    return x + y;
 }
 console.log(add(2, 3))

 function subtract(x, y){
    return x - y;
 }
 console.log(subtract(4, 7))

 function multiply(x, y){
    return x * y;
 }
 console.log(multiply(700, 90))

 function divide(x, y){
    return x / y;
 }
 console.log(divide(390, 7))

//how to use if else // CHECKING IF A NUMBER IS EVEN OR ODD (IF ELSE METHOD)
 function isEven(number){
 if(number % 2 === 0){
   return true;
 }
else{
   return false;
 }
 }
 console.log(isEven(92))

//Tinery method; you want to know if a number is odd or even
function isEven(number){
   return number % 2 === 0 ? true : false
}
console.log(isEven(34))

//EXAMPLE FOR EMAIL IS VALID

function isValid(email){
    return email.includes("@") ? true : false
}
console.log(isValid("kevin@moringa.com"))

//if else method in checking if a email is valid or not
function isValid(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}
console.log(isValid("kevinndiritugmail.com"))

//FUNCTION DECLARATION

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun("bike ride"))

// FUNCTION EXPRESSION

const mondayWork = function(activity = "go to the office"){
   return `This Monday, I will ${activity}.`;
}
console.log(mondayWork("go to the office"))

const wrapAdjective = (flair = "*") => {
   return (adjective = "special") => {
      return `You are ${flair}${adjective}${flair}!`;
   };
};

