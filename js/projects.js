const projects = [
    "probably soon"
];

function renderProjects(projectsArray) {
    const projectsGrid = document.getElementsByClassName('projects-grid')[0];
    
    projectsArray.forEach(project => {
        const projectsCard = document.createElement('div');
        projectsCard.className = 'projects-card';
        projectsCard.innerHTML = `<p>${project}</p>`;
        projectsGrid.appendChild(projectsCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
});