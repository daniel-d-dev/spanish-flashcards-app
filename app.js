document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".btn-primary");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            loadCategory(category);
        });
    });
});

async function loadCategory(category) {
    try {
        const response = await fetch("words.json");
        const categories = await response.json();
        const words = categories[category];

        if (!words) {
            console.error("Category not found.");
            return;
        }

        const container = document.getElementById("flashcards");
        container.innerHTML = "";

        words.forEach(word => {
            const col = document.createElement("div");
            col.classList.add("col-lg-3", "col-md-4", "col-sm-6", "d-flex", "justify-content-center");

            const card = document.createElement("div");
            card.classList.add("card", "p-5", "shadow-sm");

            if (word.english.length > 10 || word.spanish.length > 10) {
                card.classList.add("small-text");
            }

            const front = document.createElement("div");
            front.classList.add("front");
            front.textContent = word.english;

            const back = document.createElement("div");
            back.classList.add("back");
            back.textContent = word.spanish;

            const icon = document.createElement("i");
            icon.classList.add("fas", "fa-sync-alt", "flip-icon");
            card.appendChild(icon);

            card.appendChild(front);
            card.appendChild(back);

            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });

            col.appendChild(card);
            container.appendChild(col);
        });
    } catch (error) {
        console.error("Failed to load data.", error);
    }
}
