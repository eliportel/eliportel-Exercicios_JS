/*
 * Crie uma função que some 2 números e retorne o seu resultado depois
 * de alguns segundos.
 * - Receberá por parâmetros os 2 números a somar e os segundos que
 *   deve demorar para finalizar sua execução.
 * - Se a linguagem suportar, deve retornar o resultado de forma
 *   assíncrona, ou seja, sem parar a execução do programa principal.
 *   Isso pode ser executado várias vezes ao mesmo tempo.
 */




// Função que soma dois números e retorna o resultado depois de um tempo
function somarComDelay(numero1, numero2, segundos) {
    // Retorna uma Promise para que a execução seja assíncrona
    return new Promise((resolver) => {
      // Usamos setTimeout para simular a espera de 'segundos' antes de somar
      setTimeout(() => {
        // Realiza a soma dos dois números
        const resultado = numero1 + numero2;
        
        // Retorna o resultado da soma após o tempo
        resolver(resultado);
      }, segundos * 1000); // Converte os segundos para milissegundos
    });
  }
  
  // Exemplo de uso da função com 2 números e 3 segundos de delay
  somarComDelay(5, 7, 3).then((resultado) => {
    // Imprime o resultado no console depois de 3 segundos
    console.log('Resultado da soma:', resultado); // Resultado será 12
  });
  
  // Outro exemplo com diferentes números e 2 segundos de delay
  somarComDelay(10, 15, 2).then((resultado) => {
    console.log('Resultado da soma:', resultado); // Resultado será 25
  });
  