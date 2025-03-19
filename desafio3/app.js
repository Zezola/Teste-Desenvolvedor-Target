/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
*/

const fs = require('fs').promises

// lista de objetos 
const faturamentos = []

// ler o json e preencher a lista
const lerJSON = async () => {
    try {
        // Ler o arquivo
        const json = await fs.readFile('dados.json', 'utf-8')
        const dados = JSON.parse(json)
        // Preencher a lista
        faturamentos.push(...dados)
        // Encontrar o maior faturamento e o menor faturamento
        const maiorFaturamento = faturamentos.reduce((max, faturamento) => {
            return faturamento.valor > max ? faturamento.valor : max
        }, 0) // Iniciamos o reduce com 0
        const menorFaturamento = faturamentos.reduce((min, faturamento) => {
            return faturamento.valor < min ? faturamento.valor : min
        }, Infinity) // Iniciamos o reduce com um valor muito alto
        // Exibir o maior e menor faturamentos
        console.log("Maior faturamento ocorrido em um dia = ", maiorFaturamento)
        console.log("Menor faturamento ocorrido em um dia = ", menorFaturamento)
        // Media mensal de faturamentos
        const somaFaturamento = faturamentos.reduce((soma, faturamento) => soma + faturamento.valor, 0)
        // Pegar os dias que tiveram faturamento, vamos tirar os dias com 0
        const diasComFaturamento = faturamentos.filter(faturamento => faturamento.valor > 0).length
        // Calcular a media mensal
        const mediaMensal = somaFaturamento / diasComFaturamento
        // Numero de dias com faturamento acima da media mensal
        const diasFaturamentAcimaMediaMensal = faturamentos.filter((faturamento) => faturamento.valor > mediaMensal).length
        // Exibir a mendia mensal e os dias com faturamento acima
        console.log("Media mensal = ", mediaMensal)
        console.log("Dias com faturamento acima da media mensal = ", diasFaturamentAcimaMediaMensal)
    } catch (err) {
        console.log("Erro ao ler arquivo ", err)
    }
}


lerJSON()