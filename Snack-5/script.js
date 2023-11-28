// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti

const volleyTeams = [
    'Pescara',
    'Firenze',
    'Bologna',
    'Milano',
    'Siena',
    'Monopoli',
    'Fidenza'
];

const teamInfos = volleyTeams.map(team => ({
    nome: team,
    puntiFatti: Math.floor(Math.random() * 60),
    falliSubiti: Math.floor(Math.random() * 15),
}));

console.log(teamInfos);
