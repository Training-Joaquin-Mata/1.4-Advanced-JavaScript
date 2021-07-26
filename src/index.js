import '../assets/css/style.css';

// // Execution Contexts, Hoisting, Scopes, and Closures
// console.log('name: ', name)
// console.log('handle: ', handle)
// console.log('getUser :', getUser)

// var name = 'Tyler'
// var handle = '@tylermcginnis'

// function getUser () {
//   return {
//     name: name,
//     handle: handle
//   }
// }

// Understanding the this keyword, call, apply, and bind

//Implicit binding
var me={
  name: 'Joaquin',
  age:24, 
  sayName: function(){
    console.log(this.name);
  }
}

me.sayName();

//Explicit binding
var sayName = function(lang1, lang2, lang3){
  console.log('My name is:' + this.name + 'and I know'+'  ' +lang1+'  '+lang2+'  '+lang3)
}
var stacey ={
  name: 'Stacey',
  age: 34
};
var languages=['JavaScript','Ruby', 'Python']

sayName.call(stacey, languages[0], languages[1], languages[2]);
sayName.apply(stacey, languages);
var newFn=sayName.bind(stacey, languages[0], languages[1], languages[2]);

console.log(newFn);

//New binding
var Animal = function(color, name, type){
this.color = color;
this.name= name;
this.type= type;

};

var zebra = new Animal('black and white', 'zorro', 'zebra')
console.log(zebra);

//Window binding

var sayAge = function(){
  console.log(this.age)
};

window.age=30;
sayAge();

