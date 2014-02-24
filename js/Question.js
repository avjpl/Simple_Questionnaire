var Quiz = (function() {
    /**
     * @param string theQuestion
     * @param array theChoices
     * @param int theCorrectAnswer
     * @constructor
     */
    function Question(theQuestion, theChoices, theCorrectAnswer) {
        this.question = theQuestion;
        this.choices = theChoices;
        this.correctAnswer = theCorrectAnswer;

        var newDate = new Date(),
            created = newDate.toLocaleDateString();

        this.getCreatedDate = function() {
            return created;
        };
    }

    /**
     * @returns int
     */
    Question.prototype.getCorrectAnswer = function() {
        return parseInt(this.correctAnswer, 10);
    };

    /**
     * @param Object user
     * @returns boolean
     */
    Question.prototype.isCorrect = function(user) {
        return user.getAnswer() === this.getCorrectAnswer();
    };

    /**
     * @returns string
     */
    Question.prototype.displayQuestion = function() {
        var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>",
            choiceCounter = 0;

        this.choices.forEach(function (eachChoice, i)  {
            questionToDisplay += '<li>' +
                '<input id="question_' + i + '" type="radio" name="choice" value="' + choiceCounter + '">' +
                '<label for="question_' + i + '">' + eachChoice + '</label>' +
                '</li>';

            choiceCounter++;
        });

        questionToDisplay += "</ul>";

        return questionToDisplay;
    };

    return {
        Question: Question
    };
}());
