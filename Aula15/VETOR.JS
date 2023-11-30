let valores = [1, 8, 2, 6, 4, 3]
console.log(valores)
/*for(let pos =0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for( let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
} 
