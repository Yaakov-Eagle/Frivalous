function submitQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const answers = {};
    formData.forEach((value, key) => {
        answers[key] = value;
    });

    if (!answers.activity || !answers.vacation) {
        document.getElementById('result').textContent = 'Please answer all questions!';
        return;
    }

    // Basic scoring logic
    const scores = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    for (const answer of Object.values(answers)) {
        scores[answer]++;
    }

    // Find the highest score
    const maxScore = Math.max(...Object.values(scores));
    const princess = Object.keys(scores).find(key => scores[key] === maxScore);

    let resultText = '';
    switch (princess) {
        case 'A':
            resultText = 'You are Cinderella! You have a kind heart and a magical touch.';
            break;
        case 'B':
            resultText = 'You are Belle! You love books and find beauty in everything.';
            break;
        case 'C':
            resultText = 'You are Ariel! You are adventurous and love discovering new things.';
            break;
        case 'D':
            resultText = 'You are Tiana! You are hardworking and passionate about your dreams.';
            break;
        default:
            resultText = 'Something went wrong!';
    }

    document.getElementById('result').textContent = resultText;
}
