let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nome, preco, foto) {
  const itemExistente = carrinho.find(p => p.nome === nome);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({
      nome: nome,
      preco: preco,
      foto: foto,
      quantidade: 1
    });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
  mostrarToast("Produto adicionado ao carrinho!");
  atualizarContadorCarrinho();
  
}

function atualizarContadorCarrinho() {
  const cartCount = document.getElementById('cartCount');
  const quantidadeProdutos = carrinho.reduce((total, item) => total + item.quantidade, 0); // Soma a quantidade de todos os produtos

  // Exibe o contador, e define o número de itens no carrinho
  if (quantidadeProdutos > 0) {
    cartCount.textContent = quantidadeProdutos; // Atualiza o número no contador
    cartCount.style.display = 'inline-block'; // Exibe o contador
  } else {
    cartCount.style.display = 'none'; // Oculta o contador se o carrinho estiver vazio
  }
}
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
  atualizarContadorCarrinho();
}

function atualizarCarrinho() {
  const container = document.getElementById('cartItems');
  const totalSpan = document.getElementById('cartTotal');
  const emptyMessage = document.getElementById('emptyCartMessage');
  console.log(container);  // Verifique se o elemento está sendo encontrado

  if (!container) {
    console.error("Elemento 'cartItems' não encontrado!");
    return;
  }
  
  container.innerHTML = '';
  let total = 0;

  if (carrinho.length === 0) {
    emptyMessage.style.display = 'block';
    document.querySelector('.cart-footer').style.display = 'none';
    return;
  } else {
    emptyMessage.style.display = 'none';
    document.querySelector('.cart-footer').style.display = 'block';
  }

  carrinho.forEach((item, index) => {
    const preco = item.preco || 0;
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.foto}" alt="Produto">
      <div class="item-info">
        <p>${item.nome}</p>
        <p><strong>R$ ${preco.toFixed(2)}</strong></p>
        <div class="quantity-controls">
          <button onclick="atualizarQuantidade(${index}, -1)">-</button>
          <span>${item.quantidade}</span>
          <button onclick="atualizarQuantidade(${index}, 1)">+</button>
        </div>
      </div>
      <button class="delete-btn" onclick="removerDoCarrinho(${index})">
        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Excluir">
      </button>
    `;
    container.appendChild(div);
    total += item.preco * item.quantidade;
  });

  totalSpan.textContent = total.toFixed(2).replace('.', ',');
}

function atualizarQuantidade(index, delta) {
  const item = carrinho[index];
  item.quantidade = Math.max(1, item.quantidade + delta); // Impede de ficar com quantidade 0
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
  atualizarContadorCarrinho();
}
// Abrir e fechar o modal
document.getElementById("openCartBtn").addEventListener("click", () => {
  document.getElementById("cartModal").classList.add("show");
});

document.getElementById("closeCartBtn").addEventListener("click", () => {
  closeCart();
});

function closeCart() {
  document.getElementById("cartModal").classList.remove("show");
}

window.onload = () => {
  atualizarCarrinho();
  atualizarContadorCarrinho();
};

function mostrarToast(mensagem) {
  const toast = document.getElementById("alertToast");
  console.log("Toast sendo exibido");  // Verifique se o código chega até aqui
  toast.textContent = mensagem;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // some após 3 segundos
}
async function checkout() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  const items = carrinho.map(item => ({
    price_id: item.price_id,
    quantity: 1
  }));

  try {
    const response = await fetch('https://g-pet.onrender.com/create-checkout-session',{
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items,
        userEmail: firebase.auth().currentUser?.email || null
      })
    });
  
    const data = await response.json();
    if (data.id){
      const stripe = Stripe('pk_test_51RCoZV09NS3qEz85SN2uuux4UDWO2aHKwyxcK2yID1ZDv91TRwy8zck0gDWIN2ZNUlrMOJlPbGgHBuz25jFtcsch00X6ojyX6w');
      await stripe.redirectToCheckout({sessionId: data.id});
    } else {
      alert("Erro ao iniciar o pagamento");
    }
  } catch (error){
    console.log("Erro ao Processar o Checkout:", error );
    alert("Erro ao Processar o Pagamento");
  }
  console.log("Itens enviados ao backend:", items);

  carrinho = [];
  localStorage.removeItem('carrinho');
  atualizarCarrinho();
  atualizarContadorCarrinho();

  //alert("Compra finalizada!");
  //carrinho = [];
  //localStorage.removeItem('carrinho');
  //atualizarCarrinho();
}
window.onload = () => {
  atualizarCarrinho();
  atualizarContadorCarrinho();
};
