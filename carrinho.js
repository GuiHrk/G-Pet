
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho( price_id) {
  const produto = produtos.find(p => p.price_id === price_id);
  if(produto) {
    carrinho.push({
      nome: produto.nome,
      price_id: produto.price_id,
      preco: produto.preco
    });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho`);
    atualizarCarrinho();
  } else {
    alert("Produto não encontrado!")
  }
}

//  if(!produto) {
//    alert("Produto não encontrado!");
//    return;
//  }
// 
//  carrinho.push(produto);
//  localStorage.setItem('carrinho', JSON.stringify(carrinho));
//  alert(`${produto.nome} foi adicionado ao carrinho`);
//}

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
    const preco = item.preco || 0;

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


  //alert("Compra finalizada!");
  //carrinho = [];
  //localStorage.removeItem('carrinho');
  //atualizarCarrinho();
}
window.onload = atualizarCarrinho;
