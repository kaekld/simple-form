document.addEventListener('DOMContentLoaded', () => {
    const curp = document.getElementById('curp');
    const age = document.getElementById('age');
    const name = document.getElementById('name');
    const cp = document.getElementById('cp');
    const sex = document.getElementById('sex');
    const lastname_p = document.getElementById('lastname_p');
    const lastname_m = document.getElementById('lastname_m');
    const street = document.getElementById('street');
    const col = document.getElementById('col');
    const extnum = document.getElementById('extnum');
    const button = document.querySelector(".form_submit");

    curp.addEventListener('input', () => {
        let curp_copy = curp.value;

        if (curp_copy.length > 18) curp_copy = curp_copy.slice(0,19);
        let curp_p1 = curp_copy.slice(0,4).replace(/[^A-Z]/g, '');
        let curp_p2 = curp_copy.slice(4,10).replace(/[^0-9]/g, '');
        let curp_p3 = curp_copy.slice(10,16).replace(/[^A-Z]/g, '');
        let curp_p4 = curp_copy.slice(16,17).replace(/[^0-9A-Z]/g, '');
        let curp_p5 = curp_copy.slice(17,18).replace(/[^0-9]/g, '');

        curp.value = curp_p1 + curp_p2 + curp_p3 + curp_p4 + curp_p5
    });
    curp.addEventListener('focus', () => {
        curp.select();
    })

    // === VERIFICAR LA EDAD CORRECTAMENTE ===
    age.addEventListener('input', () =>{
        let age_copy = age.value;

        if (age_copy.length > 3) age_copy = age_copy.slice(0, 3);   
        if (age_copy[0] == '0') age_copy = age_copy.replace('0','')
        if (age_copy > 120) age_copy = age_copy.slice(0, 2);
        age_copy = age_copy.slice(0,4).replace(/[^0-9]/g,'')

        age.value = age_copy;

    })
    age.addEventListener('focus', () => {
        age.select();
    })

    // === EL CODIGO POSTAL NADA MÁS === 
    cp.addEventListener('input', () => {
        let cp_copy = cp.value;
        cp_copy = cp_copy.slice(0,5).replace(/[^0-9]/g,'')
        cp.value = cp_copy
    })
    cp.addEventListener('blur', () => {
        let cp_copy = cp.value;
        while (cp_copy.length < 5){
            cp_copy = cp_copy.slice(0, cp_copy.length) + '0'
        }
        cp.value = cp_copy
    })
    cp.addEventListener('focus', () => {
        cp.select();
    })

    // === VERIFICAR QUE EL SEXO NOMAS SEA H/M ===
    sex.addEventListener('input', () => {
        let sexInput = sex.value
        sexInput = /^[HhMm]$/.test(sexInput[0]) ? sexInput.toUpperCase() : ''
        sex.value = sexInput.slice(0,1)
    })
    sex.addEventListener('focus', () => {
        sex.select();
    })

    // === VERIFICACION DEL NOMBRE CON LOS REQUISITOS ===
    name.addEventListener('input', () => {
        let start = name.selectionStart;
        let end = name.selectionEnd;
        name.value = nameValidate(name.value)
        name.setSelectionRange(start, end);

    })
    name.addEventListener('focus', () => {
        name.select();
    })
    name.addEventListener('blur', () => {
        let name_chars = name.value.split("");
        name.value = name_chars.join('').replace(/\s+/g, ' ').trim();
        name.value = name.value.replace(/\s[A-ZÁÉÍÓÚÜÑ]\s/g, ' ');
        name.value = nameValidate(name.value)
    })

    // === VERIFICACION DEL APELLIDO PARTERNO CON LOS REQUISITOS ===
    lastname_p.addEventListener('input', () =>{
        let start = lastname_p.selectionStart;
        let end = lastname_p.selectionEnd;
        lastname_p.value = lastnameValidate(lastname_p.value)
        lastname_p.setSelectionRange(start, end);

    })
    lastname_p.addEventListener('focus', () => {
        lastname_p.select();
    })
    lastname_p.addEventListener('blur' , ()=>{
        lastname_p.value = lastnameValidate(lastname_p.value)
    })

    // === VERIFICACION DEL APELLIDO PARTERNO CON LOS REQUISITOS ===
    lastname_m.addEventListener('input', () =>{
        let start = lastname_m.selectionStart;
        let end = lastname_m.selectionEnd;
        lastname_m.value = lastnameValidate(lastname_m.value)
        lastname_m.setSelectionRange(start, end);

    })
    lastname_m.addEventListener('focus', () => {
        lastname_m.select();
    })
    lastname_m.addEventListener('blur' , ()=>{
        lastname_m.value = lastnameValidate(lastname_m.value)
    })


    street.addEventListener('input', () => {
        street.value = street.value.replace(/[^A-Za-záéíóúüÁÉÍÓÚÜñÑ0-9\s]/g, '')
        let street_chars = street.value.split('');
        for(let i=0; i<street_chars.length; i++){
            if (street_chars[i] == ' ' && street_chars[i-1] == ' ' ) street_chars[i] = ''
        }        
        street.value = street_chars.join('')
    })
    street.addEventListener('focus', () => {
        street.select();
    })

    col.addEventListener('input', () => {
        col.value = col.value.replace(/[^A-Za-záéíóúüÁÉÍÓÚÜñÑ0-9\s]/g, '')
        let col_chars = col.value.split('');
        for(let i=0; i<col_chars.length; i++){
            if (col_chars[i] == ' ' && col_chars[i-1] == ' ' ) col_chars[i] = ''
        }        
        col.value = col_chars.join('')      
    })
    col.addEventListener('focus', () => {
        col.select();
    })

    extnum.addEventListener('input', ()=>{
        let extnum_chars = extnum.value.split('')
        let band = false
        let end = 8
        for(let i=0; i<extnum_chars.length; i++){
            if (extnum_chars[i] == ' ') band = true
            if (!(/^[0-9]$/.test(extnum_chars[i])) && !band) extnum_chars[i] = '' 
            if (band && extnum_chars[i]!=' '){
                extnum_chars[i] = extnum_chars[i].replace(/[^A-Z]/g, '')
                end = i+1
            }
        }
        extnum.value = extnum_chars.join('').slice(0,end)
    })
    extnum.addEventListener('focus', () => {
        extnum.select();
    })

    button.addEventListener('click', (e) =>{
        e.preventDefault();
        if (
            curp.value.length < 18 ||
            name.value.length < 2  ||
            age.value == ''  ||
            cp.value == ''  ||
            lastname_m.value.length < 2  ||
            lastname_p.value.length < 2 ||
            street.value.length < 2 || 
            col.value.length < 2 ||
            extnum.value == '' 
        ){
            document.getElementById('message').innerHTML = `<p class="message">DEBES RELLENAR TODOS LOS CAMPOS</p>`
        } else {
            document.querySelector('.form').reset()
            document.getElementById('message').innerHTML = `<p class="message">DATOS ENVIADOS CORRECTAMENTE</p>`
        }
    })

});