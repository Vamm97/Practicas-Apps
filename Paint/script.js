const canvas = document.getElementById("canvas");
const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 15;
let isPressed=false;
let color= "black";
let x = undefined;
let y = undefined;


canvas.addEventListener("mousedown", (e) =>{
    isPressed= true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) =>{
    isPressed= false;
    x = undefined;
    y = undefined;

});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        dibujarCirculo(x2, y2);
        dibujarlinea(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function dibujarCirculo(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function dibujarlinea(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}


increasebtn.addEventListener("click", () =>{
    size += 5;

    if(size > 50){
        size =50;
    }
    
    subirSize();
});
decreasebtn.addEventListener("click", () =>{
    size -= 5;

    if(size < 5){
        size = 5;
    }

    subirSize();
});

colorEl.addEventListener("change", (e) =>{
    color = e.target.value;
});

clearEl.addEventListener("click", (e) =>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
});

function subirSize(){
    sizeEl.innerText =size;
}

