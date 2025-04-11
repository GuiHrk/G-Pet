const produtos = [ 
    {
        id:1,
        nome: "Golden Special Frango e Carne 15Kg",
        preco: 149.00,
        categoria:"Cachorro", },
    { 
        id:2,
        nome: "Golden Formula Frango 15 Kg",
        preco: 165.00,
        categoria:"Cachorro", },
    { 
        id:3,
        nome: "Golden Forumula Carne 15 Kg",
        preco: 165.00,
        categoria:"Cachorro", },
    { 
        id:4,
        nome: "Golden Mega Frango e Arroz 15 Kg",
        preco: 165.00,
        categoria:"Cachorro",},
    { 
        id:5,
        nome: "Golden Power Training 15kg",
        preco: 175.00,
        categoria:"Cachorro", },
    { 
        id:6,
        nome: "Premier Formula Carne 15kg",
        preco: 250.00,
        categoria:"Cachorro", },
    { 
        id:7,
        nome: "Origens Class Frango e Carne 15kg",
        preco: 140.00,
        categoria:"Cachorro", },
    { 
        id:8,
        nome: "Luck dog Carne 15kg",
        preco: 85.00,
        categoria:"Cachorro", },
    { 
        id:9,
        nome: "Nhac 15kg",
        preco: 100.00,
        categoria:"Cachorro", },
    { 
        id:10,
        nome: "Magnus Todo dia Carne 15kg",
        preco: 100.00,
        categoria:"Cachorro", },
    {
        id:11,
        nome: "Magnus Chips 15kg",
        preco: 110.00,
        categoria:"Cachorro", },
    { 
        id:12,
        nome: "Gran Plus Frango e Carne 15kg",
        preco: 140.00,
        categoria:"Cachorro", },
    { 
        id:13,
        nome: "Golden Formula Carne 15kg ",
        preco: 165.00,
        categoria:"Cachorro",},
    { 
        id:14,
        nome: "Golden Formula Frango 15kg",
        preco: 165.00,
        categoria:"Cachorro", },
    { 
        id:15,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:16,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:17,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:18,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:19,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:20,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes",},
    {
        id:21,
        nome: "Ração Premium para Gatos",
        preco: 10.00,
        imagem:"img/racao-gato.png",
        categoria:"Gato", },
    { 
        id:22,
        nome: "Ração Premium para Cachorros",
        preco: 20.00,
        imagem:"img/racao-cachorro.png",
        categoria:"Cachorro", },
    { 
        id:23,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:24,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:25,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes",},
    { 
        id:26,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:27,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes",},
    { 
        id:28,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:29,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:30,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    {
        id:31,
        nome: "Ração Premium para Gatos",
        preco: 10.00,
        imagem:"img/racao-gato.png",
        categoria:"Gato", },
    { 
        id:32,
        nome: "Ração Premium para Cachorros",
        preco: 20.00,
        imagem:"img/racao-cachorro.png",
        categoria:"Cachorro", },
    { 
        id:33,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes",},
    { 
        id:34,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:35,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:36,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:37,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:38,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:39,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:40,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    {
        id:41,
        nome: "Ração Premium para Gatos",
        preco: 10.00,
        imagem:"img/racao-gato.png",
        categoria:"Gato",},
    { 
        id:42,
        nome: "Ração Premium para Cachorros",
        preco: 20.00,
        imagem:"img/racao-cachorro.png",
        categoria:"Cachorro", },
    { 
        id:43,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:44,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:45,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:46,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:47,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:48,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:49,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:50,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes",},
    {
        id:51,
        nome: "Ração Premium para Gatos",
        preco: 10.00,
        imagem:"img/racao-gato.png",
        categoria:"Gato",},
    { 
        id:52,
        nome: "Ração Premium para Cachorros",
        preco: 20.00,
        imagem:"img/racao-cachorro.png",
        categoria:"Cachorro", },
    { 
        id:53,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes",},
    { 
        id:54,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:55,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:56,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:57,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:58,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:59,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
    { 
        id:60,
        nome: "Ração Premium para Peixes",
        preco: 30.00,
        imagem:"img/racao-peixes.png",
        categoria:"Peixes", },
];











