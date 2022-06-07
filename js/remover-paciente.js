var pacientes = document.querySelectorAll (".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener ("dblclick",function(){
        console.log ("Deu duplo click");
        this.remove();
    })
    
});

//pacientes.forEach(function(paciente) {
  //  paciente.addEventListener ("dblclick",function(){
    //    console.log ("Deu duplo click");
    //    this.remove();
    //})
    
//});  >>>> do modo como está, o evento de ouvir o duplo click não funciona, pois o se verificarmos no index.html , pela sequencia primeiro a pagina é carregada toda e por ultimo entra o script de remover paciente. entao, qd adiciona um paciente depois de a página ser carregada o proximo paciente não recebe a função de escutar duplo click