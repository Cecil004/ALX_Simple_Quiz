// Function to check the user's answer
function checkAnswer() {
    const correctAnswer = "4";

    // Get the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If user didn’t select anything
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);