class SuperMath {
    check(obj) {
      const { X, Y, znak } = obj;
      const validSigns = ['+', '-', '/', '*', '%'];
      
      if (!validSigns.includes(znak)) {
        console.log("Некоректний знак математичної операції");
        return;
      }
  
      const confirmation = confirm(`Ви хочете зробити дію ${znak} з ${X} і ${Y}?`);
      if (confirmation) {
        this.calculate(X, Y, znak);
      } else {
        this.input();
      }
    }
  
    calculate(X, Y, znak) {
      let result;
      switch (znak) {
        case '+':
          result = X + Y;
          break;
        case '-':
          result = X - Y;
          break;
        case '/':
          result = X / Y;
          break;
        case '*':
          result = X * Y;
          break;
        case '%':
          result = X % Y;
          break;
        default:
          console.log("Некоректний знак математичної операції");
          return;
      }
      console.log(`Результат: ${X} ${znak} ${Y} = ${result}`);
    }
  
    input() {
      const X = parseFloat(prompt("Введіть значення X:"));
      const Y = parseFloat(prompt("Введіть значення Y:"));
      let znak = prompt("Введіть математичний знак (+, -, /, *, %):");
      
      const validSigns = ['+', '-', '/', '*', '%'];
      while (!validSigns.includes(znak)) {
        znak = prompt("Некоректний знак. Введіть один з наступних знаків (+, -, /, *, %):");
      }
  
      this.check({ X, Y, znak });
    }
  }
  

  const obj = { X: 15, Y: 5, znak: '/' };
  const p = new SuperMath();
  p.check(obj);
  