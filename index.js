let mangNgaunhien = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

function getRandomElement(mangNgaunhien) {
    let randomIndex = Math.floor(Math.random() * mangNgaunhien.length);
    return mangNgaunhien[randomIndex];
}

/*setInterval(() => {
    let randomElement = getRandomElement(mangNgaunhien);
    console.log(randomElement);
    title.innerText = randomElement;
}, 1000);*/

let title = document.getElementById("title");
let typingText = document.getElementById("typing-text");

function event() {
    document.getElementById("typing-text").value;
}

//document.body.addEventListener("keydown", function(event)) 