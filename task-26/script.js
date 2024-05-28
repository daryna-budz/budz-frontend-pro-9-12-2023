class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
  }
  
  class Car {
    constructor(brand, model, year, licensePlate) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.licensePlate = licensePlate;
      this.owner = null;
    }
  
    assignOwner(person) {
      if (person.age > 18) {
        this.owner = person;
      } else {
        console.log("Вік власника повинен бути більше 18 років");
      }
    }
  
    displayInfo() {
      console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік випуску: ${this.year}, Номерний знак: ${this.licensePlate}`);
      if (this.owner) {
        this.owner.displayInfo();
      } else {
        console.log("Цей автомобіль не має власника");
      }
    }
  }
  

  const person1 = new Person("Ann", 25);
  const person2 = new Person("Alex", 17);
  const person3 = new Person("John", 30);
  

  const car1 = new Car("Toyota", "Corolla", 2020, "AB1234CD");
  const car2 = new Car("Honda", "Civic", 2019, "EF5678GH");
  const car3 = new Car("Ford", "Focus", 2018, "IJ9101KL");
  
  

car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3); 

console.log("Інформація про car1:");
car1.displayInfo();

console.log("Інформація про car2:");
car2.displayInfo();

console.log("Інформація про car3:");
car3.displayInfo();



  