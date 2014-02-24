function MultipleChoice(question, choices, correctAnswer) {
    Quiz.Question.call(this, question, choices, correctAnswer);
}

Helper.inherit(MultipleChoice, Quiz.Question);