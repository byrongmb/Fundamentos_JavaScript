var fran = {
    nombre: 'Francisco',
    apellido: 'Garcia',
    edad: 52,
    peso: 73,
    altura: 1.69
};

var juanda = {
    nombre: 'Juan David',
    apellido: 'Garcia',
    edad: 18,
    peso: 74,
    altura: 1.71
};

var paola = {
    nombre: 'Paola',
    apellido: 'Beatacur',
    edad: 40,
    peso: 60,
    altura: 1.60
};

var liz = {
    nombre: 'Liz',
    apellido: 'Luna',
    edad: 46,
    peso: 60,
    altura: 1.71
};

var marce = {
    nombre: 'Marcela',
    apellido: 'Orjuela Possu',
    edad: 28,
    peso: 68,
    altura: 1.73
};

var cristian = {
    nombre: 'Cristian',
    apellido: 'Delaoz',
    edad: 32,
    peso: 75,
    altura: 1.70
}

var personas = [fran, juanda, paola, liz, marce, cristian]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} metros`);
}
