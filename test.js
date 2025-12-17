// let employees = [
//     {name:'hein htet ko',age:26},
//     {name:'raymond',age:26,gender:'m'},
//     {name:'reyna',age:26,gender:'f'}
// ]

// employees = employees.map((person)=>{
//     switch (person.gender){
//         case "m" :
//             person.gender = 'male'
//             break
//         case "f" :
//             person.gender = 'female'
//             break
//         default :
//             person.gender = "unknown"
//     }
//     return person
// })
// console.log(employees)

// class Person{
//     Name = ''
//     Food = ''
//     constructor(name,food){
//         this.Name = name
//         this.Food = food
//         this.eat()
//     }
//     eat(){
//         console.log(`${this.Name} is eating ${this.Food}.`)
//         this.dinner()
//     }
//     dinner(){
//         console.log(`${this.Food} is made by me.`)
//     }
// }

// new Person('hein htet ko','sandwiches')

// function number(num,modifier){
//     let result = modifier(num) * 2
//     console.log(result)
// }

// number(5,function(num){
//     return num + 6
// })

// function sayMyName(name,fun){
//     console.log(`${fun(name)} is my name.`)
// }

// sayMyName('hein htet ko',function(name){
//     return name
// })

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers = numbers.map((numbers)=>{
//     return numbers + 2
// })

// console.log(numbers)

// let names =['hein','htet','ko']

// names =names.map((names)=>{
//     return ('Mr '+names)
// })

// console.log(names)

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers = numbers.filter((num)=>{
//     return num % 2 === 0
// })

// console.log(numbers)

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// numbers = numbers.reduce((num1,num2)=>{
//     return num1 + num2
// })

// console.log(numbers)

//asynchronous
//promise method

// function asynchronous() {
//     return new Promise((resolve, reject) => {
//         let result = 0
//         for (let u = 0; u < 1000000000; u++) {
//             result += u
//         }
//         if(result){
//             resolve(result)
//         }else{
//             reject('i have some error.')
//         }
//     })
// }

// console.log('hi test1.')
// asynchronous()
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })
// console.log('hi test2.')

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

// function asynchronous(){
//     return new Promise((resolve,reject)=>{
//         let result = 0
//         for (let y = 0; y < 1000000000; y++) {
//             result += y
//         }
//         if(result){
//             resolve(result)
//         }else{
//             reject('hello i got some error.')
//         }
//     })
// }

// console.log('hello test1.')
// asynchronous()
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })
// console.log('hello test2.')

// function asynchronous(){
//     let result = 0
//     return new Promise((resolve,reject)=>{
//        for (let y = 0; y < 1000000000; y++) {
//             result += y
//         }
//         if(result){
//             resolve(result)
//         }else{
//             reject('i got error')
//         }
//     })
// }

// console.log('hello1')
// asynchronous()
// .them((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

//fetch api
// let userid = prompt('what is ur id?')
// fetch('https://jsonplaceholder.typicode.com/todos/' +userid)
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// async function fetchToDos() {
//   try {
//     let promise = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let datas = await promise.json();
//     console.log(datas);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchToDos();
