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
        card.textContent = word.english;

        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
            card.textContent = card.classList.contains("flipped") ? word.spanish : word.english;
        });

        container.appendChild(card);
    });
}
