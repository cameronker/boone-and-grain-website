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

// Contact form validation

const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const productType = document.getElementById("product-type");
        const message = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const productError = document.getElementById("product-error");
        const messageError = document.getElementById("message-error");
        const formStatus = document.getElementById("form-status");

        let formIsValid = true;

        // Clear previous messages
        nameError.textContent = "";
        emailError.textContent = "";
        productError.textContent = "";
        messageError.textContent = "";
        formStatus.textContent = "";

        // Validate name
        if (name.value.trim().length < 2) {
            nameError.textContent = "Please enter your full name.";
            formIsValid = false;
        }

        // Validate email
        if (!email.value.includes("@") || !email.value.includes(".")) {
            emailError.textContent = "Please enter a valid email address.";
            formIsValid = false;
        }

        // Validate product choice
        if (productType.value === "") {
            productError.textContent = "Please select a product type.";
            formIsValid = false;
        }

        // Validate message
        if (message.value.trim().length < 10) {
            messageError.textContent =
                "Please provide a little more detail about your enquiry.";
            formIsValid = false;
        }

        // Show confirmation if valid
        if (formIsValid) {

            formStatus.textContent =
                "Thanks! Your enquiry has been checked and is ready to send.";

            enquiryForm.reset();

        }

    });

}

// Custom order configurator

const builderProduct = document.getElementById("builder-product");
const builderTimber = document.getElementById("builder-timber");
const builderFinish = document.getElementById("builder-finish");

const builderTitle = document.getElementById("builder-summary-title");
const builderDetails = document.getElementById("builder-summary-details");
const builderPrice = document.getElementById("builder-price");

function updateBuilder() {

    if (!builderProduct || !builderTimber || !builderFinish) {
        return;
    }

    const productOption =
        builderProduct.options[builderProduct.selectedIndex];

    const timberOption =
        builderTimber.options[builderTimber.selectedIndex];

    const finishOption =
        builderFinish.options[builderFinish.selectedIndex];

    const product = builderProduct.value;
    const timber = builderTimber.value;
    const finish = builderFinish.value;

    if (product === "") {
        builderTitle.textContent = "Start building your piece";
        builderDetails.textContent =
            "Select your options to see a personalised summary.";
        builderPrice.textContent = "Estimated from $0";
        return;
    }

    const productPrice = Number(productOption.dataset.price || 0);
    const timberPrice = Number(timberOption.dataset.price || 0);
    const finishPrice = Number(finishOption.dataset.price || 0);

    const totalPrice = productPrice + timberPrice + finishPrice;

    builderTitle.textContent = product;

    builderDetails.textContent =
        (timber || "Any timber") +
        " · " +
        (finish || "Any finish");

    builderPrice.textContent =
        "Estimated from $" + totalPrice;

}


if (builderProduct && builderTimber && builderFinish) {

    builderProduct.addEventListener("change", updateBuilder);
    builderTimber.addEventListener("change", updateBuilder);
    builderFinish.addEventListener("change", updateBuilder);

}