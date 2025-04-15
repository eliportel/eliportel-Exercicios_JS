const readline = require('readline');

// Criando uma interface para ler a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function binarioParaDecimal(binario) {
    let decimal = 0;
    
    // Percorrer cada dígito binário (de trás para frente)
    for (let i = 0; i < binario.length; i++) {
        // Verifica se o caractere é 1 ou 0
        if (binario[binario.length - 1 - i] === '1') {
            // Soma o valor correspondente à posição (2^i)
            decimal += Math.pow(2, i);
        }
    }
    return decimal;
}

// Função para verificar se a entrada é um número binário válido
function validarBinario(binario) {
    // Verifica se a entrada contém apenas '0' ou '1'
    const regex = /^[01]+$/;
    return regex.test(binario);
}

// Solicita ao usuário que insira um número binário
rl.question("Digite o número binário: ", function(numeroBinario) {
    // Verifica se o número binário é válido
    if (validarBinario(numeroBinario)) {
        // Converte o número binário para decimal e exibe o resultado
        const resultadoDecimal = binarioParaDecimal(numeroBinario);
        console.log(`O número binário ${numeroBinario} é igual a ${resultadoDecimal} em decimal.`);
    } else {
        console.log("Erro: O valor digitado não é um número binário válido.");
    }
    rl.close();  // Fecha a interface de leitura
});
