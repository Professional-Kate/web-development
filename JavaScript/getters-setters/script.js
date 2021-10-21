// A project for testing and getting better at using getters, setters and classes!

class PersonDatabase {
  // everything after the second argument is passed into an array, easier to manage. A constructor is a blueprint for a new object
  constructor(name, age, ...likes) {
    this.name = name;
    this.age = age;
    this.likes = likes;
  }
  // getter, use this to retrieve a value. Get value
  get personsName() {
    return this.name;
  }
  // setter, use this to change a value based on a parameter. Change value
  set personsName(updatedName) {
    this.name = updatedName;
    console.log(`This persons new name is "${this.name}"`);
  }
}

// makes an object called "PersonDatabase" with key:value pairs equal to these arguments
const kate = new PersonDatabase("Iphone", 21, "Coding", "Music", "JavaScript");

console.log(kate); // prints the whole object
console.log(kate.personsName); // uses the getter to get the persons name
kate.personsName = "Kate"; // uses the setter to change the persons name
console.log(kate.personsName); // uses the getter to get the persons name

// getters and setters can change object values even when the object is readonly. It can pull values where you might not be able to with . or [] notation

// easy to make an array of objects using classes
const newArr = [
  new PersonDatabase("Kate", 21, "Coding", "Cooking", "Music"),
  new PersonDatabase("John", 25, "Coding", "Football"),
  new PersonDatabase("Peter", 30, "Coding"),
];

console.table(newArr);

// this is much faster than creating 3 object literals as all you need to do is pass in some arguments
