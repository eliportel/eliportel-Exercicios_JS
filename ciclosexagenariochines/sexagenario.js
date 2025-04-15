 /*
 * Crie uma função que, dado um ano, indique o elemento 
 * e o animal correspondente no ciclo sexagenário do zodíaco chinês.
 * - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - O ciclo sexagenário corresponde à combinação dos elementos
 *   madeira, fogo, terra, metal, água e os animais rato, boi, tigre,
 *   coelho, dragão, serpente, cavalo, ovelha, macaco, galo, cachorro, porco
 *   (nesta ordem).
 * - Cada elemento se repete por dois anos seguidos.
 * - O último ciclo sexagenário começou em 1984 (Madeira Rato).
 */

   // Importa o pacote prompt-sync para capturar a entrada do usuário
// Importa o módulo readline do Node.js
function cicloSexagenario(ano) {
    // Lista dos elementos (cada um se repete 2 vezes)
    const elementos = ['Madera', 'Fogo', 'Terra', 'Metal', 'Água'];
  
    // Lista dos animais (12 animais no ciclo)
    const animais = [
      'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 
      'Caballo', 'Oveja', 'Mono', 'Gallo', 'Perro', 'Cerdo'
    ];
  
    // O ano base é 1984, quando começou o ciclo com "Madera Rata"
    const anoBase = 1984;
  
    // Calcula o número de anos passados desde o ano base
    const anosPassados = ano - anoBase;
  
    // Encontramos o índice do elemento e do animal no ciclo
    const indiceElemento = Math.floor(anosPassados / 2) % 5; // Elementos se repetem a cada 2 anos
    const indiceAnimal = anosPassados % 12; // Animais se repetem a cada 12 anos
  
    // Obtém o elemento e o animal para o ano
    const elemento = elementos[indiceElemento];
    const animal = animais[indiceAnimal];
  
    // Retorna a combinação de elemento e animal
    return `${elemento} ${animal}`;
  }
  
  // Exemplo de uso
  let ano = prompt("Digite o ano:");
  console.log(cicloSexagenario(ano)); // Resultado esperado para 2025
  