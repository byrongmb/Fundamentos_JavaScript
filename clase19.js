var gregorio = {
    nombre: 'Gregorio',
    apellido: 'Vides',
    altura: 1.86
  }
  
  var marc = {
    nombre: 'Marc',
    apellido: 'Pellus',
    altura: 1.50
  }
  
  var boga = {
    nombre: 'Ricardo',
    apellido: 'Diaz Gonzalez',
    altura: 1.82
  }
  var personas = [gregorio, marc, boga];
  
  var personasCms = personas.map(persona => ({  
      ...persona,
      altura: persona.altura * 100
    })
  );
  
  console.log(personasCms);
  console.log(personas);