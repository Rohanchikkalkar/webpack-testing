// contact.js

// Create a form element

const createContactPage = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = `Contact us`;
  container.appendChild(heading);

  const form = document.createElement("form");

  // Create input element for first name
  const firstNameInput = document.createElement("input");
  firstNameInput.type = "text";
  firstNameInput.name = "firstName";
  firstNameInput.placeholder = "First Name";

  // Create input element for last name
  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameInput.name = "lastName";
  lastNameInput.placeholder = "Last Name";

  // Append input elements to the form
  form.appendChild(firstNameInput);
  form.appendChild(lastNameInput);
  // Append the form to the document body
  container.appendChild(form);
  document.body.appendChild(container);
};

// Export the form
export default createContactPage;
