class Person {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
}
  
class Apartment {
    constructor() {
      this.residents = [];
    }
    addResident(person) {
      this.residents.push(person);
    }
}
  
class Building{
    constructor(maxApartments) {
      this.apartments = [];
      this.maxApartments = maxApartments;
    }
  
    addApartment(apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
      } else {
        console.log("Cannot add more apartments, maximum limit reached");
      }
    }
}
  
  const person1 = new Person("Sasha", "male");
  const person2 = new Person("Ira", "female");
  const person3 = new Person("Victor", "male");
  const person4 = new Person("Stepan", "male");
  
  const apartment1 = new Apartment();
  const apartment2 = new Apartment();
  const apartment3 = new Apartment();
  const apartment4 = new Apartment();
  
  apartment1.addResident(person1);
  apartment2.addResident(person2);
  apartment3.addResident(person3);
  apartment4.addResident(person4);
  
  const house = new Building(4);
  
  house.addApartment(apartment1);
  house.addApartment(apartment2);
  house.addApartment(apartment3);
  house.addApartment(apartment4);
  
  const apartment5 = new Apartment();
  house.addApartment(apartment5); 
  
  console.log(house);
  