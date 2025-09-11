// Mostrar popup quando carregar a página
window.addEventListener('load', function() {
  document.getElementById("popup").style.visibility = "visible";
});

// Função para fechar popup
function fecharPopup() {
  document.getElementById("popup").style.visibility = "hidden";
}
