var User = (function() {
    function User(thsName) {
        this.name = thsName;
        this.quizScores = [];
        this.currentScorce = 0;
    }

    User.prototype = {
        constructor: User,

        saveScore: function() {
            this.quizScores.push(this.currentScorce);
        },

        showScores: function() {
            var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : 'No Scores Yet';

            return '<p>' + this.name + " you scored: " + scores + '</p>';
        },

        getAnswer: function() {
            return this.answer
        },

        setAnswer: function(answer) {
            return this.answer = parseInt(answer, 10) + 1;
        }
    };

    return {
        participant: User
    };
}());