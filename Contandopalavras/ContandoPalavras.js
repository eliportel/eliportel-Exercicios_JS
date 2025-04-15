const readline = require('readline');

// Criando a interface para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para contar a frequência das palavras
function contarPalavras(frase) {
    // Remover sinais de pontuação e transformar tudo em minúsculas
    let fraseLimpa = frase.replace(/[^\w\s]/g, '').toLowerCase();

    // Quebrar a frase em palavras
    let palavras = fraseLimpa.split(/\s+/);

    // Objeto para armazenar o número de repetições de cada palavra
    let contador = {};

    // Percorre as palavras e conta as repetições
    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];
        
        // Se a palavra já existe no contador, incrementa a contagem
        if (contador[palavra]) {
            contador[palavra]++;
        } else {
            // Se a palavra não existe no contador, a inicializa com 1
            contador[palavra] = 1;
        }
    }

    // Retorna o objeto contador com as frequências das palavras
    return contador;
}

// Solicita ao usuário para digitar uma frase
rl.question("Digite uma frase para contar as palavras: ", function(fraseUsuario) {
    // Chama a função para contar as palavras
    let resultado = contarPalavras(fraseUsuario);

    // Exibe o resultado no console
    console.log("Contagem de palavras:");
    for (let palavra in resultado) {
        console.log(palavra + ": " + resultado[palavra]);
    }

    // Fecha a interface readline
    rl.close();
});
