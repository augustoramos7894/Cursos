function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'hcriança.jpg')
            } else if (idade <27) {
                //Jovem
                img.setAttribute('src', 'hjovem.jpg')

            }else if (idade == 27) {
                //Junin
                img.setAttribute('src', 'fotojunin.jpg')

            }else if (idade >27 && idade <39) {
                //Jovem-Adulto
                img.setAttribute('src', 'jovemadulto.jpg')

            }else if (idade ==39) {
                    //Renan
                    img.setAttribute('src', 'fotorenan.jpg')
                    
            } else if (idade >39 && idade <50) {
                //Adulto
                img.setAttribute('src', 'hadulto.jpg')
            } else if (idade >=50){
                //Idoso
                img.setAttribute('src', 'hvelho.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'mcriança.jpg')
            } else if (idade <21 && idade <30) {
                //Jovem
                img.setAttribute('src', 'mjovem.jpg')

            }else if (idade == 30) {
                    //Ray
                img.setAttribute('src', 'fotoray.jpg')
                
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'madulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'mvelha.jpg')
            }
        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}