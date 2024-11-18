let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let nivelContrasena = document.getElementById('nivelContrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';//desafio 1


function generar(){

    let numeroDigitado = parseInt(cantidad.value);

    console.log(numeroDigitado)
    if (numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8")
    }

    let password = '';
    for(let i = 0; i < numeroDigitado; i++){
         
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;
    }

    contrasena.value = password;

    if (!temNumero(password) || !temCaractereEspecial(password)) {
         nivelContrasena.innerHTML = 'La contraseña es débil. Debe contener al menos un número y un carácter especial';
    } else {
        nivelContrasena.innerHTML = 'La contraseña es fuerte';
    }
   
}

function temNumero(password) {
    return /\d/.test(password); // Verifica se contém pelo menos um dígito
}

function temCaractereEspecial(password) {
    return /[!@#$%^&*()]/.test(password); // Verifica se contém pelo menos um caractere especial
}


function limpiar(){//desafio 2
    contrasena.value = '';
}









