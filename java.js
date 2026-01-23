// Cards da section discosDestaque

const produtos = {
    1: {
    image: "assets/masterOfPuppets.jfif",
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    genre: "Thrash Metal",
    price: 180.00,
    genre2: "Thrash Metal",
    sobre: "Master of Puppets (1986) é um dos álbuns mais icônicos do metal e um marco absoluto na carreira do Metallica. Com riffs rápidos e agressivos, letras densas e estruturas complexas, o disco eleva o thrash metal a um novo nível. Faixas como “Battery”, “Master of Puppets” e “Welcome Home (Sanitarium)” equilibram peso e melodia de forma magistral. É um álbum intenso, técnico e emocional, considerado por muitos como uma obra-prima do gênero"
  },
  2: {
    image: "assets/Injustice.jfif",
    title: "Injustice For All",
    artist: "Metallica",
    year: 1986,
    genre: "Thrash Metal",
    price: 180.00
  },
  3:{
    image: "assets/FearOfTheDark.jfif",
    title: "Fear of the Dark",
    artist: "Iron Maiden",
    year: 1980,
    genre: "Heavy Metal",
    price: 150.00
  },
  4:{
    image: "assets/VulgarPower.jfif",
    title: "Vulgar Power",
    artist: "Pantera",
    year: 1992,
    genre: "Groove Metal",
    price: 120.00
  },
  5:{
    image: "assets/UseYourIlusion.jfif",
    title: "Use Your Ilusion",
    artist: "Guns N' Roses",
    year: 1991,
    genre: "Hard Rock",
    price: 160.00
  },
  6:{
    image: "assets/QuatroEstacoes.jfif",
    title: "Quatro Estações",
    artist: "Legião Urbana",
    year: 1989,
    genre: "Rock nacional",
    price: 180.00
  },
  7:{
    image: "assets/AlivioImediato.jfif",
    title: "Alívio Imediato",
    artist: "Engenheiros do Hawaii",
    year: 1989,
    genre: "Rock nacional",
    price: 180.00
  },
  8:{
    image: "assets/EnvelhecoCidade.jfif",
    title: "Envelheço Cidade",
    artist: "Ira!",
    year: 1986,
    genre: "Rock nacional",
    price: 180.00
  },
  9:{
    image: "assets/Cardume.jfif",
    title: "Cardume",
    artist: "Nenhum de Nós",
    year: 1989,
    genre: "Rock nacional",
    price: 180.00
  },
  10:{
    image: "assets/CamisaVenus.jfif",
    title: "Camisa Vênus",
    artist: "Camisa de Vênus",
    year: 1986,
    genre: "Rock nacional",
    price: 180.00
  }
};

document.getElementById("card1").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[1].image}')"><div class="card-image-span"><span>${produtos[1].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[1].title}</h3>
            <p>${produtos[1].artist}</p>
            <p class="preco"><strong>R$ ${produtos[1].price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

document.getElementById("card2").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[2].image}')"><div class="card-image-span"><span>${produtos[2].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[2].title}</h3>
            <p>${produtos[2].artist}</p>
            <p class="preco"><strong>R$ ${produtos[2].price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

document.getElementById("card3").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[3].image}')"><div class="card-image-span"><span>${produtos[3].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[3].title}</h3>
            <p>${produtos[3].artist}</p>
            <p class="preco"><strong>R$ ${produtos[3].price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

document.getElementById("card4").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[4].image}')"><div class="card-image-span"><span>${produtos[4].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[4].title}</h3>
            <p>${produtos[4].artist}</p>
            <p class="preco"><strong>R$ ${produtos[4].price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

document.getElementById("card5").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[5].image}')"><div class="card-image-span"><span>${produtos[5].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[5].title}</h3>
            <p>${produtos[5].artist}</p>
            <p class="preco"><strong>R$ ${produtos[5].price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

// Fim dos cards da section discosDestaque

// Cards da section Novidades

document.getElementById("card6").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[6].image}')"><div class="card-image-span"><span>${produtos[6].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[6].title}</h3>
            <p>${produtos[6].artist}</p>
            <p class="preco"><strong>R$ ${produtos[6].price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

document.getElementById("card7").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[7].image}')"><div class="card-image-span"><span>${produtos[7].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[7].title}</h3>
            <p>${produtos[7].artist}</p>
            <p class="preco"><strong>R$ ${produtos[7].price.toFixed(2)}</strong></p>

        </div>
    </div>
`;

document.getElementById("card8").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[8].image}')"><div class="card-image-span"><span>${produtos[8].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[8].title}</h3>
            <p>${produtos[8].artist}</p>
            <p class="preco"><strong>R$ ${produtos[8].price.toFixed(2)}</strong></p>

        </div>
    </div>
`;

document.getElementById("card9").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[9].image}')"><div class="card-image-span"><span>${produtos[9].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[9].title}</h3>
            <p>${produtos[9].artist}</p>
            <p class="preco"><strong>R$ ${produtos[9].price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

document.getElementById("card10").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${produtos[10].image}')"><div class="card-image-span"><span>${produtos[10].genre}</span></div></div>
        <div class="card-info">
            <h3>${produtos[10].title}</h3>
            <p>${produtos[10].artist}</p>
            <p class="preco"><strong>R$ ${produtos[10].price.toFixed(2)}</strong></p>
        </div>
    </div>
`;

function rockClassico(){
    window.location.href = "./catalogo/catalogo.html"
}

function metal(){
    window.location.href = "./catalogo/catalogo.html"
}

function heavyMetal(){
    window.location.href = "./catalogo/catalogo.html"
}