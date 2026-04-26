const menuIcon = document.getElementById('mobile-menu-icon');
const menuList = document.getElementById('mobile-menu');

// Verifica se os elementos existem antes de adicionar o evento
if (menuIcon && menuList) {
    menuIcon.addEventListener('click', function () {
        menuList.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// Toggle icon for hamburger
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
});

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
    title: "...And Justice for All",
    artist: "Metallica",
    year: 1988,
    genre: "thrashMetal",
    price: 180.00
};

let cardFearOf = {
    id: 3,
    image: "../assets/FearOfTheDark.jfif",
    title: "Fear of the Dark",
    artist: "Iron Maiden",
    year: 1992,
    genre: "heavyMetal",
    price: 150.00
};

let cardVulgarPower = {
    id: 4,
    image: "../assets/VulgarPower.jfif",
    title: "Vulgar Display of Power",
    artist: "Pantera",
    year: 1992,
    genre: "grooveMetal",
    price: 120.00
};


let cardUseYourIlusion = {
    id: 5,
    image: "../assets/UseYourIlusions2.jfif",
    title: "Use Your Ilusion",
    artist: "Guns N' Roses",
    year: 1991,
    genre: "hardRock",
    price: 160.00
};

let cardMetallicaBlack = {
    id: 11,
    image: "../assets/Metallica.jfif",
    title: "Metallica (The Black Album)",
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
    title: "Far Beyond Driven",
    artist: "Pantera",
    year: 1994,
    genre: "grooveMetal",
    price: 160.00
};

let cardBlackOfSouls = {
    id: 18,
    image: "../assets/BlackOfSouls.jfif",
    title: "Black of Souls ",
    artist: "Testament",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00
};

let cardObituary = {
    id: 19,
    image: "../assets/Obituary.jfif",
    title: "Slowly We Rot",
    artist: "Obituary",
    year: 1991,
    genre: "deathMetal",
    price: 160.00
};

let cardEndComplete = {
    id: 20,
    image: "../assets/EndComplete.jfif",
    title: "The End Complete",
    artist: "Obituary",
    year: 1991,
    genre: "deathMetal",
    price: 160.00
};
// aq
let maidenJapan = {
    id: 21,
    image: "../assets/maidenJapan.jpg",
    title: "Maiden Japan",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
};

let liveAfter = {
    id: 22,
    image: "../assets/LiveAfter.jpg",
    title: "Live After Death",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
};

let powerSlave = {
    id: 23,
    image: "../assets/PowerSlave.jpg",
    title: "Powerslave",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
};

let seventhSon = {
    id: 24,
    image: "../assets/SeventhSon.jfif",
    title: "Seventh Son of a Seventh Son ",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
};

let noPrayer = {
    id: 25,
    image: "../assets/NoPrayer.jpg",
    title: "No Prayer for the Dying",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
}

// ACDC
let theRazor = {
    id: 26,
    image: "../assets/TheRazor.jpg",
    title: "The Razors Edge",
    artist: "AC/DC",
    year: 1991,
    genre: "hardRock",
    price: 160.00
};

let forTheAbout = {
    id: 27,
    image: "../assets/ForTheAbout.jpg",
    title: "For Those About to Rock",
    artist: "AC/DC",
    year: 1991,
    genre: "hardRock",
    price: 160.00
}

let backInBlack = {
    id: 28,
    image: "../assets/BackInBlack.jpg",
    title: "Back In Black",
    artist: "AC/DC",
    year: 1991,
    genre: "hardRock",
    price: 160.00
}

let useYourIlusion2 = {
    id: 29,
    image: "../assets/UseYourIlusion.jfif",
    title: "Use Your Ilusion 2",
    artist: "Guns N' Roses",
    year: 1991,
    genre: "hardRock",
    price: 160.00
}

let destiny = {
    id: 30,
    image: "../assets/Destiny.jpg",
    title: "Destiny",
    artist: "Saxon",
    year: 1991,
    genre: "hardRock",
    price: 160.00
}

let rockTheNation = {
    id: 31,
    image: "../assets/RockTheNation.jfif",
    title: "Rock The Nations",
    artist: "Saxon",
    year: 1991,
    genre: "hardRock",
    price: 160.00
}

let skidRow = {
    id: 32,
    image: "../assets/SkidRow.jpg",
    title: "Skid Row",
    artist: "Skid Row",
    year: 1991,
    genre: "hardRock",
    price: 160.00
}

let slaveToTheGrind = {
    id: 33,
    image: "../assets/SlaveToTheGrind.jpg",
    title: "Slave To The Grind",
    artist: "Skid Row",
    year: 1991,
    genre: "hardRock",
    price: 160.00
}

let liveDonighton = {
    id: 34,
    image: "../assets/LiveDonighton.avif",
    title: "Live at Donington",
    artist: "Pantera",
    year: 1991,
    genre: "grooveMetal",
    price: 160.00
}

let liveUk = {
    id: 35,
    image: "../assets/LiveUk.jpg",
    title: "Live in the U.K.",
    artist: "Halloween",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
}

let amomOfTheBeast = {
    id: 36,
    image: "../assets/AmomOfTheBeast.avif",
    title: "Amon: The Beast",
    artist: "Deicide",
    year: 1991,
    genre: "deathMetal",
    price: 160.00
}

let volume4 = {
    id: 37,
    image: "../assets/Volume4.png",
    title: "Vol. 4",
    artist: "Black Sabbath",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
}

let mobRules = {
    id: 38,
    image: "../assets/MobRules.jpg",
    title: "Mob Rules",
    artist: "Black Sabbath",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00
};

let cardComaOfSouls = {
    id: 39,
    image: "../assets/ComaOfSouls.jfif",
    title: "Coma of Souls",
    artist: "Kreator",
    year: 1990,
    genre: "thrashMetal",
    price: 160.00
};

let cardEndlessPain = {
    id: 40,
    image: "../assets/EndlessPain.jpg",
    title: "Endless Pain",
    artist: "Kreator",
    year: 1982,
    genre: "thrashMetal",
    price: 160.00
};

let cardTombOfMutilated = {
    id: 41,
    image: "../assets/TombOfTheMutilated.jpeg",
    title: "Tomb of the Mutilated",
    artist: "Cannibal Corpse",
    year: 1992,
    genre: "deathMetal",
    price: 160.00
};

let cardStayHungry = {
    id: 42,
    image: "../assets/StayHungry.jpg",
    title: "Stay Hungry",
    artist: "Twisted Sister",
    year: 1984,
    genre: "hardRock",
    price: 160.00
};

let cardReignInBlood = {
    id: 43,
    image: "../assets/ReignInBlood.jpg",
    title: "Reign in Blood",
    artist: "Slayer",
    year: 1986,
    genre: "thrashMetal",
    price: 160.00
};

let cardShowNoMercy = {
    id: 44,
    image: "../assets/ShowNoMercy.jpg",
    title: "Show No Mercy",
    artist: "Slayer",
    year: 1983,
    genre: "thrashMetal",
    price: 160.00
};

let cardLastInLine = {
    id: 45,
    image: "../assets/LastInLine.avif",
    title: "The Last in Line",
    artist: "DIO",
    year: 1984,
    genre: "heavyMetal",
    price: 160.00
};

let arise = {
    id: 46,
    image: "../assets/Arise.jpg",
    title: "Arise",
    artist: "Sepultura",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00
}

let chaosAd = {
    id: 47,
    image: "../assets/ChaosAd.jpg",
    title: "Chaos A.D",
    artist: "Sepultura",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00
}

let benethTheRemains = {
    id: 48,
    image: "../assets/BenethTheRemains.jpg",
    title: "Beneath The Remains",
    artist: "Sepultura",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00
}




document.getElementById("card1").innerHTML = `
    <div class="card">
        <div class="card-image" style="background-image: url('${cardMetallica.image}')"><div class="card-image-span"><span>${cardMetallica.genre}</span></div></div>
        <div class="card-info">
        <h3>${cardMetallica.title}</h3>
        <p>${cardMetallica.artist}</p>
        <p class="preco"><strong>R$ ${cardMetallica.price.toFixed(2)}</strong></p>
            <button class="add-to-cart" onclick="addToCart('${cardMetallica.title}', ${cardMetallica.price}, event)">Adicionar ao Carrinho</button>
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
            <button class="add-to-cart" onclick="addToCart('${cardInjustice.title}', ${cardInjustice.price}, event)">Adicionar ao Carrinho</button>
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
            <button class="add-to-cart" onclick="addToCart('${cardFearOf.title}', ${cardFearOf.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardVulgarPower.title}', ${cardVulgarPower.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardUseYourIlusion.title}', ${cardUseYourIlusion.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardQuatroEstacoes.title}', ${cardQuatroEstacoes.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardEnvelhecoCidade.title}', ${cardEnvelhecoCidade.price}, event)">Adicionar ao Carrinho</button>
        
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
                    <button class="add-to-cart" onclick="addToCart('${cardBlackSabath.title}', ${cardBlackSabath.price}, event)">Adicionar ao Carrinho</button>
        
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
                    <button class="add-to-cart" onclick="addToCart('${cardCardume.title}', ${cardCardume.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardCamisaVenus.title}', ${cardCamisaVenus.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardMetallicaBlack.title}', ${cardMetallicaBlack.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardRideTheLight.title}', ${cardRideTheLight.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardLegion.title}', ${cardLegion.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardDeicide.title}', ${cardDeicide.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardIronMaiden.title}', ${cardIronMaiden.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardKillers.title}', ${cardKillers.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardFarBeyond.title}', ${cardFarBeyond.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardBlackOfSouls.title}', ${cardBlackOfSouls.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardEndComplete.title}', ${cardEndComplete.price}, event)">Adicionar ao Carrinho</button>
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
                    <button class="add-to-cart" onclick="addToCart('${cardObituary.title}', ${cardObituary.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;

document.getElementById("card21").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${maidenJapan.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${maidenJapan.title}</h3>
                    <p>${maidenJapan.artist}</p>
                    <p class="preco"><strong>R$ ${maidenJapan.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${maidenJapan.title}', ${maidenJapan.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card22").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${liveAfter.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${liveAfter.title}</h3>
                    <p>${liveAfter.artist}</p>
                    <p class="preco"><strong>R$ ${liveAfter.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${liveAfter.title}', ${liveAfter.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card23").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${powerSlave.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${powerSlave.title}</h3>
                    <p>${powerSlave.artist}</p>
                    <p class="preco"><strong>R$ ${powerSlave.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${powerSlave.title}', ${powerSlave.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card24").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${seventhSon.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${seventhSon.title}</h3>
                    <p>${seventhSon.artist}</p>
                    <p class="preco"><strong>R$ ${seventhSon.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${seventhSon.title}', ${seventhSon.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card25").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${noPrayer.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${noPrayer.title}</h3>
                    <p>${noPrayer.artist}</p>
                    <p class="preco"><strong>R$ ${noPrayer.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${noPrayer.title}', ${noPrayer.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card26").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${theRazor.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${theRazor.title}</h3>
                    <p>${theRazor.artist}</p>
                    <p class="preco"><strong>R$ ${theRazor.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${theRazor.title}', ${theRazor.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card27").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${forTheAbout.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${forTheAbout.title}</h3>
                    <p>${forTheAbout.artist}</p>
                    <p class="preco"><strong>R$ ${forTheAbout.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${forTheAbout.title}', ${forTheAbout.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card28").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${backInBlack.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${backInBlack.title}</h3>
                    <p>${backInBlack.artist}</p>
                    <p class="preco"><strong>R$ ${backInBlack.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${backInBlack.title}', ${backInBlack.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card29").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${useYourIlusion2.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${useYourIlusion2.title}</h3>
                    <p>${useYourIlusion2.artist}</p>
                    <p class="preco"><strong>R$ ${useYourIlusion2.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${useYourIlusion2.title}', ${useYourIlusion2.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card30").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${destiny.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${destiny.title}</h3>
                    <p>${destiny.artist}</p>
                    <p class="preco"><strong>R$ ${destiny.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${destiny.title}', ${destiny.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card31").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${rockTheNation.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${rockTheNation.title}</h3>
                    <p>${rockTheNation.artist}</p>
                    <p class="preco"><strong>R$ ${rockTheNation.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${rockTheNation.title}', ${rockTheNation.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card32").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${skidRow.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${skidRow.title}</h3>
                    <p>${skidRow.artist}</p>
                    <p class="preco"><strong>R$ ${skidRow.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${skidRow.title}', ${skidRow.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card33").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${slaveToTheGrind.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${slaveToTheGrind.title}</h3>
                    <p>${slaveToTheGrind.artist}</p>
                    <p class="preco"><strong>R$ ${slaveToTheGrind.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${slaveToTheGrind.title}', ${slaveToTheGrind.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card34").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${liveDonighton.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${liveDonighton.title}</h3>
                    <p>${liveDonighton.artist}</p>
                    <p class="preco"><strong>R$ ${liveDonighton.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${liveDonighton.title}', ${liveDonighton.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card35").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${liveUk.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${liveUk.title}</h3>
                    <p>${liveUk.artist}</p>
                    <p class="preco"><strong>R$ ${liveUk.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${liveUk.title}', ${liveUk.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card36").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${amomOfTheBeast.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${amomOfTheBeast.title}</h3>
                    <p>${amomOfTheBeast.artist}</p>
                    <p class="preco"><strong>R$ ${amomOfTheBeast.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${amomOfTheBeast.title}', ${amomOfTheBeast.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card37").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${volume4.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${volume4.title}</h3>
                    <p>${volume4.artist}</p>
                    <p class="preco"><strong>R$ ${volume4.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${volume4.title}', ${volume4.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card38").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${mobRules.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${mobRules.title}</h3>
                    <p>${mobRules.artist}</p>
                    <p class="preco"><strong>R$ ${mobRules.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${mobRules.title}', ${mobRules.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card39").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardComaOfSouls.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardComaOfSouls.title}</h3>
                    <p>${cardComaOfSouls.artist}</p>
                    <p class="preco"><strong>R$ ${cardComaOfSouls.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${cardComaOfSouls.title}', ${cardComaOfSouls.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card40").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardEndlessPain.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardEndlessPain.title}</h3>
                    <p>${cardEndlessPain.artist}</p>
                    <p class="preco"><strong>R$ ${cardEndlessPain.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${cardEndlessPain.title}', ${cardEndlessPain.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card41").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardTombOfMutilated.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardTombOfMutilated.title}</h3>
                    <p>${cardTombOfMutilated.artist}</p>
                    <p class="preco"><strong>R$ ${cardTombOfMutilated.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${cardTombOfMutilated.title}', ${cardTombOfMutilated.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card42").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardStayHungry.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardStayHungry.title}</h3>
                    <p>${cardStayHungry.artist}</p>
                    <p class="preco"><strong>R$ ${cardStayHungry.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${cardStayHungry.title}', ${cardStayHungry.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card43").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardReignInBlood.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardReignInBlood.title}</h3>
                    <p>${cardReignInBlood.artist}</p>
                    <p class="preco"><strong>R$ ${cardReignInBlood.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${cardReignInBlood.title}', ${cardReignInBlood.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card44").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardShowNoMercy.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardShowNoMercy.title}</h3>
                    <p>${cardShowNoMercy.artist}</p>
                    <p class="preco"><strong>R$ ${cardShowNoMercy.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${cardShowNoMercy.title}', ${cardShowNoMercy.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card45").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${cardLastInLine.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${cardLastInLine.title}</h3>
                    <p>${cardLastInLine.artist}</p>
                    <p class="preco"><strong>R$ ${cardLastInLine.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${cardLastInLine.title}', ${cardLastInLine.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card46").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${arise.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${arise.title}</h3>
                    <p>${arise.artist}</p>
                    <p class="preco"><strong>R$ ${arise.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${arise.title}', ${arise.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card47").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${chaosAd.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${chaosAd.title}</h3>
                    <p>${chaosAd.artist}</p>
                    <p class="preco"><strong>R$ ${chaosAd.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${chaosAd.title}', ${chaosAd.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
document.getElementById("card48").innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url('${benethTheRemains.image}')"><div class="card-image-span"></div></div>
                <div class="card-info">
                    <h3>${benethTheRemains.title}</h3>
                    <p>${benethTheRemains.artist}</p>
                    <p class="preco"><strong>R$ ${benethTheRemains.price.toFixed(2)}</strong></p>
                    <button class="add-to-cart" onclick="addToCart('${benethTheRemains.title}', ${benethTheRemains.price}, event)">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;


// // Cards da section Novidades



// Array de todos os discos
let todosDiscos = [cardMetallica, cardInjustice, cardFearOf, cardVulgarPower, cardUseYourIlusion, cardQuatroEstacoes, cardBlackSabath, cardEnvelhecoCidade, cardCardume, cardCamisaVenus, cardMetallicaBlack, cardRideTheLight, cardLegion, cardDeicide, cardIronMaiden, cardKillers, cardFarBeyond, cardBlackOfSouls, cardEndComplete, cardObituary, maidenJapan, liveAfter, powerSlave, seventhSon, noPrayer, theRazor, forTheAbout, backInBlack, useYourIlusion2, destiny, rockTheNation, skidRow, slaveToTheGrind, liveDonighton, liveUk, amomOfTheBeast, volume4, mobRules, cardComaOfSouls, cardEndlessPain, cardTombOfMutilated, cardStayHungry, cardReignInBlood, cardShowNoMercy, cardLastInLine, arise, chaosAd, benethTheRemains];

const listaCards = document.getElementById("centralizar");
const totalDiscos = document.getElementById("totalDiscos");

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
    <button class="add-to-cart" onclick="addToCart('${disco.title}', ${disco.price}, event)">Adicionar ao Carrinho</button>
    </div>
    </a>
    </div>
    `;
    });

    if (totalDiscos) {
        totalDiscos.textContent = `${discos.length} discos encontrados`;
    }
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
if (totalDiscos) {
    totalDiscos.textContent = `${todosDiscos.length} discos disponíveis`;
}

// ===== URL PARAM FILTER =====
const urlParams = new URLSearchParams(window.location.search);
const genreParam = urlParams.get('genre');
if (genreParam) {
    const filtroGenero = document.getElementById("filtro-genero");
    if (filtroGenero) {
        filtroGenero.value = genreParam;
        filtrarDiscos();
    }
}



