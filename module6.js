

var myStr1 ='hlw sobaike ,ki obostha sobar';
var value=myStr1.length;
console.log(value);
const code='ABM T'
console.log(code.length);

let doo='fdhkhd jkhgldlf';
doo[2]=6;
console.log()
//
const firstName="Goru ";
const lastName='gari';
const fullName=firstName+lastName;
console.log(fullName);
let firstBN='ena';
first=first+ " poribohon";
console.log(first);
//
const foot='GIveme'
let value1=foot.toLocaleLowerCase();
let value2=foot.toUpperCase();
let value3=foot.toLocaleLowerCase();


console.log(value1);
console.log(value2);
console.log(value3);
if(value1.indexOf('eme') != -1){
    console.log("inside the string");
}
else{
    console.log('outside or the string')
}
//
const lyrics='Tumi bondhu kala pakhi,ami jeno kii,bosonto kale tomay bolte pari ni';
const searchString='Pakhi';
const doesExist=lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
//
const shaikh='dhfkdhg kdfgldh'
console.log(shaikh.indexOf('kdfgldh'))
//
console.log(lyrics.startsWith("Tumi"));
console.log(lyrics.split('.'));
console.log(lyrics.split(''));
//trim 
const country=' Bangladesh ';
console.log(country.trim());


//

let get=Math.pow(3,5);
console.log(get)
console.log(" ---------------------------------")
//
const num1=25;
const num2=45;
const gap= Math.abs( num1-num2);
console.log(gap)
if(gap<5){
    console.log("you guys can be friend")
}
else{
    console.log('you guys star apart')
}
console.log(" ---------------------------------")

//
const number=2.365544;
const fullNumbar=Math.round(number);
console.log(fullNumbar);
//
const random=Math.round(Math.random()*100)
console.log(random);
//
// swap two variable variable
let first=5;
let second=6;
console.log(first,second);
let tmep =first;
first=second;
second=tmep;
 console.log(first,second);
 // DEstructuring 
[first,second ] =[second,first]
console.log(first,second);

//
const jim=69;
const dela=99;
const chinku=99;

if(jim>dela && jim>chinku){
    console.log('jim will get the cake')
}
else if(dela>jim && dela>chinku ){
    console.log('Dela will get the cake')
}
else{
    console.log('chinku will get the cake')
}
console.log(Math.max(45,65,46));

function returnME(x,y,z){
    if(x>y && x>z){
        console.log('jim will get the cake')
    }
    else if(y>x && y>z ){
        console.log('Dela will get the cake')
    }
    else{
        console.log('chinku will get the cake')
    }
}
returnME(67,85,43);
//
function soutMe(a,b,c,d,e){
    let result=Math.max(a,b,c,d,e)
    console.log("the heighest number is ", result);
}
soutMe(56,78,99,76,54,33);

//reverse problem solve

function reverseString(text){
    let    reversed='';
    for(let i =text.length-1;i>=0;i--){
        const element =text[i];
        reversed=reversed+element;
        console.log(element,reversed)
    }
}
const goodString='I am a good boy';
const reverse=reverseString(goodString);

//fibonacci series
/*
fibo[3]=fibo[2]+fibo[1]
fibo[n]=fibo[n-1]+fibo[n-2]
fibo[i]=fibo[i-1]+fibo[i-2]
*/

const fibo=[0,1];
for(let i=2;i<=20;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];

}
console.log(fibo);