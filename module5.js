// variable
//math operation
//shorthand method
//Array
// conditional operator
//loops
//function
//object
//inch to feet in js

//
/* 
const Inches=12;
const Feet= Inches/12;
console.log(Feet);

const dadaInch=144;
const dadaFeet=dadaInch/12;
console.log(dadaFeet);

const dadiInches=60;
const dadiFeet=dadiInches/12;
console.log(dadiFeet);
 */
//inches to feet conversiton using function
/* 
function convertClaculator(inches){
    const feet=inches/12;
    return feet;
}
const myInches=564;
const myFeet=convertClaculator(myInches);
console.log(myFeet); */
// mile to km conversiton using function
/* 
function mileToKm(kilometer){
    const mile=kilometer/0.621371;
    return mile;
}
const atalpurToKanchan=6.5;
const calculateMile=mileToKm(atalpurToKanchan);
const gawsiaToPaiska=10;
const calculateGawsiaMile=mileToKm(gawsiaToPaiska);
console.log(calculateMile,calculateGawsiaMile); */
//  kg to gram conversiton using function
/* 
function kgToGram(kg){
    const gram=kg*1000;
    return gram;

}
const myPotatoInKg=5;
const myPotatoInGram=kgToGram(myPotatoInKg);
console.log(myPotatoInGram);
    */
// odd even by using function
/* 
function evenOrOdd(number){
    if(number % 2==0){
        return true;
    }else{
        return false;
    }
}
 const value = evenOrOdd(88);
console.log(' is this a even nmber: ',    value);
 */
//leap year or not usnig function

function isLeapYear(year){
    if(year % 4 == 0){
return true;    }
    else{
 return false;             }
}
const value= isLeapYear(2024);
console.log( 'is leap year :', value)
