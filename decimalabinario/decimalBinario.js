const readline = require('readline');

// Criando a interface para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para converter um número decimal para binário
function decimalParaBinario(numeroDecimal) {
    // Variável para armazenar o número binário
    let binario = '';

    // Enquanto o número decimal for maior que zero
    while (numeroDecimal > 0) {
        // Obter o resto da divisão do número por 2
        let resto = numeroDecimal % 2;

        // Concatenar o resto à variável binário (formando o número binário de trás para frente)
        binario = resto + binario;

        // Dividir o número decimal por 2 para a próxima iteração
        numeroDecimal = Math.floor(numeroDecimal / 2);
    }

    // Se o número for 0, retornar "0" como o valor binário
    return binario === '' ? '0' : binario;
}

// Solicita ao usuário para digitar um número decimal
rl.question("Digite um número decimal: ", function(numeroDecimal) {
    // Converte o número de string para inteiro
    numeroDecimal = parseInt(numeroDecimal);

    // Verifica se a entrada é um número válido
    if (isNaN(numeroDecimal)) {
        console.log("Por favor, digite um número válido.");
    } else {
        // Chama a função para converter o número decimal para binário
        let resultadoBinario = decimalParaBinario(numeroDecimal);

        // Exibe o número binário no console
        console.log("Número binário: " + resultadoBinario);
    }

    // Fecha a interface readline
    rl.close();
});
