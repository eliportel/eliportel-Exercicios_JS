/*Crie uma função que receba dias, horas, minutos e segundos (como inteiros) e retorne o resultado em milissegundos.*/
// Função para converter dias, horas, minutos e segundos em milissegundos




function converterEmMilissegundos(dias, horas, minutos, segundos) {
    // Definindo os valores em milissegundos
    const milissegundosPorDia = 24 * 60 * 60 * 1000; // 1 dia = 24 horas * 60 minutos * 60 segundos * 1000 milissegundos
    const milissegundosPorHora = 60 * 60 * 1000; // 1 hora = 60 minutos * 60 segundos * 1000 milissegundos
    const milissegundosPorMinuto = 60 * 1000; // 1 minuto = 60 segundos * 1000 milissegundos
    const milissegundosPorSegundo = 1000; // 1 segundo = 1000 milissegundos

    // Calculando o total em milissegundos
    const totalMilissegundos = (dias * milissegundosPorDia) + 
                               (horas * milissegundosPorHora) + 
                               (minutos * milissegundosPorMinuto) + 
                               (segundos * milissegundosPorSegundo);

    return totalMilissegundos;
}

// Exemplo de uso da função:
const dias = 1;       // 1 dia
const horas = 2;      // 2 horas
const minutos = 30;   // 30 minutos
const segundos = 45;  // 45 segundos

// Chamando a função e exibindo o resultado
console.log(converterEmMilissegundos(dias, horas, minutos, segundos)); // Resultado em milissegundos
