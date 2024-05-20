function calcularImpostoDeRendaRetido(salarioBruto){
    let impostoDeRenda = 0;
    if(salarioBruto <= 2112){
        impostoDeRenda = 0;
    }
    else if (salarioBruto >= 2112.01 && salarioBruto <= 2826.65){
        impostoDeRenda = (salarioBruto * (7.5 / 100)) - 158.40
    }
    else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
        impostoDeRenda = (salarioBruto * (15 / 100)) - 370.40
    }
    else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
        impostoDeRenda = (salarioBruto * (22.5 / 100)) - 651.73
    }
    else{
        impostoDeRenda = (salarioBruto * (27.5 / 100)) - 884.96
    }
    return impostoDeRenda
}

module.exports =  calcularImpostoDeRendaRetido