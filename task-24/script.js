class Hamburger{
    static SIZE_SMALL = {price: 50,calories: 20};
    static SIZE_LARGE = {price:100,calories:40};

    static STUFFING_CHEESE = {price: 10,calories:20};
    static STUFFING_SALAD = {price: 20,calories:5};
    static STUFFING_POTATO = {price: 15,calories:10};

    static TOPPING_SAUCE = {price: 15,calories: 0};
    static TOPPING_MAYO = {price:20,calories:5};

    constructor(size,stuffing){
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping){
        this.toppings.push(topping);
    }

    calcPrice(){
        let totPrice = this.size.price + this.stuffing.price;
        this.toppings.forEach(topping =>{
            totPrice +=topping.price;
        });
        return totPrice;
    }


    calcCalories(){
        let totCalories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(topping =>{
            totCalories +=topping.calories;
        });
        return totCalories;
    }

}

// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calcCalories());

// скільки коштує
console.log("Price: " + hamburger.calcPrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calcPrice());
