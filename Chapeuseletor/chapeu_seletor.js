const readline = require('readline');

// Criando a interface para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para o "Chapeco Selecionador"
function chapecoSelecionador() {
  // Perguntas e respostas
  const perguntas = [
    {
      pergunta: "Qual a sua atitude diante de um desafio?",
      opcoes: ["Enfrentar com coragem", "Enganar para vencer", "Ajudar os outros", "Estudar antes de agir"],
      casa: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
    },
    {
      pergunta: "O que você mais valoriza?",
      opcoes: ["Honra e coragem", "Ambição e poder", "Amizade e lealdade", "Sabedoria e conhecimento"],
      casa: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
    },
    {
      pergunta: "Qual a sua reação ao ver um amigo em perigo?",
      opcoes: ["Proteger com risco", "Lidar de forma estratégica", "Ajudar com trabalho duro", "Procurar uma solução inteligente"],
      casa: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
    },
    {
      pergunta: "Qual seria seu maior medo?",
      opcoes: ["Faltar coragem", "Não alcançar o sucesso", "Perder as pessoas queridas", "Não entender algo importante"],
      casa: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
    },
    {
      pergunta: "Como você prefere resolver um problema?",
      opcoes: ["Com coragem e ação", "Com astúcia e estratégia", "Com colaboração e esforço", "Com lógica e razão"],
      casa: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
    }
  ];

  // Variáveis para contar os pontos de cada casa
  let pontosGryffindor = 0;
  let pontosSlytherin = 0;
  let pontosHufflepuff = 0;
  let pontosRavenclaw = 0;

  // Função para perguntar e coletar a resposta do usuário
  function fazerPergunta(index) {
    return new Promise((resolve) => {
      const pergunta = perguntas[index];
      rl.question(`${pergunta.pergunta}\n1. ${pergunta.opcoes[0]}\n2. ${pergunta.opcoes[1]}\n3. ${pergunta.opcoes[2]}\n4. ${pergunta.opcoes[3]}\nEscolha uma opção (1-4): `, (resposta) => {
        // Verificando qual resposta foi dada e acumulando pontos para a casa correspondente
        if (resposta === "1") {
          pontosGryffindor++;
        } else if (resposta === "2") {
          pontosSlytherin++;
        } else if (resposta === "3") {
          pontosHufflepuff++;
        } else if (resposta === "4") {
          pontosRavenclaw++;
        } else {
          console.log("Resposta inválida. Por favor, escolha uma opção de 1 a 4.");
          return resolve(fazerPergunta(index));  // Repete a pergunta em caso de resposta inválida
        }
        resolve();  // Resolve a promessa para continuar para a próxima pergunta
      });
    });
  }

  // Função assíncrona para realizar todas as perguntas
  async function executarPerguntas() {
    for (let i = 0; i < perguntas.length; i++) {
      await fazerPergunta(i);  // Espera a resposta antes de continuar
    }

    // Determinando a casa com mais pontos
    let maiorPontuacao = Math.max(pontosGryffindor, pontosSlytherin, pontosHufflepuff, pontosRavenclaw);
    let casaSelecionada = "";

    if (maiorPontuacao === pontosGryffindor) {
      casaSelecionada = "Gryffindor";
    } else if (maiorPontuacao === pontosSlytherin) {
      casaSelecionada = "Slytherin";
    } else if (maiorPontuacao === pontosHufflepuff) {
      casaSelecionada = "Hufflepuff";
    } else {
      casaSelecionada = "Ravenclaw";
    }

    // Exibindo o resultado
    console.log(`Você foi selecionado para a casa: ${casaSelecionada}`);
    rl.close();  // Fecha a interface de leitura
  }

  // Executa todas as perguntas e exibe o resultado
  executarPerguntas();
}

// Chama a função para executar o Chapéu Seletor
chapecoSelecionador();
