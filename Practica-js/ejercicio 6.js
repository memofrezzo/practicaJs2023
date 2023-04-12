// - Ingresar dos valores enteros y enumerar los elementos que los separan. 
// - Ejemplo 1: 2 y 6 --> 3 , 4, 5
// - Ejemplo 2: 10 y 5 --> 9, 8, 7, 6
let num1 = 1;
let num2 = 5;

if (num1 < num2) {
  for (let i = num1 +1; i < num2; i++) {
    console.log(i);
  }
} else {
        for (let i = num1 - 1; i > num2; i--) {
          console.log(i);
        }
      }