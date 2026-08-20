// ============= CONTACT FORM VALIDATION =============

function setupContactForm() {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let isValid = true;

        // GET VALUES
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // CLEAR ERRORS
        clearErrors();

        // NAME VALIDATION
        if (name === "") {

            showError(
                "nameError",
                "Please enter your name."
            );

            isValid = false;
        }

        // EMAIL VALIDATION
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            showError(
                "emailError",
                "Please enter your email."
            );

            isValid = false;

        } else if (!emailRegex.test(email)) {

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

        } else if (message.length < 10) {

            showError(
                "messageError",
                "Message must contain at least 10 characters."
            );

            isValid = false;
        }

        // SUCCESS
        if (isValid) {

            const successModal =
                document.getElementById("successModal");

            if (successModal) {
                successModal.classList.add("show");
            }

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


// CLEAR ERRORS
function clearErrors() {

    const errorMessages =
        document.querySelectorAll(".error-message");

    errorMessages.forEach(function (element) {
        element.textContent = "";
    });
}


// ============= SUCCESS MODAL =============

const successModal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");
const modalOk = document.getElementById("modalOk");

if (successModal && closeModal && modalOk) {

    // Close with X
    closeModal.addEventListener("click", function () {
        successModal.classList.remove("show");
    });

    // Close with OK
    modalOk.addEventListener("click", function () {
        successModal.classList.remove("show");
    });

    // Close by clicking outside
    successModal.addEventListener("click", function (event) {

        if (event.target === successModal) {
            successModal.classList.remove("show");
        }

    });
}