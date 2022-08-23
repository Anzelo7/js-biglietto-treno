
const textkm = prompt('Quanti chilometri vuoi percorrere?');
const textkmAsN = parseInt(textkm);
console.log('textkmAsN', textkmAsN);
const calckm = textkmAsN * 0.21;


const textage = prompt('Qual è la tua età?');
const textageAsN = parseInt(textage);
console.log('textageAsN', textageAsN);

if (textage < 18) {
    //applicare discount del 20% ai minorenni

    const calckmtot = calckm - 20 %

} else if (textage > 65) {
    //applicare discount del 20% ai maggiori di 65 anni

    const calckmtot = calckm - 40 %
}


const rispostakm = `il prezzo è di ${calckmtot}`;

document.getElementById('train_id').innerHTML = rispostakm;