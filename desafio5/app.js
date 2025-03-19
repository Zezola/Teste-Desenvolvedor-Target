const inverterString = (str) => {
    let strInvertida = ""
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i]
    }
    return strInvertida
}

const stringOriginal = "Cavalo"
const stringInvertida = inverterString(stringOriginal)

console.log("String Origina = ", stringOriginal)
console.log("String Invertida = ", stringInvertida)