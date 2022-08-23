
const textkm = prompt('Quanti chilometri vuoi percorrere?');
const textkmAsN = parseInt(textkm);
console.log('textkmAsN', textkmAsN);
const calckm = textkmAsN * 0.21;


const textage = prompt('Qual è la tua età?');
const textageAsN = parseInt(textage);
console.log('textageAsN', textageAsN);

if (textageAsN < 18) {
    //applicare discount del 20% ai minorenni

    const calckmtot = (calckm - 20 %);
    document.getElementById('train_id').innerHTML = calckmtot;

} else if (textageAsN > 65) {
    //applicare discount del 40% ai maggiori di 65 anni

    const calckmtot = (calckm - 40 %);
    document.getElementById('train_id').innerHTML = calckmtot;
}


const rispostakm = `Il prezzo è di ${calckmtot}`;

document.getElementById('train_id').innerHTML = rispostakm;