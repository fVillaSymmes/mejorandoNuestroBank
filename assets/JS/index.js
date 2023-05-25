const cajonTotal = document.getElementById("cajonTotal")
const cajonInteres = document.getElementById("cajonInteres")
const cajonCuotas = document.getElementById("cajonCuotas")
const boton = document.getElementById("boton")
const cajonMensaje = document.getElementById("cajonMensaje")

const valor = () => {
    let interes = 100/cajonInteres.value
    let cuota = (cajonTotal.value / cajonCuotas.value)
    let extra = cuota/interes
    return (cuota + extra).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
const calcular = () => {
    cajonMensaje.innerHTML = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${cajonCuotas.value} CUOTAS DE $${valor()}`
}


const validador = () => {
    (cajonCuotas.value != "" && cajonInteres.value != "" && cajonTotal.value != "") ? calcular() : alert("Rellene todos los campos")
}

boton.addEventListener("click", validador)

