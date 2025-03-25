//the file will have inconsistent quotes, object key spacing, and no-trailing commas.
const person = { name:"John", age:30, city :"New York" };
console.log("name",person.name);
console.log("age",person.age);
console.log("city",person.city);

function getPersonInfo (){
  return  person;
}

console.log( getPersonInfo() );
