// Parent constructor with common properties
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the parent prototype
  Person.prototype.introduce = function() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  };
  
  // Child constructor with constructor stealing
  function Employee(name, age, position) {
    Person.call(this, name, age); // Inherit properties
    this.position = position; // Additional property for Employee
  }
  
  // Set up prototype inheritance without redundant constructor calls
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee; // Set correct constructor reference
  
  // Adding an additional method to the child prototype
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.position}.`);
  };
  
  // Create an instance of Employee and test the behavior
  const john = new Employee("John", 30, "Software Engineer");
  
  john.introduce(); // Output: Hello, I'm John and I'm 30 years old.
  john.work(); // Output: John is working as a Software Engineer.
  