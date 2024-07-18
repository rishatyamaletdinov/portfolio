const sectionSkills = document.querySelector("#sectionSkills");
const fadeBlock = document.querySelector("#fadeBlock");

function actionCardSkill(event) {
    const card = event.target.closest("[data-card-skill]");
    const closeCross = event.target.closest("[card-close-cross]");

    if (card) {
        card.classList.add("active");
        document.body.classList.add("active");
        fadeBlock.classList.add("active");
    }

    if (closeCross) {
        card.classList.remove("active");
        document.body.classList.remove("active");
        fadeBlock.classList.remove("active");
    }
}

sectionSkills.addEventListener("click", actionCardSkill);
