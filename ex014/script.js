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
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked){
        genero = 'homem'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','homem criança.png.jpg')
        }else if(idade < 21){
            //jovem
          
        }else if(idade < 50){
            //adulto
            img.setAttribute('src','homem adulto.png.jpg')
           
        }else{
            //idoso
            img.setAttribute('src','homem idoso.png.jpg')
        }

       }else if (fsex[1].checked){
        genero = 'mulher'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','mulher criança.png.jpg')
        }else if(idade < 30){
            //jovem
            img.setAttribute('src','mulher jovem.png.jpg')
        }else if(idade < 60){
            //adulto
            img.setAttribute('src', 'mulher adulta.png.jpg')
        }else{
            //idoso
            img.setAttribute('src', 'mulher idosa.png.jpg')
        }
       } 
       res.style.textAlign ='center'
       res.innerHTML = `detcatamos ${genero} de ${idade} anos`
       res.appendChild(img)
    }
}