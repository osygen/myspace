var a=4564646888;
console.log(a);

////////////////////

function Person(firstName,lastName){
    this.firstName = firstName,
    this.lastName = lastName
};

Person.prototype.fullName=function(firstName,lastName){
   return `your fullname is ${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
};
let person1 = new Person("oduwole","samuel");
console.log(person1 instanceof Person,);
console.log(person1)
console.log(person1.fullName())
console.log("------------------")
////////////////////
for (let keys in person1) {
    if (person1.hasOwnProperty(keys)){
    console.log(`{${keys}: ${person1[keys]}}`);
    }
}
console.log(`-------------------`)
let person2= {
    firstName: "gideon",
    lastName: "Obj"
}
console.log(person1.fullName.bind(person2)());


var arr = new Array();
arr.push(`hhghgghgh`, `jfjfdjfd`);
console.log(arr,`the length for array of ${arr} is ${arr.length}`);


