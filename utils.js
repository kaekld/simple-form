function nameValidate (input_value){

    let name_chars = input_value.split("");
    let mayus_pos = 0;

    if ((/^[a-záéíóúüñ]$/i.test(name_chars[0])) || /^[A-ZÁÉÍÓÚÜ]$/.test(name_chars[0])) {
        name_chars[0] = name_chars[0].toUpperCase(); 
    } else name_chars[0] = ''

    for(i=1; i<name_chars.length; i++){

        // actualizar el id de la posicion de la mayuscula
        if(/^[A-ZÁÉÍÓÚÜ]$/.test(name_chars[i])) mayus_pos = i
        console.log("Mayus position = "+mayus_pos)

        if (name_chars[0] == ' ') name_chars[0] = ''
        if (name_chars[i-1] == ' ' && !(/^[A-ZÁÉÍÓÚÜ]$/i.test(name_chars[i]))) name_chars[i] = ''

        if (name_chars[i] == "'" && /^[A-ZÁÉÍÓÚÜ]$/i.test(name_chars[i+1]) ) name_chars[i] = ''

        if (name_chars[i] == "'" && !(i-1 == mayus_pos)) name_chars[i] = ''
        if (name_chars[i] == "." && !(i-2 == mayus_pos)) name_chars[i] = ''

        if (name_chars[i] == ' ' && (name_chars[i-1] == ' ' || name_chars[i+1] == ' ')) name_chars[i] = ''

        if (name_chars[i-1] == ' '){
            name_chars[i] = name_chars[i].toUpperCase() 
            continue
        } 

        // filtro para simbolos no validos
        if (/^[a-záéíóúüñ]$/i.test(name_chars[i]) && name_chars[i-1] != "'" && name_chars[i-1] != ".") {
            name_chars[i] = name_chars[i].toLowerCase();
        // aqui me evito que me bloquee determinados simbolos 
        } else if (name_chars[i] === ' ') name_chars[i] = ' ';
        else if (name_chars[i] === "'") name_chars[i] = "'";
        else if (name_chars[i] === ".") name_chars[i] = ".";
        else name_chars[i] = '';
    }

    console.log(name_chars)
    let result = name_chars.join('')
    return result
}

function lastnameValidate (input_value){

        let input_chars = input_value.split("");

        if (/^[a-záéíóúüñ]$/i.test(input_chars[0])) input_chars[0] = input_chars[0].toUpperCase()
        else input_chars[0] = ''

        for(i=1; i<input_chars.length; i++){
                if(/^[a-záéíóúüñ]+$/i.test(input_chars[i])) input_chars[i] = input_chars[i].toLowerCase()
                else input_chars[i] = ''
        }

        return input_chars.join('') 
}