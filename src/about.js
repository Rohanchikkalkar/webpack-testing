import "./styles.css";

const createAboutUsPage = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  const heading = document.createElement("h1");
  heading.textContent = `About us`;
  heading.classList.add("heading");
  container.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.textContent = `this is just another paragraph`;
  container.appendChild(paragraph);
  document.body.appendChild(container);
};

export default createAboutUsPage;
