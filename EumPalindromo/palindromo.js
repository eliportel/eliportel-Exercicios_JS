/*
 * Escreva uma função que receba um texto e retorne verdadeiro ou
 * falso (Boolean) dependendo de ser ou não um palíndromo.
 * Um Palíndromo é uma palavra ou expressão que é igual ao ser lida
 * de esquerda para direita e de direita para esquerda.
 * NÃO se levam em consideração os espaços, sinais de pontuação e acentos.
 * 
 */

function esPalindromo(texto) {
    // Remove espaços, pontuação e converte o texto para minúsculas
    let textoLimpo = texto.toLowerCase().replace(/[\W_áéíóúàèìòù]/g, '');

    // Inverte o texto limpo
    let textoInvertido = textoLimpo.split('').reverse().join('');

    // Compara o texto limpo com o texto invertido
    return textoLimpo === textoInvertido;
}

// Testando com um exemplo
let texto1 = "A torre da derrota";
let texto2 = "Ola mundo!";

console.log(esPalindromo(texto1)); // Deve retornar true
console.log(esPalindromo(texto2)); // Deve retornar false