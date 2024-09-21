function Person(name, age) {
    let _name = name;
    let _age = age;
  
    this.getName = function() {
      return _name;
    };
  
    this.getAge = function() {
      return _age;
    };
   this.introduce = function() {
      console.log(`Hello, my name is ${this.getName()} and I am ${this.getAge()} years old.`);
    };
    Object.freeze(this);
   
   
  }
  
  const john = new Person("John", 25);
  
  john.introduce(); // "Hello, my name is John and I am 25 years old."
  john.name="Nithi";
  john.age=23;
  john.introduce();
