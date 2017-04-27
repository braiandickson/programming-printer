var codigo = 'var theDiv = document.getElementById("<ID_OF_THE_DIV>);\nvar content = document.createTextNode(<YOUR_CONTENT>);\ntheDiv.appendChild(content);';
var i = 0;
const div = document.getElementById('print');

function addLetter(){
    if(i< codigo.length){
      div.innerText = div.innerText + codigo[i];
      i++;
    }
};

window.addEventListener('keydown', addLetter);