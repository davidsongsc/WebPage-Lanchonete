document.getElementById("catalogo").style.overflowX = "scroll";
var catalogoPreferidos = [
    {
        nome: "JS Burguer" ,
        imagem: "produto1.png",
        valor: "R$ 29,90",
        descricao: "Nosso hamburguer especial com ingredientes feitos na hora, colhidos nas hortas da região valorizando o sabor e o aroma."
    },
    {
        nome: "Rob Burguer",
        imagem: "produto2.png",
        valor: "R$ 36,90",
        descricao: "Nosso hamburguer especial com ingredientes feitos na hora, colhidos nas hortas da região valorizando o sabor e o aroma."
    },
    {
        nome: "Premium Cheddar",
        imagem: "produto3.png",
        valor: "R$ 39,90",
        descricao: "Nosso hamburguer especial com ingredientes feitos na hora, colhidos nas hortas da região valorizando o sabor e o aroma."
    },
    {
        nome: "Bangu Spring",
        imagem: "bebida1.png",
        valor: "R$ 14,90",
        descricao: "Bebida Refrescante, aroma do verão, da california, do terouso de nossos sonhos."
    },
    {
        nome: "Ricardo Orange",
        imagem: "bebida2.png",
        valor: "R$ 19,90",
        descricao: "Bebida Refrescante, aroma do verão, da california, do terouso de nossos sonhos."
    },
    {
        nome: "Bento Spirit",
        imagem: "bebida3.png",
        valor: "R$ 24,90",
        descricao: "Bebida Refrescante, aroma do verão, da california, do terouso de nossos sonhos."
    },
    {
        nome: "Manolo's Brownei",
        imagem: "sobremesa1.png",
        valor: "R$ 21,90",
        descricao: "Descrição do produto 1"
    },
    {
        nome: "XTrio Moussee PAVÊ",
        imagem: "sobremesa2.png",
        valor: "R$ 12,00",
        descricao: "Descrição do produto 2"
    },
    {
        nome: "Sorvel",
        imagem: "sobremesa3.png",
        valor: "R$ 15,00",
        descricao: "Descrição do produto 3"
    },
    
];



// Carrega os 3 produtos melhor classificados
for (var i = 0; i < catalogoPreferidos.length; i++) {
    var produto = catalogoPreferidos[i];
    var section = document.createElement("section");
    var h2 = document.createElement("h2");
    var img = document.createElement("img");
    var pValor = document.createElement("p");
    var pDescricao = document.createElement("p");
    section.className = "categoria-produtos"
    section.id = "produto"+i;
    h2.textContent = produto.nome;
    img.src = "img/" + produto.imagem;
    pValor.className = "valor-s";
    pDescricao.className = "desc-s";
    
    pValor.textContent =  produto.valor;
    pDescricao.textContent = "Descrição: " + produto.descricao;
  
    section.appendChild(h2);
    section.appendChild(img);
    section.appendChild(pValor);
    section.appendChild(pDescricao);
  
    document.getElementById("catalogo").appendChild(section);
}
