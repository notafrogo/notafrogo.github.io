// Array of project data
const projects = [
    {
        title: 'Canvas API Bot',
        description: 'A short, one week project to understand how the Canvas LMS REST API works. Using my knowledge of the Discord API, I connected these two as a way to keep myself and others on track for school. ',
        link: './canvasbot/canvas-bot.html',
        icon: './images/canvas_logo.png'
    },
    {
        title: "Blahaj Bot",
        description: "A general purpose bot I made for friends to use in our Discord server.",
        link: "./blahajbot/blahaj-bot.html",
        icon: "./images/blahaj_bot.png"
    },
    {
        title: "VEX Robotics",
        description: "Two years of robotics",
        link: "./vex/vex-robotics.html",
        icon: "./images/vex_robotics.png"
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
        <a href="${project.link}" class="project-link">View Project</a>
    `;

    projectList.appendChild(projectCard);
});
