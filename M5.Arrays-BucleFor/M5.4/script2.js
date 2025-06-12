function guessNumber() {
  let randomNumber = Math.ceil(Math.random() * 10);
  let guess;
  let attempts = 0;
  const maxAttempts = 3;

  do {
    guess = parseInt(prompt("Guess the number:"));
    if (guess < randomNumber) {
      alert("the number is bigger!");
    } else if (guess < randomNumber) {
      alert("The number is smaller!");
    }
    attempts = attempts + 1;
  } while (guess !== randomNumber && attempts < maxAttempts);

  if (randomNumber === guess) {
    alert(
      "Congratulations, the number is " +
        randomNumber +
        " and you needed " +
        attempts +
        " attempts to achive it!"
    );
  } else {
    alert("You havce used all the attempts 😵‍💫 The number was " + randomNumber);
  }
}