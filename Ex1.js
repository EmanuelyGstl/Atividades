//[M1S05] Ex 1 - Acesso simples

const prompt = require('prompt-sync')();
let frutas = ["limão", "maracujá", "acerola"];

for (let i = 0; i < 3; i++) {
    frutas.push(prompt(`Digite a ${i + 1}ª fruta: `));
}

console.log(frutas[1]);











