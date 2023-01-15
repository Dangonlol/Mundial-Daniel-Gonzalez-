//Esto verifica si esta logged
if (localStorage.getItem("logged") !== "true") {
    window.location.href = "/";
}

//Este cierra cession 

function closeHandler() {
    localStorage.setItem("logged", false);
    window.location.href = "/";
}

//Click cerrrar

document.getElementById('logout-button').addEventListener('click', closeHandler, false);

//Me traigo a los jugadores 

const section = document.querySelector("#jugadores")


// section.innerHTML = jugadores 
var componentString = fetch('https://639a535a3a5fbccb5264b073.mockapi.io/jugadores')
    .then((response) => response.json())
    .then((listaJugadores) => {
        var jugadores = listaJugadores.map((jugador) =>
            `<div class="col-sm-4 col-12 p-2 float-start">
            <div class="card ">
        <div class="img-wrapper">
        <span class="dorsal" >${jugador.dorsal}</span>
        <img src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" class="card-img-top blur " alt="${jugador.name}">
        </div>
        <div class="card-body m-2">
        <h5 class="card-title fw-bold">${jugador.name}</h5>
        <p class="card-text m-0"> <span class="fw-bold">Edad:</span> ${jugador.edad}</p>
        <p class="card-text m-0"><span class="fw-bold">Posición:</span>${jugador.posicion}</p>
        <p class="card-text m-0"><span class="fw-bold">Peso:</span>:${jugador["stats-fisico"].peso}</p>
        <p class="card-text m-0"><span class="fw-bold">Altura:</span>:${jugador["stats-fisico"].altura}</p>
        <p class="card-text m-0"><span class="fw-bold">Equipo actual:</span> ${jugador["equipo-actual"]}</p>
        <p class="card-text m-0"><span class="fw-bold">Equipo de nacimiento:</span> ${jugador["fecha-nacimiento"]}</p>
    </div>
</div>
</div>`
        );
        const secction = document.querySelector('section');
        secction.innerHTML = jugadores.join().replaceAll(",", "");
    })
    .catch(error => console.log(error))