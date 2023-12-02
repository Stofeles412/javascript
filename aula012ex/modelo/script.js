function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = (`agora são ${hora}:${min} - horas`)
if(hora >= 0 && hora < 12){
    img.src = 'manha.png'
    //bom dia
 
}else if(hora >= 12 && hora < 18){ 
    //boa tarde
    img.src = 'tarde.png'
    
}else{
    //boa noite
   img.src = 'noite.png'
}
}
