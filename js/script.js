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