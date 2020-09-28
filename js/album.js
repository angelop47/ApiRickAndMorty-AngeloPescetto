fetch("https://rickandmortyapi.com/api/character")
    .then ( Response => Response.json())
    .then ( data => makeCards(data.results))

    function makeCards(charactersArray){
        //console.log(Characters)
        const cardContainer = document.querySelector('#card-container')
        //console.log(charactersArray)
        charactersArray.forEach(character => {
            cardContainer.innerHTML = cardContainer.innerHTML +
            `  
            <figure>
                <img src=${character.image}>
                <div class="capa">
                <button class="add_new" id="crearImagen"></button>
                <h3>${character.name}</h3>
                <p id="characterTexto">Locacion:${character.location.name}</p>
                <p>Genero:${character.gender}</p>
                <p>Estado:${character.status}</p>
                <p>Especie:${character.species}</p>
                </div>
            </figure>
            
            `
       });
    }  

