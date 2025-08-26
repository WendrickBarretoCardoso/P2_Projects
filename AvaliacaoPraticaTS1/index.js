"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = require("readline-sync");
var nome = input.question('Digite o nome: ');
var idade;
idade = parseInt(input.question('Digite a idade: '));
console.log('Olá mundo de DEVs!!!');
console.log('O nome digitado foi: ' + nome);
console.log('A idade digitada foi: ' + idade);
