const personas = [
    { nombre: 'Juan', sexo: 'hombre', edad: 25 },
    { nombre: 'María', sexo: 'mujer', edad: 30 },
    { nombre: 'Pedro', sexo: 'hombre', edad: 20 },
    { nombre: 'Ana', sexo: 'mujer', edad: 35 },
    { nombre: 'Luis', sexo: 'hombre', edad: 18 },
    { nombre: 'Lucía', sexo: 'mujer', edad: 40 },
  ];

// Función para obtener el promedio de edad
function obtenerPromedioEdad(personas) {
    const edades = personas.map(persona => persona.edad);
    return edades.reduce((acumulador, edad) => acumulador + edad) / edades.length;
  }
  
  console.log(`El promedio de edad es ${obtenerPromedioEdad(personas)}`);
  
  // Función para obtener el nombre de la mujer con mayor edad
  function obtenerMujerMayor(personas) {
    const mujerMayor = personas
      .filter(persona => persona.sexo === 'mujer')
      .reduce((mayor, persona) => (mayor.edad > persona.edad ? mayor : persona));
    return mujerMayor.nombre;
  }
  
  console.log(`La mujer con mayor edad es ${obtenerMujerMayor(personas)}`);
  
  // Función para obtener el nombre del hombre con menor edad
  function obtenerHombreMenor(personas) {
    const hombreMenor = personas
      .filter(persona => persona.sexo === 'hombre')
      .reduce((menor, persona) => (menor.edad < persona.edad ? menor : persona));
    return hombreMenor.nombre;
  }
  
  console.log(`El hombre con menor edad es ${obtenerHombreMenor(personas)}`);
  
  // Función para obtener el promedio de edad de las mujeres
  function obtenerPromedioEdadMujeres(personas) {
    const mujeres = personas.filter(persona => persona.sexo === 'mujer');
    const edadesMujeres = mujeres.map(mujer => mujer.edad);
    return edadesMujeres.reduce((acumulador, edad) => acumulador + edad) / edadesMujeres.length;
  }
  
  console.log(`El promedio de edad de las mujeres es ${obtenerPromedioEdadMujeres(personas)}`);
  
  // Función para obtener el promedio de edad de los hombres
  function obtenerPromedioEdadHombres(personas) {
    const hombres = personas.filter(persona => persona.sexo === 'hombre');
    const edadesHombres = hombres.map(hombre => hombre.edad);
    return edadesHombres.reduce((acumulador, edad) => acumulador + edad) / edadesHombres.length;
  }
  
  console.log(`El promedio de edad de los hombres es ${obtenerPromedioEdadHombres(personas)}`);