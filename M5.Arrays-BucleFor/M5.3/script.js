function guessNumber() {
    let randomNumber = Math.ceil(Math.random() * 10);

    let intent = parseInt(prompt("Guess the number(between 1 & 10):"));

    while (intent !== randomNumber) {
        intent = parseInt(prompt("It's not correct, play again!"));
    }

    alert("Nice! the number was " + randomNumber);
}