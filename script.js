//console.log("canan");
//console.log(3+6);
//Control flow , use conditional statement for checking conditions

//FOR LOOP

// let sum=0;
//  for(let i=0; i<5; i++){
//      if(i%2==0){
//         sum=sum+i; 
//      }
//  }
//  console.log(sum);

//  let product=1;
//  for(let i=1; i<=6; i++){
    
//          product=product*i;
     
//  }
//  console.log(product);
 

// const names=['canan','ayse', 'fatma'];
// let i=0;
// while(i<names.length){
// let html=`<div>${names[i]}</div>`;
//  console.log(html);
//  i++;
// }

// let i=0;
// do{

    
// console.log(i);
// i++;
    
// }while(i<5);

// const age=35;

// if(age>34){
//     console.log('age is less than 34');
// }
// const names=['canan','ayse', 'fatma'];
// if(names.length>2){
//     console.log("our data is full");
// }
//LOGICAL OPRERATORS OR ||     AND &&
// const password='888888p@ss';
// if(password.length>=12 && password.includes('@')){
//    console.log("password is super strong and includes @ symbol") 
// }
// else if(password.length>8 || password.includes('@')){

//     console.log("password is strong enough");
// }else{
//     console.log("password is not  long enough");

// }


//LOGICAL NOT

// let user=false;
// if(!user){

//   console.log("user is wrong as usual"); 
// }

// const scores=[50,25,0,30,100,20,10];

// for(let i=0; i<scores.length; i++){

//     if(scores[i]<30){
//         continue;
//    }

//    console.log(`your scores is ${scores[i]}`)

// //     console.log(`your scores is ${scores[i]}`);
// //   if(scores[i]===100){
// //     console.log(`your scores is ${scores[i]}`);
// // console.log("congrats , you have reached the highest score");
// // break;
// //   }
 
// }

// const grade='D';

// switch(grade){
// case 'A':
//     console.log('you got A');
//     break;
//  case 'B':
//         console.log('you got B');
//         break;
//  case 'C':
//   console.log('you got C');
//   break;
//  case 'D':
//  console.log('you got D');
//  break;
//  default:
//      console.log('not a valid data');

// }


//VARIABLES AND BLOC SCOPE
// let age=30;// global scope

// if(true){

//    let age =40;// inside code bolck
//    let name='canan';
//     console.log(age,name);

// }

// console.log(age,name);

//FUNCTION DECLARATION
// function greet(){
// console.log("hello there");

// }
//FUNCTION EXPRESSION
// const speak=function(name, time){

// console.log(`have a good ${time} ${name}`);

// };
// //greet();

// speak('mario', 'morning');

// const calcArea=function(radius){
//  return    3.14*radius**2;
// };

// const a=calcArea(9);
// console.log(a);

//ARROW FUNCTION

// const calcArea=(radius)=>3.14*radius**2 ;

// const a=calcArea(4);
//  console.log(a);

//second example
// const greet=(name)=>`hello ${name}`;

// console.log(greet("canan"));

// const bill=(products, tax)=>{
//     let total=0;
//     for(let i=0; i<products.length; i++){
//         total=total+products[i]+products[i]*tax;
//     }

//     return total;
// }

// console.log(bill([10,15,30], 0.2));

//METHODS

// function->  const greet=()=>'hello';

//CALLBACKS FUNCTION

//let people=['canan', 'yusuf', 'ayse'];

// const logPerson=(person, index)=>{

//   console.log(`${index} hello ${person}`)

// }
// // people.forEach((person, index)=>{

// //     console.log(person, index);





// // });

// people.forEach(logPerson);


// const ul=document.querySelector('.people');
// let people=['canan', 'yusuf', 'ayse'];

// let html=``;
// people.forEach(person=>{
    
//   html+=`<li style="color:purple">${person}</li>`;
     
// });

// ul.innerHTML=html;

//OBJECTS LITERALS



// let user={
// name:'canan',
// age:35,
// email:'canan.ozdemir@gmail.com',
// location:'london',
// blogs:[
//     {
//         title:'i like cheese', likes:30},
//     {
//         title:'best foodie person', likes:50
//     }

// ],
// login:function(){
//     console.log('user loged in');
// },

// logout:function(){
//     console.log('user logged out')
// },

// logBlogs(){
//     console.log('this user has written folowing blogs:');
//    this.blogs.forEach((blog)=>{
  
//      console.log(blog.title, blog.likes) ;
//    }
//    )

// }};


// user.logBlogs();

// Math Object
// console.log(Math);
// console.log(Math.PI);
// const num=7.7;
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// random number
// const num=Math.random()*100;
// console.log(Math.round(num));


//PRIMITIVE TYPES
/*numbers, strings, booleans, null, undefined ,symbols */
//primitive values
// let scoreOne=50;
// let scoreTwo=scoreOne;
// console.log(`scoreOne:${scoreOne}`, `scoreTwo:${scoreTwo}`);
// scoreOne=58;
// console.log(`scoreOne:${scoreOne}`, `scoreTwo:${scoreTwo}`);

//REFERENCES TYPES
/*all type of objects, object literals, arrays, functions, dates, all other objects */

// const userOne={
//     name:'canan',
//     age:30
// };

// const userTwo=userOne;

// console.log(userOne,userTwo);
// userOne.age=40;
// console.log(userOne,userTwo);

// const para=document.querySelector('div.error');
// console.log(para);

// const paras=document.querySelectorAll('p');
// paras.forEach(para=>{
//    console.log(para)  

// });



//title.innerText='ninjas are awesome';
// const paras=document.querySelectorAll('p');
// paras.forEach(para=>{
//     console.log(para.innerText);
//     para.innerText+=' new text';

// });

// const para=document.querySelector('div.error');
// const people=['canan', 'ayse', 'ali']

// people.forEach(person=>{
//    para.innerHTML +=`<p>${person}</p>`;

// });

// const link=document.querySelector('a');

// link.setAttribute('href', 'https://netninja.dev/courses/enrolled/1355332');
// link.innerText='The net ninja website';

// const msg=document.querySelector('p');
// msg.setAttribute('class','success');
// msg.setAttribute('style', 'color:green');

// const title=document.querySelector('h1');

//title.setAttribute('style', '')
// console.log(title.style.color='red');
// title.style.margin='90px';
// title.style.fontSize='3rem';
// title.style.border='2px solid';
// title.style.textAlign='center';

// const paras=document.querySelectorAll('p');

// paras.forEach(para=>{

//     if(para.textContent.includes('error')){
//          para.classList.add('error'); 
//         }
//     if(para.textContent.includes('success'))
//     para.classList.add('success');

// })

// console.log(` I  am Canan`);

// const country='USA';
// const continent='North America';
// console.log(`'${country}' is in the ${continent}`)

// const str='canan ozdemir';
// console.log(str.slice(2,4));
// console.log(str.substring(2,4));
// console.log(str.substr(2,4))
// console.log(str.length);
// console.log(str.replace('a', 'e'));
// console.log(str.split('a'))
// console.log(str.split(' '));
// console.log(str.charAt(2));


// const article=document.querySelector('article');
// console.log(article.children);

// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child=>{
//   child.classList.add('article-element')

// });

// const title=document.querySelector('h2');

// console.log(title.parentElement.parentElement);

// const str=prompt('Please enter your name:');

// str.slice(0,1).toUpperCase();
// str.slice(1).toLowerCase();

// console.log(str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase());


// let length=prompt('Please enter length:');
// let area=length*length;
// console.log(area);






// let length1=prompt('Please enter first length:');
// let length2=prompt('Please enter second length:');
// let perimeter= 2*length1+ 2*length2;
// console.log(perimeter);

// let r=prompt('Please enter the radius:');

// let areaOfCircle=3.14*r**2;
//  console.log(areaOfCircle);


//  let a=prompt('Please enter first length:');
// let b=prompt('Please enter second length:');

// let hipo=a**2+b**2;

// console.log(hipo);



//Create a prompt : “Write your tweet” —-> use prompt. Type random text and calculate the number of sent character and the remaining character.Note  Max character is 280.

// let tweet=prompt("please write your tweet:")

// let text=tweet.length;
// console.log(text);

// let year=prompt("please enter a year?");

//  let yeapYear=(year%100==0)?(year%400==0 ? "leap year" : "not a leap year")   : (year%4==0 ? "leap year"  : "not a leap year") ;

//  console.log(yeapYear);
// Get 2 names from user and store variables:name1, name2. 
// Create a variable loveScore and store the random number. 
// loveScore should be a random whole number between 1-100(inclusive) percent. 
// Calculate the chance of a successful relationship. The closer to 100% the stronger
// Task 1: Print ‘name1 and name2 ’s love score is loveScore’
// Task 2: Print ‘You love each other’ if loveScore is greater or equal to 80 %. 
// Print ‘Not a strong relationship’ otherwise
// Task 3: Print ‘You love each other’ if loveScore is greater or equal to 80 %.
// Print ‘Modorate relationship’  if loveScore is between is in between 50% and 80%
// Print ‘Not a strong relationship’ otherwise
// https://www.lovecalculator.com/


//  let name1=prompt("Please enter a name:");
//  let name2=prompt("Please enre another name:");

// let loveScore= Math.floor(Math.random()*100+1);
// console.log(loveScore);

// console.log(`${name1} and ${name2} 's love score is ${loveScore}`);

// //let result=(loveScore>=80)? 'You love each other': 'Not a strong relationship'


// let result=(loveScore>=80 )? 'You love each other': ((loveScore>=50 && loveScore<80 )?'Modorate relationship'  : 'Not a strong relationship');

// console.log(result);


// const bill=(products, tax)=>{
//     let total=0;
//     for(let i=0; i<products.length; i++){
//         total=total+products[i]+products[i]*tax;
//     }

//     return total;
// }

// console.log(bill([10,15,30], 0.2));

// const persinInfo=(firstName,lastName,age,isOld)=>{

// console.log(`${firstName} ${lastName} is ${age} old and ${isOld}`);
 


// };

// persinInfo("canan","ozdemir", 35, true);


// const sum=(num1, num2)=>{
 
// console.log(num1+num2);
// };

// sum(4,5);


// const square=(num)=>{

// console.log(num*num);
// };

// square(9);


// let random=Math.floor(Math.random()*100+1)

// console.log(random);

// const num=(a=1,b=3,c=4)=>{
//     console.log(a+b+c);
// };

// //num(3,4,5);
// num(3,4);
// num();

// const sum=(a,b,c)=>{
//   return a+b+c;
// };


// console.log(sum(2,4,5));

//OBJECT IN JAVASCRIPT

//three reference data types
//functions
//objects
//Array


// const fname='canan';
// const lname='ozdemir';
// let age=40;

// const person={
//      fName:'canan',
//      lName:'Ozdemir',
//      age:40

// };

// person.age=34;
// console.log(person);
// console.log(typeof(person));
// console.log(person.age);

const animal={
species:'dog',
gender:'male',
age:4

};

animal.age=5;
animal.species='cat';

console.log(animal);





















































