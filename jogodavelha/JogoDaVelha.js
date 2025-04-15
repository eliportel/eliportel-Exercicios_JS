/* Crie uma função que analise uma matriz 3x3 composta por "X" e "O" e retorne o seguinte:

"X" se as "X" ganharam
"O" se os "O" ganharam
"Empate" se houve um empate
"Nulo" se a proporção de "X", de "O", ou da matriz não for correta. Ou se ambos ganharem.
Observação: A matriz pode não estar totalmente coberta. Pode-se representar com um vazio "", por exemplo.
*/

// Função para verificar o vencedor da matriz
function verificarMatriz(matriz) {
    // Verificar se a matriz tem 3x3 e contém apenas "X", "O" ou ""
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] !== "X" && matriz[i][j] !== "O" && matriz[i][j] !== "") {
                return "Nulo";  // Se a célula tiver valor inválido
            }
        }
    }

    // Função para verificar se existe uma linha, coluna ou diagonal ganhadora
    function verificarVitoria(simbolo) {
        // Verificando linhas
        for (let i = 0; i < 3; i++) {
            if (matriz[i][0] === simbolo && matriz[i][1] === simbolo && matriz[i][2] === simbolo) {
                return true;
            }
        }

        // Verificando colunas
        for (let j = 0; j < 3; j++) {
            if (matriz[0][j] === simbolo && matriz[1][j] === simbolo && matriz[2][j] === simbolo) {
                return true;
            }
        }

        // Verificando diagonais
        if (matriz[0][0] === simbolo && matriz[1][1] === simbolo && matriz[2][2] === simbolo) {
            return true;
        }

        if (matriz[0][2] === simbolo && matriz[1][1] === simbolo && matriz[2][0] === simbolo) {
            return true;
        }

        return false;
    }

    // Verificando se "X" ou "O" ganhou
    const ganhouX = verificarVitoria("X");
    const ganhouO = verificarVitoria("O");

    if (ganhouX && ganhouO) {
        return "Nulo";  // Se ambos ganharam
    }

    if (ganhouX) {
        return "X";  // Se "X" ganhou
    }

    if (ganhouO) {
        return "O";  // Se "O" ganhou
    }

    // Verificando se a matriz está completa ou se é um empate
    let totalX = 0;
    let totalO = 0;
    let totalVazio = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] === "X") {
                totalX++;
            } else if (matriz[i][j] === "O") {
                totalO++;
            } else if (matriz[i][j] === "") {
                totalVazio++;
            }
        }
    }

    // Verificando se a proporção de "X" e "O" é válida (não deve haver mais de um a mais que o outro)
    if (totalX < totalO || totalX > totalO + 1) {
        return "Nulo";  // A quantidade de "X" ou "O" não é válida
    }

    // Se a matriz não tem células vazias e ninguém ganhou, é um empate
    if (totalVazio === 0) {
        return "Empate";
    }

    // Se ainda há células vazias e ninguém ganhou, o jogo está em andamento
    return "Nulo";
}

// Exemplo de uso da função:
const matrizExemplo = [
    ["O", "O", "O"],
    ["X", "X", "O"],
    ["O", "X", ""]
];

console.log(verificarMatriz(matrizExemplo)); // Deve retornar o vencedor ou o estado do jogo