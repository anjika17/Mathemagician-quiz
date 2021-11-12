player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0 ;
player2_score = 0 ;

 document.getElementById("login_input_player1").innerHTML = player1_name + ":";
 document.getElementById("login_input_player2").innerHTML = player2_name + ":";
 document.getElementById("player_1score").innerHTML = player1_score ;
 document.getElementById("player_2score").innerHTML = player2_score ;

 value_1 = document.getElementById("value_1").value ; 
 localStorage.setItem("value_1" , value_1) ;

 value_2 = document.getElementById("value_2").value ; 
 localStorage.setItem("value_2" , value_2) ;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name ;

question = "<h3>"+value_1+"x"+value_2+"</h3>" ; 
input = "<input id='answer' type='number' class='form-control'>" ;
button = "<button id='submit' onclick='send()' type='button' class='btn btn-info'></button" ;

div = question + input + button ;
document.getElementById("output").innerHTML = div ;