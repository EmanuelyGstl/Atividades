//[M1S05] Ex 6 - Filtragem de Elementos

const numeros = [3, 1, 2, 4, 7, 5, 9];

const pares = numeros.filter(numero => numero % 2 === 0);

console.log("Array contendo apenas números pares: " + pares);