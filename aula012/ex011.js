var idade = 25
console.log(`você tem ${idade} anos `)
if (idade < 16){
    console.log('não vota')
}else{
    
    if (idade>= 16 && idade < 18 || idade > 66){
        console.log('voto opcional')
    }else if (idade >= 18){
        console.log ('voto obrigatorio')
    
    }
}

