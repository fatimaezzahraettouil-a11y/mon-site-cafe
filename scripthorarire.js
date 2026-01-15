const toggleBtn = document.querySelector('#toggle-hours');
const hoursSection = document.querySelector('.hours-content');

toggleBtn.addEventListener('click', () => {
    if (hoursSection.style.display === 'none') {
        hoursSection.style.display = 'block';
        toggleBtn.textContent = 'Masquer les horaires';
    } else {
        hoursSection.style.display = 'none';
        toggleBtn.textContent = 'Voir les horaires';
    }
});
