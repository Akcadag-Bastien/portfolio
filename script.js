const creaButton = document.querySelector('.btn:nth-child(1)');
const devButton = document.querySelector('.btn:nth-child(2)');
const projects = document.querySelectorAll('.project-card');

creaButton.addEventListener('click', () => {
projects.forEach(project => {
    if (project.classList.contains('crea')) {
    project.parentElement.style.display = 'flex'; // Show parent <li>
    } else {
    project.parentElement.style.display = 'none';
    }
});
});

devButton.addEventListener('click', () => {
projects.forEach(project => {
    if (project.classList.contains('dev')) {
    project.parentElement.style.display = 'flex';
    } else {
    project.parentElement.style.display = 'none';
    }
});
});