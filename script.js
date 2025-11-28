const h1 = document.querySelector("h1");
const originalText = h1.innerText;   
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

function randomText() {
  const str = originalText
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;   
      }

      return characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");

  h1.innerText = str;
  iteration += 0.15;
}

h1.addEventListener("mouseenter", function () {
  iteration = 0;
  setInterval(randomText, 30);
});
