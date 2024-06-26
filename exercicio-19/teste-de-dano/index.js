let personagen_1 = prompt("Digite o Nome do 1° Personagen:")
let poder_ataque = parseFloat(prompt("Digite o valor do poder de ataque!"))

let personagen_2 = prompt("Digite o nome do 2° Personagen:")
let pontos_de_vida = parseFloat(prompt("Qual o poder de Vida?"))
let pontos_de_defesa = parseFloat(prompt("Qual o total de pontos de Defesa do 2° personagen?"))
let escudo = prompt("Ele possui um escudo? (Sim/Não)")

let dano_causa = 0

if(poder_ataque > pontos_de_defesa && escudo === "Não"){
    dano_causa = poder_ataque - pontos_de_defesa
} else if (poder_ataque > pontos_de_defesa && escudo ==="Sim"){
    dano_causa = (poder_ataque - pontos_de_vida) / 2
}

pontos_de_vida -= dano_causa

alert(
    personagen_1 + " causou " + dano_causa + " pontos de dano em "
    + personagen_2
)
alert (
    personagen_1 + "\nPoder de Ataque: " +poder_ataque + "\n\n"
    +personagen_2+ "\nPontos de Vida: " +pontos_de_vida +
    "\nPoder de Defesa: " +pontos_de_defesa + "\nPossui escudo: "
    + escudo
)