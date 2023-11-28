// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome
// e l'indicazione se può guidare, in base all'età.

const people = [
    {
        name: 'Gino',
        surname: 'Ginello',
        age: 3.5,
    },
    {
        name: 'Pina',
        surname: 'Marietti',
        age: 102,
    },
    {
        name: 'Biscottino',
        surname: 'Marcucci',
        age: 35,
    },
    {
        name: 'Marcellino',
        surname: 'Binelli',
        age: 53,
    },
    {
        name: 'Annita',
        surname: 'Pini',
        age: 17,
    },
    {
        name: 'Sukuna',
        surname: 'Miyazaki',
        age: 45,
    },
    {
        name: 'Gojo',
        surname: 'Satoru',
        age: 24,
    },
    {
        name: 'Bernardo',
        surname: 'Barbucci',
        age: 22,
    },
    {
        name: 'Armando',
        surname: 'Maradona',
        age: 58,
    },
    {
        name: 'Nanami',
        surname: 'San',
        age: 78,
    },
];
const peopleInfo = people.map((person) => {
    const ableToDrive = person.age >= 18;
    return `${person.name} ${person.surname} is able to drive: ${ableToDrive}`;
});

console.log(peopleInfo);