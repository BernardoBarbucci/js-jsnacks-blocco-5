// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

const cars = [
    {
        brand: 'Mercedes',
        type: 'class s',
        engine: 'gasoline',
    },

    {
        brand: 'Audi',
        type: 'R8',
        engine: 'gasoline',
    },

    {
        brand: 'Mercedes',
        type: 'eqs',
        engine: ' electric',
    },

    {
        brand: 'Mercedes',
        type: 'gt 63 s amg',
        engine: 'gasoline',
    },

    {
        brand: 'BMW',
        type: 'i8',
        engine: 'electric',
    },

    {
        brand: 'Ferrari',
        type: 'sf-90 stradale',
        engine: 'electric gasoline',
    },

    {
        brand: 'Lamborghini',
        type: 'Urus',
        engine: 'gasoline',
    },

    {
        brand: 'BMW',
        type: 'X5',
        engine: 'diesel',
    },

    {
        brand: 'Audi',
        type: 'RSQ8',
        engine: 'gasoline',
    },

    {
        brand: 'Mercedes',
        type: 'class eqc',
        engine: 'electric',
    },
];

const gasolineCars = cars.filter((car) => car.engine === 'gasoline');
console.log('Auto a benzina: ', gasolineCars);
const dieselCars = cars.filter((car) => car.engine === 'diesel');
console.log('Auto a diesel: ', dieselCars);
const electricCars = cars.filter((car) => car.engine === 'electric');
console.log('Auto elettriche: ', electricCars);