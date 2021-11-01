const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getPeliculas(APIURL);

async function getPeliculas(url){
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);

    showPeliculas(respData.results);
    return respData;
}

function showPeliculas(peliculas){
    main.innerHTML = "";
    peliculas.forEach(peliculas => {
        const { poster_path,title,vote_average,overview } = peliculas;
   
   
        const peliculaEl = document.createElement("div");
        peliculaEl.classList.add("peliculas");
        
        peliculaEl.innerHTML=`
                   <img src="${IMGPATH + poster_path}" 
                        alt="${title}">
               <div class="pelicula-info">
                         <h3>${title}</h3>
                       <span class="${getClassByRate(vote_average)}">${vote_average}</span>
               </div>
               <div class="overview">
               <h3>Descripcion:</h3>
                ${overview}
               </div>

           `;
   
        main.appendChild(peliculaEl);
   
     });
}

function getClassByRate(vote){
    if(vote >=8){
        return "green";
    }else if(vote >= 5){
        return "orange"
    }else {
        return "red";
    }
}

form.addEventListener("submit" , (e) =>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getPeliculas(SEARCHAPI + searchTerm);
        search.value = "";
    }


});




