const estaEmFibonnaci = (n) => {
    // Os dois primeiros numeros da sequencia
    let a = 0
    let b = 1
    if (n === 0 || n === 1) {
        return true
    }
    // Gerar a sequencia ate encontrar o numero ou ultrapassar
    while (b < n) {
        const temp = b
        b = a + b
        a = temp
    }
    // Se o numero é igual a b, ele está na sequencia
    return b === n
}

const numero = 22
if (estaEmFibonnaci(numero)) {
    console.log(`O numero ${numero} esta na sequencia de fibonacci`)
} else {
    console.log(`O numero ${numero} nao esta na sequencia de fibonacci`)
}