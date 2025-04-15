
/*
 * Crie um programa que seja capaz de transformar texto natural em código
 * morse e vice-versa.
 * - Deve detectar automaticamente o tipo de entrada e realizar
 *   a conversão.
 * - Em morse, utiliza-se a "raya" (—), ponto (.), espaço " " entre letras
 *   ou símbolos e dois espaços entre palavras " ".
 * - O alfabeto morse suportado será o mostrado em
 *   https://es.wikipedia.org/wiki/Código_morse.
 */



// Mapeamento do alfabeto Morse

const readline = require('readline');

const alfabetoMorse = {
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
    "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
    "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
    "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
    "y": "-.--", "z": "--..",
    "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
    ",": "--..--", ".": ".-.-.-", "?": "..--..", "'": ".----.", "/": "-..-.",
    "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...", ";": "-.-.-.",
    "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-", "\"": ".-..-.",
    "$": "...-..-", "@": ".--.-.", " ": "/"
};

// Função para converter texto para código Morse
function textoParaMorse(texto) {
    return texto.toLowerCase().split('').map(char => alfabetoMorse[char] || '').join(' ');
}

// Função para converter código Morse para texto
function morseParaTexto(morse) {
    const invertidoMorse = Object.fromEntries(Object.entries(alfabetoMorse).map(([key, value]) => [value, key]));
    return morse.split('   ').map(palavra => palavra.split(' ').map(simbolo => invertidoMorse[simbolo] || '').join('')).join(' ');
}

// Função para detectar o tipo de entrada e converter automaticamente
function converterTextoOuMorse(entrada) {
    // Se a entrada contém algum ponto ou traço, pode ser morse
    if (entrada.includes('.') || entrada.includes('-')) {
        return morseParaTexto(entrada);
    } else {
        return textoParaMorse(entrada);
    }
}

// Cria a interface readline para capturar a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita ao usuário para digitar uma palavra ou frase
rl.question("Digite uma palavra ou frase em texto natural ou código Morse: ", function(entradaUsuario) {
    // Chama a função para converter automaticamente o texto ou Morse
    let resultado = converterTextoOuMorse(entradaUsuario);

    // Exibe o resultado no console
    console.log("Resultado da conversão: ", resultado);

    // Fecha a interface readline após a entrada
    rl.close();
});

