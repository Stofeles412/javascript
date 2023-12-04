function contar(){
    var ini = window.document.getElementById('txti')
    var passo = window.document.getElementById('txtp')
    var fim = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('ERRO, verifique os dados e tente novamente!')
    }else{
        res.innerHTML = ('contando')
        var i = Number(ini.value)
        var p = Number(passo.value)
        var f = Number(fim.value)
        for(var c = i; c <= f ; c += p ){
            res.innerHTML += `${c} `
        }
    }
}