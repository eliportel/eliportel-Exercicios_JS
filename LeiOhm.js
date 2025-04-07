// Crie uma função que calcule o valor do parâmetro perdido
// correspondente à Lei de Ohm.
// - Enviaremos para a função 2 dos 3 parâmetros (V, R, I), e ela retornará
//   o valor do terceiro (arredondado para 2 casas decimais).
// - Se os parâmetros forem incorretos ou insuficientes, a função retornará
//   a string "Valores inválidos".
// Função para calcular o parâmetro perdido com base na Lei de Ohm

function calcularParametroPerdido(voltagem, resistencia, corrente) {
    // Verifica se os parâmetros fornecidos são números válidos
    if (typeof voltagem === 'number' && typeof resistencia === 'number' && corrente === undefined) {
        let correnteCalculada = voltagem / resistencia;
        return correnteCalculada.toFixed(2); // Arredonda para 2 casas decimais
    } else if (typeof voltagem === 'number' && typeof corrente === 'number' && resistencia === undefined) {
        let resistenciaCalculada = voltagem / corrente;
        return resistenciaCalculada.toFixed(2); // Arredonda para 2 casas decimais
    } else if (typeof resistencia === 'number' && typeof corrente === 'number' && voltagem === undefined) {
        let voltagemCalculada = resistencia * corrente;
        return voltagemCalculada.toFixed(2); // Arredonda para 2 casas decimais
    } else {
        // Retorna mensagem de erro se os parâmetros forem insuficientes ou inválidos
        return "Valores inválidos";
    }
}

// Exemplos de uso:
console.log(calcularParametroPerdido(12, 4, undefined)); // Calcula a corrente (I) -> Saída: "3.00"
console.log(calcularParametroPerdido(12, undefined, 3)); // Calcula a resistência (R) -> Saída: "4.00"
console.log(calcularParametroPerdido(undefined, 4, 3));  // Calcula a voltagem (V) -> Saída: "12.00"
console.log(calcularParametroPerdido(12, undefined, undefined)); // Saída: "Valores inválidos"