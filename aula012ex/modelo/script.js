function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('foto')
    var data = new Date()
    var hora = 8
    var min = data.getMinutes()
    msg.innerHTML = (`agora são ${hora}:${min} horas`)
    if (hora >=0 && hora < 12){ img.src = 'manha.png'

}else if(hora >= 12 && hora < 18){ img.scr = 'tarde.png'

    
}else{
    img.src = 'noite.png'
}
}