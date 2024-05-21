const calcularImpostoDeRendaRetido = require("./calculo_imposto_de_renda");
const calcularInss = require("./calculo_inss");

function calcularSalarioLiquido (salarioBruto){
    let inss = calcularInss(salarioBruto)
    let impostoDeRenda = calcularImpostoDeRendaRetido(salarioBruto)
    let salarioLiquido = (salarioBruto - impostoDeRenda) - inss
    return salarioLiquido
}

module.exports = calcularSalarioLiquido