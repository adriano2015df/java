const turista = prompt("Bem vindo turista! Digite seu nome:")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual o nome da cidade que você vivsitou?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você vicitou alguma outra cidade? (Sim/Nâo)")

}
 alert (
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: \n" + cidades
 )