const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('full-size');
        // CSS suggéré : .full-size { transform: scale(1.5); z-index: 10; position: relative; }
    });
});

