

function iniciaOperacao (){
   var entrada = document.querySelector("#operacao").value
   var resultado = eval(entrada);

   console.log (resultado);
   document.getElementById("resultado").textContent = resultado;
  
}

function reseta (){
    document.getElementById("resultado").textContent = "Resultado";
    document.querySelector("#operacao").value = "";
}

function escreveValores (valor){
    
    var opera = document.querySelector("#operacao").value;
    document.querySelector("#operacao").value = opera + valor;
    
}

var calcula = document.querySelector("#result");
calcula.onclick = iniciaOperacao;

var resetaOp = document.querySelector("#C");
resetaOp.onclick = reseta;


var numero = document.querySelector(".numero");
numero.onclick = escreveValores;

var numeroOp = document.querySelector(".numeroop");
numeroOp = escreveValores;

