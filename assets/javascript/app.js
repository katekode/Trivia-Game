function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var correct = 0;

    if (question1 == "Pandora") {
        correct++;
    }
    if (question2 == "Sri Lanka(1960)") {
        correct++;
    }
    if (question3 == "Vitamin B12") {
        correct++;
    }
    if (question4 == "Sunflowers") {
        correct++;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
var counter = 60;
var interval = setInterval(function() {
    counter--;

    if (counter <= 0) {
        clearInterval(interval);
        $('#timer').html("<h3>Your Time Is Up</h3>");
        return;
    } else {
        $('#time').text(counter);
        console.log("Timer --> " + counter);
    }
}, 1000);