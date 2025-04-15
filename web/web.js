const axios = require('axios');
const cheerio = require('cheerio');

// Definindo a URL do site do evento
const url = 'https://holamundo.day';

// Função para buscar e extrair a agenda do dia 8
async function buscarAgenda() {
    try {
        // Realizamos a requisição HTTP ao site usando o axios
        const resposta = await axios.get(url);
        
        // Carregamos o HTML da página usando cheerio
        const $ = cheerio.load(resposta.data);
        
        // Buscamos o elemento que contém a agenda do dia 8
        const agendaDia8 = $('#agenda-day-8'); // Ajuste o seletor conforme necessário
        
        if (agendaDia8.length) {
            // Buscamos todos os eventos do dia 8
            agendaDia8.find('.evento').each((index, evento) => {
                const hora = $(evento).find('.hora').text().trim(); // Ajuste o seletor conforme necessário
                const descricao = $(evento).find('.descricao').text().trim(); // Ajuste o seletor conforme necessário
                
                // Imprimimos a hora e a descrição no formato solicitado
                console.log(`${hora} | ${descricao}`);
            });
        } else {
            console.log('Agenda do dia 8 não encontrada.');
        }
    } catch (erro) {
        // Se ocorrer algum erro durante o processo
        console.log('Erro ao realizar o scraping:', erro);
    }
}

// Chama a função para buscar a agenda
buscarAgenda();
