let valor = parseFloat(prompt("Digite o valor em metros para convereter"))
let opcao = prompt("Escolha uma das opções de conversão" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetros (hm)" +
    "\n6 - quilômetro (km)" 
)

switch (opcao) {
    case "1":
        alert("Resultado da Conversão de metros em milímetros: " + valor + "m = " +valor * 1000 + "mm")
        break

    case "2":
        alert("Resultado da Conversão de metros em centímetros: " + valor + "m = " +valor * 100 + "cm")
        break

        case "3":
        alert("Resultado da Conversão de metros em decímetros: " + valor + "m = " +valor * 10 + "dm")
        break

        case "4":
        alert("Resultado da Conversão de metros em decâmetros: " + valor + "m = " +valor / 10 + "dam")
        break

        case "5":
        alert("Resultado da Conversão de metros em hectômetros: " + valor + "m = " +valor / 100 + "hm")
        break

        case "6":
        alert("Resultado da Conversão de metros em quilômetros: " + valor + "m = " +valor / 1000 + "km")
        break
        default:
            ("Opção inválida!")
            break
    }