function contarLetras(palabra) {
    let conteo = {};
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra[i];
      if (conteo[letra] === undefined) {
        conteo[letra] = 1;
      } else {
        conteo[letra]++;
      }
    }
    for (let letra in conteo) {
      console.log(letra + " = " + conteo[letra]);
    }
  }
  
  contarLetras("tomatito toma té"); 