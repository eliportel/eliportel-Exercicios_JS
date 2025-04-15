/*
 * Crie uma função que avalie se um/a atleta superou corretamente uma
 * corrida de obstáculos.
 * - A função receberá dois parâmetros:
 *      - Um array que só pode conter Strings com as palavras
 *        "run" ou "jump"
 *      - Uma String que represente a pista e só pode conter "_" (solo)
 *        ou "|" (barreira)
 * - A função imprimirá como o atleta terminou a corrida:
 *      - Se o atleta fizer "run" em "_" (solo) e "jump" em "|" (barreira)
 *        estará correto e o símbolo dessa parte da pista não será alterado.
 *      - Se o atleta fizer "jump" em "_" (solo), o símbolo da pista será alterado para "x".
 *      - Se o atleta fizer "run" em "|" (barreira), o símbolo da pista será alterado para "/".
 * - A função retornará um Booleano que indicará se ele/a superou a corrida.
 * Para isso, o atleta precisa fazer a ação correta em cada trecho da pista.
 */


function avaliarCorrida(acoes, pista) {
    // Convertendo a pista em um array para poder manipulá-la
    let pistaArray = pista.split('');
    
    // Verificando cada trecho da pista
    for (let i = 0; i < acoes.length; i++) {
        let acao = acoes[i];
        let trecho = pistaArray[i];
        
        if (acao === "run") {
            // Se o atleta faz "run" no solo "_", está correto, não altera
            if (trecho === "_") {
                continue; // Passa para o próximo trecho sem mudar
            }
            // Se o atleta faz "run" na barreira "|", está incorreto, altera para "/"
            else if (trecho === "|") {
                pistaArray[i] = "/"; // Marca o erro com "/"
                return false; // Retorna falso imediatamente após o erro
            }
        } 
        else if (acao === "jump") {
            // Se o atleta faz "jump" no solo "_", está incorreto, altera para "x"
            if (trecho === "_") {
                pistaArray[i] = "x"; // Marca o erro com "x"
                return false; // Retorna falso imediatamente após o erro
            }
            // Se o atleta faz "jump" na barreira "|", está correto, não altera
            else if (trecho === "|") {
                continue; // Passa para o próximo trecho sem mudar
            }
        }
    }
    
    // Se a função chegar até aqui, significa que o atleta não cometeu erros
    return true;
}


// Testando a função com exemplos
let acoes1 = ["run", "jump", "run", "jump"];
let pista1 = "_|_|_|_|";
console.log(avaliarCorrida(acoes1, pista1)); // Deve retornar false

let acoes2 = ["run", "jump", "run", "jump"];
let pista2 = "_|_|_";
console.log(avaliarCorrida(acoes2, pista2)); // Deve retornar true
