
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();

    var form = document.querySelector('#form-adiciona');  
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTrDoPaciente(paciente);   
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);   
    
    form.reset();

});

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
       
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    // *Comment 1// 

       
    nomeTd.textContent= paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc; // o imc já vem calculado no paciente agora //   

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

}

function montaTd (dado,classe){
    var td = document.createElement("td");
    td.textContent= dado;
    td.classList.add(classe);
    td.textContent  = dado;

    return td;

}

// *Comment 1// appendChild() é um dos métodos fundamentais da programação para a web usando o DOM. O método appendChild() insere um novo nó na estrutura do DOM de um documento, e é a segunda parte do processo criar-e-adicionar tão importante na construção de páginas web programaticamente. 
// Exemplo:
// Cria um novo elemento de parágrafo e adiciona-o ao final do documento
//                    var p = document.createElement("p");
//                    document.body.appendChild(p);