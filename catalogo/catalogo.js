// Cards da section discosDestaque

let cardMetallica = {
    image: "../assets/masterOfPuppets.jfif",
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    genre: "Thrash Metal",
    price: 180.00
};

let cardInjustice = {
    image: "../assets/Injustice.jfif",
    title: "Injustice For All",
    artist: "Metallica",
    year: 1986,
    genre: "Thrash Metal",
    price: 180.00
};

let cardFearOf = {
    image: "../assets/FearOfTheDark.jfif",
    title: "Fear of the Dark",
    artist: "Iron Maiden",
    year: 1980,
    genre: "Heavy Metal",
    price: 150.00
};

let cardVulgarPower = {
    image: "../assets/VulgarPower.jfif",
    title: "Vulgar Power",
    artist: "Pantera",
    year: 1992,
    genre: "Groove Metal",
    price: 120.00
};


let cardUseYourIlusion = {
    image: "../assets/UseYourIlusion.jfif",
    title: "Use Your Ilusion",
    artist: "Guns N' Roses",
    year: 1991,
    genre: "Hard Rock",
    price: 160.00
};

let cardMetallicaBlack = {
    image: "../assets/Metallica.jfif",
    title: "Metallica",
    artist: "Metallica",
    year: 1991,
    genre: "Thrash Metal",
    price: 160.00
};

let cardRideTheLight = {
    image: "../assets/RideTheLight.jfif",
    title: "Ride The Lightning",
    artist: "Metallica",
    year: 1991,
    genre: "Thrash Metal",
    price: 160.00
};

let cardLegion = {
    image: "../assets/Legion.jfif",
    title: "Legion",
    artist: "Deicide",
    year: 1991,
    genre: "Death Metal",
    price: 160.00
};

let cardDeicide = {
    image: "../assets/Deicide.jfif",
    title: "Deicide",
    artist: "Deicide",
    year: 1991,
    genre: "Death Metal",
    price: 160.00
};

let cardIronMaiden = {
    image: "../assets/IronMaiden.jfif",
    title: "Iron Maiden",
    artist: "Iron Maiden",
    year: 1991,
    genre: "Heavy Metal",
    price: 160.00
};

let cardKillers = {
    image: "../assets/Killers.jfif",
    title: "Killers",
    artist: "Iron Maiden",
    year: 1991,
    genre: "Heavy Metal",
    price: 160.00
};

let cardFarBeyond = {
    image: "../assets/FarBeyond.jfif",
    title: "FarBeyond",
    artist: "Pantera",
    year: 1991,
    genre: "Thrash Metal",
    price: 160.00
};

let cardBlackOfSouls = {
    image: "../assets/BlackOfSouls.jfif",
    title: "BlackOfSouls",
    artist: "Testament",
    year: 1991,
    genre: "Thrash Metal",
    price: 160.00
};

let cardObituary = {
    image: "../assets/Obituary.jfif",
    title: "Obituary Slowly we rot",
    artist: "Obituary",
    year: 1991,
    genre: "Death Metal",
    price: 160.00
};

let cardEndComplete = {
    image: "../assets/EndComplete.jfif",
    title: "EndComplete",
    artist: "Obituary",
    year: 1991,
    genre: "Death Metal",
    price: 160.00
};



document.getElementById("card1").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardMetallica.image}')"><div class="card-image-span"><span>${cardMetallica.genre}</span></div></div>
        <div class="card-info">
            <h3>${cardMetallica.title}</h3>
            <p>${cardMetallica.artist}</p>
            <p class="preco"><strong>R$ ${cardMetallica.price.toFixed(2)}</strong></p>
            <p>${cardMetallica.genre} - ${cardMetallica.year}</p>
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
            <p>${cardInjustice.genre} - ${cardInjustice.year}</p>
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
            <p>${cardFearOf.genre} - ${cardFearOf.year}</p>
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
            <p>${cardVulgarPower.genre} - ${cardVulgarPower.year}</p>
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
            <p>${cardUseYourIlusion.genre} - ${cardUseYourIlusion.year}</p>
        </div>
    </div>
`;

// Fim dos cards da section discosDestaque

// Cards da section Novidades

let cardQuatroEstacoes = {
    image: "../assets/QuatroEstacoes.jfif",
    title: "Quatro Estações",
    artist: "Legião Urbana",
    year: 1989,
    genre: "Rock nacional",
    price: 180.00
};

let cardAlivioImediato = {
    image: "../assets/AlivioImediato.jfif",
    title: "Alívio Imediato",
    artist: "Engenheiros do Hawaii",
    year: 1989,
    genre: "Rock nacional",
    price: 180.00
};

let cardEnvelhecoCidade = {
    image: "../assets/EnvelhecoCidade.jfif",
    title: "Envelheço Cidade",
    artist: "Ira!",
    year: 1986,
    genre: "Rock nacional",
    price: 180.00
};


let cardCardume = {
    image: "../assets/Cardume.jfif",
    title: "Cardume",
    artist: "Nenhum de Nós",
    year: 1989,
    genre: "Rock nacional",
    price: 180.00
};

let cardCamisaVenus = {
    image: "../assets/CamisaVenus.jfif",
    title: "Camisa Vênus",
    artist: "Camisa de Vênus",
    year: 1986,
    genre: "Rock nacional",
    price: 180.00
};

document.getElementById("card6").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardQuatroEstacoes.image}')"><div class="card-image-span"><span>${cardQuatroEstacoes.genre}</span></div></div>
        <div class="card-info">
            <h3>${cardQuatroEstacoes.title}</h3>
            <p>${cardQuatroEstacoes.artist}</p>
            <p class="preco"><strong>R$ ${cardQuatroEstacoes.price.toFixed(2)}</strong></p>
            <p>${cardQuatroEstacoes.genre} - ${cardQuatroEstacoes.year}</p>
        </div>
    </div>
`;

document.getElementById("card7").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardAlivioImediato.image}')"><div class="card-image-span"><span>${cardAlivioImediato.genre}</span></div></div>
        <div class="card-info">
            <h3>${cardAlivioImediato.title}</h3>
            <p>${cardAlivioImediato.artist}</p>
            <p class="preco"><strong>R$ ${cardAlivioImediato.price.toFixed(2)}</strong></p>
            <p>${cardAlivioImediato.genre} - ${cardAlivioImediato.year}</p>

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
            <p>${cardEnvelhecoCidade.genre} - ${cardEnvelhecoCidade.year}</p>

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
            <p>${cardCardume.genre} - ${cardCardume.year}</p>
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
            <p>${cardCamisaVenus.genre} - ${cardCamisaVenus.year}</p>
        </div>
    </div>
`;

//====== CARDS CATALOGO DENOVO =========

document.getElementById("card11").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardMetallicaBlack.image}')"><div class="card-image-span"><span>${cardMetallicaBlack.genre}</span></div></div>
        <div class="card-info">
            <h3>${cardMetallicaBlack.title}</h3>
            <p>${cardMetallicaBlack.artist}</p>
            <p class="preco"><strong>R$ ${cardMetallicaBlack.price.toFixed(2)}</strong></p>
            <p>${cardMetallicaBlack.genre} - ${cardMetallicaBlack.year}</p>
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
            <p>${cardRideTheLight.genre} - ${cardRideTheLight.year}</p>
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
            <p>${cardLegion.genre} - ${cardLegion.year}</p>
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
            <p>${cardDeicide.genre} - ${cardDeicide.year}</p>
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
            <p>${cardIronMaiden.genre} - ${cardIronMaiden.year}</p>
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
            <p>${cardKillers.genre} - ${cardKillers.year}</p>
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
            <p>${cardFarBeyond.genre} - ${cardFarBeyond.year}</p>
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
            <p>${cardBlackOfSouls.genre} - ${cardBlackOfSouls.year}</p>
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
            <p>${cardEndComplete.genre} - ${cardEndComplete.year}</p>
        </div>
    </div>
`;


document.getElementById("card20").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardObituary.image}')"><div class="card-image-span"><span>${cardObituary.genre}</span></div></div>
        <div class="card-info">
            <h3>${cardObituary.title}</h3>
            <p>${cardObituary.artist}</p>
            <p class="preco"><strong>R$ ${cardObituary.price.toFixed(2)}</strong></p>
            <p>${cardObituary.genre} - ${cardObituary.year}</p>
        </div>
    </div>
`;


// Array de todos os discos
let todosDiscos = [cardMetallica, cardInjustice, cardFearOf, cardVulgarPower, cardUseYourIlusion, cardQuatroEstacoes, cardAlivioImediato, cardEnvelhecoCidade, cardCardume, cardCamisaVenus, cardMetallicaBlack, cardRideTheLight, cardLegion, cardDeicide, cardIronMaiden, cardKillers, cardFarBeyond, cardBlackOfSouls, cardEndComplete, cardObituary];

// Função para renderizar os cards
function renderCards(discos) {
    discos.forEach((disco, index) => {
        let cardTemplate = `
            <div class="card">
                <div class="card-image" style="background-image: url('${disco.image}')"><div class="card-image-span"><span>${disco.genre}</span></div></div>
                <div class="card-info">
                    <h3>${disco.title}</h3>
                    <p>${disco.artist}</p>
                    <p class="preco"><strong>R$ ${disco.price.toFixed(2)}</strong></p>
                    <p>${disco.genre} - ${disco.year}</p>
                </div>
            </div>
        `;
        document.getElementById("card" + (index + 1)).innerHTML = cardTemplate;
    });

    // Esconder cards vazios se houver menos discos
    for (let i = discos.length + 1; i <= 20; i++) {
        document.getElementById("card" + i).innerHTML = "";
    }
}

// Função de filtro em tempo real
function filtrarDiscos() {
    let filtroTexto = document.getElementById("filtroArtista").value;
    let generosSelected = Array.from(document.querySelectorAll(".genreCheckbox:checked")).map(cb => cb.value);

    let resultado = todosDiscos.filter(function (disco) {
        let textMatch = disco.artist.toLowerCase().includes(filtroTexto.toLowerCase()) ||
            disco.title.toLowerCase().includes(filtroTexto.toLowerCase());

        // Se nenhum gênero selecionado, mostrar todos; caso contrário, filtrar por gênero
        let genreMatch = generosSelected.length === 0 || generosSelected.includes(disco.genre);

        return textMatch && genreMatch;
    });

    renderCards(resultado);
}

// Adicionar listener ao input de busca
document.getElementById("filtroArtista").addEventListener("input", filtrarDiscos);

// Adicionar listeners aos checkboxes de gênero
document.querySelectorAll(".genreCheckbox").forEach(checkbox => {
    checkbox.addEventListener("change", filtrarDiscos);
});

// Toggle para expandir/recolher as opções de gênero
document.getElementById("genreToggle").addEventListener("change", function () {
    let genreOptions = document.getElementById("genreOptions");
    if (this.checked) {
        genreOptions.style.display = "flex";
    } else {
        genreOptions.style.display = "none";
        // Desmarcar todos os checkboxes de gênero quando fechar
        document.querySelectorAll(".genreCheckbox").forEach(checkbox => {
            checkbox.checked = false;
        });
        filtrarDiscos();
    }
});

// Função show() para compatibilidade com o botão existente
function show() {
    filtrarDiscos();
}

// Função de quando clicar no disco

