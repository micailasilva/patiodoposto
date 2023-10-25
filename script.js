function calcular(){
    var valorEtanol = parseFloat (etanol.value)
    var valorGasolina = parseFloat (gasolina.value)

    var custo = (valorEtanol/valorGasolina)
    
    if (custo > 0.7){
          alert("Use Gasolina");
        }
        if (custo < 0.7) {
            alert ("Use Etanol");
        }
        if (custo == 0.7) {
            alert ("Tanto faz");
        }

}