const sectionSkills = document.querySelector("#section-skills");

function openCardSkill(event) {
    const card = event.target.closest("[data-card-skill]");
    if (card) {
        card.classList.add("active");
    }
}

sectionSkills.addEventListener("click", openCardSkill);
