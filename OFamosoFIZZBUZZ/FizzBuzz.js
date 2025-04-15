 /* Escreva um programa que mostre no console (com um print) os números de 1 a 100 (ambos inclusos e com uma quebra de linha entre cada impressão), substituindo os seguintes:

Múltiplos de 3 pela palavra "fizz".
Múltiplos de 5 pela palavra "buzz".
Múltiplos de 3 e 5 ao mesmo tempo pela palavra "fizzbuzz".
*/
    // Loop que vai de 1 até 100 (inclusive)
    for (let i = 1; i <= 100; i++) {

        // Verifica se o número é múltiplo de 3 e 5 ao mesmo tempo
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("fizzbuzz"); // Se for múltiplo de 3 e 5, imprime "fizzbuzz"
        }
        // Verifica se o número é múltiplo de 3
        else if (i % 3 === 0) {
          console.log("fizz"); // Se for múltiplo de 3, imprime "fizz"
        }
        // Verifica se o número é múltiplo de 5
        else if (i % 5 === 0) {
          console.log("buzz"); // Se for múltiplo de 5, imprime "buzz"
        }
        // Se o número não for múltiplo nem de 3 nem de 5, apenas imprime o número
        else {
          console.log(i); // Imprime o número
        }
        }