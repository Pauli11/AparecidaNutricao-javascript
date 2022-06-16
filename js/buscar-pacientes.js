var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();  //1//
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //2//

    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);    
            pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);  
        }); //3

    }else{
        erroAjax.classList.remove("invisivel");
    }

    });
    xhr.send();  //Por último , para enviar a requisição precisamos chamar o método .send():
});

   

//1// Para executarmos requisições com o Javascript, precisamos de um objeto especialista nisso, que é o XMLHttpRequest
//2:  O XMLHttpRequest precisa ser configurado, para dizer qual método HTTP queremos utilizar na requisição, e para qual servidor vamos enviá-la. Para configurar o XMLHttpRequest utilizamos a função .open():
//3 // o servidor nos retorna um JSON, um formato de texto muito comum hoje em dia na web. Como não queremos trabalhar com texto e sim com objetos Javascript, vamos parsear este texto para um objeto Javascript equivalente. Use a função JSON.parse() na resposta para transformar