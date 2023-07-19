let prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um numero: "));

while (numero >= 0){
    console.log(numero);
    numero--;
}