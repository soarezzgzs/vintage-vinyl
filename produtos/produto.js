const produtos = {
  1: {
    image: "../assets/masterOfPuppets.jfif",
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    genre: "thrashMetal",
    price: 180.00,
    genre2: "Thrash Metal",
    sobre: "Master of Puppets (1986) é um dos álbuns mais icônicos do metal e um marco absoluto na carreira do Metallica. Com riffs rápidos e agressivos, letras densas e estruturas complexas, o disco eleva o thrash metal a um novo nível. Faixas como “Battery”, “Master of Puppets” e “Welcome Home (Sanitarium)” equilibram peso e melodia de forma magistral. É um álbum intenso, técnico e emocional, considerado por muitos como uma obra-prima do gênero"
  },
  2: {
    image: "../assets/Injustice.jfif",
    title: "And Justuce for All",
    artist: "Metallica",
    year: 1988,
    genre: "thrashMetal",
    price: 180.00,
    genre2: "Thrash Metal",
    sobre: "And Justice for All (1988) mostra o Metallica em sua fase mais técnica e ambiciosa. Com músicas longas, riffs complexos e letras críticas sobre injustiça, poder e corrupção, o álbum aposta em uma sonoridade mais seca e sombria. Faixas como “One”, “Blackened” e “Harvester of Sorrow” se destacam pela intensidade e precisão. É um disco denso e desafiador, considerado um dos trabalhos mais ousados da banda."
  },
  3:{
    image: "../assets/FearOfTheDark.jfif",
    title: "Fear of the Dark",
    artist: "Iron Maiden",
    year: 1980,
    genre: "heavyMetal",
    price: 150.00,
    genre2: "Heavy Metal",
    sobre: "Fear of the Dark (1992) marca uma fase mais madura do Iron Maiden, equilibrando o peso clássico da banda com uma sonoridade mais acessível. O álbum traz momentos intensos e atmosféricos, com destaque para a faixa-título, que se tornou um hino nos shows. Mesmo com altos e baixos, o disco se sustenta pela identidade forte da banda e pela temática sombria que explora medo, isolamento e paranoia."
  },
  4:{
    image: "../assets/VulgarPower.jfif",
    title: "Vulgar Display of Power",
    artist: "Pantera",
    year: 1992,
    genre: "grooveMetal",
    price: 120.00,
    genre2: "Groove Metal",
    sobre: "Vulgar Display of Power (1992) é um dos álbuns mais pesados e influentes do metal dos anos 90. O Pantera entrega riffs agressivos, grooves marcantes e uma atitude crua, redefinindo o metal moderno. Faixas como “Walk”, “Mouth for War” e “This Love” combinam brutalidade e precisão, criando um som direto e impactante. É um disco visceral, cheio de energia e revolta, essencial para qualquer fã de metal."
  },
  5:{
    image: "../assets/UseYourIlusion.jfif",
    title: "Use Your Ilusion",
    artist: "Guns N' Roses",
    year: 1991,
    genre: "hardRock",
    price: 160.00,
    genre2: "Hard Rock",
    sobre: "Use Your Illusion I & II (1991) mostram o Guns N’ Roses em sua fase mais ambiciosa e expansiva. Os álbuns misturam hard rock pesado com baladas épicas e experimentações musicais, revelando uma banda no auge criativo. Faixas como “November Rain”, “Don’t Cry” e “Civil War” se destacam pela emoção e grandiosidade. É um projeto excessivo em alguns momentos, mas marcante e essencial na história do rock."
  },
  6:{
    image: "../assets/QuatroEstacoes.jfif",
    title: "Quatro Estações",
    artist: "Legião Urbana",
    year: 1989,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "As Quatro Estações (1989) é um dos álbuns mais emblemáticos da Legião Urbana, marcando uma fase mais madura e reflexiva da banda. Com letras poéticas e introspectivas, Renato Russo aborda temas como amor, juventude, conflitos internos e espiritualidade. Canções como “Pais e Filhos”, “Há Tempos” e “Monte Castelo” se tornaram clássicos da música brasileira. É um disco intenso, emocional e atemporal."
  },
  7:{
    image: "../assets/AlivioImediato.jfif",
    title: "Alívio Imediato",
    artist: "Engenheiros do Hawaii",
    year: 1989,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "Alívio Imediato (1989) é um álbum ao vivo que captura a essência dos Engenheiros do Hawaii no auge de sua popularidade. Com arranjos bem trabalhados e letras inteligentes, Humberto Gessinger conduz um repertório que mistura rock, reflexão e crítica social. Faixas como “Infinita Highway”, “Refrão de Bolero” e “Toda Forma de Poder” ganham ainda mais força nas versões ao vivo. É um registro marcante da energia e identidade da banda."
  },
  8:{
    image: "../assets/EnvelhecoCidade.jfif",
    title: "Envelheço Cidade",
    artist: "Ira!",
    year: 1986,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "Envelheço na Cidade (1986) é o álbum de estreia do Ira! e um retrato direto da juventude urbana dos anos 80. Com um rock simples, energético e letras cheias de atitude, o disco fala sobre inquietação, rotina e rebeldia. Músicas como “Flores em Você”, “Envelheço na Cidade” e “Núcleo Base” se tornaram clássicos do rock nacional. É um álbum cru, sincero e cheio de identidade."
  },
  9:{
    image: "../assets/Cardume.jfif",
    title: "Cardume",
    artist: "Nenhum de Nós",
    year: 1989,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "Cardume (1987) é o álbum que consolidou o Nenhum de Nós no rock brasileiro. Com uma sonoridade melódica e letras sensíveis, o disco aborda sentimentos como amor, insegurança e amadurecimento. A faixa “Camila, Camila” se tornou um grande sucesso e símbolo da banda. É um trabalho marcante pela sinceridade emocional e pela forte conexão com o público."
  },
  10:{
    image: "../assets/CamisaVenus.jfif",
    title: "Camisa Vênus",
    artist: "Camisa de Vênus",
    year: 1986,
    genre: "rockNacional",
    price: 180.00,
    genre2: "Rock Nacional",
    sobre: "Camisa de Vênus (1983) é o álbum de estreia da banda homônima e um dos discos mais provocativos do rock brasileiro. Com letras ácidas, irreverentes e politicamente incorretas, o grupo mistura punk rock com crítica social e sarcasmo. Faixas como “Eu Não Matei Joana D’Arc” e “Bete Morreu” se destacam pela atitude confrontadora. É um disco cru, rebelde e cheio de personalidade."
  },
  11:{
    image: "../assets/Metallica.jfif",
    title: "Metallica",
    artist: "Metallica",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "O Black Album do Metallica, lançado em 1991, marcou uma virada na banda ao trazer um som mais acessível, pesado e refinado, com produção de Bob Rock. Com clássicos como “Enter Sandman”, “The Unforgiven” e “Nothing Else Matters”, o disco consolidou o Metallica como uma das maiores bandas de rock do mundo."
  },
  12:{
    image: "../assets/RideTheLight.jfif",
    title: "Ride The Lightning",
    artist: "Metallica Black Album ",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Thrash Metal",
    sobre: "Ride the Lightning, lançado em 1984, é o segundo álbum do Metallica e um marco do thrash metal. Mais rápido e técnico que o debut, o disco mostra a banda expandindo sua criatividade com faixas icônicas como “Fade to Black”, “Creeping Death” e “For Whom the Bell Tolls”, ajudando a definir o som do metal dos anos 80."
  },
  13:{
    image: "../assets/Legion.jfif",
    title: "Legion",
    artist: "Deicide",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "Legion, lançado em 1992, é o segundo álbum do Deicide e um dos mais brutais do death metal. Com riffs caóticos, vocais demoníacos e bateria intensa, o disco elevou a agressividade da banda em faixas como “Dead But Dreaming” e “Satan Spawn, the Caco-Daemon”, consolidando o Deicide como um nome extremo e controverso do gênero."
  },
  14:{
    image: "../assets/Deicide.jfif",
    title: "Deicide",
    artist: "Deicide",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "Deicide, lançado em 1990, é o álbum de estreia da banda homônima e um clássico do death metal. Extremamente agressivo e direto, o disco se destaca pelos riffs rápidos, bateria violenta e letras blasfemas, com faixas como “Sacrificial Suicide” e “Dead by Dawn”, estabelecendo o Deicide como uma das bandas mais extremas do gênero."
  },
  15:{
    image: "../assets/IronMaiden.jfif",
    title: "Iron Maiden",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    gerne2: "Heavy Metal",
    sobre: "Iron Maiden, lançado em 1980, é o álbum de estreia da banda britânica e um marco da New Wave of British Heavy Metal. Com um som cru e energético, o disco traz clássicos como “Running Free”, “Phantom of the Opera” e “Iron Maiden”, apresentando ao mundo a identidade e a força da banda."
  },
  16:{
    image: "../assets/Killers.jfif",
    title: "Killers",
    artist: "Iron Maiden",
    year: 1991,
    genre: "heavyMetal",
    price: 160.00,
    genre2: "Heavy Metal",
    sobre: "Killers, lançado em 1981, é o segundo álbum do Iron Maiden e aprofunda o som agressivo e veloz da banda. Com a voz de Paul Di’Anno e produção de Martin Birch, o disco traz faixas marcantes como “Wrathchild”, “Murders in the Rue Morgue” e “Killers”, sendo um clássico da NWOBHM"
  },
  17:{
    image: "../assets/FarBeyond.jfif",
    title: "Far Beyond Driven",
    artist: "Pantera",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Trash Metal",
    sobre: "Far Beyond Driven, lançado em 1994, é o sétimo álbum do Pantera e um dos ápices do groove metal. Extremamente pesado e agressivo, o disco traz riffs cortantes e atitude brutal em faixas como “I’m Broken”, “5 Minutes Alone” e “Becoming”, estreando em 1º lugar na Billboard e consolidando a força do Pantera nos anos 90."
  },
  18:{
    image: "../assets/BlackOfSouls.jfif",
    title: "Souls Of Black",
    artist: "Testament",
    year: 1991,
    genre: "thrashMetal",
    price: 160.00,
    genre2: "Trash Metal",
    sobre: "Souls of Black, lançado em 1990, é o quarto álbum do Testament e mantém a banda firme no thrash metal agressivo. Com riffs rápidos, vocais intensos de Chuck Billy e clima mais sombrio, o disco traz faixas como “Souls of Black”, “Face in the Sky” e “Seven Days of May”, sendo um clássico da fase inicial da banda."
  },
  19:{
    image: "../assets/Obituary.jfif",
    title: "Obituary Slowly We Rot",
    artist: "Obituary",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "Slowly We Rot, lançado em 1989, é o álbum de estreia do Obituary e um dos pilares do death metal. Com riffs arrastados, clima sombrio e os vocais guturais inconfundíveis de John Tardy, o disco traz clássicos como “Slowly We Rot” e “Internal Bleeding”, ajudando a definir o som pesado e sufocante do gênero."
  },
  20:{
    image: "../assets/EndComplete.jfif",
    title: "The End Complete",
    artist: "Obituary",
    year: 1991,
    genre: "deathMetal",
    price: 160.00,
    genre2: "Death Metal",
    sobre: "The End Complete, lançado em 1992, é o terceiro álbum do Obituary e um dos mais importantes do death metal. Com riffs pesados e cadenciados, atmosfera sombria e os vocais marcantes de John Tardy, o disco traz faixas clássicas como “The End Complete”, “Back to One” e “Arise”, consolidando o Obituary como um dos gigantes do gênero."
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

console.log("URL:", window.location.search);
console.log("ID:", id);
console.log("Produto:", produtos[id]);



