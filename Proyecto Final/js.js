
//Al no poder enviarse el formulario, la página no se recarga y queda visualizado el requerimiento de campo
document.getElementById("Enviar datos").onclick = function () {

 document.getElementById("Comentario Boton").innerHTML = "Se deben completar todos los campos requeridos"
}

document.getElementById("ir_al_cielo").onclick = function () {
    window.scrollTo(0,0)
}

document.getElementById("info_personal").addEventListener('click', function () {
    document.getElementById("DNI").innerHTML="DNI: 37489632"
    document.getElementById("EDAD").innerHTML="EDAD: 29 años"
    document.getElementById("DIRECCION").innerHTML="DIRECCION: Mozart 250 - Río Cuarto"
    document.getElementById("CORREO").innerHTML="CORREO: nico_cardi@hotmail.com"
    document.getElementById("ESTADO_CIVIL").innerHTML="ESTADO CIVIL: soltero; sin hijos"

})

document.getElementById("Cerrar_info").addEventListener('click', function () {
    document.getElementById("DNI").innerHTML="DNI"
    document.getElementById("EDAD").innerHTML="EDAD"
    document.getElementById("DIRECCION").innerHTML="DIRECCION"
    document.getElementById("CORREO").innerHTML="CORREO"
    document.getElementById("ESTADO_CIVIL").innerHTML="ESTADO CIVIL"
})


