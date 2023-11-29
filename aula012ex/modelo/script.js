function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = (`agora são ${hora}:${min} - horas`)
}if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'manha.png'

}else if(hora >= 12 && hora < 18){ img.src = 'tarde'
    //boa tarde
    
}else{
    //boa noite
    img.src = 'noite.png'
}