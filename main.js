const p = document.querySelector("p");
const buttonElement = document.querySelector("#button");
console.log(p);
console.log(buttonElement);

buttonElement.addEventListener("click", () => {
  p.innerHTML = "Hello con cec";
});
