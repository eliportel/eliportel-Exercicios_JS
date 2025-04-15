 /*
 * Crie uma função que seja capaz de desenhar o "Triângulo de Pascal"
 * informando apenas o tamanho do lado.
 *
 * - Aqui você pode ver rapidamente como o triângulo é calculado:
 *   https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif
 */
// Função que gera o Triângulo de Pascal
function gerarTrianguloPascal(tamanho) {
    // Criamos um array para armazenar o triângulo
    let triangulo = [];

    // Laço para calcular cada linha do Triângulo de Pascal
    for (let linha = 0; linha < tamanho; linha++) {
        // Inicializa a linha atual com um array vazio
        let novaLinha = [];
        
        // Laço para calcular os valores de cada coluna da linha atual
        for (let coluna = 0; coluna <= linha; coluna++) {
            // Se estamos na borda do triângulo, o valor é sempre 1
            if (coluna === 0 || coluna === linha) {
                novaLinha.push(1);
            } else {
                // Caso contrário, o valor é a soma dos dois valores acima
                novaLinha.push(triangulo[linha - 1][coluna - 1] + triangulo[linha - 1][coluna]);
            }
        }

        // Adiciona a nova linha ao triângulo
        triangulo.push(novaLinha);
    }

    // Exibe o Triângulo de Pascal no console
    for (let i = 0; i < triangulo.length; i++) {
        console.log(triangulo[i].join(" "));  // Exibe cada linha
    }
}

// Chamada da função com o tamanho do triângulo desejado
gerarTrianguloPascal(5);  // Exemplo com tamanho 5
