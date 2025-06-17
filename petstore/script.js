// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for all adopt buttons
    const adoptButtons = document.querySelectorAll('.adopt-btn');
    adoptButtons.forEach(button => {
        button.addEventListener('click', handleAdoptClick);
    });

    // Initialize the pet carousel
    initializeCarousel();

    // Initialize Google Map
    initMap();
});

// Handle adopt button clicks
function handleAdoptClick(event) {
    const petCard = event.target.closest('.pet-card');
    const petName = petCard.querySelector('h3').textContent;
    alert(`Thank you for your interest in adopting ${petName}! Our team will contact you shortly to proceed with the adoption process.`);
}

// Pet carousel functionality
function initializeCarousel() {
    const carousel = document.querySelector('.pet-carousel');
    const petCards = document.querySelectorAll('.pet-card');
    
    // Sample pet data for carousel
    const additionalPets = [
        {
            name: 'Bella',
            description: 'Sweet Siamese Cat, 3 years old',
            image: 'images/pet4.jpg'
        },
        {
            name: 'Rocky',
            description: 'Energetic Husky, 1 year old',
            image: 'images/pet5.jpg'
        }
    ];

    // Function to create new pet card
    function createPetCard(pet) {
        const card = document.createElement('div');
        card.className = 'pet-card';
        card.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="pet-image">
            <h3>${pet.name}</h3>
            <p>${pet.description}</p>
            <button class="adopt-btn">Adopt Now</button>
        `;
        card.querySelector('.adopt-btn').addEventListener('click', handleAdoptClick);
        return card;
    }

    // Add automatic carousel rotation every 5 seconds
    let currentIndex = 0;
    const allPets = [...petCards].map(card => ({
        name: card.querySelector('h3').textContent,
        description: card.querySelector('p').textContent,
        image: card.querySelector('img').src
    })).concat(additionalPets);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % allPets.length;
        const newCard = createPetCard(allPets[currentIndex]);
        
        // Fade out effect
        carousel.style.opacity = '0';
        setTimeout(() => {
            // Replace first card with new card
            if (carousel.firstChild) {
                carousel.removeChild(carousel.firstChild);
            }
            carousel.appendChild(newCard);
            // Fade in effect
            carousel.style.opacity = '1';
        }, 500);
    }, 5000);
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Adopt button functionality
function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

// Initialize Google Map
function initMap() {
    // Bondi Beach coordinates
    const storeLocation = {
        lat: -33.891690,
        lng: 151.276926
    };

    // Create map centered on store location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: storeLocation,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
    });

    // Add marker for store location
    const marker = new google.maps.Marker({
        position: storeLocation,
        map: map,
        title: 'Paws & Whiskers Pet Store'
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: '<div><strong>Paws & Whiskers Pet Store</strong><br>42 Pet Haven Street<br>Bondi Beach, NSW 2026</div>'
    });

    // Show info window when marker is clicked
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
} 