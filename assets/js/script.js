const nome = document.querySelector("#nomeCompleto");
//para chamar pelo id usamos # na frente no nome
//para chamar pela class usamos . na frente do nome
const txt = document.querySelector(".txtx");

function pegarNome(){

    console.log(nome.value);
    console.log(typeof(nome));
    //propriedade que escreve dentro do seu body, ou tag html
    //txt.innerHTML = "olá Dev e deva!";
    
    //length propriedade que consegue contar o numero de caracter 
    if(nome.value.length < 4){
        txt.innerHTML = "Digite o nome completo";
        txt.style.color = "red";
    }else{
        //para um texto para o elemento que foi identificado na variável txt
        txt.innerHTML = "ok";
        //passando uma cor para a fonte com javascript
        txt.style.color = "blue";
    }
}

