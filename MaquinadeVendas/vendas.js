/*
 * Simula o funcionamento de uma máquina de vendas criando uma operação
 * que receba dinheiro (array de moedas) e um número que indique a seleção
 * do produto.
 * - O programa retornará o nome do produto e um array com o dinheiro
 *   de volta (com o menor número de moedas).
 * - Se o dinheiro for insuficiente ou o número do produto não existir,
 *   deve ser exibida uma mensagem e retornar todas as moedas.
 * - Se não houver dinheiro de volta, o array será retornado vazio.
 * - Para simplificar, trabalharemos em centavos com moedas
 *   de 5, 10, 50, 100 e 200 centavos.
 * - Devemos controlar que as moedas enviadas estejam dentro das suportadas.
 */
// Função que simula a máquina expendedora
function maquinaExpendedora(moedas, produtoEscolhido) {
    // Definimos os produtos e seus preços em centavos
    const produtos = [
      { nome: "Refrigerante", preco: 150 },  // 1,50 em centavos
      { nome: "Salgado", preco: 120 },      // 1,20 em centavos
      { nome: "Água", preco: 100 },         // 1,00 em centavos
      { nome: "Chocolate", preco: 200 },    // 2,00 em centavos
    ];
  
    // Definimos as moedas aceitas pela máquina
    const moedasAceitas = [5, 10, 50, 100, 200];
  
    // Verifica se todas as moedas enviadas são válidas
    for (let i = 0; i < moedas.length; i++) {
      if (!moedasAceitas.includes(moedas[i])) {
        console.log("Erro: Uma ou mais moedas não são suportadas.");
        return moedas;  // Retorna todas as moedas se houver moeda não suportada
      }
    }
  
    // Verifica se o número do produto escolhido é válido
    if (produtoEscolhido < 1 || produtoEscolhido > produtos.length) {
      console.log("Erro: Produto não encontrado.");
      return moedas;  // Retorna todas as moedas se o produto não for válido
    }
  
    const produto = produtos[produtoEscolhido - 1]; // Seleciona o produto baseado no número
  
    // Soma o valor total das moedas enviadas
    const totalRecebido = moedas.reduce((acc, moeda) => acc + moeda, 0);
  
    // Verifica se o valor recebido é suficiente para o produto
    if (totalRecebido < produto.preco) {
      console.log("Erro: Dinheiro insuficiente.");
      return moedas;  // Retorna todas as moedas se o dinheiro for insuficiente
    }
  
    // Calcula o troco, se houver
    let troco = totalRecebido - produto.preco;
    const trocoMoedas = [];
  
    // Calcula o troco com o menor número de moedas possível
    for (let i = moedasAceitas.reverse(); troco > 0 && i >= 0; i--) {
      while (troco >= moedasAceitas[i]) {
        troco -= moedasAceitas[i];
        trocoMoedas.push(moedasAceitas[i]);
      }
    }
  
    // Retorna o nome do produto e o troco
    return {
      produto: produto.nome,
      troco: trocoMoedas
    };
  }
  
  // Exemplo de uso
  const moedas = [200, 100, 50]; // 3,50 em centavos
  const produtoEscolhido = 1; // Escolheu o refrigerante
  
  const resultado = maquinaExpendedora(moedas, produtoEscolhido);
  console.log("Produto:", resultado.produto);
  console.log("Troco:", resultado.troco);
  