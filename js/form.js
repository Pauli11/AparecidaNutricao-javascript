
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();

    var form = document.querySelector('#form-adiciona'); // *3 //  //Comment 1// 
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
        gordura: form.gordura.value.addEventListener,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTrDoPaciente(paciente){
    var pacienteTr= document.createElement("tr");
       
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.pesp,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gorduta"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

      
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