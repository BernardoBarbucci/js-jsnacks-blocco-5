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
    puntiFatti: 10,
    falliSubiti: 20,
}));

console.log(teamInfos);
