function calculateStatus(status){
    let aprovado = calculateStatus(status)
    let final = calculateStatus(status)
    let reprovado = calculateStatus(status)
    
    var response = {
        aprovado : aprovado,
        final : final,
        reprovado : reprovado
    }
}

function calculateAprovado(notas) {
    if (notas >= 60) {
        console.log("Aprovado")
    }   
}

function calculateFinal(notas) {
    if (notas >=50 && notas <60) {
        Console.log("Final")
    }
}

function calculateReprovado(notas) {
    if (notas < 50) {
        console.log("Reprovado")   
    }       
}

module.exports = calculateAprovado;
module.exports = calculateFinal;
module.exports = calculateReprovado;



