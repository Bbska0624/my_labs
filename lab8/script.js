
const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetters, wrongGuessCount, currentIndex;
const maxGuesses = 6;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    currentIndex = 0; // ehnii usgees ehlene
    hangmanImage.src = `image/${wrongGuessCount}.png`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("correct", "wrong");
    });
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

const mongolLetters = [
    "А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","Ө","П",
    "Р","С","Т","У","Ү","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"
];

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log("Тайлах үг:", word);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `Амжилттай таалаа:` : `Зөв хариулт:`;
        gameModal.querySelector("img").src = `image/${isVictory ? `victory` : `lost`}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? `Баяр хүргэе!` : `Тоглоом дууслаа!`}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

const initGame = (button, clickedLetter) => {
    const expectedLetter = currentWord[currentIndex];
    
    if (clickedLetter === expectedLetter) {
        //zuv hariult
        correctLetters.push(clickedLetter);
        wordDisplay.querySelectorAll("li")[currentIndex].innerText = clickedLetter;
        wordDisplay.querySelectorAll("li")[currentIndex].classList.add("guessed");
        
        button.classList.add("correct");
        button.classList.remove("wrong");
        
        currentIndex++; // zuvhun neg indexeer shiljine
        
    } else {
        // buruu hariult
        wrongGuessCount++;
        hangmanImage.src = `image/${wrongGuessCount}.png`;
        
        button.classList.add("wrong");
        button.classList.remove("correct");
    }
    
    //button.disabled = true;//
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (currentIndex === currentWord.length) return gameOver(true);
}

// tovchluuruudiig uusgeh
mongolLetters.forEach(letter => {
    const button = document.createElement("button");
    button.innerText = letter;
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, letter));
});

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);