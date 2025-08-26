import * as input from 'readline-sync';

let nome = input.question('Digite o nome: ');
let idade:number;
idade = parseInt(input.question('Digite a idade: '));

console.log('Olá mundo de DEVs!!!');
console.log('O nome digitado foi: ' + nome);
console.log('A idade digitada foi: '+ idade);