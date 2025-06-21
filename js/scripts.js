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

// Função que simula digitação do título 'Quem somos nós?'
const textAbout = 'Quem somos nós?';
const elementAbout = document.getElementById('typing-about');
let indexAbout = 0;

function typeAbout() {
  if (indexAbout < textAbout.length) {
    elementAbout.innerHTML += textAbout.charAt(indexAbout);
    indexAbout++;
    setTimeout(typeAbout, 100);
  }
}
typeAbout();

// Função que simula digitação do título 'Projetos Guiados'
const textProjects = 'Projetos Guiados:';
const elementProjects = document.getElementById('typing-projects');
let indexProjects = 0;

function typeProjects() {
  if (indexProjects < textProjects.length) {
    elementProjects.innerHTML += textProjects.charAt(indexProjects);
    indexProjects++;
    setTimeout(typeProjects, 100);
  }
}
typeProjects();


// Evento que detecta o clique da alteração de temas da página
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
