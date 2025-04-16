document.getElementById("pesquisaForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  const input = document.getElementById("searchInput");
  let termo = input.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  
  if (termo.includes("racao") || termo.includes("ração") || termo.includes("racoes")) {
      window.location.href = "tela-racao.html"; 
  } else if (termo.includes("sache") || termo.includes("sachê") || termo.includes("saches")) {
      window.location.href = "tela-saches.html"; 
  } else if (termo.includes("remedio") || termo.includes("remédio") || termo.includes("remedios")) {
      window.location.href = "tela-remedio.html"; 
  } else if (termo.includes("acessorio") || termo.includes("acessório") || termo.includes("brinquedo") || termo.includes("coleira")) {
      window.location.href = "tela-brinquedos.html"; 
  } else {
      alert("Produto não encontrado!"); 
  }
});