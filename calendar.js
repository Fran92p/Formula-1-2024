document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tbody tr');
    const infoCard = document.getElementById('infoCard');

    rows.forEach(row => {
        row.addEventListener('mouseover', (event) => {
            const info = event.currentTarget.getAttribute('data-info');
            infoCard.textContent = info;
            infoCard.style.display = 'block';

            // Obtener las coordenadas de la fila
            const { top, left, height, width } = event.currentTarget.getBoundingClientRect();
            let cardTop = top + window.scrollY + height + 10;
            let cardLeft = left + window.scrollX;

            // Ajustar si la tarjeta se sale de la pantalla (eje Y)
            const cardHeight = infoCard.offsetHeight;
            const viewportHeight = window.innerHeight;
            if (cardTop + cardHeight > viewportHeight + window.scrollY) {
                // Si la tarjeta se sale por abajo, la mostramos encima de la fila
                cardTop = top + window.scrollY - cardHeight - 10;
            }

            // Ajustar si la tarjeta se sale de la pantalla (eje X)
            const cardWidth = infoCard.offsetWidth;
            const viewportWidth = window.innerWidth;
            if (cardLeft + cardWidth > viewportWidth + window.scrollX) {
                // Si la tarjeta se sale por la derecha, la ajustamos a la izquierda
                cardLeft = viewportWidth + window.scrollX - cardWidth - 10;
            }

            // Aplicar las nuevas posiciones
            infoCard.style.top = `${cardTop}px`;
            infoCard.style.left = `${cardLeft}px`;
        });

        row.addEventListener('mouseout', () => {
            infoCard.style.display = 'none';
        });
    });
});
