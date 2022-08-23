
const textkm = prompt('Quanti chilometri vuoi percorrere?');
const textkmAsN = parseInt(textkm);
console.log('textkmAsN', textkmAsN);
const calckm = textkmAsN * 0.21;
const rispostakm = `il prezzo è di ${calckm}`;

document.getElementById('train_id').innerHTML = rispostakm;

const textage = prompt('Qual è la tua età?');


/*
if (textage < 18) {
    add 20 % discount
} else if (textage > 65) {
    add 40 % discount
}
*/