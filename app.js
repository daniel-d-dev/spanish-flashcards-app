document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll("[data-category]");

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
            col.classList.add("col");

            const card = document.createElement("div");
            card.classList.add("card");

            const cardInner = document.createElement("div");
            cardInner.classList.add("card-inner");

            const cardFront = document.createElement("div");
            cardFront.classList.add("card-front", "p-3", "d-flex", "align-items-center", "justify-content-center");
            cardFront.textContent = word.english;

            const cardBack = document.createElement("div");
            cardBack.classList.add("card-back", "p-3", "d-flex", "align-items-center", "justify-content-center", "bg-warning");
            cardBack.textContent = word.spanish;

            // const icon = document.createElement("i");
            // icon.classList.add("fas", "fa-sync-alt", "flip-icon");
            // card.appendChild(icon);

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            col.appendChild(card);
            container.appendChild(col);

            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });
        });
    } catch (error) {
        console.error("Failed to load data.", error);
    }
}