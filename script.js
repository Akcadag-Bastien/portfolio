const creaButton = document.getElementById('btn2');
const devButton = document.getElementById('btn1');
const projects = document.querySelectorAll('.project-card');

let creaActive = false;
let devActive = false;

function updateProjects() {
  projects.forEach(project => {
    const isCrea = project.classList.contains('crea');
    const isDev = project.classList.contains('dev');

    if (!creaActive && !devActive) {
      // Aucun bouton actif : afficher tout
      project.parentElement.style.display = 'flex';
    } 
    else if (creaActive && devActive) {
      // Les deux actifs : afficher SEULEMENT les projets qui sont à la fois créa ET dev
      if (isCrea && isDev) {
        project.parentElement.style.display = 'flex';
      } else {
        project.parentElement.style.display = 'none';
      }
    }
    else if (creaActive) {
      // Seulement Créa actif
      if (isCrea) {
        project.parentElement.style.display = 'flex';
      } else {
        project.parentElement.style.display = 'none';
      }
    }
    else if (devActive) {
      // Seulement Dev actif
      if (isDev) {
        project.parentElement.style.display = 'flex';
      } else {
        project.parentElement.style.display = 'none';
      }
    }
  });
}

// Gérer le clic sur les boutons
creaButton.addEventListener('click', () => {
  creaActive = !creaActive;
  updateProjects();
  creaButton.classList.toggle('active');
});

devButton.addEventListener('click', () => {
  devActive = !devActive;
  updateProjects();
  devButton.classList.toggle('active');
});




