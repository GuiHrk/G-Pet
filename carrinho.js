












let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nome, preco) {
  const produto = { nome, preco };
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} foi adicionado ao carrinho!`);
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const container = document.getElementById('cart-items');
  const totalSpan = document.getElementById('cart-total');

  if (!container || !totalSpan) return;

  container.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerDoCarrinho(${index})">Remover</button>
    `;
    container.appendChild(div);
    total += item.preco;
  });

  totalSpan.textContent = total.toFixed(2).replace('.', ',');
}

function checkout() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert("Compra finalizada!");
  carrinho = [];
  localStorage.removeItem('carrinho');
  atualizarCarrinho();
}

window.onload = atualizarCarrinho;
