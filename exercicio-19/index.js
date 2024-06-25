let carro_1 = prompt("Digite o nome do Primeiro Carro:")
let velocidade_1 = prompt("Digita a Velociadade Máxima do carro")

let carro_2 = prompt("Digite o nome do Segundo Carro:")
let velocidade_2 = prompt("Digita a Velociadade Máxima do Segundo carro")

let vel_1 = parseFloat(velocidade_1)
let vel_2 = parseFloat(velocidade_2)


alert(
    "A velocidade do Primeiro Carro é: " + vel_1 + "Km/h\n" +
    "A velocidade do Segundo Carro é : " + vel_2 + "km/h\n" 

 )

 if (vel_1 > vel_2){
    alert("O " + carro_1 + " é mais rápido que o " + carro_2)
 }

 else if (vel_2 > vel_1){
    alert("O " + carro_2 + " é mais rápido que o " + carro_1)

 }else {
    alert("Os carros tem velocidades Iguais!")
 }
