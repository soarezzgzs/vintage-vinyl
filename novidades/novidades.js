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

// Cards da section Novidades

let cardQuatroEstacoes= {
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

// Array de todos os discos
let todosDiscos = [cardMetallica, cardInjustice, cardFearOf, cardVulgarPower, cardUseYourIlusion, cardQuatroEstacoes, cardAlivioImediato, cardEnvelhecoCidade, cardCardume, cardCamisaVenus];

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
                </div>
            </div>
        `;
        document.getElementById("card" + (index + 1)).innerHTML = cardTemplate;
    });

    // Esconder cards vazios se houver menos discos
    for (let i = discos.length + 1; i <= 10; i++) {
        document.getElementById("card" + i).innerHTML = "";
    }
}

// Função de filtro em tempo real
function filtrarDiscos() {
    let filtro = document.getElementById("filtroArtista").value;
    let resultado = todosDiscos.filter(function(disco) {
        return disco.artist.toLowerCase().includes(filtro.toLowerCase()) || 
               disco.title.toLowerCase().includes(filtro.toLowerCase());
    });

    renderCards(resultado);
}

// Adicionar listener ao input de busca
document.getElementById("filtroArtista").addEventListener("input", filtrarDiscos);

// Função show() para compatibilidade com o botão existente
function show() {
    filtrarDiscos();
}