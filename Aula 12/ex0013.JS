var agora = new Date()
var hora = agora.getHours()
console.log(`Àgora são exatamente ${hora} horas.`)
if (hora >= 6 && hora <= 12){
    console.log('Bom dia')
} else if (hora >= 13 && hora <= 18){
    console.log('Boa tarde')
} else if ( hora >= 18 ){
    console.log('Boa noite')
} else if (hora >= 1 && hora <=5 ){
    console.log('Boa madrugada')
}  else {
    console.log('Bom dia')
}


