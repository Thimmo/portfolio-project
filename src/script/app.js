import projects from './data.js';

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const projectContainer = document.getElementById("project-container");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

function renderprojects() {
    projectContainer.innerHTML = projects.map(project => {
        return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
                <div class="project-info">
                    <p>${project.description}</p>
                    <a href="${project.liveLink}" target="_blank" class="project-button">
                    View Project
                    </a>
                </div>
        </div>`
    }).join("")
}

renderprojects();