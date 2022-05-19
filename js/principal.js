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

    var tdImc = paciente.querySelector(".info-imc");

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

        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);    //*1 //

    }

}

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault(); // *2// 

    var form = document.querySelector('#form-adiciona'); // *3//
    //Depois de selecionado o form, precisamos ter acesso a cada um dos inputs. Para fazer isto podemos nos apoiar numa característica do form, que é o acesso que temos aos seus inputs como se fossem propriedades do form, bastando usar como nome da propriedade os atributos name dos inputs. Como temos inputs com os name's com valor de nome,altura,peso e gordura faremos assim://

    var nome =form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura= form.gordura.value;

    //Agora com os valores extraídos do formulário HTML para o Javascript, podemos começar a criar um novo paciente na tabela. Sabemos que pacientes são representados por <tr>'s na tabela, então precisamos criar um elemento <tr> dentro do Javascript. Para isto, vamos utilizar a função document.createElement()://
    
    pacienteTr= document.createElement("tr");


    //Agora precisamos criar cada uma das <td>'s que ficarão dentro da <tr>. Como um paciente tem 5 atributos (nome,peso,altura,gordura e imc).Vamos utilizar a mesma função para criar estas <td's>://

    var nomeTd= document.createElement("td");
    var pesoTd= document.createElement("td");
    var alturaTd= document.createElement("td");
    var gorduraTd= document.createElement("td");
    var imcTd= document.createElement("td");

    //Temos que colocar os valores que extraímos do form dentro de cada uma das <td's>, então vamos preênche-las com nossa conhecida .textContent://
     
    nomeTd.textContent= nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imcTd;

    //Agora temos 5 <td>'s e 1 <tr> , mas elas não estão conectadas. O certo é posicionar as <td>'s dentro de cada <tr>'s. Vamos fazer isso através da função appendChild()://

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //Por último precisamos adicionar esta <tr> na tabela. Para isto vamos usar uma tática parecida, selecionar a tabela em seguida usar a função .appendChild()://

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    

});


//*1 //to fixed define o numero de casas decimais do calculo//

// *2// evita o comportamento padrão dos botões, que é enviar dados e recarregar a página limpando tudo//

// *3// quando você seleciona um formulario por meio do querySelector, adquire acesso aos inputs dele, acessando por meio do name do input. Contudo isso nao da acesso aos valores q sao colocados ali, por isso precisa do .value.// 