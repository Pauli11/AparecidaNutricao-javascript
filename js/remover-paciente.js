var pacientes = document.querySelectorAll (".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },500); //*1//

});

//*1// /o Javascript entende o tempo em milessegundos. (500ms =0.5s)

// de maneira didatica, poderia ser assim a função de remover linha (sem a parte do delay inserida depois acima):
   
        //tabela.addEventListener("dblclick", function(event){
            //var alvoEvento = event.target;
           // var paiDoAlvo = alvoEvento.parentNode; //TR que queremos remover ao clicar na célula (TD);

           // paiDoAlvo.remove();  
    // });



//pacientes.forEach(function(paciente) {
  //  paciente.addEventListener ("dblclick",function(){
    //    console.log ("Deu duplo click");
    //    this.remove();
    //})
    
//});  >>>> do modo como está, o evento de ouvir o duplo click não funciona, pois o se verificarmos no index.html , pela sequencia primeiro a pagina é carregada toda e por ultimo entra o script de remover paciente. entao, qd adiciona um paciente depois de a página ser carregada o proximo paciente não recebe a função de escutar duplo click