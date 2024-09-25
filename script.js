// Array of project data
const projects = [
    {
        title: 'Canvas API Bot',
        description: 'A short, one week project to understand how the Canvas LMS REST API works. Using my knowledge of the Discord API, I connected these two as a way to keep myself and others on track for school. ',
        link: 'https://github.com/notafrogo/canvas-api-discord-bot/',
        icon: 'https://www.instructure.com/sites/default/files/image/2021-12/Canvas_logo_single_mark.png'
    },
    {
        title: "Blahaj Bot",
        description: "A general purpose bot I made for friends to use in our Discord server. "
    }
];

const projectList = document.querySelector('.project-list');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    let iconHTML = '';
    if (project.icon) {
        iconHTML = `<img src="${project.icon}" alt="${project.title} icon" class="project-icon">`;
    }

    projectCard.innerHTML = `
        ${iconHTML}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="project-link" target="_blank">View Project</a>
    `;

    projectList.appendChild(projectCard);
});
