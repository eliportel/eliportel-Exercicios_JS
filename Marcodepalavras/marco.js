/*
 * Crie uma função que receba um texto e mostre cada palavra em uma linha,
 * formando uma moldura retangular de asteriscos.
 * - O resultado deve ser assim:
 *   **********
 *   * Qual   *
 *   * é      *
 *   * o      *
 *   * desafio*
 *   **********
 */

// Função que recebe um texto e exibe cada palavra em uma linha
// formando uma moldura retangular de asteriscos.
function molduraAsteriscos(texto) {
    // Dividir o texto em palavras
    const palavras = texto.split(' ');
  
    // Calcular o tamanho máximo da palavra
    const tamanhoMaximo = Math.max(...palavras.map(palavra => palavra.length));
  
    // Construir a linha superior e inferior (com o tamanho adequado)
    const linhaAsteriscos = '*'.repeat(tamanhoMaximo + 4); // +4 para os asteriscos e espaços ao redor
  
    // Exibir a linha superior
    console.log(linhaAsteriscos);
  
    // Exibir cada palavra dentro da moldura
    palavras.forEach(palavra => {
      // Adiciona espaços à direita da palavra para garantir que todas tenham o mesmo comprimento
      const espacosFaltando = tamanhoMaximo - palavra.length;
      console.log(`* ${palavra} ${' '.repeat(espacosFaltando)}*`);
    });
  
    // Exibir a linha inferior
    console.log(linhaAsteriscos);
  }
  
  // Exemplo de uso
  const texto = "Qual é o desafio";
  molduraAsteriscos(texto);