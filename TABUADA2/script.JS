function gerar () {
    let de = document.getElementById('txtn')
    let tab = document.getElementById('tab')
  if(de.value.length <= 0){
        window.alert('[Erro], valor inválido')
    } else {
        let n = Number(de.value)
        let c = 1
        tab.innerHTML = ''
    while (c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value =`tab${c}`
        tab.appendChild(item)
        c++
    }
} 
}