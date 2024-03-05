//[M1S05] Ex 3 - Iteração Básica

const numeros = [1, 3, 5, 7, 9];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//DESAFIO

const prompt = require('prompt-sync')();
let numeros = [];

for(let i=0; i<5; i++) {
    let numero = parseInt(prompt(`Digite o ${i+1}º número: `));

    if (!Number.isInteger(numero) || numero < 1 || numero > 9) {
        console.log("Número inválido! Por favor digite apenas valores entre 1 e 9.");
        i--;
        continue;
    } else {
        numeros.push(numero);
    }
}

console.log("\nOs números digitados são:\n");
numeros.forEach((numero) => {
    console.log(numero);
});