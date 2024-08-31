document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tbody tr');
    const infoCard = document.getElementById('infoCard');

    rows.forEach(row => {
        row.addEventListener('mouseover', (event) => {
            const info = event.currentTarget.getAttribute('data-info');
            infoCard.textContent = info;
            infoCard.style.display = 'block';
            const { top, left, height } = event.currentTarget.getBoundingClientRect();
            infoCard.style.top = `${top + window.scrollY + height + 10}px`;
            infoCard.style.left = `${left + window.scrollX}px`;
        });

        row.addEventListener('mouseout', () => {
            infoCard.style.display = 'none';
        });
    });
});
