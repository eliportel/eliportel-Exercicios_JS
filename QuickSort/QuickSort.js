/*
 * Implementa um dos algoritmos de ordenação mais famosos:
 * o "Quick Sort", criado por C.A.R. Hoare.
 * - Entender o funcionamento dos algoritmos mais utilizados da história
 *   nos ajuda a melhorar nosso conhecimento sobre engenharia de software.
 *   Dedique tempo para entendê-lo, não apenas para copiar sua implementação.
 * - Esta é uma nova série de desafios chamada "TOP ALGORITMOS",
 *   onde trabalharemos e entenderemos os mais famosos da história.
 */
// Função para realizar a troca de dois elementos no array
function trocar(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Função que realiza a partição do array
  function particionar(arr, baixo, alto) {
    // Escolher o último elemento como pivô
    let pivô = arr[alto];
    let i = (baixo - 1); // Índice do menor elemento
  
    // Organizar os elementos ao redor do pivô
    for (let j = baixo; j < alto; j++) {
      if (arr[j] <= pivô) {
        i++;
        trocar(arr, i, j);
      }
    }
  
    // Colocar o pivô no lugar correto
    trocar(arr, i + 1, alto);
    return i + 1; // Retorna o índice do pivô
  }
  
  // Função Recursiva do Quick Sort
  function quickSort(arr, baixo, alto) {
    if (baixo < alto) {
      // Índice do pivô
      let pi = particionar(arr, baixo, alto);
  
      // Ordenar a sublista à esquerda e à direita do pivô
      quickSort(arr, baixo, pi - 1);
      quickSort(arr, pi + 1, alto);
    }
  }
  
  // Função para chamar o Quick Sort de forma simples
  function ordenar(arr) {
    quickSort(arr, 0, arr.length - 1);
    return arr;
  }
  
  // Testando a função Quick Sort
  let arr = [10, 7, 8, 9, 1, 5];
  console.log("Array original:", arr);
  let arrOrdenado = ordenar(arr);
  console.log("Array ordenado:", arrOrdenado);
  