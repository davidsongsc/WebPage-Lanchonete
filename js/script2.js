  var mensagens = ["Bem-Vindo à nossa hamburgueria!", "Confira nossas promoções"];
  var i = 0;
  setInterval(function() {
    document.getElementById("mensagem-destaque").innerHTML = mensagens[i];
    i = (i + 1) % mensagens.length;
  }, 10000);
