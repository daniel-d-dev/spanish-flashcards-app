document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".categories button");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            loadCategory(category);
        });
    });
});

const categories = {
    food: [
        { english: "Apple", spanish: "Manzana" },
        { english: "Bread", spanish: "Pan" },
        { english: "Cheese", spanish: "Queso" }
    ],
    bodyParts: [
        { english: "Head", spanish: "Cabeza" },
        { english: "Hand", spanish: "Mano" },
        { english: "Leg", spanish: "Pierna" }
    ],
    common: [
        { english: "Dog", spanish: "Perro" },
        { english: "House", spanish: "Casa" },
        { english: "Car", spanish: "Coche" }
    ]
};

function loadCategory(category) {
    const container = document.getElementById("flashcards");
    container.innerHTML = "";

    categories[category].forEach(word => {
        const card = document.createElement("div");
        card.classList.add("card");

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

        container.appendChild(card);
    });
}
