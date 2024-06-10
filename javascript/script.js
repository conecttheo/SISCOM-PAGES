var listaDeJogadores = [];
var elementoTabela = document.getElementById('tabelaJogadores');

function exibirNaTela() {
    elementoTabela.innerHTML = "";
    listaDeJogadores.forEach((jogador, index) => {

    elementoTabela.innerHTML += `
            <li>
            <a href="#" class="card-link">${jogador.nome}</a>
            </li>
    `;
    });
}

function criarJogador() {
    //verificar se player ja existe ou não
    var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
    listaDeJogadores.push({
      nome: nomeNovoJogador,
    });
    document.getElementById("campoNomeJogador").value = "";
    exibirNaTela();
  }

function adicionarVitoria(index) {
    listaDeJogadores[index].vitoria++;
    listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 3;
    exibirNaTela();

}
function adicionarEmpate(index) {
    listaDeJogadores[index].empate++;
    listaDeJogadores[index].pontos++;
    exibirNaTela();
}
function adicionarDerrota(index) {
    listaDeJogadores[index].derrota++;
    exibirNaTela();
}

function limparPontuacaoJogador(index) {
    listaDeJogadores[index].vitoria = 0;
    listaDeJogadores[index].empate = 0;
    listaDeJogadores[index].derrota = 0;
    listaDeJogadores[index].pontos = 0;
    exibirNaTela();
  }

  function removerJogador(index) {
    listaDeJogadores.splice(index, 1);
    exibirNaTela();
  }
  
  function apagarJogadores() {
    listaDeJogadores = [];
    exibirNaTela();
  }