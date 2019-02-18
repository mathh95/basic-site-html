var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var pontos = document.getElementsByClassName("ponto");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < pontos.length; i++) {
      pontos[i].className = pontos[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  pontos[slideIndex-1].className += " active";
}

function emailpronto(){
  window.open("index4_ready.html", "Janela", "width=400, height=400");
}
function cadastropronto(){
  window.open("index5.html", "Janela", "width=400, height=400");
}


function exibirValor(codigo){
  codigo = parseInt(codigo);
  var subtotal_compra = 0;
  var pessoas = document.getElementById('pessoas').value;
  pessoas = parseInt(pessoas);

  if(codigo == 1){
    subtotal_compra = pessoas * 100;
    document.getElementById('subtotal_compra').innerHTML = "Subtotal da compra: R$ " + subtotal_compra  + ",00";
  }
  else if (codigo == 2){
    subtotal_compra = pessoas * 150;
    document.getElementById('subtotal_compra').innerHTML = "Subtotal da compra: R$ " + subtotal_compra  + ",00";
  }
  else if(codigo == 3){
    subtotal_compra = pessoas * 200;
    document.getElementById('subtotal_compra').innerHTML = "Subtotal da compra: R$ " + subtotal_compra  + ",00";
  }
  else if(codigo == 4){
    subtotal_compra = pessoas * 250;
    document.getElementById('subtotal_compra').innerHTML = "Subtotal da compra: R$ " + subtotal_compra  + ",00";
  }
}


