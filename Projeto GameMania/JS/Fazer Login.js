window.onload = function cadastro(){
    var login = document.getElementById('Fazer Login');
    fazerLogin(login);
}
function fazerLogin(email, senha, posicao){
    localStorage.setItem("email"+ posicao, email);
    localStorage.setItem("senha"+ posicao, senha);
}
function validarNome(){
    console.clear();
    
    var nome = document.getElementById("username").value;
    var padrao = /[^a-zà-ú]/gi;
    var valida_nome = nome.match(padrao);
 
    if( valida_nome || !nome ){
       document.getElementById("msgname").innerHTML="<font color='#DB5A5A'>Nome possui caracteres inválidos ou é vazio!</font>";
       console.log("Nome inválido");
    }else{
       document.getElementById("msgname").innerHTML="<font color='#4ECA64'>Nome válido!</font>";
       console.log("Nome válido");
    }
 }
 function validaSobrenome(){
    console.clear();

    var sobrenome = document.getElementById("lastname").value;
    var padrao = /[^a-zà-ú]/gi;

    var valida_sobrenome = sobrenome.match(padrao);

    if( valida_sobrenome || !sobrenome ){
        document.getElementById("msglastname").innerHTML="<font color='#DB5A5A'>Sobrenome possui caracteres inválidos ou é vazio!</font>";
        console.log("Sobrenome inválido!");
     }else{
        document.getElementById("msglastname").innerHTML="<font color='#4ECA64'>Sobrenome válido!</font>";
        console.log("Sobrenome válido");
     }
 }
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail").innerHTML="<font color='#4ECA64'>E-mail válido</font>";
    console.log("E-mail valido!");
    }
    else{
    document.getElementById("msgemail").innerHTML="<font color='#DB5A5A'>E-mail inválido </font>";
    console.log("E-mail invalido!");
    }
    }
function validaSenha(){
    var senha = document.getElementById('password').value;
    var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
    
    if(senha.length < 6)
    {
        document.getElementById("msgpassword").innerHTML="<font color='#DB5A5A'>A senha deve conter no minímo 6 digitos!</font>";
        return false;
    }
    else if(!regex.exec(senha))
    {
        document.getElementById("msgpassword").innerHTML="<font color='#DB5A5A'>A senha deve conter no mínimo 1 caractere especial, 1 caractere maiúsculo e 2 números!</font>";
        return false;
    }
    return document.getElementById("msgpassword").innerHTML="<font color='#4ECA64'>A senha é válida</font>";
}
function confirmaSenha(){
    let cSenha = document.getElementById('password').value;
    let cSenha2 = document.getElementById('password_two').value;

    if(cSenha != cSenha2){
        document.getElementById("msgpassword2").innerHTML="<font color='#DB5A5A'>Senhas diferentes!\nPor favor digite novamente</font>";
        return false;
    }
    document.getElementById("msgpassword2").innerHTML="<font color='#4ECA64'>Senhas válidas</font>";
    return true;
}
    
    


