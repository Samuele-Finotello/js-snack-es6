//SNACK 1
//dichiaro l'array di oggetti bici
const bici = [
  {
    nome: 'Giant TCR Advanced SL 0',
    peso: '6.4 kg'
  },
  {
    nome: 'Scott Addict RC Ultimate',
    peso: '5.9 kg'
  },
  {
    nome: 'Specialized S-Works Aethos/Sram Red Etap AXS',
    peso: '6.34 kg'
  },
  {
    nome: 'Wilier Triestina Verticale SLR',
    peso: '6.5 kg'
  },
  {
    nome: 'Orbea Orca M10iLTD Replica',
    peso: '6.7 kg'
  }
];

console.log(bici)

//dichiaro e assegno la variabile da confrontare con tutti gli oggetti
let pesoMin = bici[0];

for (let i = 1; i < bici.length; i++) {
  if (bici[i]['peso'] < pesoMin['peso']) {
    pesoMin = bici[i];
  }
}
console.log(pesoMin)

//stampo il messaggio su schermo
const biciMin = document.getElementById('bici-min');
biciMin.innerText = `La bici piu' leggera e' la ${pesoMin['nome']} che pesa: ${pesoMin['peso']}`;

//SNACK 2
//dichiaro l'array di oggetti squadre
const squadre = [
  {
    nome: 'Atalanta',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Bologna',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Cagliari',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Como',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Cremonese',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Fiorentina',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Genoa',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Inter',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Juventus',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Lazio',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Lecce',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Milan',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Napoli',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Parma',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Pisa',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Roma',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Sassuolo',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Torino',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Udinese',
    punti: 0,
    'falli-subiti': 0
  },
  {
    nome: 'Verona',
    punti: 0,
    'falli-subiti': 0
  }
];

console.log(squadre);

const points = () => {
  max = 120;
  min = 10;
  punti = Math.floor(Math.random() * (max - min + 1)) + min;
  return punti;
}

const fouls = () => {
  max = 800;
  min = 0;
  falli = Math.floor(Math.random() * (max - min)) + min;
  return falli;
}