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
// exercicio 1 crie um codigo que tenha uma variavel chamada nota e a nota for maior ou igual a 7 mostre aprovado se for menor mostre reprovado

let nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

//exercicio 2 Crie um código que tenha uma variável chamada: numero

let numero5 = 56;

if (numero5 > 0) {
  console.log("O número é positivo");
} else if (numero5 === 0) {
  console.log("O número é zero");
} else {
  console.log("O número é negativo");
}
//exercicio 3 crie um programa com uma variável chamada:nota o programa deve verificar nota maior ou igual 9 mostrar exelente, nota maior ou igual a 7 mostrar bom, nota maior ou igual a 5 mostrar recuperação e nota menor que 5 mostrar reprovado
let nota3 = 6;

if (nota3 >= 9) {
  console.log("Excelente"); // false
} else if (nota3 >= 7) {
  // false
  console.log("Bom");
} else if (nota3 >= 5) {
  // true
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
//atividede de operadores logicos
//Crie uma variável:idade 25se idade for maior ou igual a 18 E menor ou igual a 30 mostrar "Jovem" senão mostrar "Fora do intervalo"
let idade1 = 25;

if (idade1 >= 18 && idade1 <= 30) {
  console.log("Jovem");
} else {
  console.log("Fora do intervalo");
}
//Crie uma variável:idade 15 se idade for menor que 18 || maior que 60 mostrar "Não pode trabalhar" senão mostrar "pode trabalhar"
let idade2 = 15;

if (idade2 < 18 || idade2 > 60) {
  console.log("Não pode trabalhar");
} else {
  console.log("pode trabalhar");
}
//Crie uma variável:temCarteira se ! temCarteira for igual a false mostrar "Não pode dirigir" senão mostrar "pode dirigir"
const temCarteira = false;

if (!temCarteira) {
  console.log("Não pode dirigir");
} else {
  console.log("pode dirigir");
}

//Etapa 3 for loop
// Exercio1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//exercio2
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
//exercio3 com nomes e numeros de impa par

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0){
    console.log(i);
    
  } else {
    console.log("impar:");
  }
}
//exercio so com os nomes de impar  par
for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log("PAR");
    } else {
        console.log("ÍMPAR");
    }
}let passos = 0;

for(let passos = 0; passos <= 5; passos++){
  console.log('passos dados: ' + passos);
  passos++;  
}
//repitição com whaile
let i = 1;

while (i < 10){
    console.log("Executando")
    i++
}
let alex = 10

while (alex < 15){
    console.log("Nome " + "alex");
    
    alex++
}
// mostre de 1 a 10 com while pares → mostrar o número ímpares → mostrar "ÍMPAR"
let numero6 = 1;

while (numero6 <= 10){
  if (numero6 % 2 !== 0) {
    console.log("ÍMPAR");
  } else {
    console.log(numero6);
  }
  numero6++;
}
// mostre de 1 a 20 com while múltiplo de 3 → mostrar "Múltiplo de 3" caso contrário mostrar o número
let contador = 1;

while (contador <= 20){
    if (contador % 3 === 0){
        console.log("Múltiplo de 3");
    } else {
        console.log(contador);
    }
    contador++;
}
// mostre de 1 a 20 com while múltiplo de 3 → mostrar "M3" caso contrário mostrar o número
let i1 = 1;

while (i1 <= 20){
    if (i1 % 3 === 2){
        console.log("M3");
    } else {
        console.log(i1);
    }
    i1++;
}

let contador2 = 1;

while (contador2 <= 12) {
    if (contador2 % 2 === 0){
        console.log("PAR");
    } else {
        console.log(contador2);
    }
    contador2++;
}