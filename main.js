function calculadoraseguro(Edad, ValorAuto, MarcaAuto, TipoAuto, TipoPlan) {
    // Aquí puse los costos por la marca del automóvil
    let valorFord = 2000;
    let valorChevrolet = 1500;
    let valorCitroen = 2500;
    let valorFiat = 1800;
    
    // Aquí puse los costos por el tipo de automóvil
    let valorSUV = 2000;
    let valorCoupe = 1500;
    let valorCamioneta = 2500;
    let valorSedan = 1800;
    
    // Aquí puse los valores para el tipo de plan
    let ValorBasico = 1000;
    let ValorPremium = 4000;
    
    let CostoMarca = 0;
    let CostoTipo = 0;
    let CostoPlan = 0;
    let CostoBase = ValorAuto * 0.01; // Ya no es necesario usar .value
    
    // Aca hago para que la calculadora tome los valores segun la opcion que elija el usuario de costo por marca
    switch (MarcaAuto.toLowerCase()) { // No es necesario usar .value y toLowerCase() en este contexto
        case "ford":
            CostoMarca = valorFord;
            break;
        case "chevrolet":
            CostoMarca = valorChevrolet;
            break;
        case "citroen":
            CostoMarca = valorCitroen;
            break;
        case "fiat":
            CostoMarca = valorFiat;
            break;
        default:
            alert("Marca de automóvil no reconocida.");
    }
    
    // Aca lo mismo que lo anterior solo que por costo de tipo de automóvil
    switch (TipoAuto.toLowerCase()) { // No es necesario usar .value y toLowerCase() en este contexto
        case "suv":
            CostoTipo = valorSUV;
            break;
        case "coupe":
            CostoTipo = valorCoupe;
            break;
        case "camioneta":
            CostoTipo = valorCamioneta;
            break;
        case "sedan":
            CostoTipo = valorSedan;
            break;
        default:
            alert("Tipo de automóvil no reconocido.");
    }
    
    // Costo por tipo de plan
    switch (TipoPlan.toLowerCase()) { // No es necesario usar .value y toLowerCase() en este contexto
        case "basico":
            CostoPlan = ValorBasico;
            break;
        case "premium":
            CostoPlan = ValorPremium;
            break;
        default:
            alert("Tipo de plan no reconocido.");
    }
    
    // Sumamos los Costos parciales
    let costoTotal = CostoBase + CostoMarca + CostoTipo + CostoPlan;
    
    // Aplicar aumento del 10% si la edad supera los 70 años por los riesgos de menor vision y reflejos que presentan, uso el if ya que en caso de que sea menor no se aplica ese 10%
    if (parseInt(Edad) > 70) {
        costoTotal *= 1.1;
    }

    document.getElementById('resultadoSeguro').textContent = "El costo total del seguro es: $" + costoTotal.toFixed(2);
    document.getElementById('resultadoSeguro').style.color = "blue";
    document.getElementById('resultadoSeguro').style.fontWeight = "bold";

    //localStorage
    localStorage.setItem("Edad", Edad);
    localStorage.setItem("Valor del auto", ValorAuto);
    localStorage.setItem("Tipo de marca elegida", MarcaAuto);
    localStorage.setItem("Tipo de auto elegido", TipoAuto);
    localStorage.setItem("Plan Elegido", TipoPlan);
}

const buttonClick = document.getElementById('buscarBtn');
buttonClick.addEventListener("click", () => {
    let Edad = document.getElementById('edad1').value;
    let ValorAuto = document.getElementById('valorauto1').value;
    let MarcaAuto = document.getElementById('marca1').value;
    let TipoAuto = document.getElementById('tipe1').value;
    let TipoPlan = document.getElementById('plan1').value;

    calculadoraseguro(Edad, ValorAuto, MarcaAuto, TipoAuto, TipoPlan);
});

// VALUE
window.onload = function() {
    document.getElementById('edad1').value = localStorage.getItem("Edad") || '';
    document.getElementById('valorauto1').value = localStorage.getItem("Valor del auto") || '';
    document.getElementById('marca1').value = localStorage.getItem("Tipo de marca elegida") || '';
    document.getElementById('tipe1').value = localStorage.getItem("Tipo de auto elegido") || '';
    document.getElementById('plan1').value = localStorage.getItem("Plan Elegido") || '';
};
