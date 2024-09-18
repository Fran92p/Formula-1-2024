document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calendarButton').addEventListener('click', () => {
        window.location.href = 'calendar.html';
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
