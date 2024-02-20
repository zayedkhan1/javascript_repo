


const country='sonar bangla desh';
const age=52;
const isIndependent=true;

const student={
    id:232,
    class:12,
    name1:'agun'
}
const friend=[4, 6,8,9,6,3,2,5];
function add(x,y){
    return x+y;
}
console.log(typeof country)
console.log(typeof age)
console.log(typeof student)
console.log(Array.isArray(friend))
console.log(typeof add)
console.log(friend.includes(5));
console.log(friend.includes(10));
//
const marvel=[45,67,8,7,6,4,32,44,66,77,8,88,55,];
console.log(marvel.slice(1,7))
console.log(marvel.splice(1,4))
console.log(marvel)
//
/*
const stark=['abul','babul','cabul','babul','dabul','abul','kabul','gabul','sabul','abul','abul','gabul'];
function removeDuplicate(stark){
    const unique=[];
    for( let t=0;t<stark.length;t++){
      
        if(unique.includes(stark[t])== flase){
            unique.push(stark[t]);
        }

    }
    return unique;
}
 console.loog(removeDuplicate(stark[t]));
*/
//

for(let i=1;i<=50;i++){
    var thor=[i];
    if(thor % 3==0 && thor % 5==0){
        console.log('footbar')
    }
     else if(thor % 3 == 0){
        console.log('foo')
    }
    else if(thor % 5==0){
        console.log('bar')
    }
    
    else{
        console.log('siuuuuuuuu')
    }
}
//
function chair(n1){
    var chairNumber=n1*3;
    return chairNumber;
}
var loki1= 3;
console.log( 'need wood for 3 chair is: ', chair(loki1),"cft")
//
function table(n2){
    var tableNumber=n2*10;
    return tableNumber;
}
var loki2= 5;
console.log( 'need wood for  5 table is: ', table(loki2),"cft")
//
function bed(n3){
    var bedNumber=n3*50;
    return bedNumber;
}
var loki3= 1;
console.log( 'need wood for  1 bed is: ', bed(loki3),"cft")

var totalWood=chair(loki1)+table(loki2)+bed(loki3);
console.log(totalWood);
console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::')
//findinag cheapest pone among some


var phones=[
    {name:'samsung',camera:'17mp' , Storaage:'16gb',color:'solver',price:43555},
    {name:'oppp',camera:'17mp' , Storaage:'16gb',color:'solver',price:7544},
    {name:'xiaomi',camera:'17mp' , Storaage:'16gb',color:'solver',price:7565},
    {name:'Nokia',camera:'17mp' , Storaage:'16gb',color:'solver',price:65544}
];
function cheapestPhone(phones){
    let cheapest=phones[0];
    for(let i=0 ;i< phones.length ; i++ ){
        var phone=phones[i];
         if(phone.price<cheapest.price){
            cheapest=phone;

         }

    
}
return cheapest;
}
console.log(cheapestPhone(phones));


//counting price with product quantity
var shoppingCart=[
   {name:'show',price:5643 , quantity:3},
   {name:'pant',price:564 , quantity:7},
   {name:'shirt',price:4364 , quantity:5},
   {name:'t-shirt',price:643, quantity:8}
];

   function priceTool(product){
       let sum=0;
      for(let i=0;i<product.length;i++){
         let count = product[i];
        let totalCount=count.price*count.quantity;
          sum=sum+totalCount;
          console.log(sum);
       }
       return sum;
   }
   let sow=priceTool(shoppingCart);
   console.log('total price: ', sow);
  
/*
1.if ticket numbe ris less than 100,per ticekt price:100
2.if ticekt number is more than 100,but less than 200,firse 100 tickets will be 100 taka,rest tickets will 90 taka per piece
3.if you purchase more than 200 tickets 
first 100-->100
101-200-->90
200+-->70taka
*/

//

const name5='dkfh;';
let heisAmazing=true;
let number5=66;
console.log(name5,number5,heisAmazing);






   
   
   


