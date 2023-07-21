const container = document.createElement("section");
container.setAttribute("id", "hero");
const button = document.createElement("button");
button.setAttribute("id", "btn");
button.textContent = "color";
const div = document.createElement("div");
div.setAttribute("id", "div");
container.append(button, div);
document.body.append(container);

let array = [
  {
    name: "qırmızı",
    color: "red",
  },
  {
    name: "yaşıl",
    color: "green",
  },
  {
    name: "sarı",
    color: "yellow",
  },
  {
    name: "mavi",
    color: "blue",
  },
  {
    name: "narıncı",
    color: "orange",
  },
  {
    name: "bənövşəyi",
    color: "purple",
  },
];
let element = document.createElement("p");
element.setAttribute("id", "p");
array.map((a) => {
  const text = document.createElement("h1");
  text.setAttribute("id", "text");
  div.append(text);
  text.textContent = a.name;
  text.addEventListener("click", () => {
    button.style.backgroundColor = a.color;
    element.textContent = `${a.name} seçildi`;
    text.style.color = "black";
    element.style.color = a.color;
    container.append(element);
  });
});
