var player_1 = localStorage.getItem("player_1_name");
var player_2 = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1 + " :";
document.getElementById("player2_name").innerHTML = player_2 + " :";

document.getElementById("player_1score").innerHTML = player_1_score;
document.getElementById("player_2score").innerHTML = player_2_score;

document.getElementById("q_turn").innerHTML = "Question Turn - " + player_1;
document.getElementById("a_turn").innerHTML = "Answer Turn - " + player_2;

function send() {
    value1 = document.getElementById("input_value_1").value;
    value2 = document.getElementById("input_value_2").value;
    actual_answer = parseInt(value1) * parseInt(value2);
    question_word = "<h5>" +value1 + " X " + value2 + "</h5>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input_value_1").value = "";
    document.getElementById("input_value_2").value = "";
}