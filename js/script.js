// Boone & Grain website JavaScript


// Product filtering

const filterButtons = document.querySelectorAll(".product-filters button");
const productCards = document.querySelectorAll(".product-card");

if (filterButtons.length > 0 && productCards.length > 0) {

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.filter;

            // Update the active filter button
            filterButtons.forEach(function (filterButton) {
                filterButton.classList.remove("active");
            });

            button.classList.add("active");

            // Show products that match the selected category
            productCards.forEach(function (card) {

                const productCategory = card.dataset.category;

                if (
                    selectedCategory === "all" ||
                    selectedCategory === productCategory
                ) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

}