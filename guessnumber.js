let inputElementEl = document.getElementById("inputElement");
let gameResultEl = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);

function check() {
    let userNumber = parseInt(inputElementEl.value);
    if (userNumber > randomNumber) {
        gameResultEl.textContent = "To High! Try Again";
        gameResultEl.style.backgroundColor = "#1e217c";
    } else if (userNumber < randomNumber) {
        gameResultEl.textContent = "Too Low Try Again";
        gameResultEl.style.backgroundColor = "green";
    } else if (userNumber === randomNumber) {
        gameResultEl.textContent = "Congratulations! You got it right.";
        gameResultEl.style.backgroundColor = "green";
    } else {
        gameResultEl.textContent = "Please Provide a valid input.";
        gameResultEl.style.backgroundColor = "#1e2177c";
    }
}