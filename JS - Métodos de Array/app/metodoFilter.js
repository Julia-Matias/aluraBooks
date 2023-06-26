const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtarLivros));

function filtarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  // let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);
  exibirLivrosTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalItensDisponiveis(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalItensDisponiveis(valorTotal) {
  elementoValorLivrosDisponiveis.innerHTML = `${(
    <div class="livros__disponiveis">
      <p>
        Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span>
      </p>
    </div>
  )}`;
}
