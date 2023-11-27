var idade = 61
if (idade < 16){
    console.log('não vota')
}else{
    console.log('vota')
    if (idade>= 16 && idade < 18){
        console.log('voto opcional')
    }else if(idade >= 18){
        console.log ('voto obrigatorio')
    }else (idade >= 72){
        console.log('não preicsa votar')
    }
}


