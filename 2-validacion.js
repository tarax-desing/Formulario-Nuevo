function validarNombre() {
    let nombreTxt = document.getElementById('nombre').value;
    let nombreErrorTxt = document.getElementById('nombreError');
    if (nombreTxt.trim().length < 3) {
        nombreErrorTxt.textContent = 'el nombre debe tener al menos 3 caracteres.';
        document.getElementById('nombre').classList.add('error-input');
        document.getElementById('nombre').classList.remove('succes');
        return false;
    } else {
        nombreErrorTxt.textContent = '';
        document.getElementById('nombre').classList.remove('succes');
        document.getElementById('nombre').classList.add('error-input');
        return true;
    }


}
function validarEmail() {
    let esCorrecto = true;
    let emailTxt = document.getElementById('email').value;
    let emailErrorTxt = document.getElementById('emailError');
    let emailRegex = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})*/$");


    if (emailRegex.test(emailTxt.trim())) {
        emailErrorTxt.textContent = '';
        document.getElementById('mail').classList.add('error-input');
        document.getElementById('mail').classList.remove('succes');
        return false;
    } else {
        esCorrecto = false;
        emailErrorTxt.textContent = ' Por favor, introduce un email válido.';
        // document.getElementById('mail').classList.remove('succes');
        // document.getElementById('mail').classList.add('error-input');

        return true;

    }


}
function validarPassword() {

    let passwordTxt = document.getElementById('password').value;
    let passwordErrorTxt = document.getElementById('passwordError');
    if (passwordTxt.trim() < 6) {
        passwordErrorTxt.textContent = 'La contraseá debe tener al menos 6 caracters';
        document.getElementById('password').classList.add('error-input');
        document.getElementById('password').classList.remove('succes');
        return false;


    } else {
        passwordErrorTxt.textContent = ' contraseña correcta';
        document.getElementById('password').classList.remove('succes');
        document.getElementById('password').classList.add('error-input');
        return true;
    }


}
function confirmarPassword() {

    let confirpasswordTxt = document.getElementById('confirmPassword').value;
    let passwordTxt = document.getElementById('password').value;
    let confirmPasswordErrorTxt = document.getElementById('confirmPassword');
    if (passwordTxt.trim() !== confirpasswordTxt.trim()

    ) {
        passwordTxt.textContent = ' confirmado';

        document.getElementById('confirmPassword').classList.add('error-input');
        document.getElementById('confirmPassword').classList.remove('succes');
        return true;

    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarFecha() {
    let fechaUsuarioTxt = document.getElementById('fecha').value;


    let fechaUsuarioErrorTxt = document.getElementById
        ('fechaNacimientoError');
    let fechaActual = new Date();

    let fechaMinima = new Date(
        fechaActual.getFullYear() - 120,
        fechaActual.getMonth(),
        fechaActual.getDay()
    );


    fechaUsuarioTxt = new Date(fechaUsuarioTxt);

if(fechaUsuarioTxt > fechaActual || fechaUsuarioTxt < fechaMinima){
    fechaError.textContent = ' por favor introduce fecha válida.';
    document.getElementById('fecha').classList.add('error-input');
    document.getElementById('fecha').classList.remove('success');
    return false;
    //error

}else{
    //correcto
    fechaError.textContent = ' ';
    document.getElementById('fecha').classList.add('succes');
    document.getElementById('fecha').classList.remove('error-input');
    return true;
}


}


//validar q la fecha de nacimiento sea anterior a la actual y que no sea mayour d 120 años


function validarTelefono() {
    let telefono = document.getElementById('telefono').value;
    let telefonoErrorTxt = document.getElementById('telefonoError');
    let telefonoTxt =  Regex = ("^(\\+\\d{1,3}[- ]?)?\\d{10}$");

    if(telefonoRegex.test(telefonoTxt.trim().length < 20 && telefonoTxt.trim().length > 6)){
        telefonoErrorTxt.textContent = "Por favor, introduce un número de teléfono válido.";
        document.getElementById('telefono').classList.add ('error-input');
        document.getElementById('telefono').classList.remove('success');
        return true;
    }else{
        telefonoErrorTxt.textContent = ''.
     
        document.getElementById('telefono').classList.remove ('succes');
        document.getElementById('telefono').classList.add('error-input');
        return false;
    }



}
//telef-Válido



// Agregar eventos de escucha para la validación en tiempor real
document.getElementById('nombre').addEventListener('input', validarNombre);
document.getElementById('email').addEventListener('input', validarEmail);
document.getElementById('password').addEventListener('input', validarPassword);
document.getElementById('confirmPassword').addEventListener('input', confirmarPassword);
document.getElementById('fecha').addEventListener('input', validarFecha);
document.getElementById('telefono').addEventListener('input', validarTelefono);








//capturar evento submit
document.getElementById("registroForm").addEventListener
    ("submit", function (event) {
        //esta función recibe un argumento de tipo event, 



        //detiene el comportamiento del submit
        event.preventDefault();
        console.log("event:", event);
        //especifica el tipo de evento
        console.log('Tipo de evento', event.type);
        //contiene una referencia al Dom que dispara el evento
        console.log('Elemento currentTarget', event.currentTarget);
        console.log('Tipo de evento', event.target);
        //tiempo en milisegundos en que ocurrió el evento
        console.log('Es confiable', event.isTrusted);
        //booleano que indica si el evento fue iniciado por un usuario o un scrip


        let isNombreValid = validarNombre();
        let isEmailValid = validarEmail();
        let isPasswordValid = validarPassword();
        let isConfirmPasswordValid = confirmarPassword();
        let isfechaValid = validarFecha();
        let istelefonoValid = validarTelefono();


        if (isNombreValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            alert('Formulario enviado con éxito!');

        } else {
            alert(' Por favor corrige los errores del formulario');
        }



    });



//agregar eventos para la validación en tiempo real
//Evento input
