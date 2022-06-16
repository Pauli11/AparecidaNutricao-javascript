
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();

    var form = document.querySelector('#form-adiciona');  
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTrDoPaciente(paciente); 
    var erros = validaPaciente(paciente);
    //console.log (erros);    

    if (erros.length >0 ){ 
        exibeMensagensDeErro(erros);
        return;
        //comment *2//
       // var mensagemDeErro = document.querySelector("#mensagem-erro");
        //mensagemDeErro.textContent = erros;        
    }
   // if(!validaPaciente(paciente)){
        //console.log("paciente invalido")
        //return;  // o return faz ele sair da função qd   o paciente não é valido.
    //}


    adicionaPacienteNaTabela(paciente);
   var tabela = document.querySelector("#tabela-pacientes");

    //tabela.appendChild(pacienteTr);   
    
    form.reset();
     var mensagensErro = document.querySelector("#mensagens-erro");
     mensagensErro.innerHTML = "";

});



function exibeMensagensDeErro(erros){
    var ul= document.querySelector("#mensagens-erro");   
    ul.innerHTML = "";

    erros .forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });
}
 //for(var i=o; i<erros.length; i++);
    //var erro =erros[i];     >> fazendo o processo  do for each com for


function obtemPacienteDoFormulario(form){
    var paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura : form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
// *****   TR são as linhas da tabela e TD são cada célula da tabela  ***//


function montaTrDoPaciente(paciente){
    var pacienteTr= document.createElement("tr");
    pacienteTr.classList.add("paciente");
       
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    // *Comment 1// 

    return pacienteTr;
}

       

function montaTd (dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent  = dado;

    return td;

}

function validaPaciente(paciente){
var erros =[];
    if (paciente.nome.length == 0)   erros.push ("Preencha o nome do paciente");
    // é possivel escrever todos os if abaixo como na linha acima. Pois é um if simples ("se isso, faça aquilo")

    if (paciente.gordura.length == 0) {
    erros.push ("Preencha a gordura")
    }

    if (paciente.peso.length == 0) {
        erros.push("Preencha o peso");
    }

    if (paciente.altura.length == 0) {
        erros.push("Preencha a altura");
    }
 

    if (!validaPeso(paciente.peso)) {
         erros.push("O peso é inválido!");         
    }

    if(!validaAltura(paciente.altura)){

        erros.push("A altura é inválida!")
    }

   
    return erros;
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
//function validaPaciente(paciente){
  //  if (validaPeso(paciente.peso)){
//    return "";
  //  } else {
   //     return "O peso é inválido";    
 //   }
// }
// *Comment 1// appendChild() é um dos métodos fundamentais da programação para a web usando o DOM. O método appendChild() insere um novo nó na estrutura do DOM de um documento, e é a segunda parte do processo criar-e-adicionar tão importante na construção de páginas web programaticamente. 
// Exemplo:
// Cria um novo elemento de parágrafo e adiciona-o ao final do documento
//                    var p = document.createElement("p");
//                    document.body.appendChild(p);

//comment *2//  Aqui tem duas opções de erro: retornar algo vazio, ou seja, deu tudo certo, nao tem nenhuma mensagem ( erro = "")  ou ter alguma mensagem la de erro e por isso  o :   erro.length >0  para fazer a verificação
//var erro = validaPaciente(paciente);
//   erro => "Peso inválido"
//  erro => ""  
//
//  if (erro.length >0 )