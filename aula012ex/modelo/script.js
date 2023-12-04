function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = (`agora são ${hora}:${min} - horas`)
  
    
}if(hora >= 0 && hora < 12){
    //bom dia
    img.src = ('manha.jpg')
  
 
}else if(hora >= 12 && hora < 18){ 
    //boa tarde
    img.src = ('tarde.jpg')
    
}else{
    //boa noite
   img.src = ('noite.jpg')
}

