let numero1 = 5;
let numero2 = 10;
let soma = numero1 + numero2;

console.log(soma);

let numero = 4;
let dobro = numero * 2;
let triplo = numero * 3;

console.log("dobro =", dobro, "triplo =", triplo);

//Exercício 3 — Média simples crie três variáveis com números Calcule a média desses três números Mostre o resultado no console

let num1 = 8;
let num2 = 1;
let num3 = 1;

let media = (num1 + num2 + num3) / 3;

console.log("A média é:", media);

//Exercicio 4- crie uma variavel com numero e use o operador % para descobrir o resto da divisão desse numero por 2. Mostre o resultado no console
let numero3 = 9;
let resto = numero3 % 2;

if (resto === 0) {
  console.log("o resto da divisão de" + numero3 + "por 2 é:" + resto);
} else {
  console.log("o numero" + numero3 + "é impar");
}
//Eexercicio 5 Crie uma variável com o ano de nascimento. Calcule a idade da pessoa com base no ano atual (2026) e mostre o resultado no console.
let anoNacimento = 1990;
let anoAtual = 2026;

let idade = anoAtual - anoNacimento;

console.log("A idade de Alex é:" + idade);

//etapa2
// crie um codigo que tenha uma variavel chamada nota e a nota for maior ou igual a 7 mostre aprovado se for menor mostre reprovado

let nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
