const pets = [
    {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg"},
    {"name": "Max", "type": "Dog", "age": 2, "img": "img/dogs/dog02.jpg"},
    {"name": "Rocky", "type": "Dog", "age": 4, "img": "img/dogs/dog03.jpg"},
    {"name": "Luna", "type": "Dog", "age": 1, "img": "img/dogs/dog04.jpg"},
    {"name": "Charlie", "type": "Dog", "age": 5, "img": "img/dogs/dog05.jpg"},
    {"name": "Bella", "type": "Dog", "age": 2, "img": "img/dogs/dog06.jpg"},
    {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg"},
    {"name": "Mittens", "type": "Cat", "age": 3, "img": "img/cats/cat02.jpg"},
    {"name": "Oliver", "type": "Cat", "age": 1, "img": "img/cats/cat03.jpg"},
    {"name": "Lily", "type": "Cat", "age": 4, "img": "img/cats/cat04.jpg"},
    {"name": "Simba", "type": "Cat", "age": 2, "img": "img/cats/cat05.jpg"},
    {"name": "Nala", "type": "Cat", "age": 3, "img": "img/cats/cat06.jpg"},
    {"name": "Cappy", "type": "Capybara", "age": 2, "img": "img/capybaras/capybara01.jpg"},
    {"name": "Chill", "type": "Capybara", "age": 3, "img": "img/capybaras/capybara02.jpg"},
    {"name": "Zen", "type": "Capybara", "age": 1, "img": "img/capybaras/capybara03.jpg"},
    {"name": "Rio", "type": "Bird", "age": 1, "img": "img/birds/bird01.jpg"},
    {"name": "Sky", "type": "Bird", "age": 2, "img": "img/birds/bird02.jpg"},
    {"name": "Sunny", "type": "Bird", "age": 3, "img": "img/birds/bird03.jpg"},
    {"name": "Rainbow", "type": "Bird", "age": 2, "img": "img/birds/bird04.jpg"}
];

function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    pets.forEach(pet => {
        const petItem = document.createElement('div');
        petItem.className = 'pet';
        petItem.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <button onclick="adoptPet()">Adopt Now</button>
        `;
        petList.appendChild(petItem);
    });
}

document.addEventListener('DOMContentLoaded', loadPets);
console.log('Pets loaded successfully.'); 