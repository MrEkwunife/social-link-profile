const ulElement = document.createElement("ul");
const navElement = document.querySelector("nav");

const socialLinksObject = [
  { text: "Github", href: "#" },
  { text: "Frontend Mentor", href: "#" },
  { text: "LinkedIn", href: "#" },
  { text: "Twitter", href: "#" },
  { text: "Instagram", href: "#" },
];

function createLiLinks(text, href) {
  const liElement = document.createElement("li");
  const aElement = document.createElement("a");
  aElement.setAttribute("href", href);
  aElement.textContent = text;

  liElement.appendChild(aElement);
  return liElement;
}

for (let link of socialLinksObject) {
  ulElement.appendChild(createLiLinks(link.text, link.href));
}

navElement.appendChild(ulElement);
