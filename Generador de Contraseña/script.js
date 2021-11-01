const pwEl = document.getElementById("pw");
const copiarEl = document.getElementById("copiar");
const lenEL = document.getElementById("len");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

const LMayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const LMinusculas = "abcdefghijklmnñopqrstuvwxyz"; 
const numeros = "0123456789";
const simbolos = "!#$%&@()=+-*_";

function getMayusculas(){
        return LMayusculas[Math.floor(Math.random () * LMayusculas.length)];
}

function getMinusculas(){
        return LMinusculas
        [Math.floor(Math.random () * LMinusculas.length)];
}

function getNumeros(){
        return numeros
        [Math.floor(Math.random () * numeros.length)];
}

function getSimbolos(){
        return simbolos
        [Math.floor(Math.random () * simbolos.length)];
}

function generatePW(){
    const len = lenEL.value;

    let password = "";

    for(let i=0; i<len; i++){
        const x = generateX();
        password +=x;
    }

    pwEl.innerText = password;
}

function generateX(){
    const xs =[];
    if(upper.checked){
        xs.push(getMayusculas());
    }
    if(lower.checked){
        xs.push(getMinusculas());
    }
    if(number.checked){
        xs.push(getNumeros());
    }
    if(symbol.checked){
        xs.push(getSimbolos());
    }


    return xs[Math.floor(Math.random() * xs.length)];

}


generate.addEventListener("click",generatePW);

copiarEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});