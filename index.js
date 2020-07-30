function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }     

var btnClick = document.querySelector('button.box');
btnClick.onclick = function (){
let boxElement = document.createElement("div");
    boxElement.style.width = '180px';
    boxElement.style.height = '180px';
    boxElement.style.margin = '10px';
    boxElement.style.display = 'inline-block';
    boxElement.style.backgroundColor = "#F00";
  
var conteinerElement = document.querySelector('#app');
  conteinerElement.appendChild(boxElement);
  boxElement.onmouseover = function (){
  boxElement.style.backgroundColor = getRandomColor();
  }     
 }      