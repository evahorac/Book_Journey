document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const itemsPerPage = 4;  // Počet knih zobrazených na stránce
    let currentIndex = 0;  

    // Funkce pro aktualizaci zobrazených knih a aktivních indikátorů
    function updateCarousel() {
        const startIndex = currentIndex * itemsPerPage;
        items.forEach((item, i) => {
            item.classList.toggle('active', i >= startIndex && i < startIndex + itemsPerPage);
        });

        // Nastavit aktivní indikátor
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
    }

    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

   
    updateCarousel();
});
