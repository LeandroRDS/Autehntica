
/*Script Botão Minha Conta */
var btn_minha_conta = window.document.querySelector('div#img-login')
btn_minha_conta.addEventListener('click', minhaConta)
var home_mobile = window.document.querySelector('main#id-main-home-mobile')
var menu_minha_conta = window.document.querySelector('div#id-div-minha-conta')
function minhaConta(){
     home_mobile.style.display = 'none'
     menu_minha_conta.style.display = 'block'
}
function voltaTelaHome(){
    menu_minha_conta.style.display = 'none'
    home_mobile.style.display = ''
}

/* Script Botão Fazer Login*/
btn_fazer_login = window.document.querySelector('body#id-div-log in')
btn_fazer_login.addEventListener('click', fazerLogin)
function fazerLogin(){
    location.href = '../tela_login/tela-fazer-login.html'
}


