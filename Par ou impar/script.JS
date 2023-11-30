
function verificar(){
    var numero =document.getElementById('n')
    let res = document.getElementById('res')
    if( numero%2 == 0 ){
        res.innerHTML ='par'
     } else {
        res.innerHTML = 'impar'
    }
    }