/*Script Botão Minha Conta */
var btn_minha_conta = window.document.querySelector('div#img-login')
btn_minha_conta.addEventListener('click', fazerLogin)
var home_mobile = window.document.querySelector('main#id-main-home-mobile')
var menu_minha_conta = window.document.querySelector('div#id-div-minha-conta')
function fazerLogin(){
     home_mobile.style.display = 'none'
     menu_minha_conta.style.display = 'block'
}
function voltaTelaHome(){
    menu_minha_conta.style.display = 'none'
    home_mobile.style.display = ''
}