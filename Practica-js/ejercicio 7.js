// - Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
let num1=0
let num2=100
if (num1 <= num2) {
    for (let i = num1; i <= num2; i++) {
      if (i % 3 === 0) {
        console.log(i);
      }
    }
  } else {
    for (let i = num2; i <= num1; i++) {
      if (i % 3 === 0) {
        console.log(i);
      }
    }
  }