// obtener la suma entre los elementos de un array
const array = [5, 10, 15, 20, 25];
let suma = 0;

for (let i = 0; i < array.length; i++) {
  suma += array[i];
}

console.log("La suma de los elementos del array es: " + suma);