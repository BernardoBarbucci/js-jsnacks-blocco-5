// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall'altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const arrayFirst = [
    'a',
    'b',
    'c',
    'd',
    'e'
];
const arraySecond = [
    '1',
    '2',
    '3',
    '4',
    '5'
];

// faccio prima la funzione che pesca da entrambi e poi cerco di alternarla
function alternateFishing(firstBox, secondBox) {
    const result = [];
    const maxLength = Math.max(firstBox.length, secondBox.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < firstBox.length) {
            result.push(firstBox[i]);
        }
        if (i < secondBox.length) {
            result.push(secondBox[i]);
        }
    }
    return result;
}

const resultFinale = alternateFishing(arrayFirst, arraySecond);
console.log(resultFinale);