// Parent constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.introduce = function() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  };
  
  // Child constructor stealing and setting prototype inheritance
  function Employee(name, age, position) {
    Person.call(this, name, age);
    this.position = position;
  }
  
  // Inherit prototype methods from Person
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  const john = new Employee("John", 30, "Software Engineer");
  
  john.introduce(); // Output: Hello, I'm John and I'm 30 years old.
  