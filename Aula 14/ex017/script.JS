function verificar (){
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var n3 = document.getElementById('n3')
    var pf = document.getElementById('pf')

   if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
    window.alert('[Erro] Faltam dados!')
   } else {
    pf.innerHTML = 'contando'
    let i = Number(n1.value)
    let f = Number(n2.value)
    let p = Number(n3.value)

    if(p <= 0){
      window.alert('Passo inválido! considerando passo 1')
      p = 1
    }

    if( i < f) {
    for(let c = i; c <= f; c += p) {
      pf.innerHTML += ` ${c} \u{1F449}	`
      //contagem crescente
    }
   
   } else {
     for(let c = i; c >= f; c -= p){
      pf.innerHTML += ` ${c} \u{1F449}`
      //contagem decrescente
     }
   }
  }
   pf.innerHTML += '\u{1f3c1}'
}

