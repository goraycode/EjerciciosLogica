
/* CONTRASEÑA SEGURA

Dado el nombre y la contrasela de varios usuarios hasta que se deseen, se le pide que solo acepte contraseña solo si cumple 
con los siguientes reglas:

- Para cumplir cumplir con el nivel de seguridad necesario, la contrasela debe tener más de 8 caracteres y debe incluir, caracteresde los siguientes:
 1. Una letra mayúscula del alfabeto (A-Z)
 2. Cualquier cantidad de letra minuscula del alfabeto (a-z)
 3. Cifras decimales (0-9)
 4. Caracteres especiales tales como !&*_-.

*/
function passwordValidet(password) {
    if (password.length >= 8) {

        //validar todos los demas filtros de seguridad
        let validaciones = [letraMayuscula(password), letraMinuscula(password), cifraDecimal(password), caracterEspecial(password)];

        console.log(validaciones);

        const passwordValidado = validaciones.every(valores => valores === true);

        if (passwordValidado) {
            console.log('contraseña valida');
        } else {
            console.log('no es valido');
        }


    } else {
        console.log('no es válido');
    }
}

function letraMayuscula(password) {
    let mayusculas = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let contieneMayuscula = false, contadorMayuscula = 0;

    for (let i = 0; i < mayusculas.length; i++) {
        if (password.includes(mayusculas[i])) {
            contieneMayuscula = true;
            contadorMayuscula++;
        }
    }

    if (contieneMayuscula && contadorMayuscula == 1) {
        return contieneMayuscula;
    } else {
        return contieneMayuscula;
    }
}

function letraMinuscula(password) {
    let minusculas = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let contieneMinuscula = false;

    for (let i = 0; i < minusculas.length; i++) {
        if (password.includes(minusculas[i])) {
            contieneMinuscula = true;

        }
    }

    return contieneMinuscula;

}

function cifraDecimal(password) {
    let digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let contieneDigito = false;

    for (let i = 0; i < digitos.length; i++) {
        if (password.includes(digitos[i])) {
            contieneDigito = true;
        }
    }

    return contieneDigito;

}

function caracterEspecial(password) {
    let especiales = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '=', '?', '@', '[', "\ ", ']', '^', '_', '`', '{', '|', '}', '~'];
    let contieneEspeciales = false;

    for (let i = 0; i < especiales.length; i++) {
        if (password.includes(especiales[i])) {
            contieneEspeciales = true;
        }
    }

    return contieneEspeciales;
}