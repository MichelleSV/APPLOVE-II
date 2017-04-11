var modal= document.getElementById('imgModal');
var imgModal= document.getElementById('img');
var span = document.getElementsByClassName('close');
span.onclick = function(){
  modal.style.display= "none";
}
//imprimir
var arr =[{name:"TAYMAN GROUP", url:"assets/img/img-1.jpg"}, { name:"NALIA ORGANICS", url:"assets/img/img-2.jpg"}, {name:"BRASS COQ", url:"assets/img/img-3.jpg"},
          {name:"SUNGENRE", url:"assets/img/img-4.jpg"}, { name:"LIVING BOTANICS", url:"assets/img/img-5.jpg"}, {name:"FOAM KING", url:"assets/img/img-6.jpg"},
          {name:"VOLITION", url:"assets/img/img-7.jpg"}, { name:"INK", url:"assets/img/img-8.jpg"}, {name:"GILKON", url:"assets/img/img-9.jpg"},
          {name:"OUTS APPLES", url:"assets/img/img-10.jpg"}, { name:"SHERWOOD", url:"assets/img/img-11.jpg"}, {name:"PLATINUM", url:"assets/img/img-12.jpg"}]


function imprimir(elem){
  var figure = document.createElement('figure');
  figure.setAttribute("class", "figura")
  var img = document.createElement('img');
  img.setAttribute("class", "myImg");
  img.setAttribute("src", elem.url);
  img.setAttribute("alt", elem.name);
  var figcaption = document.createElement('figcaption');
  var span = document.createElement('span');
  span.innerText = elem.name;

  img.onclick = function(){
    modal.style.display= "block";
    imgModal.src = this.src;
  }
  figure.appendChild(img);
  figure.appendChild(figcaption);
  figcaption.appendChild(span);
  return figure;
}

window.addEventListener('load', function(e){
  e.preventDefault();
  var products= arr.forEach(function(e){
    document.getElementsByClassName('contenedor')[0].appendChild(imprimir(e,e.name));
  });
  return products;
})
