/*
 * Escreva um programa que imprima os 50 primeiros números da sequência
 * de Fibonacci começando do 0.
 * - A sequência de Fibonacci é composta por uma sucessão de números em
 *   que o próximo número é sempre a soma dos dois anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

// Vamos criar uma função para imprimir os 50 primeiros números da sequência de Fibonacci
function imprimirFibonacci() {
    // Definindo as variáveis para os dois primeiros números da sequência
    let numeroAnterior = 0; // O primeiro número da sequência (0)
    let numeroAtual = 1;    // O segundo número da sequência (1)
    
    // Vamos imprimir o primeiro número (0) diretamente
    console.log(numeroAnterior);
    
    // A partir do segundo número, vamos calcular e imprimir os próximos 49 números
    for (let i = 1; i < 50; i++) {
        console.log(numeroAtual); // Imprime o número atual da sequência
        
        // Calcula o próximo número da sequência
        let proximoNumero = numeroAnterior + numeroAtual;
        
        // Atualiza os números para o próximo ciclo
        numeroAnterior = numeroAtual;
        numeroAtual = proximoNumero;
    }
}

// Chamamos a função para imprimir os 50 primeiros números de Fibonacci
imprimirFibonacci();