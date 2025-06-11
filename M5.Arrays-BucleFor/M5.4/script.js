function guessNumber() {
    let randomNumber = Math.ceil(Math.random() * 10);

    let guess;

    let attempts = 0;
    const maxAttempts = 5;

    do { 
        guess = parseInt(prompt("Guess the number (between 1 & 10:"));
        attempts++;
        console.log("random number: ", randomNumber)

        if (guess === randomNumber) {
            alert("Congratulations, the number is " + randomNumber + " and you needed " + attempts + " attempts to achieve it!")
            return;
        }
    } while (attempts < maxAttempts);

    alert("You have used all the attemps 😵‍💫 the number was " + randomNumber);
}