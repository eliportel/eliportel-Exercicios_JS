/*
 * Crie uma única função (importante que seja apenas uma) que seja capaz
 * de calcular e retornar a área de um polígono.
 * - A função receberá por parâmetro apenas UM polígono por vez.
 * - Os polígonos suportados serão Triângulo, Quadrado e Retângulo.
 * - Imprima o cálculo da área de um polígono de cada tipo.
 */

 // Função para calcular a área de um polígono
 function calcularArea(poligono, ...parametros) {
    let area;

    // Verifica o tipo de polígono e realiza o cálculo conforme necessário
    if (poligono === "triangulo") {
        // Triângulo: área = (base * altura) / 2
        let [base, altura] = parametros;
        area = (base * altura) / 2;
    } else if (poligono === "cuadrado") {
        // Quadrado: área = lado * lado
        let [lado] = parametros;
        area = lado * lado;
    } else if (poligono === "rectangulo") {
        // Retângulo: área = base * altura
        let [base, altura] = parametros;
        area = base * altura;
    } else {
        return "Polígono não suportado";
    }

    return area;
}

// Cálculo da área de um triângulo com base 5 e altura 10
let areaTriangulo = calcularArea("triangulo", 5, 10);
console.log("Área do Triângulo:", areaTriangulo);

// Cálculo da área de um quadrado com lado 4
let areaQuadrado = calcularArea("cuadrado", 4);
console.log("Área do Quadrado:", areaQuadrado);

// Cálculo da área de um retângulo com base 6 e altura 8
let areaRetangulo = calcularArea("rectangulo", 6, 8);
console.log("Área do Retângulo:", areaRetangulo);