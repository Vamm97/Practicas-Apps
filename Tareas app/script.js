const form = document.getElementById("form");
const input = document.getElementById("input");
const listas = document.getElementById("listas");

const listasA = JSON.parse(localStorage.getItem("listas"));
if(listasA){

    listasA.forEach(listasA => {
        añadirLista(listasA)
    })

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    añadirLista();
});

function añadirLista(listasA){
    let listatext = input.value;
    if(listasA){
        listatext = listasA.text;
    }

        if(listatext){

            const listasEl = document.createElement
            ("li");

            if (listasA && listasA.completed){

                listasEl.classList.add("completed");
            }

            listasEl.innerText= listatext;
    
            listasEl.addEventListener("click", () => {
                listasEl.classList.toggle("completed");
    
                updateLS();
    
            });
    
            listasEl.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                listasEl.remove();
                updateLS();
            });
    
            listas.appendChild(listasEl);
    
            input.value = "";
    
            updateLS();
        }
}

function updateLS(){
    const listasEl = document.querySelectorAll("li");

    const listas = [];

    listasEl.forEach(listasEl => {
        listas.push({
            text: listasEl.innerText,
            completed: listasEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("listas", JSON.stringify(listas));

}