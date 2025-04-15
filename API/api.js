
 /*
 * Fazer uma chamada para uma API é uma das tarefas mais comuns na programação.
 *
 * Implemente uma chamada HTTP para uma API (a que você preferir) e mostre seu
 * resultado através do console. Por exemplo: Pokémon, Marvel...
 *
 * Aqui está uma lista de possíveis APIs:
 * https://github.com/public-apis/public-apis
 */



// Vamos usar o 'fetch' para fazer a chamada HTTP para a API.
// Escolheremos a API de Pokémon como exemplo.

const urlDaApi = "https://pokeapi.co/api/v2/pokemon/ditto"; // URL da API que vamos acessar

// Função para chamar a API e exibir o resultado no console

function chamarApi() {
    // Usando o fetch para fazer uma requisição GET para a API
    fetch(urlDaApi)
        .then(resposta => {
            // Verificando se a resposta foi bem-sucedida (código 200)
            if (resposta.ok) {
                return resposta.json(); // Converte a resposta para JSON
            } else {
                throw new Error('Erro ao acessar a API');
            }
        })
        .then(dados => {
            // Exibindo os dados da resposta no console
            console.log("Dados do Pokémon:", dados);
            console.log("Nome do Pokémon:", dados.name); // Exibindo o nome do Pokémon
            console.log("ID do Pokémon:", dados.id); // Exibindo o ID do Pokémon
        })
        .catch(erro => {
            // Exibindo qualquer erro ocorrido durante a chamada da API
            console.log("Erro:", erro.message);
        });
}

// Chamando a função para realizar a requisição
chamarApi();

