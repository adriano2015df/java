const numero = parseFloat(prompt("Qual número  você deseja calcular a tabuada?"))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " X " + fator + " = "
+(numero * fator) + "\n"
}

alert (
    "Resultado da Tabuada de " + numero + ":\n\n" +resultado
)