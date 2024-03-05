//[M1S05] Ex 4 - Soma de Elementos

const numeros = [1, 3, 5, 7, 9];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("A soma de todos os elementos do array é: " + soma);