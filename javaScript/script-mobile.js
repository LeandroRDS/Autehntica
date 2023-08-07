/*Script Botão Minha Conta */
var btn_minha_conta = window.document.querySelector('div#img-login')
btn_minha_conta.addEventListener('click', fazerLogin)
function fazerLogin(){
    location.href = "minha-conta.html" 
}