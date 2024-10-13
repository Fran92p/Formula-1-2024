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

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm.trim() !== '') {
        removeHighlights();
        highlightText(searchTerm);
    } else {
        alert('Por favor, ingresa una palabra para buscar.');
    }
});

function highlightText(searchTerm) {
    const elements = document.querySelectorAll('body *:not(script):not(style)');
    elements.forEach(element => {
        if (element.children.length === 0 && element.textContent.toLowerCase().includes(searchTerm)) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            element.innerHTML = element.textContent.replace(regex, `<span class="highlight">$1</span>`);
        }
    });
}

function removeHighlights() {
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(span => {
        const parent = span.parentNode;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize(); // Combina nodos de texto adyacentes
    });
}
