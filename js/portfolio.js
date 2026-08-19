
//    DOM READY
document.addEventListener("DOMContentLoaded", function () {
    //    LOAD ALL SECTIONS
    loadSkills();
    loadProjects();
    loadEducation();
    loadExperience();

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
//    EDUCATION
function loadEducation() {
    const educationContainer =
        document.getElementById("educationContainer");
    if (!educationContainer) return;
    educationContainer.innerHTML = "";
    portfolioData.education.forEach(function (education) {
        const educationCard =
            document.createElement("div");
        educationCard.className = "education-card mb-4";
        educationCard.innerHTML = `
            <h3>
                ${education.degree}
            </h3>
            <div class="education-institute">
                ${education.institute}
            </div>
            <div class="education-duration">
                ${education.duration}
            </div>
            <p>
                ${education.description}
            </p>
        `;
        educationContainer.appendChild(educationCard);
    });
}
//=============== EXPERIENCE===============
function loadExperience() {
    const experienceContainer =
        document.getElementById("experienceContainer");
    if (!experienceContainer) return;
    experienceContainer.innerHTML = "";
// NO EXPERIENCE
    if (
        !portfolioData.experience ||
        portfolioData.experience.length === 0
    ) {
        experienceContainer.innerHTML = `
            <div class="experience-card">
                <i class="fa-solid fa-laptop-code"></i>
                <h3>
                    Currently Building Experience
                </h3>
                <p>
                    I am currently developing my practical experience
                    through academic assignments, personal projects
                    and continuous learning in frontend web development.
                </p>
            </div>
        `;
        return;
    }
//    EXPERIENCE EXISTS
    portfolioData.experience.forEach(function (experience) {
        const experienceCard =
            document.createElement("div");
        experienceCard.className =
            "experience-card mb-4";
        experienceCard.innerHTML = `
            <i class="fa-solid fa-briefcase"></i>
            <h3>
                ${experience.title}
            </h3>
            <p>
                ${experience.description}
            </p>
        `;
        experienceContainer.appendChild(experienceCard);
    });
}
// =============CONTACT FORM VALIDATION=============
function setupContactForm() {
    const contactForm =
        document.getElementById("contactForm");
    if (!contactForm) return;
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;
//    GET VALUES
        const name =
            document.getElementById("name").value.trim();
        const email =
            document.getElementById("email").value.trim();
        const subject =
            document.getElementById("subject").value.trim();
        const message =
            document.getElementById("message").value.trim();
// CLEAR ERRORS
        clearErrors();
//    NAME VALIDATION
        if (name === "") {
            showError(
                "nameError",
                "Please enter your name."
            );
            isValid = false;
        }
//    EMAIL VALIDATION
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            showError(
                "emailError",
                "Please enter your email."
            );
            isValid = false;
        }
        else if (!emailRegex.test(email)) {
            showError(
                "emailError",
                "Please enter a valid email."
            );
            isValid = false;
        }
// SUBJECT VALIDATION
        if (subject === "") {
            showError(
                "subjectError",
                "Please enter a subject."
            );
            isValid = false;
        }
    // MESSAGE VALIDATION
        if (message === "") {
            showError(
                "messageError",
                "Please enter your message."
            );
            isValid = false;
        }
        else if (message.length < 10) {
            showError(
                "messageError",
                "Message must contain at least 10 characters."
            );
            isValid = false;
        }
// SUCCESS
        if (isValid) {
            alert(
                "Thank you! Your message has been submitted successfully."
            );
            contactForm.reset();
        }
    });
}
// SHOW ERROR
function showError(elementId, message) {
    const errorElement =
        document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}
//  CLEAR ERRORS
function clearErrors() {
    const errorMessages =
        document.querySelectorAll(".error-message");
    errorMessages.forEach(function (element) {
        element.textContent = "";
    });
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