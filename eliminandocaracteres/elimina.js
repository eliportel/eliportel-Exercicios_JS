/*
 * Crie uma função que receba duas cadeias de caracteres como parâmetros (str1, str2)
 * e imprima outras duas cadeias de caracteres como saída (out1, out2).
 * - out1 conterá todos os caracteres presentes na str1, mas NÃO
 *   estarão presentes na str2.
 * - out2 conterá todos os caracteres presentes na str2, mas NÃO
 *   estarão presentes na str1.
 */

function compararStrings(str1, str2) {
    // Inicializa as variáveis out1 e out2 como strings vazias
    let out1 = '';
    let out2 = '';

    // Itera sobre cada caractere de str1
    for (let i = 0; i < str1.length; i++) {
        // Se o caractere de str1 não estiver em str2, adiciona a out1
        if (!str2.includes(str1[i])) {
            out1 += str1[i];
        }
    }

    // Itera sobre cada caractere de str2
    for (let i = 0; i < str2.length; i++) {
        // Se o caractere de str2 não estiver em str1, adiciona a out2
        if (!str1.includes(str2[i])) {
            out2 += str2[i];
        }
    }

    // Imprime os resultados
    console.log("out1: " + out1);
    console.log("out2: " + out2);
}

// Testando com dois exemplos de strings
let str1 = "abcde";
let str2 = "acdfg";
compararStrings(str1, str2);