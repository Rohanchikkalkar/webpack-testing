import "./styles.css";
import testImg from "./test-img.jpg";

const createHomePage = () => {
  const container = document.createElement("div");
  container.classList.add("container");
  const heading = document.createElement("h1");
  heading.textContent = `This is a heading`;
  heading.classList.add("heading");
  container.appendChild(heading);

  const image = new Image();
  image.src = testImg;
  image.setAttribute("id", "home-img");
  image.classList.add("image");
  container.appendChild(image);

  const paragraph = document.createElement("p");
  paragraph.textContent = `this is another text contentc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.`;
  container.appendChild(paragraph);
  document.body.appendChild(container);
};
export default createHomePage;
