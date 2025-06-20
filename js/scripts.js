// Função que abre o modal e preenche título, descrição e imagem
function openModal(title, description, imageUrl) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerHTML = description;
    document.getElementById('modal-img').src = imageUrl;
    document.getElementById('modal').style.display = 'block';
}

// Função que fecha o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Evento que detecta cliques 
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}