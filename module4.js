//making objects
/* 

let student= {id: 34,
     name: "solaiman",
      class:9,
       marks:98
    };
    let mobile ={
        brand:"xiaomi",
        price: 235645,
        stor: '16gb',
        camera:'7mp'

    }
    let aiub={
        Id:'23-51421-1',
        year: '2nd',
        credit: 13,
        club: 'computer club'
    }
let computer={
    quality:'good',
    brand:'amazing',
    form:'rayans',
    price: 4645464,
    good :"yes"
}
console.log(computer.quality) */
//
/* 
var shoppingCart={
    books: 3,
    sunglass:1,
    keyboard: 5,
    pen:1
} */
//when you know the specific property name , use don notation to get the property vallue
// var penCount=shoppingCart['pen'];
// console.log(shoppingCart);
//alternative system {like array}
//  var propertys=Object.keys(shoppingCart);
//  var propertyValues=Object.values(shoppingCart)
//  console.log(propertys);
//  console.log(propertyValues);
/* 
var penCount=shoppingCart.pen;
var penCount2=shoppingCart['pen'];

var propertyName='mouse';
var propertyValue=shoppingCart[propertyName]
console.log(propertyName,propertyValue)
var propertys=Object.keys(shoppingCart);

var propertys=Object.keys(shoppingCart);
 var propertyValues=Object.values(shoppingCart)
 console.log(shoppingCart);
 */
//
//looping with object

//array vs object
/* 
var shoppingItems=['books', 'sunglass', 'pen', 'show', 'moja' ]
var friendsAge=[12,34,56,43,56,43];
var friendsAge={
    jamal:43,
    kamal:42,
    saiml:32,
    tamil:75
} */
//array vs object
/* 
var shoppingCart={
    books:5,
    sunglass:8,
    pen:6,
    show:45,
    moja:54,
    bottle:1
}
const mykeys=Object.keys(shoppingCart)
console.log(mykeys);
const myvalues=Object.values(shoppingCart)
console.log(myvalues);
console.log(mykeys,myvalues)
for(var i=0;keys.length;i++){
   var propertyName=keys[i];
   console.log(propertyName)
} */
//
/* 
const color='yellow';

if(color=='green'){
    console.log('you are a green friend');
}
else if(color=='blue'){
    console.log("you are a blue friend")
}
else if(color=='red'){
    console.log("You have a red friend")
}
else if(color== 'yellow'){
    console.log("your have a yellow friend")
}else
{
    console.log("you are  not my friend")

}
 */
const color='yellow';

switch(color){
    case 'green':
        console.log("you are a blue friend")
        break;
        case 'yellow':
            console.log("you are a yellow friend")
            break;
            case 'red':
                console.log("you are a red friend")
                break;
                default:
                    console.log("you are not my friend")





}