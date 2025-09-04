document.addEventListener('DOMContentLoaded', () => {
    
    const curp = document.getElementById('curp');
    const age = document.getElementById('age');
    const name = document.getElementById('name');
    const cp = document.getElementById('cp');

    // evento para el input en el campo del curp 
    curp.addEventListener('input', () => {

        // variable temporal para copiar la cadena del curp y manipularlo
        let curp_copy = curp.value;

        if (curp_copy.length > 18) curp_copy = curp_copy.slice(0,19);
        let curp_p1 = curp_copy.slice(0,4).replace(/[^A-Z]/g, '');
        let curp_p2 = curp_copy.slice(4,10).replace(/[^0-9]/g, '');
        let curp_p3 = curp_copy.slice(10,16).replace(/[^A-Z]/g, '');
        let curp_p4 = curp_copy.slice(16,17).replace(/[^0-9A-Z]/g, '');
        let curp_p5 = curp_copy.slice(17,18).replace(/[^0-9]/g, '');

        curp.value = curp_p1 + curp_p2 + curp_p3 + curp_p4 + curp_p5
    });

    age.addEventListener('input', () =>{
        let age_copy = age.value;

        if (age_copy.length > 3) age_copy = age_copy.slice(0, 3);   
        if (age_copy[0] == '0') age_copy = age_copy.replace('0','')
        if (age_copy > 120) age_copy = age_copy.slice(0, 2);
        age_copy = age_copy.slice(0,4).replace(/[^0-9]/g,'')

        age.value = age_copy

    })

    name.addEventListener('input', () =>{
        let name_copy = name.value;
        // Pendiente...
    })


});