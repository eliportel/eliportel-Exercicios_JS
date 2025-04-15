/*
 * Crie um programa que verifique se os parênteses, chaves e colchetes
 * de uma expressão estão equilibrados.
 * - Equilibrado significa que esses delimitadores se abrem e fecham
 *   na ordem correta e de forma apropriada.
 * - Parênteses, chaves e colchetes têm a mesma prioridade.
 *   Nenhum é mais importante que o outro.
 * - Expressão balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expressão não balanceada: { a * ( c + d ) ] - 5 }
 */
// Função para verificar se os parênteses, chaves e colchetes estão equilibrados
function estaEquilibrado(expressao) {
    // Pilha para armazenar os delimitadores abertos
    let pilha = [];

    // Mapeamento dos delimitadores de fechamento para abertura
    const mapaDelimitadores = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Itera sobre cada caractere da expressão
    for (let i = 0; i < expressao.length; i++) {
        let caractere = expressao[i];

        // Se for um delimitador de abertura, empilha-o
        if (caractere === '(' || caractere === '{' || caractere === '[') {
            pilha.push(caractere);
        }
        // Se for um delimitador de fechamento
        else if (caractere === ')' || caractere === '}' || caractere === ']') {
            // Se a pilha estiver vazia ou o topo da pilha não for o correspondente de abertura, está desequilibrado
            if (pilha.length === 0 || pilha.pop() !== mapaDelimitadores[caractere]) {
                return false;
            }
        }
    }

    // Se a pilha estiver vazia no final, os delimitadores estão equilibrados
    return pilha.length === 0;
}

// Testando com exemplos
let expressaoBalanceada = "{ [ a * ( c + d ) ] - 5 }";
let expressaoNaoBalanceada = "{ a * ( c + d ) ] - 5 ";

console.log("Expressão balanceada:", estaEquilibrado(expressaoBalanceada)); // Deve retornar true
console.log("Expressão não balanceada:", estaEquilibrado(expressaoNaoBalanceada)); // Deve retornar false