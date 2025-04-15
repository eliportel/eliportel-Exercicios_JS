// Módulo readline do Node.js para ler entradas do usuário
const readline = require('readline');

// Função para gerar uma senha aleatória
function gerarSenha(tamanho, usarMaiusculas, usarNumeros, usarSimbolos) {
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()-_=+[{]}|;:,.<>?';
  
    // Variável que vai armazenar os caracteres possíveis para a senha
    let caracteresPermitidos = letrasMinusculas;
  
    // Adiciona as letras maiúsculas, se o parâmetro for true
    if (usarMaiusculas) {
      caracteresPermitidos += letrasMaiusculas;
    }
  
    // Adiciona os números, se o parâmetro for true
    if (usarNumeros) {
      caracteresPermitidos += numeros;
    }
  
    // Adiciona os símbolos, se o parâmetro for true
    if (usarSimbolos) {
      caracteresPermitidos += simbolos;
    }
  
    // Gerar a senha aleatória
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      senha += caracteresPermitidos[indiceAleatorio];
    }
  
    return senha;
}

// Cria a interface de leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para solicitar os parâmetros do usuário e gerar a senha
function solicitarParametrosEGerarSenha() {
    rl.question('Digite o tamanho da senha (entre 8 e 16): ', (tamanho) => {
        tamanho = parseInt(tamanho, 10);
        
        if (tamanho < 8 || tamanho > 16 || isNaN(tamanho)) {
            console.log('Tamanho da senha inválido. O tamanho deve estar entre 8 e 16.');
            rl.close();
            return;
        }

        rl.question('Você deseja incluir letras maiúsculas? (sim/não): ', (respostaMaiusculas) => {
            const usarMaiusculas = respostaMaiusculas.toLowerCase() === 'sim';

            rl.question('Você deseja incluir números? (sim/não): ', (respostaNumeros) => {
                const usarNumeros = respostaNumeros.toLowerCase() === 'sim';

                rl.question('Você deseja incluir símbolos? (sim/não): ', (respostaSimbolos) => {
                    const usarSimbolos = respostaSimbolos.toLowerCase() === 'sim';

                    const senhaGerada = gerarSenha(tamanho, usarMaiusculas, usarNumeros, usarSimbolos);
                    console.log('Senha gerada: ' + senhaGerada);

                    rl.close();
                });
            });
        });
    });
}

// Chama a função para gerar a senha
solicitarParametrosEGerarSenha();
