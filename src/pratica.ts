// Gerador de Números

const numero = ():number => Math.floor(Math.random() * 101);

// Função de Multiplicação

function multiplicar(valorA: number, valorB: number) :number {
    console.log(`Multiplicando ${valorA} * ${valorB}`);
    return valorA * valorB;
}

// Função de Saudação

function saudar(nome: string): string {
    return `Olá, ${nome}!`;
}

// Executando o Código

console.log(multiplicar(numero(), numero()));
console.log(saudar('Paulo'));