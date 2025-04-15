

/*Escreva uma função que calcule se um número dado é um número de Armstrong
    * //(ou também chamado de número narcisista)*/
   
    

    function esNumeroDeArmstrong(numero) {
    // Converte o número para string para poder iterar sobre seus dígitos
    let numStr = numero.toString();
    let numDigitos = numStr.length;
    
    // Calcula a soma dos dígitos elevados à potência do número de dígitos
    let soma = 0;
    for (let i = 0; i < numDigitos; i++) {
        soma += Math.pow(parseInt(numStr[i]), numDigitos);
    }
    
    // Verifica se a soma é igual ao número original
    return soma === numero;
}

// Testando a função com alguns exemplos
let numero1 = 153; // Número de Armstrong
let numero2 = 123; // Não é número de Armstrong

console.log(numero1 + " é um número de Armstrong? " + esNumeroDeArmstrong(numero1)); // Deve retornar true
console.log(numero2 + " é um número de Armstrong? " + esNumeroDeArmstrong(numero2)); // Deve retornar false
