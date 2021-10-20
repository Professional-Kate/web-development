// A project for testing and getting better at using getters, setters and classes!

class PersonDatabase {
  // everything after the second argument is passed into an array, easier to manage
  constructor(name, age, ...likes) {
    this.name = name;
    this.age = age;
    this.likes = likes;
  }
  // getter
  get personsName() {
    return this.name;
  }
  // setter
  set personsName(updatedName) {
    this.name = updatedName;
    console.log(`This persons new name is "${this.name}"`);
  }
}

// makes an object called "PersonDatabase" with key:value pairs equal to these arguments
const kate = new PersonDatabase("Kote", 21, "Coding", "Music", "JavaScript");

console.log(kate); // prints the whole object
console.log(kate.personsName); // uses the getter to get the persons name
kate.personsName = "Kate"; // uses the setter to change the persons name
console.log(kate.personsName); // uses the getter to get the persons name

// getters and setters can change object values even when the object is readonly. It can pull values where you might not be able to with . or [] notation
