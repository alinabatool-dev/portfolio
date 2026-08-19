// ========PROJECTS=============
function loadProjects() {
    const projectsContainer =
        document.getElementById("projectsContainer");
    if (!projectsContainer) return;
    projectsContainer.innerHTML = "";
    portfolioData.projects.forEach(function (project) {
        const projectCard = document.createElement("div");
        projectCard.className = "col-lg-8 mx-auto";
        projectCard.innerHTML = `
            <div class="project-card">
                <div class="project-image">
                    <img
                        src="${project.image}"
                        alt="${project.title}"
                    >
                </div>
                <div class="project-content">
                    <span class="project-category">
                        ${project.category}
                    </span>
                    <h3>
                        ${project.title}
                    </h3>
                    <p>
                        ${project.description}
                    </p>
                    <div class="project-tech">
                        ${project.technologies
                            .map(function (technology) {
                                return `<span>${technology}</span>`;
                            })
                            .join("")
                        }
                    </div>
                    <button
                        type="button"
                        class="project-details-btn"
                        data-project-id="${project.id}"
                    >
                        View Project Details
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
    //    PROJECT MODAL BUTTONS
    const projectButtons =
        document.querySelectorAll(".project-details-btn");
    projectButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const projectId =
                Number(this.getAttribute("data-project-id"));
            openProjectModal(projectId);
        });
    });
}
//    PROJECT MODAL
function openProjectModal(projectId) {
    const project =
        portfolioData.projects.find(function (item) {
            return item.id === projectId;
        });
    if (!project) return;
    const modalTitle =
        document.getElementById("projectModalLabel");
    const modalBody =
        document.getElementById("projectModalBody");
    modalTitle.textContent = project.title;
    modalBody.innerHTML = `
        <img
            src="${project.image}"
            alt="${project.title}"
            class="modal-project-image"
        >
        <h3 class="modal-project-title">
            ${project.title}
        </h3>
        <p class="modal-project-description">
            ${project.description}
        </p>
        <h4 class="modal-feature-title">
            Project Features
        </h4>
        <ul class="modal-features">
            ${project.features
                .map(function (feature) {
                    return `
                        <li>
                            <i class="fa-solid fa-check"></i>
                            ${feature}
                        </li>
                    `;
                })
                .join("")
            }
        </ul>
        <h4 class="modal-feature-title">
            Technologies Used
        </h4>
        <div class="modal-tech">
            ${project.technologies
                .map(function (technology) {
                    return `<span>${technology}</span>`;

                })
                .join("")
            }
        </div>
        <div class="modal-project-links">
            ${
                project.github && project.github !== "#"
                ?
                `
                <a
                    href="${project.github}"
                    target="_blank"
                    class="btn primary-btn"
                >
                    <i class="fa-brands fa-github"></i>
                    GitHub
                </a>
                `
                :

                ""
            }
            ${
                project.liveDemo && project.liveDemo !== "#"
                ?
                `
                <a
                    href="${project.liveDemo}"
                    target="_blank"
                    class="btn secondary-btn"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                </a>
                `
                :
                ""
            }
        </div>
    `;
    //    OPEN BOOTSTRAP MODAL
    const modalElement =
        document.getElementById("projectModal");
    const projectModal =
        bootstrap.Modal.getOrCreateInstance(modalElement);
    projectModal.show();
}