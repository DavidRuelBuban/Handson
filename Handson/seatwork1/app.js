
    // Ask the user to input their score
    let score = parseInt(prompt("Enter your score (0-100):"));

    // Element to display the result
    let result = document.getElementById("result");

    // Check the score and assign a grade
    if (score >= 90 && score <= 100) {
        result.innerText = "Congrats your final score is A.";

        console.log("Congrats your final score is A.");

    } else if (score >= 80 && score < 89) {
        result.innerText = "Congrats your final score is B.";

        console.log("Congrats your final score is B.");

    } else if (score >= 70 && score < 79) {
        result.innerText = "Congrats your final score is C.";

        console.log("Congrats your final score is C.");

    } else if (score >= 60 && score < 69) {
        result.innerText = "I regret to inform you that your final grade for this semester is a D.";

        console.log("I regret to inform you that your final grade for this semester is a D.");

    } else if (score >= 0 && score < 59) {
        result.innerText = "I regret to inform you that your final grade for this semester is a F.";

        console.log("I regret to inform you that your final grade for this semester is a F.");
        
    } else {
        result.innerText = "Invalid score. Please enter a number between 0 and 100.";
    }

    /****** END ******/