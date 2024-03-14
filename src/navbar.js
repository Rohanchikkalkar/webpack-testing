import createHomePage from "./homepage";
import createAboutUsPage from "./about";
import createContactPage from "./contact";

const createNavbar = () => {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");

  const homeBtn = document.createElement("div");
  const aboutBtn = document.createElement("div");
  const contactBtn = document.createElement("div");

  homeBtn.textContent = `Home`;
  aboutBtn.textContent = `about`;
  contactBtn.textContent = `Contact`;

  navbar.appendChild(homeBtn);
  navbar.appendChild(aboutBtn);
  navbar.appendChild(contactBtn);

  document.body.appendChild(navbar);
  const clearContent = () => {
    document.body.innerHTML = "";
  };
  homeBtn.addEventListener("click", () => {
    clearContent();
    createNavbar();
    createHomePage();
  });
  aboutBtn.addEventListener("click", () => {
    clearContent();
    createNavbar();
    createAboutUsPage();
  });
  contactBtn.addEventListener("click", () => {
    clearContent();
    createNavbar();
    createContactPage();
  });
};

export default createNavbar;
