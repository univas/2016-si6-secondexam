function verificarSituacao(id) {
    let nota = calcularNota(grades);
    let media = calcularMedia(soma);
    
    var response = {
        nota: nota,
        media: media,
       
    };
    return response;
}

function calcularNota(grades) {
   var i;
   for(i=0;i<=4;i++){
       soma++;
   }
  
}

function calcularMedia(soma){
    if((parseFloat)(soma) / 4 >= 60){
        callback("Aprovado");
        
    } 
    if((parseFloat)(soma) / 4 >= 50 && (parseFloat)(soma) / 4 < 60){
        callback("Final");
    }
    
    if((parseFloat)(soma) / 4 < 50){
        callback("Reprovado");
    }
}

