// FUNCION PARA VALIDAR NOMBRE
const nameValidate = (input_value) => {
    let name_chars = input_value.split("");
    let mayus_pos = 0;
    
    if ((/^[a-záéíóúüñ]$/i.test(name_chars[0])) || /^[A-ZÁÉÍÓÚÜ]$/.test(name_chars[0])) {
        name_chars[0] = name_chars[0].toUpperCase();
    } else {
        name_chars[0] = '';
    }
    
    for(let i = 1; i < name_chars.length; i++){
        if(/^[A-ZÁÉÍÓÚÜ]$/.test(name_chars[i])) mayus_pos = i;
        console.log("Mayus position = " + mayus_pos);
        
        if (name_chars[0] === ' ') name_chars[0] = '';
        if (name_chars[i-1] === ' ' && !(/^[A-ZÁÉÍÓÚÜ]$/i.test(name_chars[i]))) name_chars[i] = '';
        if (name_chars[i] === "'" && /^[A-ZÁÉÍÓÚÜ]$/i.test(name_chars[i+1])) name_chars[i] = '';
        if (name_chars[i] === "'" && !(i-1 === mayus_pos)) name_chars[i] = '';
        if (name_chars[i] === "." && !(i-2 === mayus_pos)) name_chars[i] = '';
        if (name_chars[i] === ' ' && (name_chars[i-1] === ' ' || name_chars[i+1] === ' ')) name_chars[i] = '';
        
        if (name_chars[i-1] === ' '){
            name_chars[i] = name_chars[i].toUpperCase();
            continue;
        }
        
        if (/^[a-záéíóúüñ]$/i.test(name_chars[i]) && name_chars[i-1] !== "'" && name_chars[i-1] !== ".") {
            name_chars[i] = name_chars[i].toLowerCase();
        } else if (name_chars[i] === ' ') {
            name_chars[i] = ' ';
        } else if (name_chars[i] === "'") {
            name_chars[i] = "'";
        } else if (name_chars[i] === ".") {
            name_chars[i] = ".";
        } else {
            name_chars[i] = '';
        }
    }
    
    console.log(name_chars);
    return name_chars.join('');
};

// FUNCION PARA VALIDAR LOS APELLIDOS
const lastnameValidate = (input_value) => {
       let name_chars = input_value.split("");
    let mayus_pos = 0;
    
    if ((/^[a-záéíóúüñ]$/i.test(name_chars[0])) || /^[A-ZÁÉÍÓÚÜ]$/.test(name_chars[0])) {
        name_chars[0] = name_chars[0].toUpperCase();
    } else {
        name_chars[0] = '';
    }
    
    for(let i = 1; i < name_chars.length; i++){
        if(/^[A-ZÁÉÍÓÚÜ]$/.test(name_chars[i])) mayus_pos = i;
        console.log("Mayus position = " + mayus_pos);
        
        if (name_chars[0] === ' ') name_chars[0] = '';
        if (name_chars[i-1] === ' ' && !(/^[A-ZÁÉÍÓÚÜ]$/i.test(name_chars[i]))) name_chars[i] = '';
        if (name_chars[i] === ' ' && (name_chars[i-1] === ' ' || name_chars[i+1] === ' ')) name_chars[i] = '';
        
        if (name_chars[i-1] === ' '){
            name_chars[i] = name_chars[i].toUpperCase();
            continue;
        }
        
        if (/^[a-záéíóúüñ]$/i.test(name_chars[i]) && name_chars[i-1] !== "'" && name_chars[i-1] !== ".") {
            name_chars[i] = name_chars[i].toLowerCase();
        } else if (name_chars[i] === ' ') {
            name_chars[i] = ' ';
        } else {
            name_chars[i] = '';
        }
    }
    
    return name_chars.join('');
};

// FUNCION PARA VALIDAR NOMBRE DE CALLE Y COLONIA
const streetValidate = (street) => {
    let mayusPos = 0;
    let streetInput = street.split('');
   
    if (streetInput.length > 0) {
        if (/^[A-ZÁÉÍÓÚÜÑ]/i.test(streetInput[0])) streetInput[0] = streetInput[0].toUpperCase()
        else if (!(/^[0-9]/.test(streetInput[0]))) streetInput[0] = ''
        
    }
   
    for(let i = 1; i < streetInput.length; i++){
        if (streetInput[i] === ' ' && streetInput[i-1] === ' ') {
            streetInput[i] = '';
            continue;
        }
       
        if (streetInput[i] === ' '){
            mayusPos = i + 1;
            continue;
        }
        
        if (/^[0-9]$/.test(streetInput[i-1]) && /^[A-ZÁÉÍÓÚÜÑ]$/i.test(streetInput[i])) {
            streetInput[i] = '';
            continue;
        }
        
        if (/^[A-ZÁÉÍÓÚÜÑ]$/i.test(streetInput[i-1]) && /^[0-9]$/.test(streetInput[i])) {
            streetInput[i] = '';
            continue;
        }
       
        if(/^[A-ZÁÉÍÓÚÜÑ]/i.test(streetInput[i])){
            if (i > mayusPos && streetInput[i] !== ' ') {
                streetInput[i] = streetInput[i].toLowerCase();
            } else if (i === mayusPos) {
                streetInput[i] = streetInput[i].toUpperCase();
            }
        }
        else if (!/^[0-9]$/.test(streetInput[i])) {
            streetInput[i] = '';
        }
    }
   
    return streetInput.join('');
};

const invalidNotification = (value, callback) => {
    if (callback(value.value)) {
            value.style["color"] = "#860b0bff";
            value.style["background-color"] = "#ebddddff";
            value.style["transition"] = ".5s"
        }else{
            value.style["color"] = "#000000ff";
            value.style["background-color"] = "#ffffffff";
            value.style["transition"] = ".5s"
        }
}