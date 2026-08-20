
//    DOM READY
document.addEventListener("DOMContentLoaded", function () {
    //    LOAD ALL SECTIONS
    loadSkills();
    loadProjects();

    //    OTHER FUNCTIONS
    setupContactForm();
    setupBackToTop();
    setupNavbar();
    setupSkillAnimation();

});
// ======SKILLS===========
function loadSkills() {
    const skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;
    skillsContainer.innerHTML = "";
    portfolioData.skills.forEach(function (skill) {
        const skillCard = document.createElement("div");
        skillCard.className = "col-md-6 col-lg-4";
        skillCard.innerHTML = `
            <div class="skill-card">
                <div class="skill-icon">
                    ${getSkillIcon(skill.name)}
                </div>
                <h4>${skill.name}</h4>
                <div class="skill-progress">
                    <div
                        class="skill-progress-bar"
                        data-level="${skill.level}"
                    ></div>
                </div>
                <span class="skill-percentage">
                    ${skill.level}%
                </span>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    });
}
//    SKILL ICONS
function getSkillIcon(skillName) {
    const icons = {
        "HTML":
            '<i class="fa-brands fa-html5"></i>',
        "CSS":
            '<i class="fa-brands fa-css3-alt"></i>',
        "Bootstrap":
            '<i class="fa-brands fa-bootstrap"></i>',
        "JavaScript":
            '<i class="fa-brands fa-js"></i>',
        "jQuery":
            '<i class="fa-solid fa-code"></i>',
        "Git / GitHub":
            '<i class="fa-brands fa-github"></i>'
    };
    return icons[skillName] || '<i class="fa-solid fa-code"></i>';
}

// ===========BACK TO TOP=========
function setupBackToTop() {
    const backToTop =
        document.getElementById("backToTop");
    if (!backToTop) return;
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        }
        else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// ==============NAVBAR===========
function setupNavbar() {
    const navLinks =
        document.querySelectorAll(".navbar .nav-link");
    const sections =
        document.querySelectorAll("main section");
//===============SMOOTH SCROLL===============
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId =
                this.getAttribute("href");
            if (
                targetId &&
                targetId.startsWith("#")
            ) {
                const target =
                    document.querySelector(targetId);
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                    /* Close mobile menu */
                    const navbarCollapse =
                        document.getElementById("mainNavbar");
                    if (
                        navbarCollapse &&
                        navbarCollapse.classList.contains("show")
                    ) {
                        const bsCollapse =
                            bootstrap.Collapse.getInstance(
                                navbarCollapse
                            );
                        if (bsCollapse) {
                            bsCollapse.hide();
                        }
                    }
                }
            }
        });
    });
//============== ACTIVE NAV LINK=========
    window.addEventListener("scroll", function () {
        let currentSection = "";
        sections.forEach(function (section) {
            const sectionTop =
                section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                currentSection =
                    section.getAttribute("id");
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }
        });
    });
}
// =============SKILL ANIMATION=========
function setupSkillAnimation() {
    const skillBars =
        document.querySelectorAll(".skill-progress-bar");
    if (skillBars.length === 0) return;
    const observer =
        new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const bar =
                            entry.target;
                        const level =
                            bar.getAttribute("data-level");
                        bar.style.width =
                            level + "%";
                        observer.unobserve(bar);
                    }
                });
            },
            {
                threshold: 0.3
          }
        );
    skillBars.forEach(function (bar) {
        observer.observe(bar);
    });
}

// ================= CERTIFICATE MODAL =================

const certificateModal = document.getElementById("certificateModal");

if (certificateModal) {

    certificateModal.addEventListener("show.bs.modal", function (event) {

        const button = event.relatedTarget;

        const certificateImage =
            button.getAttribute("data-certificate");

        const certificateTitle =
            button.getAttribute("data-title");

        const modalImage =
            document.getElementById("certificateModalImage");

        const modalTitle =
            document.getElementById("certificateModalLabel");
        modalImage.src = certificateImage;
        modalImage.alt = certificateTitle;
        modalTitle.textContent = certificateTitle;
    });
}