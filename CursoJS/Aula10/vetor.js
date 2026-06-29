let valores = [1, 2, 4, 5, 7, 9, 3, 4, 5, 6, 3]
 valores.sort()
 
/*for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}