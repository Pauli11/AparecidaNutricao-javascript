var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
//com o querySelectorAll o javascript retorna um array com todos elementos que possuem essa classe que está entre parentesis//

for(i=0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
   //nesse paciente[i]  cada i é um item do array, ou seja, cda paciente com seus dados //


    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var imcTd = paciente.querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {  //comment 3//
        console.log("peso não vale")
        
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
      
       paciente.classList.add("paciente-invalido");
       
    }
       
    if (!alturaEhValida) {
        //console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.style.backgroundColor="orange";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = calculaImc(peso,altura);
        imcTd.textContent= imc;
    }

}

function validaPeso(peso){
    if (peso>=0 && peso<1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura>=1 && altura <=3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);  // *2 //

}


//*1 //to fixed define o numero de casas decimais do calculo//
// *2 // na refatoração do código, a propriedade toFixed foi passada para o retorno da função.
// *3 // a exclamacao inverte o valor do que eh definido pela variavel. no caso, só vai entrar no if se o peso for inválido (oposto de "peso é valido") se chama operador NOT