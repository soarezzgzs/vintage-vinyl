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

const produtos = {
  1: {
    image: "../assets/masterOfPuppets.jfif",
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    genre: "thrashMetal",
    price: 180.00,
    genre2: "Thrash Metal",
    sobre: "Master of Puppets (1986), do Metallica, é um marco do thrash metal. Riffs agressivos, solos técnicos e letras profundas definem faixas como 'Battery', 'Master of Puppets' e 'Welcome Home (Sanitarium)'. Produzido por Flemming Rasmussen, elevou o gênero a novos patamares de complexidade e intensidade. Obra-prima absoluta, influenciou gerações de metalheads. Gênero: Thrash Metal."
  },
  2: {
    image: "../assets/Injustice.jfif",
    title: "...And Justice for All",
    artist: "Metallica",
    year: 1988,
    genre: "thrashMetal",
    price: 180.00,
    genre2: "Thrash Metal",
    sobre: "...And Justice for All (1988), do Metallica, é técnico e progressivo. Sem baixo audível na mixagem de Flemming Rasmussen, destaca riffs intrincados em 'One', 'Blackened' e 'Dyers Eve'. Letras sobre guerra e injustiça. Gênero: Thrash Metal. Álbum ambicioso que testou limites da banda."
  },
  3: {
    image: "../assets/FearOfTheDark.jfif",
    title: "Fear of the Dark",
    artist: "Iron Maiden",
    year: 1992,
    genre: "heavyMetal",
    price: 150.00,
    genre2: "Heavy Metal",
    sobre: "Fear of the Dark (1992), do Iron Maiden, com Blaze Bayley na voz pela primeira vez. Destaque para a faixa-título épica, 'Afraid to Shoot Strangers' e 'Wasting Love'. Produção por Steve Harris. Mistura heavy metal clássico com toques modernos. Gênero: Heavy Metal."
  },
  4: {
    image: "../assets/VulgarPower.jfif",
    title: "Vulgar Display of Power",
    artist: "Pantera",
    year: 1992,
    genre: "grooveMetal",
    price: 120.00,
    genre2: "Groove Metal",
    sobre: "Vulgar Display of Power (1992) é um dos álbuns mais pesados e influentes do metal dos anos 90. O Pantera entrega riffs agressivos, grooves marcantes e uma atitude crua, redefinindo o metal moderno. Faixas como “Walk”, “Mouth for War” e “This Love” combinam brutalidade e precisão, criando um som direto e impactante. É um disco visceral, cheio de energia e revolta, essencial para qualquer fã de metal."
  },
  5: {
    image: "../assets/UseYourIlusions2.jfif",
    title: "Use Your Ilusion",
    artist: "Guns N' Roses",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Use Your Illusion I & II (1991) mostram o Guns N’ Roses em sua fase mais ambiciosa e expansiva. Os álbuns misturam hard rock pesado com baladas épicas e experimentações musicais, revelando uma banda no auge criativo. Faixas como “November Rain”, “Don’t Cry” e “Civil War” se destacam pela emoção e grandiosidade. É um projeto excessivo em alguns momentos, mas marcante e essencial na história do rock."
  },
  6: {
    image: "../assets/QuatroEstacoes.jfif",
    title: "Quatro Estações",
    artist: "Legião Urbana",
    year: 1989,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "As Quatro Estações (1989) é um dos álbuns mais emblemáticos da Legião Urbana, marcando uma fase mais madura e reflexiva da banda. Com letras poéticas e introspectivas, Renato Russo aborda temas como amor, juventude, conflitos internos e espiritualidade. Canções como “Pais e Filhos”, “Há Tempos” e “Monte Castelo” se tornaram clássicos da música brasileira. É um disco intenso, emocional e atemporal."
  },
  7: {
    image: "../assets/AlivioImediato.jfif",
    title: "Alívio Imediato",
    artist: "Engenheiros do Hawaii",
    year: 1989,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "Alívio Imediato (1989) é um álbum ao vivo que captura a essência dos Engenheiros do Hawaii no auge de sua popularidade. Com arranjos bem trabalhados e letras inteligentes, Humberto Gessinger conduz um repertório que mistura rock, reflexão e crítica social. Faixas como “Infinita Highway”, “Refrão de Bolero” e “Toda Forma de Poder” ganham ainda mais força nas versões ao vivo. É um registro marcante da energia e identidade da banda."
  },
  8: {
    image: "../assets/EnvelhecoCidade.jfif",
    title: "Envelheço Cidade",
    artist: "Ira!",
    year: 1986,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "Envelheço na Cidade (1986) é o álbum de estreia do Ira! e um retrato direto da juventude urbana dos anos 80. Com um rock simples, energético e letras cheias de atitude, o disco fala sobre inquietação, rotina e rebeldia. Músicas como “Flores em Você”, “Envelheço na Cidade” e “Núcleo Base” se tornaram clássicos do rock nacional. É um álbum cru, sincero e cheio de identidade."
  },
  9: {
    image: "../assets/Cardume.jfif",
    title: "Cardume",
    artist: "Nenhum de Nós",
    year: 1989,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "Cardume (1987) é o álbum que consolidou o Nenhum de Nós no rock brasileiro. Com uma sonoridade melódica e letras sensíveis, o disco aborda sentimentos como amor, insegurança e amadurecimento. A faixa “Camila, Camila” se tornou um grande sucesso e símbolo da banda. É um trabalho marcante pela sinceridade emocional e pela forte conexão com o público."
  },
  10: {
    image: "../assets/CamisaVenus.jfif",
    title: "Camisa Vênus",
    artist: "Camisa de Vênus",
    year: 1986,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "Camisa de Vênus (1983) é o álbum de estreia da banda homônima e um dos discos mais provocativos do rock brasileiro. Com letras ácidas, irreverentes e politicamente incorretas, o grupo mistura punk rock com crítica social e sarcasmo. Faixas como “Eu Não Matei Joana D’Arc” e “Bete Morreu” se destacam pela atitude confrontadora. É um disco cru, rebelde e cheio de personalidade."
  },
  11: {
    image: "../assets/Metallica.jfif",
    title: "Metallica",
    artist: "Metallica",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "O Black Album do Metallica, lançado em 1991, marcou uma virada na banda ao trazer um som mais acessível, pesado e refinado, com produção de Bob Rock. Com clássicos como “Enter Sandman”, “The Unforgiven” e “Nothing Else Matters”, o disco consolidou o Metallica como uma das maiores bandas de rock do mundo."
  },
  12: {
    image: "../assets/RideTheLight.jfif",
    title: "Ride The Lightning",
    artist: "Metallica Black Album ",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Ride the Lightning, lançado em 1984, é o segundo álbum do Metallica e um marco do thrash metal. Mais rápido e técnico que o debut, o disco mostra a banda expandindo sua criatividade com faixas icônicas como “Fade to Black”, “Creeping Death” e “For Whom the Bell Tolls”, ajudando a definir o som do metal dos anos 80."
  },
  13: {
    image: "../assets/Legion.jfif",
    title: "Legion",
    artist: "Deicide",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "Legion, lançado em 1992, é o segundo álbum do Deicide e um dos mais brutais do death metal. Com riffs caóticos, vocais demoníacos e bateria intensa, o disco elevou a agressividade da banda em faixas como “Dead But Dreaming” e “Satan Spawn, the Caco-Daemon”, consolidando o Deicide como um nome extremo e controverso do gênero."
  },
  14: {
    image: "../assets/Deicide.jfif",
    title: "Deicide",
    artist: "Deicide",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "Deicide, lançado em 1990, é o álbum de estreia da banda homônima e um clássico do death metal. Extremamente agressivo e direto, o disco se destaca pelos riffs rápidos, bateria violenta e letras blasfemas, com faixas como “Sacrificial Suicide” e “Dead by Dawn”, estabelecendo o Deicide como uma das bandas mais extremas do gênero."
  },
  15: {
    image: "../assets/IronMaiden.jfif",
    title: "Iron Maiden",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    gerne2: "Heavy Metal",
    sobre: "Iron Maiden, lançado em 1980, é o álbum de estreia da banda britânica e um marco da New Wave of British Heavy Metal. Com um som cru e energético, o disco traz clássicos como “Running Free”, “Phantom of the Opera” e “Iron Maiden”, apresentando ao mundo a identidade e a força da banda."
  },
  16: {
    image: "../assets/Killers.jfif",
    title: "Killers",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Killers, lançado em 1981, é o segundo álbum do Iron Maiden e aprofunda o som agressivo e veloz da banda. Com a voz de Paul Di’Anno e produção de Martin Birch, o disco traz faixas marcantes como “Wrathchild”, “Murders in the Rue Morgue” e “Killers”, sendo um clássico da NWOBHM"
  },
  17: {
    image: "../assets/FarBeyond.jfif",
    title: "Far Beyond Driven",
    artist: "Pantera",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Trash Metal",
    sobre: "Far Beyond Driven, lançado em 1994, é o sétimo álbum do Pantera e um dos ápices do groove metal. Extremamente pesado e agressivo, o disco traz riffs cortantes e atitude brutal em faixas como “I’m Broken”, “5 Minutes Alone” e “Becoming”, estreando em 1º lugar na Billboard e consolidando a força do Pantera nos anos 90."
  },
  18: {
    image: "../assets/BlackOfSouls.jfif",
    title: "Souls Of Black",
    artist: "Testament",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Trash Metal",
    sobre: "Souls of Black, lançado em 1990, é o quarto álbum do Testament e mantém a banda firme no thrash metal agressivo. Com riffs rápidos, vocais intensos de Chuck Billy e clima mais sombrio, o disco traz faixas como “Souls of Black”, “Face in the Sky” e “Seven Days of May”, sendo um clássico da fase inicial da banda."
  },
  19: {
    image: "../assets/Obituary.jfif",
    title: "Slowly We Rot",
    artist: "Obituary",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "Slowly We Rot, lançado em 1989, é o álbum de estreia do Obituary e um dos pilares do death metal. Com riffs arrastados, clima sombrio e os vocais guturais inconfundíveis de John Tardy, o disco traz clássicos como “Slowly We Rot” e “Internal Bleeding”, ajudando a definir o som pesado e sufocante do gênero."
  },
  20: {
    image: "../assets/EndComplete.jfif",
    title: "The End Complete",
    artist: "Obituary",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "The End Complete, lançado em 1992, é o terceiro álbum do Obituary e um dos mais importantes do death metal. Com riffs pesados e cadenciados, atmosfera sombria e os vocais marcantes de John Tardy, o disco traz faixas clássicas como “The End Complete”, “Back to One” e “Arise”, consolidando o Obituary como um dos gigantes do gênero."
  },
  21: {
    image: "../assets/maidenJapan.jpg",
    title: "Maiden Japan",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Maiden Japan, lançado em 1991, é o álbum que apresenta o Iron Maiden no Japão. Com um som poderoso e energético, o disco traz faixas como “The Number of the Beast”, “Run to the Hills” e “Fear of the Dark”, consolidando a presença da banda no mercado asiático."
  },
  22: {
    image: "../assets/LiveAfter.jpg",
    title: "Live After Death",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Live After Death, lançado em 1985, é o álbum ao vivo do Iron Maiden que apresenta performances intensas e energéticas. Com faixas como “The Number of the Beast”, “Run to the Hills” e “Fear of the Dark”, o disco é uma celebração do espírito e da força da banda."
  },
  23: {
    image: "../assets/PowerSlave.jpg",
    title: "Powerslave",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Powerslave, lançado em 1984, é o quinto álbum do Iron Maiden e um dos mais aclamados pela crítica. Com faixas como “Powerslave”, “Run to the Hills” e “Fear of the Dark”, o disco apresenta um som mais acessível e melódico, mantendo a energia e a força que caracterizam a banda."
  },
  24: {
    image: "../assets/SeventhSon.jfif",
    title: "Seventh Son of a Seventh Son",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Seventh Son of a Seventh Son, lançado em 1988, é o sexto álbum do Iron Maiden e um dos mais elogiados pela crítica. Com faixas como “Seventh Son of a Seventh Son”, “Fear of the Dark” e “The Number of the Beast”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  25: {
    image: "../assets/NoPrayer.jpg",
    title: "No Prayer for the Dying",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "No Prayer for the Dying, lançado em 1984, é o sétimo álbum do Iron Maiden e um dos mais aclamados pela crítica. Com faixas como “No Prayer for the Dying”, “Fear of the Dark” e “The Number of the Beast”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  26: {
    image: "../assets/TheRazor.jpg",
    title: "The Razor's Edge",
    artist: "AC/DC",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "The Razor's Edge, lançado em 1990, é o nono álbum do AC/DC e um dos mais vendidos da banda. Com faixas como “The Razor's Edge”, “Thunderstruck” e “Are You Ready”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  27: {
    image: "../assets/ForTheAbout.jpg",
    title: "For Those About To Rock",
    artist: "AC/DC",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "For Those About To Rock, lançado em 1981, é o segundo álbum do AC/DC e um dos mais aclamados pela crítica. Com faixas como “For Those About To Rock”, “You Shook Me All Night Long” e “Thunderstruck”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  28: {
    image: "../assets/BackInBlack.jpg",
    title: "Back In Black",
    artist: "AC/DC",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Back In Black, lançado em 1980, é o nono álbum do AC/DC e um dos mais vendidos da banda. Com faixas como “Back In Black”, “You Shook Me All Night Long” e “Thunderstruck”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  29: {
    image: "../assets/UseYourIlusion.jfif",
    title: "Use Your Ilusion 2",
    artist: "Guns N' Roses",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Use Your Ilusion 2, lançado em 1991, é o décimo álbum do Guns N' Roses e um dos mais vendidos da banda. Com faixas como “Use Your Ilusion 2”, “November Rain” e “Don't Cry”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  30: {
    image: "../assets/Destiny.jpg",
    title: "Destiny",
    artist: "Saxon",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Destiny, lançado em 1991, é o décimo álbum do Saxon e um dos mais vendidos da banda. Com faixas como “Destiny”, “The Return of the Son of a Gun” e “When the Lights Go Out”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  31: {
    image: "../assets/RockTheNation.jfif",
    title: "Rock The Nation",
    artist: "Saxon",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Rock The Nation, lançado em 1991, é o décimo álbum do Saxon e um dos mais vendidos da banda. Com faixas como “Rock The Nation”, “The Return of the Son of a Gun” e “When the Lights Go Out”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  32: {
    image: "../assets/SkidRow.jpg",
    title: "Skid Row",
    artist: "Skid Row",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Skid Row, lançado em 1991, é o décimo álbum do Skid Row e um dos mais vendidos da banda. Com faixas como “Skid Row”, “The Return of the Son of a Gun” e “When the Lights Go Out”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  33: {
    image: "../assets/SlaveToTheGrind.jpg",
    title: "Slave To The Grind",
    artist: "Skid Row",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Slave To The Grind, lançado em 1991, é o décimo álbum do Skid Row e um dos mais vendidos da banda. Com faixas como “Slave To The Grind”, “The Return of the Son of a Gun” e “When the Lights Go Out”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  34: {
    image: "../assets/LiveDonighton.avif",
    title: "Live Doninghton",
    artist: "Pantera",
    year: 1991,
    genre: "grooveMetal",
    price: 160.00,
    genre2: "Groove Metal",
    sobre: "O álbum Far Beyond Bootleg: Live From Donington '94, lançado em 2014, captura a energia explosiva da apresentação do Pantera no festival Monsters of Rock, realizado em Donington, Inglaterra, em 1994. Este registro é considerado um dos momentos mais intensos da carreira da banda, mostrando o auge do seu poder no palco."
  },
  35: {
    image: "../assets/LiveUk.jpg",
    title: "Live in the U.K.",
    artist: "Halloween",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Live in the U.K., lançado em 1991, é o décimo álbum do Halloween e um dos mais vendidos da banda. Com faixas como “Live in the U.K.”, “The Return of the Son of a Gun” e “When the Lights Go Out”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  36: {
    image: "../assets/AmomOfTheBeast.avif",
    title: "Amom: feasting the beast",
    artist: "Deicide",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "Amom: feasting the beast, lançado em 1991, é o décimo álbum do Deicide e um dos mais vendidos da banda. Com faixas como “Amom: feasting the beast”, “The Return of the Son of a Gun” e “When the Lights Go Out”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  37: {
    image: "../assets/Volume4.png",
    title: "Volume 4",
    artist: "Black Sabbath",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Volume 4, lançado em 1991, é o décimo álbum do Black Sabbath e um dos mais vendidos da banda. Com faixas como “Volume 4”, “The Return of the Son of a Gun” e “When the Lights Go Out”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  38: {
    image: "../assets/MobRules.jpg",
    title: "Mob Rules",
    artist: "Black Sabbath",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Mob Rules, lançado em 1991, é o décimo álbum do Black Sabbath e um dos mais vendidos da banda. Com faixas como “Mob Rules”, “The Return of the Son of a Gun” e “When the Lights Go Out”, o disco apresenta um som mais melódico e acessível, mantendo a energia e a força que caracterizam a banda."
  },
  39: {
    image: "../assets/ComaOfSouls.jfif",
    title: "Coma of Souls",
    artist: "Kreator",
    year: 1990,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Coma of Souls (1990) é um dos álbuns mais poderosos do Kreator, consolidando sua posição como pioneiros do thrash metal alemão. Com riffs furiosos, velocidade implacável e letras sobre guerra e decadência, faixas como 'Extreme Aggression', 'Terror Zone' e 'Coma of Souls' definem a agressividade do gênero. Um clássico essencial do thrash."
  },
  40: {
    image: "../assets/EndlessPain.jpg",
    title: "Endless Pain",
    artist: "Kreator",
    year: 1982,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Endless Pain (1982) é o debut explosivo do Kreator, capturando a fúria do thrash metal em sua forma mais crua. Com riffs cortantes, bateria frenética e vocais demoníacos de Mille Petrozza, o álbum apresenta hinos como 'Flag of Hate' e 'Storming with Menace'. Um marco do metal extremo europeu dos anos 80."
  },
  41: {
    image: "../assets/TombOfTheMutilated.jpeg",
    title: "Tomb of the Mutilated",
    artist: "Cannibal Corpse",
    year: 1992,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "Tomb of the Mutilated (1992) é o segundo álbum brutal do Cannibal Corpse, elevando o death metal a níveis de gore extremo. Com riffs técnicos, breakdowns esmagadores e vocais guturais de Chris Barnes, faixas como 'Hammer Smashed Face' e 'I Cum Blood' definem o som americano do gênero. Essencial para fãs de brutalidade."
  },
  42: {
    image: "../assets/StayHungry.jpg",
    title: "Stay Hungry",
    artist: "Twisted Sister",
    year: 1984,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Stay Hungry (1984) é o álbum breakthrough do Twisted Sister, misturando glam metal com atitude punk. Com hits massivos como 'We're Not Gonna Take It' e 'I Wanna Rock', o disco capturou a rebeldia da era MTV. Produção polida e hooks viciantes fizeram dele um clássico do hair metal americano."
  },
  43: {
    image: "../assets/ReignInBlood.jpg",
    title: "Reign in Blood",
    artist: "Slayer",
    year: 1986,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Reign in Blood (1986) é a obra-prima do Slayer, o álbum mais perfeito e influente do thrash metal. Com apenas 29 minutos de fúria implacável, riffs geniais de Kerry King/Jeff Hanneman e produção de Rick Rubin, faixas como 'Angel of Death', 'Raining Blood' e 'Postmortem' redefiniram velocidade e agressividade no metal."
  },
  44: {
    image: "../assets/ShowNoMercy.jpg",
    title: "Show No Mercy",
    artist: "Slayer",
    year: 1983,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Show No Mercy (1983) é o debut incendiário do Slayer, introduzindo o som thrash que mudaria o metal. Com riffs rápidos, solos insanos de Dave Lombardo e letras satânicas, o álbum apresenta clássicos como 'Black Magic' e 'Tormentor'. Produção crua captura a essência venenosa da banda em sua origem."
  },
  45: {
    image: "../assets/LastInLine.avif",
    title: "The Last in Line",
    artist: "DIO",
    year: 1984,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "The Last in Line (1984) é o segundo álbum solo de Ronnie James Dio após Rainbow/Black Sabbath, solidificando sua era lendária. Com hinos épicos como título track, 'We Rock' e 'Egypt (The Chains Are On)', o disco combina fantasia mítica com riffs poderosos e voz inigualável. Um pilar do heavy metal dos 80s."
  },
  46: {
    image: "../assets/Arise.jpg",
    title: "Arise",
    artist: "Sepultura",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Arise (1991) é o álbum que marcou a transição de Sepultura para um som mais maduro e experimental. Com riffs mais complexos e letras que abordam temas sociais e políticos, o disco apresenta faixas como 'Arise' e 'The Earth Is Not Enough'. Um marco no desenvolvimento da banda."
  },
  47: {
    image: "../assets/ChaosAd.jpg",
    title: "Chaos A.D.",
    artist: "Sepultura",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Chaos A.D. (1991) é o álbum que marcou a transição de Sepultura para um som mais maduro e experimental. Com riffs mais complexos e letras que abordam temas sociais e políticos, o disco apresenta faixas como 'Chaos A.D.' e 'The Earth Is Not Enough'. Um marco no desenvolvimento da banda."
  },
  48: {
    image: "../assets/BenethTheRemains.jpg",
    title: "Beneath The Remains",
    artist: "Sepultura",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Beneath The Remains (1991) é o álbum que marcou a transição de Sepultura para um som mais maduro e experimental. Com riffs mais complexos e letras que abordam temas sociais e políticos, o disco apresenta faixas como 'Beneath The Remains' e 'The Earth Is Not Enough'. Um marco no desenvolvimento da banda."
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

document.getElementById("imgProduto").src = produtos[id].image;
document.getElementById("genre").innerText = produtos[id].genre2;
document.getElementById("nome").innerText = produtos[id].title;
document.getElementById("descricao").innerText = produtos[id].artist;
document.getElementById("preco").innerText = 'R$ ' + produtos[id].price + ',00';
document.getElementById("sobre").innerText = produtos[id].sobre;

document.title = "Produto - " + produtos[id].title;



