// Cards da section discosDestaque

let cardMetallica = {
    id: 1,
    image: "../assets/masterOfPuppets.jfif",
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    genre: "thrashMetal",
    price: 180.00
};

let cardInjustice = {
    id: 2,
    image: "../assets/Injustice.jfif",
    title: "Injustice For All",
    artist: "Metallica",
    year: 1986,
    genre: "thrashMetal",
    price: 180.00
};

let cardFearOf = {
    id: 3,
    image: "../assets/FearOfTheDark.jfif",
    title: "Fear of the Dark",
    artist: "Iron Maiden",
    year: 1980,
    genre: "heavyMetal",
    price: 150.00
};

let cardVulgarPower = {
    id: 4,
    image: "../assets/VulgarPower.jfif",
    title: "Vulgar Power",
    artist: "Pantera",
    year: 1992,
    genre: "grooveMetal",
    price: 120.00
};


let cardUseYourIlusion = {
    id: 5,
    image: "../assets/UseYourIlusion.jfif",
    title: "Use Your Ilusion",
    artist: "Guns N' Roses",
    year: 1991,
    genre: "hardRock",
    price: 160.00
};

let cardMetallicaBlack = {
    id: 11,
    image: "../assets/Metallica.jfif",
    title: "Metallica",
    artist: "Metallica",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00
};

let cardRideTheLight = {
    id: 12,
    image: "../assets/RideTheLight.jfif",
    title: "Ride The Lightning",
    artist: "Metallica",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00
};

let cardLegion = {
    id: 13,
    image: "../assets/Legion.jfif",
    title: "Legion",
    artist: "Deicide",
    year: 1991,
    genre: "deathMetal",
    price: 160.00
};

let cardDeicide = {
    id: 14,
    image: "../assets/Deicide.jfif",
    title: "Deicide",
    artist: "Deicide",
    year: 1991,
    genre: "deathMetal",
    price: 160.00
};

let cardIronMaiden = {
    id: 15,
    image: "../assets/IronMaiden.jfif",
    title: "Iron Maiden",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
};

let cardKillers = {
    id: 16,
    image: "../assets/Killers.jfif",
    title: "Killers",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
};

let cardFarBeyond = {
    id: 17,
    image: "../assets/FarBeyond.jfif",
    title: "FarBeyond",
    artist: "Pantera",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00
};

let cardBlackOfSouls = {
    id: 18,
    image: "../assets/BlackOfSouls.jfif",
    title: "BlackOfSouls",
    artist: "Testament",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00
};

let cardObituary = {
    id: 19,
    image: "../assets/Obituary.jfif",
    title: "Obituary Slowly we rot",
    artist: "Obituary",
    year: 1991,
    genre: "deathMetal",
    price: 160.00
};

let cardEndComplete = {
    id: 20,
    image: "../assets/EndComplete.jfif",
    title: "EndComplete",
    artist: "Obituary",
    year: 1991,
    genre: "deathMetal",
    price: 160.00
};


document.getElementById("card1").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardMetallica.image}')"><div class="card-image-span"><span>${cardMetallica.genre}</span></div></div>
        <div class="card-info">
        <h3>${cardMetallica.title}</h3>
        <p>${cardMetallica.artist}</p>
        <p class="preco"><strong>R$ ${cardMetallica.price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

document.getElementById("card2").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardInjustice.image}')"><div class="card-image-span"><span>${cardInjustice.genre}</span></div></div>
        <div class="card-info">
            <h3>${cardInjustice.title}</h3>
            <p>${cardInjustice.artist}</p>
            <p class="preco"><strong>R$ ${cardInjustice.price.toFixed(2)}</strong></p>
            </div>
    </div>
`;

document.getElementById("card3").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardFearOf.image}')"><div class="card-image-span"><span>${cardFearOf.genre}</span></div></div>
        <div class="card-info">
        <h3>${cardFearOf.title}</h3>
            <p>${cardFearOf.artist}</p>
            <p class="preco"><strong>R$ ${cardFearOf.price.toFixed(2)}</strong></p>
        </div>
    </div>
    `;

document.getElementById("card4").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardVulgarPower.image}')"><div class="card-image-span"><span>${cardVulgarPower.genre}</span></div></div>
        <div class="card-info">
            <h3>${cardVulgarPower.title}</h3>
            <p>${cardVulgarPower.artist}</p>
            <p class="preco"><strong>R$ ${cardVulgarPower.price.toFixed(2)}</strong></p>
            </div>
    </div>
`;

document.getElementById("card5").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardUseYourIlusion.image}')"><div class="card-image-span"><span>${cardUseYourIlusion.genre}</span></div></div>
        <div class="card-info">
            <h3>${cardUseYourIlusion.title}</h3>
            <p>${cardUseYourIlusion.artist}</p>
            <p class="preco"><strong>R$ ${cardUseYourIlusion.price.toFixed(2)}</strong></p>
        </div>
        </div>
        `;
        
        // Fim dos cards da section discosDestaque
        let cardQuatroEstacoes = {
            id: 6,
            image: "../assets/QuatroEstacoes.jfif",
            title: "Quatro Estações",
            artist: "Legião Urbana",
            year: 1989,
            genre: "rockNacional",
            price: 180.00
        };
        
        let cardBlackSabath = {
            id: 7,
            image: "../assets/AlivioImediato.jfif",
            title: "Alivio Imediato",
            artist: "Engenheiros do Hawaii",
            year: 1989,
            genre: "rockNacional",
            price: 180.00
        }
        
        let cardEnvelhecoCidade = {
            id: 8,
            image: "../assets/EnvelhecoCidade.jfif",
            title: "Envelheço Cidade",
            artist: "Ira!",
            year: 1986,
            genre: "rockNacional",
            price: 180.00
        };
        
        
        let cardCardume = {
            id: 9,
            image: "../assets/Cardume.jfif",
            title: "Cardume",
            artist: "Nenhum de Nós",
            year: 1989,
            genre: "rockNacional",
            price: 180.00
        };
        
        let cardCamisaVenus = {
            id: 10,
            image: "../assets/CamisaVenus.jfif",
            title: "Camisa Vênus",
            artist: "Camisa de Vênus",
            year: 1986,
            genre: "rockNacional",
            price: 180.00
        };
        
        document.getElementById("card6").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardQuatroEstacoes.image}')"><div class="card-image-span"><span>${cardQuatroEstacoes.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardQuatroEstacoes.title}</h3>
                    <p>${cardQuatroEstacoes.artist}</p>
                    <p class="preco"><strong>R$ ${cardQuatroEstacoes.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        

        
        document.getElementById("card8").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardEnvelhecoCidade.image}')"><div class="card-image-span"><span>${cardEnvelhecoCidade.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardEnvelhecoCidade.title}</h3>
                    <p>${cardEnvelhecoCidade.artist}</p>
                    <p class="preco"><strong>R$ ${cardEnvelhecoCidade.price.toFixed(2)}</strong></p>
        
                </div>
            </div>
        `;
        document.getElementById("card7").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardBlackSabath.image}')"><div class="card-image-span"><span>${cardBlackSabath.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardBlackSabath.title}</h3>
                    <p>${cardBlackSabath.artist}</p>
                    <p class="preco"><strong>R$ ${cardBlackSabath.price.toFixed(2)}</strong></p>
        
                </div>
            </div>
        `;
        
        document.getElementById("card9").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardCardume.image}')"><div class="card-image-span"><span>${cardCardume.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardCardume.title}</h3>
                    <p>${cardCardume.artist}</p>
                    <p class="preco"><strong>R$ ${cardCardume.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card10").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardCamisaVenus.image}')"><div class="card-image-span"><span>${cardCamisaVenus.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardCamisaVenus.title}</h3>
                    <p>${cardCamisaVenus.artist}</p>
                    <p class="preco"><strong>R$ ${cardCamisaVenus.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        
        document.getElementById("card11").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardMetallicaBlack.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardMetallicaBlack.title}</h3>
                    <p>${cardMetallicaBlack.artist}</p>
                    <p class="preco"><strong>R$ ${cardMetallicaBlack.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card12").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardRideTheLight.image}')"><div class="card-image-span"><span>${cardRideTheLight.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardRideTheLight.title}</h3>
                    <p>${cardRideTheLight.artist}</p>
                    <p class="preco"><strong>R$ ${cardRideTheLight.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card13").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardLegion.image}')"><div class="card-image-span"><span>${cardLegion.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardLegion.title}</h3>
                    <p>${cardLegion.artist}</p>
                    <p class="preco"><strong>R$ ${cardLegion.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card14").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardDeicide.image}')"><div class="card-image-span"><span>${cardDeicide.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardDeicide.title}</h3>
                    <p>${cardDeicide.artist}</p>
                    <p class="preco"><strong>R$ ${cardDeicide.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card15").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardIronMaiden.image}')"><div class="card-image-span"><span>${cardIronMaiden.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardIronMaiden.title}</h3>
                    <p>${cardIronMaiden.artist}</p>
                    <p class="preco"><strong>R$ ${cardIronMaiden.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card16").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardKillers.image}')"><div class="card-image-span"><span>${cardKillers.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardKillers.title}</h3>
                    <p>${cardKillers.artist}</p>
                    <p class="preco"><strong>R$ ${cardKillers.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card17").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardFarBeyond.image}')"><div class="card-image-span"><span>${cardFarBeyond.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardFarBeyond.title}</h3>
                    <p>${cardFarBeyond.artist}</p>
                    <p class="preco"><strong>R$ ${cardFarBeyond.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card18").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardBlackOfSouls.image}')"><div class="card-image-span"><span>${cardBlackOfSouls.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardBlackOfSouls.title}</h3>
                    <p>${cardBlackOfSouls.artist}</p>
                    <p class="preco"><strong>R$ ${cardBlackOfSouls.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        document.getElementById("card19").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardEndComplete.image}')"><div class="card-image-span"><span>${cardEndComplete.genre}</span></div></div>
                <div class="card-info">
                    <h3>${cardEndComplete.title}</h3>
                    <p>${cardEndComplete.artist}</p>
                    <p class="preco"><strong>R$ ${cardEndComplete.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
        
        document.getElementById("card20").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardObituary.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardObituary.title}</h3>
                    <p>${cardObituary.artist}</p>
                    <p class="preco"><strong>R$ ${cardObituary.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        
// // Cards da section Novidades



// Array de todos os discos
let todosDiscos = [cardMetallica, cardInjustice, cardFearOf, cardVulgarPower, cardUseYourIlusion, cardQuatroEstacoes, cardBlackSabath, cardEnvelhecoCidade, cardCardume, cardCamisaVenus, cardMetallicaBlack, cardRideTheLight, cardLegion, cardDeicide, cardIronMaiden, cardKillers, cardFarBeyond, cardBlackOfSouls, cardEndComplete, cardObituary];

const listaCards = document.getElementById("centralizar");
const contador = document.getElementById("contador");

function renderCards(discos) {
  listaCards.innerHTML = "";

  discos.forEach(disco => {
    listaCards.innerHTML += `
      <a href="../produtos/produto.html?id=${disco.id}" class="card">
        <div class="card-image"
             style="background-image:url('${disco.image}')">
        </div>

        <div class="card-info">
          <h3>${disco.title}</h3>
          <p>${disco.artist}</p>
          <p class="preco">R$ ${disco.price.toFixed(2)}</p>
        </div>
      </a>
    `;
  });

  contador.textContent = `${discos.length} discos encontrados`;
}


// ===== FILTRO COMBINADO =====
function filtrarDiscos() {
  const texto = document.getElementById("filtroArtista").value.toLowerCase();
  const genero = document.getElementById("filtro-genero").value;

  const resultado = todosDiscos.filter(disco => {
    const matchTexto =
      disco.artist.toLowerCase().includes(texto) ||
      disco.title.toLowerCase().includes(texto);

    const matchGenero =
      genero === "todos" || disco.genre === genero;

    return matchTexto && matchGenero;
  });

  renderCards(resultado);
}

// ===== EVENTOS =====
document.getElementById("filtroArtista").addEventListener("input", filtrarDiscos);
document.getElementById("filtro-genero").addEventListener("change", filtrarDiscos);

// ===== INICIAL =====
renderCards(todosDiscos);



