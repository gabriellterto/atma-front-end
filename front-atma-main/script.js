document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "Game 1", price: "$49.99" },
        { name: "Game 2", price: "$59.99" },
        { name: "Game 3", price: "$39.99" },
        { name: "Game 4", price: "$29.99" },
    ];

    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const product = products.find(p => p.name.toLowerCase().includes(searchInput));
        if (product) {
            alert(`Produto encontrado: ${product.name} - ${product.price}`);
        } else {
            alert('Produto não encontrado.');
        }
    });

    const productsPageButton = document.getElementById('products-page-button');
    productsPageButton.addEventListener('click', () => {
        window.location.href = "#produtos"; 
    });

    const profileButton = document.getElementById('profile-button');
    profileButton.addEventListener('click', () => {
        window.location.href = "#perfil"; 
    });

    // Carrossel manual
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    let currentIndex = 0;

    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlidePosition();
    });
});
