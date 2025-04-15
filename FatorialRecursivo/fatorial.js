/*
 * Escreva uma função que calcule e retorne o fatorial de um número dado
 * de forma recursiva.
 */
function fatorial(n) {
    // Caso base: o fatorial de 0 é 1
    if (n === 0) {
        return 1;
    }
    // Chamada recursiva
    return n * fatorial(n - 1);
}

// Testando a função
let numero = 5;
console.log("O fatorial de " + numero + " é: " + fatorial(numero)); // Deve retornar 120
