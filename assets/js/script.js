const nome = document.querySelector("#nomeCompleto");
const email = document.querySelector("#email");

function validarNome(){
    let txtNome = document.querySelector("#txtNome");
    if(nome.value.lenght <3){
        txtNome.innerHTML = "Digite o nome completo";
        txtNome.style.color= "DarkCyan";
    }else {
       txtNome.innerHTML = "Nome válido!"
       txtNome.style.color= "DarkMagenta"
    }
}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail");

    if((email.value.indexOf("@")&& email.value.indexOf(".")) == -1){
        txtEmail.innerHTML = "Digite o e-mail corretamente";
        txtEmail.style.color = "DarkCyan";
    } else {
        txtEmail.innerHTML = "E-mail válido!";
        txtEmail.style.color = "DarkMagenta";
    }
}