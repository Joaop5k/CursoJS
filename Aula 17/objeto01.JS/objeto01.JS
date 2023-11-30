let amigo = {nome:'João pedro',
sexo:'Masculino',
peso:73.4,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg...`)