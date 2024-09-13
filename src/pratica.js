"use strict";
// Gerador de Números
const numero = () => Math.floor(Math.random() * 101);
// Função de Multiplicação
function multiplicar(valorA, valorB) {
    console.log(`Multiplicando ${valorA} * ${valorB}`);
    return valorA * valorB;
}
// Função de Saudação
function saudar(nome) {
    return `Olá, ${nome}!`;
}
// Executando o Código
console.log(multiplicar(numero(), numero()));
console.log(saudar('Paulo'));
