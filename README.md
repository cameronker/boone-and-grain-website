# Boone & Grain Website

Boone & Grain is a five-page responsive website created for Harriet Boone, an Adelaide artisan who produces handcrafted wooden jewellery and wearable accessories.

The website is designed to support the growth of Harriet's hobby into a small creative business by providing a professional online presence, showcasing products, supporting customer enquiries and sharing workshop content.

## Website Pages

The website includes the following pages:

- **Home** – introduces Boone & Grain, featured products and the brand story.
- **About** – provides information about Harriet, her workshop and creative approach.
- **Products** – displays the product collection with interactive filtering and product quick views.
- **Order & Contact** – allows customers to plan a custom piece and submit an enquiry.
- **Journal** – provides tutorials, workshop updates and progress content.

## Main Features

The website includes several interactive and responsive features:

- Responsive layout for desktop, tablet and mobile devices.
- Mobile navigation menu.
- Product category filtering using JavaScript.
- Product quick-view modal.
- JavaScript contact form validation.
- Interactive custom-order configurator.
- Dynamic estimated pricing for custom products.
- Keyboard-accessible modal controls.
- Accessible navigation using ARIA attributes.
- Responsive product and content grids.
- Custom CSS product illustrations.

## Technologies Used

The website was developed using:

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Visual Studio Code

No JavaScript frameworks or external libraries are required.

## HTML Structure

Semantic HTML elements are used throughout the website, including:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `aside`
- `footer`

Semantic structure helps improve page organisation, accessibility and maintainability.

## CSS and Responsive Design

A shared stylesheet is located at:

`css/style.css`

The design uses a warm natural colour palette based on timber, cream and muted sage tones to reflect the handcrafted nature of the Boone & Grain brand.

CSS techniques used include:

- CSS custom properties
- Flexbox
- CSS Grid
- Responsive media queries
- Hover and focus states
- Responsive typography using `clamp()`
- CSS-generated product artwork

The website includes responsive breakpoints for tablet and mobile screen sizes.

## JavaScript Features

The JavaScript file is located at:

`js/script.js`

### Product Filtering

Customers can filter the product collection by:

- Earrings
- Brooches
- Hairpins
- Bracelets

JavaScript reads each product's category and dynamically shows or hides matching product cards.

### Product Quick View

Each product includes a Quick View button.

When selected, JavaScript displays a modal containing the product:

- category
- name
- description
- price

The modal can be closed by:

- selecting the close button
- clicking outside the modal
- pressing the Escape key

### Contact Form Validation

The enquiry form uses JavaScript to validate customer input before submission.

Validation checks include:

- minimum name length
- valid email structure
- product selection
- minimum enquiry message length

The current website is a front-end prototype, so enquiry information is not transmitted or stored.

### Custom Order Configurator

Customers can select:

- product type
- timber
- finish

The website dynamically creates a summary of the selected options and calculates an estimated starting price.

This feature demonstrates dynamic JavaScript content and improves customer engagement.

## Accessibility

Accessibility considerations include:

- semantic HTML
- descriptive page titles
- page meta descriptions
- keyboard focus indicators
- ARIA navigation labels
- `aria-current` for the active page
- `aria-expanded` for the mobile menu
- `aria-live` for dynamic form and configurator feedback
- keyboard support for the product modal

## Privacy and Security

The website is currently a front-end prototype and does not collect or store personal information.

For a production version, customer information submitted through the contact form should be:

- transmitted using HTTPS
- processed using secure server-side validation
- stored only when necessary
- protected from unauthorised access
- managed according to an appropriate privacy policy

Client-side JavaScript validation should improve usability but should not replace server-side security controls.

## Running the Website

No installation is required.

### Option 1: Live Server

1. Open the project folder in Visual Studio Code.
2. Open `index.html`.
3. Use the Live Server extension.
4. Select **Open with Live Server**.

### Option 2: Browser

Open `index.html` directly in a web browser.

## Project Structure

```text
boone-and-grain-website/
│
├── index.html
├── about.html
├── products.html
├── contact.html
├── blog.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
```

## External Resources

The website does not currently use external JavaScript libraries, frameworks or externally hosted product imagery.

The product artwork is created using CSS.

## Future Development

A production version of Boone & Grain could include:

- secure online checkout
- customer accounts
- inventory management
- database integration
- order tracking
- secure form processing
- automated email confirmations
- embedded video tutorials
- social media integration
- website analytics
- content management functionality

## Author

Created as part of an Information Technology Fundamentals assessment project.