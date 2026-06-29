function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12) {
    //Bom dia!
    img.src = 'fotodamanha.jpg'
    document.body.style.background = 'rgb(219, 201, 161)'
} else if (hora >= 12 && hora <18) {
    //Boa tarde!
    img.src = 'fotodatarde.jpg'
    document.body.style.background = 'rgb(241, 142, 29)'
} else {
    // Boa noite!
    img.src = 'fotodanoite.jpg'
    document.body.style.background = 'rgb(54, 51, 51)'
}



}

