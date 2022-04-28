
var entrada
var validador
var expressaoRegular = RegExp(/(\d+[\+\/\-\*]{1}\d+)+/)

function iniciaOperacao (){
   var entrada = document.querySelector("#operacao").value
   var resultado = eval(entrada);

   console.log (resultado);
   document.getElementById("resultado").textContent = resultado;
  
}

function validaOperacao(validador){
    var validador = document.querySelector("#operacao").value
    re = expressaoRegular.test(validador)
    console.log (re)
    if (!re){
        document.getElementById("resultado").textContent = "Digite apenas Operações";
    }else{
      iniciaOperacao()
    }

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
calcula.onclick = validaOperacao;

var resetaOp = document.querySelector("#C");
resetaOp.onclick = reseta;


var numero = document.querySelector(".numero");
numero.onclick = escreveValores;

var numeroOp = document.querySelector(".numeroop");
numeroOp = escreveValores;

