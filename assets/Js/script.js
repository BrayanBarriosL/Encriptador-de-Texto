//e - enter
//o - ober
//i - imes 
//a - ai
//u - ufat

const ingresartextousuario = document.getElementById ("ingresartextousuario");
const botonencriptar = document.getElementById ("botonencriptar");
const botondesencriptar = document.getElementById ("botondesencriptar");
const botoncopiar = document.getElementById ("botoncopiar");
const mensajefinal = document.getElementById ("mensajefinal");
const muñecolupa = document.getElementById ("muñecolupa");
const mensajeinfoderecha = document.getElementById ("mensajeinfoderecha");
const ladoderecho = document.getElementById ("ladoderecho");

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"], 
    ["a", "ai"],
    ["u", "ufat"],
]

const replace = (nuevovalor) =>{
    mensajefinal.innerHTML = nuevovalor;
    muñecolupa.classList.add("oculto");
    ingresartextousuario.value = "";
    mensajeinfoderecha.style.display = "none";
    botoncopiar.style.display = "block";
    ladoderecho.classList.add("ajustar");
    mensajefinal.classList.add("ajustar");
}

const resetear = () =>{
    mensajefinal.innerHTML= "";
    muñecolupa.classList.remove("oculto");
    mensajeinfoderecha.style.display = "block";
    botoncopiar.style.display = "none";
    ladoderecho.classList.remove("ajustar");
    mensajefinal.classList.remove("ajustar");
    ingresartextousuario.focus();
}

botonencriptar.addEventListener("click", () => {
    const texto = ingresartextousuario.value.toLowerCase()
    if (texto != ""){
        function encriptar(nuevotexto){
            for (let i = 0; i < reemplazar.length; i++){
                if (nuevotexto.includes(reemplazar[i][0])){
                    nuevotexto = nuevotexto.replaceAll(reemplazar[i][0], reemplazar [i][1]);
                };
            };
            return nuevotexto;
        };
    } else {
        alert ('Ingrese el texto para poder encriptar')
        resetear();
    }

    replace(encriptar(texto));
    
});

botondesencriptar.addEventListener("click", () => {
    const texto = ingresartextousuario.value.toLowerCase()
    if (texto != ""){
        function desencriptar(nuevotexto){
            for (let i = 0; i < reemplazar.length; i++){
                if (nuevotexto.includes(reemplazar[i][1])){
                    nuevotexto = nuevotexto.replaceAll(reemplazar[i][1], reemplazar[i][0])
                };
            };
            return nuevotexto;
        }
    } else {
        alert('Ingrese el texto para poder desencriptar');
        resetear();
    }
    
    replace(desencriptar(texto));
})

botoncopiar.addEventListener("click", () => {
    let texto = mensajefinal;
    texto.select();
    document.execCommand('copy')
    alert('El texto ha sido copiado exitosamente')
    resetear();
})

ingresartextousuario.addEventListener("change", e => {
	ingresartextousuario.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	ingresartextousuario.style.height = `${scHeight}px`;
});
ingresartextousuario.addEventListener("keyup", e => {
	ingresartextousuario.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	ingresartextousuario.style.height = `${scHeight}px`;
});