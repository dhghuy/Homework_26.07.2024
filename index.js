let randomWord = ["apple", "banana", "cat", "dog", "elephant", "flower", "guitar", "house", "ice", "jacket",
    "kite", "lion", "mountain", "notebook", "orange", "pizza", "queen", "rainbow", "sun", "tree",
    "umbrella", "violin", "water", "xylophone", "yacht", "zebra", "angry", "beautiful", "calm", "dangerous",
    "easy", "fast", "great", "happy", "interesting", "joyful", "kind", "loud", "mysterious", "nervous",
    "old", "peaceful", "quiet", "rude", "smart", "tiny", "ugly", "vast", "wise", "young",
    "admire", "believe", "create", "dance", "eat", "fly", "grow", "help", "imagine", "jump",
    "know", "learn", "move", "notice", "open", "play", "read", "sing", "talk", "understand",
    "visit", "walk", "write", "agree", "bake", "call", "dream", "explore", "fix", "guess",
    "hurry", "invite", "laugh", "master", "need", "organize", "plan", "relax", "save", "teach",
    "use", "watch", "x-ray", "yawn", "zoom", "quickly", "softly", "honestly", "gently", "proudly"];

function getRandomElement(randomWord) {
    let randomIndex = Math.floor(Math.random() * randomWord.length);
    return randomWord[randomIndex];
}

let title = document.getElementById("title");
let typingText = document.getElementById("typing-text");
let score = document.getElementById("score");
let s = 0;
score.textContent = s;


title.textContent = getRandomElement(randomWord);

function event() {
    document.getElementById("typing-text").value;
}

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();

    if (key == ' ') {
        if (typingText.value.trim() == title.textContent) {
            s += 1;
            score.textContent = s;
        } else if (s != 0){
            s -= 1;
            score.textContent = s;
        }
        title.textContent = getRandomElement(randomWord);
        typingText.value = ''; 
        document.querySelector('.key-space').style.color = '#E6B9A6';

    }

//select key element
    const keyElement = document.querySelector('.key-' + key)

// check if key element exists
    if (keyElement) {
        keyElement.style.color = '#E6B9A6';
}
});

    document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
//select key element
    const keyElement = document.querySelector('.key-' + key)
    if (key == ' ') {
        document.querySelector('.key-space').style.color = '#2F3645';
    }
// check if key element exists
    if (keyElement) {
        keyElement.style.color = '#2F3645';
}
});