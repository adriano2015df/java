let saldo = parseFloat(prompt("Qual o saldo Inicial?"))
let opcao = ""

do {
    opcao = prompt(
        "Saldo Disponível: R$ " + saldo +
        "\n1 - Adicionar Dinheiro" +
        "\n2 - Retirar Dinheiro" +
        "\n3 - Sair"
    )
    switch (opcao) {
        case "1": 
        saldo += parseFloat(prompt("Informe o valor a ser Adicionado:"))
        break
        case "2":
            saldo -= parseFloat(prompt("Informe o valor da Retirada:"))
            break
        case "3":
            alert("Saindo...")
            break
            default:
                alert("Entrada Inválida!")    
    }
} while (opcao !== "3");