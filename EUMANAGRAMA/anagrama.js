const readline = require('readline');

// Criando a interface para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que verifica se duas palavras são anagramas
function Anagrama(palavra1, palavra2) {
    if (palavra1.length !== palavra2.length) {
        return false; // Se não tiverem o mesmo comprimento, não são anagramas
    }

    // Transformar as palavras em arrays de caracteres, ordenar e juntar de volta em uma string
    let palavra1Ordenada = palavra1.split('').sort().join('');
    let palavra2Ordenada = palavra2.split('').sort().join('');

    return palavra1Ordenada === palavra2Ordenada; // Retorna true ou false
}

// Solicita ao usuário para digitar duas palavras
rl.question('Digite a primeira palavra: ', function(palavra1) {
    rl.question('Digite a segunda palavra: ', function(palavra2) {
        // Verificar se são anagramas e exibir o resultado
        let resultado = Anagrama(palavra1, palavra2);
        console.log(resultado); // Exibe 'true' ou 'false' no console

        // Fecha a interface readline
        rl.close();
    });
});

  