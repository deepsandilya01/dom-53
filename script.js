const text = document.querySelector("h1");
const charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let interation = 0;
let backup = text.innerText;  
function randomText() {

    const str = backup.split("").map((char, index) => {

        if (index < interation) {
            return char;          
        }

        return charecters[
            Math.floor(Math.random() * charecters.length)
        ];

    }).join("");

    text.innerText = str;
    interation += 0.15;
}

text.addEventListener("mouseenter", function () {
    backup = text.innerText;  
    interation = 0;
    setInterval(randomText, 20);
});
