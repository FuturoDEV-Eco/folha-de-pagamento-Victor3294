const calcularImpostoDeRendaRetido = require("./calculo_imposto_de_renda");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const readline = require('readline');
const fs = require('fs')
const pdfDocument = require('pdfkit');

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
                \nINSS: R$ ${calcularInss(Number(salarioBrutoDigitado))}
                \nImposto de Renda: R$ ${calcularImpostoDeRendaRetido(Number(salarioBrutoDigitado))}
                \nSalarioLiquido: R$ ${calcularSalarioLiquido(Number(salarioBrutoDigitado))}
                `)
                input.question("Deseja gerar um PDF com essas informações ?(S/N) ", (respostaDigitada) => {
                    if(respostaDigitada.toLocaleUpperCase() === "S"){
                        const doc = new pdfDocument();
                        doc.pipe(fs.createWriteStream('folha_de_pagamento.pdf'))
                        doc.fontSize(16)
                        doc.text("--- Folha de Pagamento ---")
                        doc.text(`Data de geração: ${new Date().toLocaleDateString()}`)
                        doc.text(`Nome: ${nomeDigitado}`)
                        doc.text(`CPF: ${cpfDigitado}`)
                        doc.text('--- ---')
                        doc.text(`Salario Bruto: R$ ${Number(salarioBrutoDigitado).toFixed(2)}`)
                        doc.text('--- ---')
                        doc.text(`INSS: R$ ${calcularInss(Number(salarioBrutoDigitado)).toFixed(2)}`)
                        doc.text(`Imposto de Renda: R$ ${calcularImpostoDeRendaRetido(Number(salarioBrutoDigitado)).toFixed(2)}`)
                        doc.text('Outros Descontos: R$ 0,00')
                        doc.text('--- ---')
                        doc.text(`Salário Líquido: R$ ${calcularSalarioLiquido(Number(salarioBrutoDigitado)).toFixed(2)}`)
                        doc.end()
                        console.log("Folha de pagamento salva em folha_de_pagamento.pdf")
                    }
                    input.close()
                })
            })
        })
    })
})


