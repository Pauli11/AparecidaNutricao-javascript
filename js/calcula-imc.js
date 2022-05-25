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

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        //console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
       // paciente.style.backgroundColor="lightCoral"; >> é possivel manipular o DOM diretamente atraves do javascript, alterando seu estilo, porém não é uma boa prática, por ficar hard-coded//
       paciente.classList.add("paciente-invalido");
       //da forma como está na linha acima, estamos dialogando uma classe que foi adicionada no arquivo CSS,nesse ponto do código, e concentrando a mudança de estilo no próprio CSS
    }
       
    if (altura <= 0 || altura >= 3) {
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

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);  // *2 //

}


//*1 //to fixed define o numero de casas decimais do calculo//
// *2 // na refatoração do código, a propriedade toFixed foi passada para o retorno da função.

