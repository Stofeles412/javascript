function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
       window.alert ('erro verifique os dados e tente novamente !')
    }
}