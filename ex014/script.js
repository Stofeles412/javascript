function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
       window.alert ('erro verifique os dados e tente novamente !')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = 'homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'homem crinça.png.jpg')
        }else if (idade < 21){
            //jovem
        }else if (idade < 50){
            //adulto
        }else{
            //idoso
        }
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].cheked){

        }else if (fsex[1].cheked){
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher criança.png.jpg')
            }else if (idade < 21){
                //jovem
            }else if (idade < 50){
                //adulto
            }else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
    } res.innerHTML = `dedectamos ${genero} com ${idade}`
    res.appendChild(img)
}