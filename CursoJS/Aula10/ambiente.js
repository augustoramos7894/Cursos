let num = [5, 8, 3, 2, 4]

num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor o vetor é ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor 8 está na posiçao ${pos}`)
}
 