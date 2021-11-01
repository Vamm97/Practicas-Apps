const addBtn = document.getElementById("add");

const notas = JSON.parse(localStorage.getItem("notas"));

if(notas){
    notas.forEach(nota => {
        addNuevaNota(nota);
    });
}

addBtn.addEventListener("click", () => {
    addNuevaNota();
});

function addNuevaNota(text= ""){
    const nota = document.createElement("div");
    nota.classList.add("nota");
    
 
    nota.innerHTML= ` 
        <div class="notas">
        <div class="herramientas">
              <button class="edit">
              <i class="fas fa-edit"></i></button>
              <button class="delete">
              <i class="fas fa-trash-alt"></i></button>
          </div>
          <div class="main ${text ? "" : "hidden"}"></div>
          <textarea class=" ${text ? "hidden" : ""}"></textarea>
          </div>
        `;


     const editBtn = nota.querySelector(".edit");
     const deleteBtn = nota.querySelector(".delete");
     
     const main = nota.querySelector(".main");
     const textArea = nota.querySelector("textarea");

     textArea.value = text;
     main.innerHTML = marked(text);


     editBtn.addEventListener("click", () => {
             main.classList.toggle("hidden");
             textArea.classList.toggle("hidden");
         });
     
         deleteBtn.addEventListener("click", () => {
            nota.remove();
            
            updateLS();
         });

         textArea.addEventListener("input", (e) =>{
             const { value } = e.target;
             main.innerHTML = marked(value);

            updateLS();

         });

     document.body.appendChild(nota);
}

function updateLS(){
    const notasText = document.querySelectorAll("textarea");
    const notas = [];

    notasText.forEach(nota => {
        notas.push(nota.value);
        
    });

    localStorage.setItem("notas", JSON.stringify(notas));

}



 