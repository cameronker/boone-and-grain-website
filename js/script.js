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

// Product quick view

const quickViewButtons = document.querySelectorAll(".quick-view");
const productModal = document.getElementById("product-modal");
const modalClose = document.querySelector(".modal-close");

const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");

if (quickViewButtons.length > 0 && productModal) {

    quickViewButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = button.closest(".product-card");

            const category = card.querySelector("p").textContent;
            const title = card.querySelector("h3").textContent;

            const paragraphs = card.querySelectorAll("p");
            const description = paragraphs[1].textContent;
            const price = paragraphs[2].textContent;

            modalCategory.textContent = category;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalPrice.textContent = price;

            productModal.classList.add("open");
            productModal.setAttribute("aria-hidden", "false");

            modalClose.focus();

        });

    });


    function closeModal() {
        productModal.classList.remove("open");
        productModal.setAttribute("aria-hidden", "true");
    }


    modalClose.addEventListener("click", closeModal);


    productModal.addEventListener("click", function (event) {

        if (event.target === productModal) {
            closeModal();
        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && productModal.classList.contains("open")) {
            closeModal();
        }

    });

}