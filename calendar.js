document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tbody tr');
    const infoCard = document.getElementById('infoCard');

    rows.forEach(row => {
        row.addEventListener('mouseover', (event) => {
            const info = event.currentTarget.getAttribute('data-info');
            infoCard.textContent = info;
            infoCard.style.display = 'block';

            
            const { top, left, height, width } = event.currentTarget.getBoundingClientRect();
            let cardTop = top + window.scrollY + height + 10;
            let cardLeft = left + window.scrollX;

            
            const cardHeight = infoCard.offsetHeight;
            const viewportHeight = window.innerHeight;
            if (cardTop + cardHeight > viewportHeight + window.scrollY) {
                cardTop = top + window.scrollY - cardHeight - 10;
            }

        
            const cardWidth = infoCard.offsetWidth;
            const viewportWidth = window.innerWidth;
            if (cardLeft + cardWidth > viewportWidth + window.scrollX) {
                cardLeft = viewportWidth + window.scrollX - cardWidth - 10;
            }

            
            infoCard.style.top = `${cardTop}px`;
            infoCard.style.left = `${cardLeft}px`;
        });

        row.addEventListener('mouseout', () => {
            infoCard.style.display = 'none';
        });
    });
});
