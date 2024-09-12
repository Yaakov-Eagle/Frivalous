function submitQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const answers = {};
    formData.forEach((value, key) => {
        answers[key] = value;
    });

    if (!answers.activity || !answers.vacation || !answers.pet || !answers.man || !answers.sleep) {
        document.getElementById('result').textContent = 'Please answer all questions!';
        return;
    }

    // Basic scoring logic
    const scores = {
        Mulan: 0,
        Bell: 0,
        Cind: 0,
        Ariel: 0
    };

    for (const answer of Object.values(answers)) {
        scores[answer]++;
    }

    // Find the highest score
    const maxScore = Math.max(...Object.values(scores));
    const princess = Object.keys(scores).find(key => scores[key] === maxScore);

    let resultText = '';
    switch (princess) {
        case 'Cind':
            resultText = 'You are Cinderella! You have a kind heart and a magical touch.';
            break;
        case 'Bell':
            resultText = 'You are Belle! You love books and find beauty in everything.';
            break;
        case 'Ariel':
            resultText = 'You are Ariel! You are adventurous and love discovering new things.';
            break;
        case 'Mulan':
            resultText = 'You are Mulan! You are hardworking and passionate about your dreams, you can achieve anything you put your mind to and would make the most amazing wife. you are strong and brilliant, caring , and have a really hot husband.';
            break;
        default:
            resultText = 'Something went wrong!';
    }

    document.getElementById('result').textContent = resultText;
}

