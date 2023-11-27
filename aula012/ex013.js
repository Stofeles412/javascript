var agora = new Date()
var diasem = agora.getDay()
//console.log(diasem)
switch(diasem){
    
      case 0: console.log('domingo')
        break //OBS: brak e obrigatorio ser usado para impedir q a leitura do js leia as linhas de baixo juntos//
        case 1: console.log('segunda-feira')
         break
        
        case 2: console.log('terça feira')
        break

        case 3: console.log('quarta-feira')
        break

        case 4: console.log('quinta-feira')
        break

        case 5: console.log('sexta-feira')
        break

        case 6: console.log('sabado')
        break

        case 7: console.log ('domingo')
}