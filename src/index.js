const calcularImpostoDeRendaRetido = require("./calculo_imposto_de_renda");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const readline = require('readline');

const input = readline.createInterface(
    process.stdin,
    process.stdout
)

input.question("Nome do funcionario ? ", (nomeDigitado) => {
    input.question("Cpf do funcionario ? ", (cpfDigitado) => {
        input.question("Mes do pagamento (numerico) ? ", (mesDigitado) => {
            input.question("Salario Bruto do funcionario ? ", (salarioBrutoDigitado) => {
                console.log(`--- Folha de Pagamento --- 
                \nNome: ${nomeDigitado} 
                \nCPF: ${cpfDigitado} 
                \nSalario Bruto: R$ ${salarioBrutoDigitado} 
                \nINSS: R$ ${calcularInss(salarioBrutoDigitado)}
                \nImposto de Renda: R$ ${calcularImpostoDeRendaRetido(salarioBrutoDigitado)}
                \nSalarioLiquido: R$ ${calcularSalarioLiquido(salarioBrutoDigitado)}
                `)
                input.close()
            })
        })
    })
})
