

function encriptar() {
    let texto = document.getElementById("men_saje").value;
    let men_encr = document.getElementById("msn_ini");
    let comenta = document.getElementById("parr");
    let muñeco=document.getElementById("muñe");
    
    let tex_cod = texto
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/e/gi,"enter")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");

    if (texto.length !=0){
        document.getElementById("men_saje").value=tex_cod;
        document.getElementById("msn_ini").textContent=tex_cod;
        document.getElementById("parr").textContent="Texto encriptado con exito";
        muñeco.style.display="none";
        
    }
    else{
        alert("Ingresa un texto");
    }
}
function desencriptar() {
    let texto = document.getElementById("men_saje").value;
    let men_encr = document.getElementById("msn_ini");
    let comenta = document.getElementById("parr");
    let muñeco=document.getElementById("muñe");
    
    let tex_cod = texto
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/enter/gi,"e")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    if (texto.length !=0){
        document.getElementById("men_saje").value=tex_cod;
        document.getElementById("msn_ini").textContent=tex_cod;
        document.getElementById("parr").textContent="Texto desencriptado con exito";
        muñeco.style.display="none";
        
    }
    else{
        alert("Ingresa un texto");
    }
}


