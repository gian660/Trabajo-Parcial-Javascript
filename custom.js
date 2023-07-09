/* Al estar listo el documento */
$("document").ready(function () {

    /* Caputar evento Submit */
    $("#datosIngresados").submit(function () {
        return validarDatos();
    })
})

/* Función Validar Datos */
function validarDatos() {
    /* Preguntar si se envia formulario */
    let pregunta = confirm("¿Seguro que deseas enviar el registro?");

    if (pregunta) { // Caso presiona Aceptar

        /* Obtener campos */
        let inputName = $("#name")[0].value;
        let inputApellido1 = $("#lastname")[0].value;
        let inputApellido2 = $("#lastname2")[0].value;
        let inputEmail = $("#email")[0].value;
        let inputGenero = $("#genero")[0].value;

        // Validar Nombres
        if (inputName.length < 2) {
            alert('El nombre debe tener al menos 2 caracteres.');
            return false;
        }

        // Validar Apellido Paterno
        if (inputApellido1.length < 2) {
            alert('El apellido paterno debe tener al menos 2 caracteres.');
            return false;
        }

        // Validar Apellido Materno
        if (inputApellido2.length < 2) {
            alert('El apellido materno debe tener al menos 2 caracteres.');
            return false;
        }

        // Validar Email
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail) == false) {
            alert('Ingrese un email válido.');
            return false;
        }

        // Validar Genero
        if (inputGenero == '') {
            alert('Seleccione un genero.');
            return false;
        }

        // Validar Fecha de Nacimiento
        if (inputFecha == '') {
            alert('Ingrese una fecha de nacimiento.');
            return false;
        }

        // Si todas las validaciones pasaron, el formulario es válido
        return true;
        
    } else { // Caso presiona Cancelar

        return false;
    }
}