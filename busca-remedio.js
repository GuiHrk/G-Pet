function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  document.getElementById("searchInput").addEventListener("input", function () {
    const termo = removerAcentos(this.value.toLowerCase());
    const produtos = document.querySelectorAll(".remedio");

    produtos.forEach(produto => {
      const texto = removerAcentos(produto.textContent.toLowerCase());
      if (texto.includes(termo)) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  });