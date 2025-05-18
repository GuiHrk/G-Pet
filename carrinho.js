//let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

let carrinho = [];

if (localStorage.getItem('checkout_in_progress') === 'true' ) {

  localStorage.removeItem('checkout_in_progress');
  localStorage.removeItem('carrinho');
  carrinho = [];
  console.log("carrinho limpo após tentativa de checkout não concluida")
} else {
  carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
}

function adicionarAoCarrinho(nome, preco, foto, price_id) {
  if(!nome || !preco || !foto || !price_id){
    console.error("Dados inválidos ao adicionar ao carrinho:", nome, preco,foto,price_id );
    mostrarToast("Erro: dados do produto incompletos.");
  }

  
  const itemExistente = carrinho.find(p => p.price_id === price_id);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({
      nome: nome,
      preco: preco,
      foto: foto,
      price_id: price_id,
      quantidade: 1
    });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
  mostrarToast("Produto adicionado ao carrinho!");
  atualizarContadorCarrinho();
  console.log("Dados recebidos:", nome, preco, foto, price_id);
}

function atualizarContadorCarrinho() {
  const cartCount = document.getElementById('cartCount');
  const quantidadeProdutos = carrinho.reduce((total, item) => total + item.quantidade, 0); // Soma a quantidade de todos os produtos

  if(cartCount){
  if (quantidadeProdutos > 0) {
    cartCount.textContent = quantidadeProdutos; 
    cartCount.style.display = 'inline-block'; 
  } else {
    cartCount.style.display = 'none'; 
  }
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
  console.log(container);  

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
    if (!item.foto) {
      console.error("Produto sem imagem:", item);
      return; 
    }
    
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

document.getElementById("openCartBtn").addEventListener("click", () => {
  document.getElementById("cartModal").classList.add("show");
});

document.getElementById("closeCartBtn").addEventListener("click", () => {
  closeCart();
});

function closeCart() {
  document.getElementById("cartModal").classList.remove("show");
}

function mostrarToast(mensagem) {
  const toast = document.getElementById("alertToast");
  if(!toast){
    console.error("Elemento 'alertToast não encontrado'");
  }
  toast.textContent = mensagem;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); 
}


async function checkout() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  const items = carrinho.map(item => ({
    price_id: item.price_id,
    quantity: item.quantidade
  }));


  try {
    const response = await fetch(`https://g-pet.onrender.com/create-checkout-session`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items,
      //  userEmail: firebase.auth().currentUser?.email || null
      })
    });
  
    const data = await response.json();
    if (data.id){
      const stripe = Stripe('pk_test_51RCoZV09NS3qEz85SN2uuux4UDWO2aHKwyxcK2yID1ZDv91TRwy8zck0gDWIN2ZNUlrMOJlPbGgHBuz25jFtcsch00X6ojyX6w');
      localStorage.setItem('checkout_in_progress', 'true');
      await stripe.redirectToCheckout({sessionId: data.id});
    
    } else {
      alert("Erro ao iniciar o pagamento");
    }
  } catch (error){
    console.log("Erro ao Processar o Checkout:", error );
    alert("Erro ao Processar o Pagamento");
  }
  console.log("Itens enviados ao backend:", items);
  }
  
  window.addEventListener('load', () => {  
  atualizarCarrinho();
  atualizarContadorCarrinho();
  });
 
