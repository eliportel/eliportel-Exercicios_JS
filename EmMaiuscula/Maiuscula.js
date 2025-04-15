/*
 * Crie uma função que receba uma string de qualquer tipo e se encarregue de
 * colocar em maiúscula a primeira letra de cada palavra.
 * - Não se podem utilizar operações do próprio idioma que
 *   resolvam isso diretamente.
 */



function capitalizarPrimeiraLetra(texto) {
    let resultado = ''; // Variável para armazenar o resultado final
    let palavraAtual = ''; // Variável para armazenar cada palavra enquanto percorremos o texto
    
    // Percorrendo cada caractere da string
    for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];
        
        // Verificando se o caractere é um espaço ou se é o final da string
        if (caractere === ' ' || i === texto.length - 1) {
            // Quando encontramos um espaço ou o fim da string, capitalizamos a palavra anterior
            if (palavraAtual) {
                resultado += palavraAtual.charAt(0).toUpperCase() + palavraAtual.slice(1).toLowerCase();
                palavraAtual = ''; // Resetamos a palavra
            }
            resultado += caractere; // Adicionamos o espaço ao resultado
        } else {
            palavraAtual += caractere; // Continuamos construindo a palavra
        }
    }

    // Caso o texto não termine com espaço, a última palavra precisa ser capitalizada
    if (palavraAtual) {
        resultado += palavraAtual.charAt(0).toUpperCase() + palavraAtual.slice(1).toLowerCase();
    }
    
    return resultado;
}

// Testando a função
let texto = "exemplo de texto";
console.log(capitalizarPrimeiraLetra(texto)); // Deve retornar "Esto Es Un Ejemplo De Texto"
