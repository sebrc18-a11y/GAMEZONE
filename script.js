const videojuegos = [
    {
        imagen: "IMAGENES/Juego1.png",
        titulo: "UFC 6",
        precio: "S/ 349.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego2.png",
        titulo: "Red Dead Redemption",
        precio: "S/ 149.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego3.png",
        titulo: "Harry Potter Quidditch Champions - Deluxe Edition",
        precio: "S/ 149.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego4.png",
        titulo: "007 First Light",
        precio: "S/ 349.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego5.png",
        titulo: "Resident Evil Requiem",
        precio: "S/ 379.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego6.png",
        titulo: "Marvel's Spider-Man: Miles Morales",
        precio: "S/ 199.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego7.png",
        titulo: "Clair Obscur: Expedition 33",
        precio: "S/ 279.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego8.png",
        titulo: "Call of Duty: Black Ops 7",
        precio: "S/ 299.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego9.png",
        titulo: "F1 25",
        precio: "S/ 249.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego10.png",
        titulo: "FC 26",
        precio: "S/ 249.90",
        plataformas: ["ps5"]
    },
    {
        imagen: "IMAGENES/Juego11.png",
        titulo: "Far Cry 6",
        precio: "S/ 205.00",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego12.png",
        titulo: "Metal Gear Solid Master Collection Vol 1",
        precio: "S/ 209.90",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego13.png",
        titulo: "Nba 2K23",
        precio: "S/ 209.90",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego14.png",
        titulo: "Forza Horizon 6",
        precio: "S/ 279.00",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego15.png",
        titulo: "Naruto x Boruto: Ultimate Ninja Storm Connections",
        precio: "S/ 149.90",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego16.png",
        titulo: "Street Fighter 6",
        precio: "S/ 120.00",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego17.png",
        titulo: "Fifa 22",
        precio: "S/ 169.90",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego18.png",
        titulo: "Tekken 8",
        precio: "S/ 169.90",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego19.png",
        titulo: "S.T.A.L.K.E.R. 2: Heart Of Chornobyl",
        precio: "S/ 199.90",
        plataformas: ["xbox"]
    },
    {
        imagen: "IMAGENES/Juego20.png",
        titulo: "Hogwarts Legacy",
        precio: "S/ 259.90",
        plataformas: ["xbox"]
    },

    // 10 Juegos de NINTENDO SWITCH (Juego21 - Juego30)
    {
        imagen: "IMAGENES/Juego21.png",
        titulo: "Assassin's Creed Shadows",
        precio: "S/ 289.90",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego22.png",
        titulo: "Pragmata",
        precio: "S/ 249.90",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego23.png",
        titulo: "Marvel Cosmic Invasion",
        precio: "S/ 279.90",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego24.png",
        titulo: "Super Mario Bros Wonder + Meetup in Bellabel Park",
        precio: "S/ 349.90",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego25.png",
        titulo: "Pokémon Pokopia",
        precio: "S/ 379.90",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego26.png",
        titulo: "Animal Crossing: New Horizons",
        precio: "S/ 349.00",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego27.png",
        titulo: "Metroid Prime 4: Beyond",
        precio: "S/ 319.90",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego28.png",
        titulo: "Kirby Air Riders",
        precio: "S/ 229.90",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego29.png",
        titulo: "Dragon Ball Sparking! Zero",
        precio: "S/ 329.00",
        plataformas: ["nintendo"]
    },
    {
        imagen: "IMAGENES/Juego30.png",
        titulo: "The Legend of Zelda: Tears of the Kingdom",
        precio: "S/ 399.90",
        plataformas: ["nintendo"]
    }
];

const gridProductos = document.getElementById("gridProductos");
const mensajeVacio = document.getElementById("mensajeVacio");
const inputBuscador = document.getElementById("buscador");
const checkboxesPlataforma = document.querySelectorAll(".filtro-plataforma");

function crearTarjeta(juego) {
    const plataformasTexto = juego.plataformas.join(" | ").toUpperCase();
    return `
        <div class="card">
            <img src="${juego.imagen}" class="card-img-top" alt="${juego.titulo}"
            <div class="card-body">
                <span class="plataformas">${plataformasTexto}</span>
                <h5 class="card-title">${juego.titulo}</h5>
                <p class="precio">${juego.precio}</p>
            </div>
        </div>
    `;
}

function renderizarJuegos(juegos) {
    const tarjetasActuales = gridProductos.querySelectorAll(".card");
    tarjetasActuales.forEach(card => card.remove());

    juegos.forEach(juego => {
        gridProductos.insertAdjacentHTML("beforeend", crearTarjeta(juego));
    });
}

function obtenerPlataformasSeleccionadas() {
    const seleccionadas = [];
    checkboxesPlataforma.forEach(cb => {
        if (cb.checked) {
            seleccionadas.push(cb.value.toLowerCase());
        }
    });
    return seleccionadas;
}

function filtrarJuegos() {
    const busqueda = inputBuscador.value.toLowerCase().trim();
    const plataformasSeleccionadas = obtenerPlataformasSeleccionadas();

    const juegosFiltrados = videojuegos.filter(juego => {
        const coincideTexto = juego.titulo.toLowerCase().includes(busqueda);
        const coincidePlataforma = juego.plataformas.some(plat =>
            plataformasSeleccionadas.includes(plat)
        );
        return coincideTexto && coincidePlataforma;
    });

    renderizarJuegos(juegosFiltrados);

    if (juegosFiltrados.length === 0) {
        mensajeVacio.classList.add("visible");
    } else {
        mensajeVacio.classList.remove("visible");
    }
}

// 7. Event Listeners
inputBuscador.addEventListener("input", filtrarJuegos);

checkboxesPlataforma.forEach(cb => {
    cb.addEventListener("change", filtrarJuegos);
});

// 8. Inicialización: mostrar todos los juegos al cargar
filtrarJuegos();