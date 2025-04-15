/*
 * Escreva um programa que verifique se um número é ou não primo.
 * Feito isso, imprima os números primos entre 1 e 100.
 */

 // Função para verificar se um número é primo
 function ePrimo(numero) {
    // Números menores que 2 não são primos
    if (numero <= 1) {
        return false;
    }

    // Verifica se o número tem algum divisor além de 1 e ele mesmo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Se encontrar um divisor, não é primo
        }
    }

    return true; // Se não encontrar divisores, o número é primo
}

// Função para imprimir os números primos entre 1 e 100
function imprimirPrimos() {
    for (let i = 1; i <= 100; i++) {
        if (ePrimo(i)) {
            console.log(i); // Imprime o número se for primo
        }
    }
}

// Chama a função para imprimir os números primos entre 1 e 100
imprimirPrimos();
