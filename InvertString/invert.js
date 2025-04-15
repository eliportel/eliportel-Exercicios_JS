// Módulo readline do Node.js para ler entradas do usuário
const readline = require('readline');

// Função para inverter a string
function inverterString(texto) {
    // Inicializa uma variável para armazenar a string invertida
    let textoInvertido = '';

    // Loop que percorre a string original de trás para frente
    for (let i = texto.length - 1; i >= 0; i--) {
        // Adiciona o caractere da posição atual ao final de textoInvertido
        textoInvertido += texto[i];
    }

    // Retorna a string invertida
    return textoInvertido;
}

// Cria a interface de leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para solicitar o texto do usuário e inverter a string
function solicitarTextoEInverter() {
    rl.question('Digite uma palavra ou frase para inverter: ', (textoUsuario) => {
        // Chama a função passando o texto digitado pelo usuário
        let resultado = inverterString(textoUsuario);

        // Exibe o resultado no console
        console.log('Texto invertido: ' + resultado);

        // Fecha a interface de leitura
        rl.close();
    });
}

// Chama a função para solicitar o texto e inverter
solicitarTextoEInverter();
