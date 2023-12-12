var num = document.getElementById('fnum')
var lista = document.querySelector('select#flista')
var res = document.getElementById('res')
var valores = []
function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number (n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inLista(num.value, valores)){ 
   valores.push(Number(num.value))
   var item = document.createElement('option')
   item.text = `valor ${num.value} adicionando`
   lista.appendChild(item)
   res.innerHTML = ''
    }else{ 
        window.alert('valor invalido, ou ja encontrado verifique os numeros, e tente novamente !')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert ('para finalizar, adicione 2 ou mais numeros')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
        menor = valores [pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += (`<p>ao todo temos ${tot} numeros cadastrados.<p/>`)
        res.innerHTML += (`<p>o maior valor adicionado ${maior} <p/>`)
        res.innerHTML += (`<p>o menor valor adicionado é o ${menor} <p/>`)
        res.innerHTML += (`<p> somando todos os valores o resultado dar ${soma} <p/>`)
        res.innerHTML += (`e a media dos valores é ${media}`)

    }
}
