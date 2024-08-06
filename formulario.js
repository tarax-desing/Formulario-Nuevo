function validarNombre() {
    let nombreTxt = document.getElementById('nombre').value;
    let nombreErrorTxt = document.getElementById('nombreError');
    if (nombreTxt.trim().length < 3) {
        nombreErrorTxt.textContent = 'el nombre debe tener al menos 3 caracteres';
        return false;
    } else {
        nombreErrorTxt.textContent = '';
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


    } else {
        esCorrecto = false;
        emailErrorTxt.textContent = ' Por favor, introduce un email válido.';

    }
    return esCorrecto;

}
function validarPassword() {
   
    let passwordTxt = document.getElementById('password').value;
    let passwordErrorTxt = document.getElementById('passwordError');
    if(passwordTxt.trim() <6){
        passwordErrorTxt.textContent = 'La contraseá debe tener al menos 6 caracters';
        return false;


    }else{
        passwordErrorTxt.textContent =' contraseña correcta';
        return true;
    }
   

}
function confirmarPassword() {

    let passwordTxt = document.getElementById('confirmPassword').value;
    let confirmPasswordErrorTxt = document.getElementById('confirmPasswordError');
    if(passwordTxt.trim()) !== confirmPasswordTxt.trim()



    return true;

    }


   














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

        if (isNombreValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            alert('Formulario enviado con éxito!');

        } else {
            alert(' Por favor corrige los errores del formulario');
        }



    });
