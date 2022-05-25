

// **********         Esse arquivo fica para registro da maneira inicial de fazer o formulario        
//********    Ele funciona, mas a versão com boas práticas de código, quebrada em funções para cada parte, 
//********                                    está no arquivo form.js                           


var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault(); // *2// 

    var form = document.querySelector('#form-adiciona'); // *3 //  //Comment 1// 
    var nome =form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura= form.gordura.value;
    //Comment 2// 
        
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
    pacienteTr.appendChild(imcTd);

    //Por último precisamos adicionar esta <tr> na tabela. Para isto vamos usar uma tática parecida, selecionar a tabela em seguida usar a função .appendChild()://

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    

});


// *2// evita o comportamento padrão dos botões, que é enviar dados e recarregar a página limpando tudo//

// *3  // quando você seleciona um formulario por meio do querySelector, adquire acesso aos inputs dele, acessando por meio do name do input. Contudo isso nao da acesso aos valores q sao colocados ali, por isso precisa do .value.// 

//Comment 1// 
    //Depois de selecionado o form, precisamos ter acesso a cada um dos inputs. Para fazer isto podemos nos apoiar numa característica do form, que é o acesso que temos aos seus inputs como se fossem propriedades do form, bastando usar como nome da propriedade os atributos name dos inputs. Como temos inputs com os name's com valor de nome,altura,peso e gordura faremos assim://

    //Comment 2// 
    //Agora com os valores extraídos do formulário HTML para o Javascript, podemos começar a criar um novo paciente na tabela. Sabemos que pacientes são representados por <tr>'s na tabela, então precisamos criar um elemento <tr> dentro do Javascript. Para isto, vamos utilizar a função document.createElement():