// funcion de radio

let formMascota = document.forms.mascotas;

function opcionMascota() {
    alert(`La opcion que se selecciono fue ${formMascota.opciones.value}`)
}

// Calculando el mayor

let formularioDos = document.forms.numeros;

function cualEsMayor() {
    let nro1 = parseFloat(formularioDos.nro1.value);
    let nro2 = parseFloat(formularioDos.nro2.value) ;

    console.log("nro1", nro1, "nro2", nro2);
    if(!isNaN(nro1) && !isNaN(nro2)) {
        let nro = nro1 == nro2 ? 0 : nro1 > nro2 ? nro1 : nro2;
        if (nro == 0) {
            alert(`Los dos nros son iguales. ${nro1} ${nro2}`);
        } else {
            alert(`El nro ${nro} es el mayor`);
        }
    } else{
        alert("Ingrese solo numeros");
    }   
}

// Funcion de suma

let formularioSuma = document.forms.SumaNumeros;

function sumando() {
    let nro1 = parseFloat(SumaNumeros.nro1a.value);
    let nro2 = parseFloat(SumaNumeros.nro2a.value);

    if(!isNaN(nro1) && !isNaN(nro2)){
        alert(`El total es: ${nro1 + nro2}`);
    } else{
        alert("Ingrese solo numeros");
    } 

}