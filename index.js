// let greet = "hello world";
// console.log(greet);

// let myName = "hein htet ko";
// console.log(myName);

// let sayHi = `hi there ${myName}`;

// //let sayHi = "hi there " +myName;
// console.log(sayHi);

// //boolean datatype(true and false)
// // falsy values
// // 1. 0
// // 2. ""
// // 3. null
// // 4. undefined
// // 5. Nan
// // 6. false

// let myVar = false;
// console.log(myVar);

// let myNam = 1;
// console.log(Boolean(myNam));

// //undefined
// let x; //undefined
// console.log(Boolean(x));
// //null
// let y=null;
// console.log(Boolean(y));
// //NaN (Not a Number)
// let num1;
// let num2 = 2;
// console.log(Boolean(num1+num2));

// function shopping(product){
//     console.log(`go to shop`);
//     console.log(`buy a ${product}`);
//     console.log(`return home`);
// }

// shopping("vegetables")

// function calculateAge(year){
//     return (2025-year);
// }

// let age = calculateAge(1999);
// console.log(`Your age is ${age}`);

//callback function

// function sayMyName(name,fun){
//     let result = fun("hein htet ko");
//     console.log(result);
// }

// sayMyName("Hein Htet Ko",function(name){
//     return name
// })

// function twice(num,modifier){
//     let result = modifier(num)*2;
//     console.log(result);
// }

// twice(5,function(num){
//     return num+6;
// })

//arrow function

// let sayHi = ()=>{
//     console.log("say HI");
// }
// sayHi();

// let gg = num=> num*2
// console.log(gg(3));

//spread operator(...)

// function result(a,b){
//     console.log(a+b);
// }

// let num = [1,2];
// result(...num);

// destructing

// let datas=[1,2,3];
// let [a,b,c]=datas;
// console.log([a,b,c]);

// let animals = ['cat','dog','bird'];
// let index = animals.indexOf('cat')
// console.log(animals);
// console.log(index);

// let a = animals.join('  ');
// console.log(a)

//animals.splice(0,2);  //0အခန်းထဲကနေစရေတဲ့၂နေရာထိဖျက် 0=အခန်း 2=နေရာ
//console.log(animals);

// Array Methods

// map()method
// example-1
// let nums = [4,53,23,42,1];

// let newArr = nums.map(num=>(num+1)); //refactoring code ကုဒ်တေကိုလျှော့ချတာ ရှင်းအောင်လို့

// console.log(newArr);

// //example2 (map()method)
// let names = ['hein','htet','ko'];

// let map =names.map((srname=>{
//     return ("Mr "+srname);
// }))
// console.log(map);

// //filter method
// // example
// let numbers = [1,2,3,4,5,6,7,8];

// let filteredNumbers = numbers.filter((num)=>{
//     // return num%2 === 0;
//     return num!= 8 && num!= 5
// })
// console.log(filteredNumbers);

// reduce method
// example
// let numbers = [1,2,3,4,5,6];
// let reduce = numbers.reduce((prev,current)=>{
//     return prev+current;
// })
// console.log(reduce);

// class Person{
//     eat() {
//     console.log("eating")
// }}
// // person.eat();

// let mgmg = new Person()
// mgmg.eat();

// //arrow function
// let ages = [12,18,22,14,30];
// let newArr = ages.filter((num)=>{
//     return num >=18
// })
// console.log(newArr)

// //this keyword အသုံးပြုပုံ
// let person = {
//     name:"hein",
//     Eat(){
//         console.log(this.name +" is eating");
//     }
// }
// person.name="hein";
// person.Eat();

// class person{
//     name;

//     eat(){
//         console.log(this.name + " is eating now");
//     }
// }

// let mgmg = new person();
// mgmg.name = "Mg Mg";
// mgmg.eat();

// //အရေးကြီး filter method ကိုသုံးပြီးတော့ search bar မှာသူံးနည်း
// let person=[
//     {name:'hein htet ko',age:26,gender:'male'},
//     {name:'nyan lin htet',age:27,gender:'male'},
//     {name:'panny',age:22,gender:'female'},
// ]

// let searchName = prompt('search person:')
// let newArr =person.filter((event)=>{
//     return event.name.includes(searchName);
// })

// console.log(newArr)

// //JSON ''
// //string,number,boolean,array,object,null တေမှာပဲသုံးလို့ရ
// //json string to object
// let person ='{"name":"hein htet ko","age":20,"gender":"male"}';

// let obj = JSON.parse(person);
// console.log(obj);

// //object to json string
// let people = {
//     name:"hein htet ko",
//     age:27
// }

// let gg = JSON.stringify(people);
// console.log(gg);

// let person = '{"name":"hein htet ko","age":"27"}';
// let obj = JSON.parse(person)
// console.log(obj.name)

// let person2 ={
//     name:"hein ko",
//     age:27
// }

// let jsonString = JSON.stringify(person2)
// console.log(jsonString)

// function abc(){
//     console.log(abc.xyz)
// }

// abc()
// abc.xyz = 400
// abc.xyz = 200
// abc()

// const numbers = [1,2,3,4]
// numbers[100] = 600
// console.log(numbers)

// console.log(typeof typeof 100)

// let name = [...'hein']
// console.log(name)

// //callback function
// function callBackFunction(num,fun){
//     // console.log(fun(num))
//     console.log(fun(num) * 2)
// }

// callBackFunction(5,function(num){
//     return num + 6
// })

// function callBackFunction(num,modifier){
//     console.log(modifier(num) * 2);
// };

// callBackFunction(5, function(num){
//     return num + 2;
// });

//if/else function
// let tired = prompt('are you tired? "yes/no" : ""')
// if(tired === "yes"){
//     console.log("rest well")
// }
// else if(tired === "no"){
//     console.log("go back to work")
// }
// else{
//     alert("Plz enter only yes or no")
// }

//map method
// let nums = [1,2,3,4]

// let result = nums.map((nums)=>{
//     return nums + 10
// })

// console.log(result)

// if else examples

// let clothingPrices = [100,200,300,499,500,100,100,200,100]

// let discountPrices = clothingPrices.map((price)=>{
//     if (price === 100){
//         price -= 30
//     }
//     return price
// })
// console.log(discountPrices).

// let people = [
//     { name: 'hein', age: 26 },
//     { name: 'john', age: 27, gender: 'm' },
//     { name: 'jinny', age: 28, gender: 'f' },
// ]

// let person = people.map((person) => {
//     if(person.gender === 'm'){
//         person.gender = 'male'
//     }
//     else if(person.gender === 'f'){
//         person.gender = 'female'
//     }
//     else {
//         person.gender = 'unknown'
//     }
//     return person
// })

// console.log(person)

// let customers = [
//     {name:'hein',age:27},
//     {name:'jinny',age:28,gender:'f'},
//     {name:'john',age:29,gender:'m'}
// ]

// let newCustomers = customers.map((person)=>{
//     if(person.gender === 'f'){
//         person.gender = 'female'
//     }
//     else if(person.gender === 'm'){
//         person.gender = 'male'
//     }
//     else{
//         person.gender = 'unknown'
//     }
//     return person
// })

// console.log(newCustomers)

//tenary operator
// let age = 18;
// let permission = age >= 18? "authorized" : "unauthorized";
// console.log(permission)

//switch statement
// switch(1){
//     case 1 :
//         console.log('number1')
//         break;
//     case 2 :
//         console.log('number2')
//         break;
// };

// let employees = [
//     {name:'hein',age:27},
//     {name:'steven',age:27,gender:'m'},
//     {name:'jimmy',age:29,gender:'f'}
// ]

// employees = employees.map((person)=>{
//         switch (person.gender){
//             case "m" :
//                 person.gender = "male"
//                 break
//             case "f" :
//                 person.gender = "female"
//                 break
//             default :
//                 person.gender = "unknown"
//         }
//         return person
// })

// console.log(employees)

//switch method
// let customers = [
//     {name:'ko sithu',age:'28'},
//     {name:'hein htet ko',age:'26',gender:'m'},
//     {name:'mama gyi',age:'27',gender:'f'},
// ]

// customers = customers.map((person)=>{
//     switch (person.gender){
//         case "m" :
//             person.gender = 'male'
//             break;
//         case "f" :
//             person.gender = 'female'
//             break;
//         default :
//             person.gender = 'gay'
//     }
//     return person
// })
// console.log(customers)

//while loop

// let y = 0
// while(y <= 10){
//     console.log('hi '+ y)
//     y++
// }

//while loop

// let people = ['hein htet ko','su su','sithu','pyae min khant','shine thiha ko','aung zaw ko','ni ni lwin','oo kyaing whart']

// let x = 0
// while(x<people.length){
//     console.log(people.length)
//     x++
// }

//do while loop

// let x = 0

// do{
//     console.log('hello world '+ x)
//     x++
// }while(x < 5)

//for loop

// for (let x = 0; x <= 5; x++) {
//     console.log('hi '+ x);
// }

// let people = ['hein htet ko','su su','sithu','pyae min khant','shine thiha ko','aung zaw ko','ni ni lwin','oo kyaing whart','wine lay','phyo thuta','htun linn aung']

// for (let x = 0; x < people.length; x++) {
//     console.log(people[x]);
// }

//for of loop

// let people = ['hein htet ko','su su','sithu','pyae min khant','shine thiha ko','aung zaw ko','ni ni lwin','oo kyaing whart','wine lay','phyo thuta','htun linn aung']

// for(person of people){
//     console.log(person)
// }

//for in loop

// let person = {
//     name: 'hein htet ko',
//     age: 27
// }

// for ( key in person){
//     console.log(`${key} is ${person[key]}`)
// }

// let people = ['hein htet ko','su su','sithu','pyae min khant','shine thiha ko','aung zaw ko','ni ni lwin','oo kyaing whart','wine lay','phyo thuta','htun linn aung']

// for(key in people ){
//     console.log(key)
// }

//about class
// class Car{
//     name;
//     color;

//     drive(){
//         console.log(`${this.name} ${this.color} is driving`)
//     }
// }

// let car = new Car
// car.name = 'honda'
// car.color = 'black'
// car.drive();

// let carTwo = new Car
// carTwo.name = 'toyota'
// carTwo.color = 'black'
// carTwo.drive();

//oop example

// class Calculator{
//     static plus(n1,n2) {
//         return n1 + n2
//     }
// }

// console.log(Calculator.plus(1,2))

// console.log(Math.PI)

// class calculate{
//     y=3
//     plus(x){
//         return x+this.y
//     }
//     multiply(x,g){
//         return this.plus(x)*g
//     }
// }
// calcul = new calculate
// console.log(calcul.multiply(3,3))

// //this keyword

// class Calculator{
//     PI=3.14
//     area(r){
//         return this.PI*r**2
//     }
//     volume(r,h){
//         return this.PI*r**2*h
//     }
// }
// let calculator = new Calculator
// console.log(calculator.volume(1,2))

// class Car{
//     name = 'toyota'
//     static drive(){
//         let firstCar = new Car
//         console.log(`this ${firstCar.name} is driving.`)
//     }
// }
// Car.drive()

//constructor method

// class Car{
//     Name=''
//     constructor(name){
//         this.Name = name
//         this.drive()
//     }
//     drive(){
//         console.log(this.Name+' is driving.')
//     }
// }

// new Car('honda HR-V')

//public and private(private cannot access from outside of the scope)

// class Person{
//     Name = ''
//     #Age = ''
// }

// let person = new Person
// person.#age = '27'
// console.log(person.#age)

//inheritance method oop
// class Animal {
//     constructor(name) {
//         this.Name = name
//     }
//     run() {
//         console.log(`${this.Name} is running.`)
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.Name} is barking.`)
//     }
// }

// let dog = new Dog('husky')
// dog.run()
// dog.bark()

// function asynchronous() {
//     return new Promise((resolve, reject) => {
//         let result = 0
//         for (let i = 0; i < 10000; i++) {
//             result += i
//         }
//         if (result) {
//             resolve(result)
//         } else {
//             reject('i have some error.')
//         }
//     })
// }

// console.log('hello testing 1.')
// asynchronous()
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// console.log('hello this is testing 2.')

//fetch api
// let userid = prompt('what is ur id number?')
// fetch('https://jsonplaceholder.typicode.com/todos/'+userid)
// .then((response)=>{
//     return  response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// let userid = prompt('what is ur id?')
// fetch('https://jsonplaceholder.typicode.com/todos/' +userid)
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// async-wait
// let userid = prompt("what is ur id?");
// async function toDos() {
//   try {
//     let promise = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/" + userid
//     );
//     let datas = await promise.json();
//     console.log(datas);
//   } catch (error) {
//     console.log(error);
//   }
// }

// toDos();

// node-moudle-export-method
// const { PI, add, minus } = require("./math");

// let result = minus(1, 2);
// console.log(result);
