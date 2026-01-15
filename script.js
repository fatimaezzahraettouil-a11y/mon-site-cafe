
    // Remplacez 'monsite.com' par votre nom de domaine réel
  /*  fetch('api.countapi.xyz')
        .then(res => res.json())
        .then(res => {
            document.getElementById('visites').innerHTML = `Cette page a été vue ${res.value} fois`;
        });*/
 
        // Appel à l'API ipapi.co (format JSON)
        fetch('ipapi.co')
            .then(response => response.json())
            .then(data => {
                // On récupère la ville et le pays
                const ville = data.city;
                const pays = data.country_name;
                
                // On affiche le résultat dans la balise <span>
                document.getElementById('location').innerText = ville + ", " + pays;
            })
            .catch(error => {
                console.error('Erreur:', error);
                document.getElementById('location').innerText = "impossible de déterminer le lieu.";
            });
const button = document.querySelector('.btn-order');
//  Modifier la taille du bouton au survol.
button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1)';
    button.style.backgroundColor = '#d4a373'; // Couleur café
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#6f4e37';
});
  