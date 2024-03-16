/*
const autos = [
    { id:1, marca: 'Ford', precio: 5000000, año: 2015, tipo: 'SUV' },
    { id:2, marca: 'Chevrolet', precio: 3000000, año: 2010, tipo: 'Coupe' },
    { id:3, marca: 'Citroen', precio: 4000000, año: 2018, tipo: 'Camioneta' },
    { id:4, marca: 'Fiat', precio: 8000000, año: 2021, tipo: 'Sedán' },
    { id:5, marca: 'Ford', precio: 6000000, año: 2013, tipo: 'Coupe' },
    { id:6, marca: 'Chevrolet', precio: 7000000, año: 2019, tipo: 'SUV' },
    { id:7, marca: 'Citroen', precio: 4500000, año: 2012, tipo: 'Camioneta' },
    { id:8, marca: 'Fiat', precio: 9000000, año: 2020, tipo: 'Sedán' },
    { id:9, marca: 'Ford', precio: 5500000, año: 2008, tipo: 'Coupe' },
    { id:10, marca: 'Chevrolet', precio: 3500000, año: 2011, tipo: 'Sedán' },
    { id:11, marca: 'Citroen', precio: 2200000, año: 2007, tipo: 'Camioneta' },
    { id:12, marca: 'Fiat', precio: 7500000, año: 2014, tipo: 'SUV' },
    { id:13, marca: 'Ford', precio: 2800000, año: 2006, tipo: 'Coupe' },
    { id:14, marca: 'Chevrolet', precio: 3200000, año: 2012, tipo: 'Sedán' },
    { id:15, marca: 'Citroen', precio: 3800000, año: 2009, tipo: 'Camioneta' },
];

alert ("Aqui tambien puedes adquirir un auto, es por esto que ahora te daremos una opciones para que filtres a tu conveniencia:")

const precioMaximo = 
console.log (precioMaximo);

const añoMinimo = 
console.log (añoMinimo);



const precioMax = parseInt(precioMaximo);
const añoMinimoNum = parseInt(añoMinimo);


const autosFiltradosPorPrecio = [];
const autosFiltradosPorAño = [];

// Filtrar autos según los criterios del usuario
autos.forEach(auto => {
    if (auto.precio <= precioMax) {
        autosFiltradosPorPrecio.push(auto);
    }

    if (auto.año >= añoMinimoNum) {
        autosFiltradosPorAño.push(auto);
    }
});

// filtra por precio del mas caro al mas barato
autosFiltradosPorPrecio.sort((a, b) => b.precio - a.precio);

//filtra por año del mas viejo al mas nuevo
autosFiltradosPorAño.sort((a, b) => a.año - b.año);


// Autos filtrados por precio
console.log('Autos filtrados por precio (ordenados de más caro a más barato):', autosFiltradosPorPrecio);

// Autos filtrados por año
console.log('Autos filtrados por año (ordenados de más viejo a más nuevo):', autosFiltradosPorAño);

alert ("Luego de elegir el que mas te guste, podes hacer una simulacion en nuestra calculadora para ver cuanto te saldria el seguro del auto en nuestra empresa, ingresa los datos correspondientes para darte los resultados optimos")
*/


function calculadoraseguro(Edad, valorAuto, marcaAuto, tipoAuto, tipoPlan) {
    // Aqui puse los costos por la marca del automóvil
    let valorFord = 2000;
    let valorChevrolet = 1500;
    let valorCitroen = 2500;
    let valorFiat = 1800;
    
    // Aqui puse los costos por el tipo de automóvil
    let valorSUV = 2000;
    let valorCoupe = 1500;
    let valorCamioneta = 2500;
    let valorSedan = 1800;
    
    // Aqui puse los valores para el tipo de plan
    let ValorBasico = 1000;
    let ValorPremium = 4000;
    
    let CostoMarca = 0;
    let CostoTipo = 0;
    let CostoPlan = 0;
    let CostoBase = valorAuto.value * 0.01;
    
    // Aca hago para que la calculadora tome los valores segun la opcion que elija el usuario de costo por marca
    switch (marcaAuto.value.toLowerCase()) {
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
    switch (tipoAuto.value.toLowerCase()) {
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
    switch (tipoPlan.value.toLowerCase()) {
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
}

const buttonClick = document.getElementById('buscarBtn');
buttonClick.addEventListener("click", () => {
    calculadoraseguro(Edad, ValorAuto, MarcaAuto, TipoAuto, TipoPlan);

let EdadLocal = parseInt(localStorage.setItem("Edad" , Edad));
console.log(EdadLocal);

let ValorAutoLocal = parseInt(localStorage.setItem("Valor del auto", CostoBase));
console.log(ValorAutoLocal);

let MarcaAutoLocal = localStorage.setItem("Tipo de marca elegida" , CostoMarca);
console.log(MarcaAutoLocal);

let TipoAutoLocal = localStorage.setItem("Tipo de auto elegido" , CostoTipo);
console.log(TipoAutoLocal);

let TipoPlanLocal = localStorage.setItem("Plan Elegido", CostoPlan);
console.log(TipoPlanLocal);

});


let Edad = document.getElementById('edad1');

Edad.addEventListener("input", (event) => {
    Edad = event.target.value;
    console.log(Edad);;
});

let ValorAuto = document.getElementById('valorauto1');

ValorAuto.addEventListener("input", (event) => {
    CostoBase = event.target.value;
    console.log(CostoBase);
;
});

let MarcaAuto = document.getElementById('marca1');

MarcaAuto.addEventListener("change", (event) => {
    CostoMarca = event.target.value;
    console.log(CostoMarca);
;
});

let TipoAuto = document.getElementById('tipe1');

TipoAuto.addEventListener("change", (event) => {
    CostoTipo = event.target.value;
    console.log(CostoTipo);
;
});

let TipoPlan = document.getElementById('plan1');

TipoPlan.addEventListener("change", (event) => {
    CostoPlan = event.target.value;
    console.log(CostoPlan);
;
});

