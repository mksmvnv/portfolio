const skills = [
    "python",
    "fastapi",
    "aiohttp",
    "postgres",
    "sqla",
    "alembic",
    "rabbitmq",
    "redis",
    "grafana",
    "pytest",
    "docker",
    "git",
    "linux",
    "ci/cd",
];

function renderSkills(skillsArray) {
    const skillsGrid = document.getElementsByClassName('skills-grid')[0];
    
    skillsArray.forEach(skill => {
        const skillsCard = document.createElement('div');
        skillsCard.className = 'skills-card';
        skillsCard.innerHTML = `<p>${skill}</p>`;
        skillsGrid.appendChild(skillsCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSkills(skills);
});