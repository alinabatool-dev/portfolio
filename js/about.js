// ============= ABOUT / EDUCATION / EXPERIENCE =============

// EDUCATION
function loadEducation() {

    const educationContainer =
        document.getElementById("educationContainer");

    if (!educationContainer) return;

    educationContainer.innerHTML = "";

    portfolioData.education.forEach(function (education) {

        const educationCard =
            document.createElement("div");

        educationCard.className =
            "education-card mb-4";

        educationCard.innerHTML = `
            <h3>${education.degree}</h3>

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


// EXPERIENCE
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


    // EXPERIENCE EXISTS
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

    <div class="experience-company">
        ${experience.company}
    </div>

    <div class="experience-duration">
        ${experience.duration}
    </div>

    <p>
        ${experience.description}
    </p>
`;
        experienceContainer.appendChild(experienceCard);
    });
}
// CAREER GOALS
function loadCareerGoals() {

    const careerGoalsContainer =
        document.getElementById("careerGoalsContainer");

    if (!careerGoalsContainer) return;

    careerGoalsContainer.textContent =
        portfolioData.personalInfo.careerGoals;
}

// LOAD ABOUT DATA
document.addEventListener("DOMContentLoaded", function () {
    loadEducation();
    loadExperience();
    loadCareerGoals();
});