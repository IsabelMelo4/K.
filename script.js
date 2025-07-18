function comecar() {
  mostrar('pergunta');
  esconder('start');
}

function responder(resposta) {
  if (resposta === 'nao') {
    // volta para a pergunta com só "Sim!"
    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = '<button onclick="responder(\'sim\')">Sim!</button>';
    alert("Ahh, então tenta de novo... ❤️");
  } else {
    esconder('pergunta');
    mostrar('final');
  }
}

function mostrarCarrossel() {
  esconder('final');
  mostrar('carrossel');
}

// funções utilitárias
function mostrar(id) {
  document.getElementById(id).classList.add("show");
}

function esconder(id) {
  document.getElementById(id).classList.remove("show");
}

// carrossel
let slideAtual = 0;

function mudarSlide(direcao) {
  const slides = document.querySelectorAll('.slide');
  slides[slideAtual].classList.remove('active');
  slideAtual = (slideAtual + direcao + slides.length) % slides.length;
  slides[slideAtual].classList.add('active');
}

window.addEventListener('load', () => {
  const musica = document.getElementById('musica');
  musica.play().catch(e => {
    console.log("Autoplay bloqueado, clique para iniciar.");
  });
});
