
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let res = document.getElementById('res')
    let valores = []

    function isnumero(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        } else {
            return false
        }

    }

    function inlista(n, l){
        if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
} 

    function adicionar(){
    if(isnumero(num.value) && ! inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / tot
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]

    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.`
    res.innerHTML += `<p> O maior número informado foi ${maior}.</p>`   
    res.innerHTML += `<p> O menor número informado foi ${menor}.</p>`     
    res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
    res.innerHTML += `<p> A média dos valores é ${media}.`
}

}
}