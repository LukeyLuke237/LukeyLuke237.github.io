function startQuiz(){ //hide the start button and display the quiz form when user press start
    document.getElementById("start").style.visibility = 'hidden';
    document.getElementById("quiz").style.display = 'block';
}

function validateAnswer(form){ //check if the user has chosen answer for each question
    let answers = document.querySelectorAll("input[name^='question'");
    if (!(answers[0].checked || answers[1].checked || answers[2].checked || answers[3].checked) || !(answers[4].checked || answers[5].checked || answers[6].checked || answers[7].checked) || !(answers[8].checked || answers[9].checked || answers[10].checked || answers[11].checked) || !(answers[12].checked || answers[13].checked || answers[14].checked || answers[15].checked) || !(answers[16].checked || answers[17].checked || answers[18].checked || answers[19].checked) || !(answers[20].checked || answers[21].checked || answers[22].checked || answers[23].checked) || !(answers[24].checked || answers[25].checked || answers[26].checked || answers[27].checked)){
        document.getElementById("result").innerText = "Please answer all the questions";
        document.getElementById("result").style.color = 'red';
        return false;
    }
    else{
        document.getElementById("result").innerText = "";
        return true;
    }
}

function checkAnswer(form){ //check for each correct answer and display the score
    if (validateAnswer(form)){
        let answers = document.querySelectorAll("input[name^='question'");
        let correct = 0;
        if (answers[1].checked){
            correct += 1;
        }
        if (answers[7].checked){
            correct += 1;
        }
        if (answers[10].checked){
            correct += 1;
        }
        if (answers[12].checked){
            correct += 1;
        }
        if (answers[19].checked){
            correct += 1;
        }
        if (answers[20].checked){
            correct += 1;
        }
        if (answers[25].checked){
            correct += 1;
        }

        if (correct < 4){
            document.getElementById("result").innerText = "You got " + correct + "/7 correct answers. You should try again";
            document.getElementById("result").style.color = 'red';
        }
        else if (correct < 6){
            document.getElementById("result").innerText = "You got " + correct + "/7 correct answers\nYou remember a decent amount of Vietnam Travelling Guide. Try harder for a perfect score";
            document.getElementById("result").style.color = 'orangered';
        }
        else if (correct == 6){
            document.getElementById("result").innerText = "You got " + correct + "/7 correct answers\nTry a little bit harder. You almost have a perfect score!";
            document.getElementById("result").style.color = 'green';
        }
        else if (correct == 7){
            document.getElementById("result").innerText = "Congratulations! You got " + correct + "/7 correct answers\nThanks for visiting my small website and hope you will have the chance to visit Vietnam! ";
            document.getElementById("result").style.color = 'green';
        }

    }
    return false;
}