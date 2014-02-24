var els,
    docBody = document.body,
    questionContainer = document.querySelector('#questionContainer'),
    idx = 0;
    allQuestions = [
        new MultipleChoice("Who is Prime Minister of England?", ["Obama", "Blair", "Brown", "Cameron"], 4),
        new MultipleChoice("What is the Capital of Brazil?", ["São Paulo", "Rio de Janeiro", "Brasília"], 2),
        new MultipleChoice("In what country was the 2014 Olympics held?", ["Brazil", "Russia", "Japan"], 2)
    ],
    questions = allQuestions.length,
    btn = '<button>Next</button>';

var user = new User.participant('Joe Simspon');

function render(idx) {
    if (idx === questions) {
        user.saveScore();

        questionContainer.innerHTML = '<h1>Questions Complete</h1>' +
            user.showScores() ;

        return;
    }

    questionContainer.innerHTML = '<h1>Questionnaire</h1>' +
        '<h2>Question ' + (idx + 1) + ' of ' +  questions + '</h2>';
    questionContainer.innerHTML += allQuestions[idx].displayQuestion();
    questionContainer.innerHTML += btn;
}

render(idx);

eventUtil.addEvent(docBody, 'click', function(evt) {
    if (evt.target.tagName === 'INPUT') {

        user.setAnswer(evt.target.value);

        if (allQuestions[idx].isCorrect(user)) {
            user.currentScorce += 1;
        }
    }
});

eventUtil.addEvent(docBody, 'click', function(evt) {
    if (evt.target.tagName !== 'BUTTON') {
        return;
    }

    [].forEach.call(document.querySelectorAll('input'), function(el) {
        if (!el.checked) {
            return false;
        } else {
            idx++;
        }
    });

    render(idx);
});