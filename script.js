

var box11 = document.getElementById("box11")
var box12 = document.getElementById("box12")
var box13 = document.getElementById("box13")

var box21 = document.getElementById("box21")
var box22 = document.getElementById("box22")
var box23 = document.getElementById("box23")

var box31 = document.getElementById("box31")
var box32 = document.getElementById("box32")
var box33 = document.getElementById("box33")
var startwith = "X"
var winn = false;
gamearray = ["", "", "", "", "", "", "", "", ""];
var title = document.getElementById("title");


function check(char) {

    // Horizontal
    if(gamearray[0] == char && gamearray[1] == char && gamearray[2] == char) {title.innerHTML = char + " hat gewonnen"; winn = true;}
    else if(gamearray[3] == char && gamearray[4] == char && gamearray[5] == char){title.innerHTML = char + " hat gewonnen"; winn = true;}
    else if(gamearray[6] == char && gamearray[7] == char && gamearray[8] == char){title.innerHTML = char + " hat gewonnen"; winn = true;}
    // Vertikal
    else if(gamearray[0] == char && gamearray[3] == char && gamearray[6] == char) {title.innerHTML = char + " hat gewonnen"; winn = true;}
    else if(gamearray[1] == char && gamearray[4] == char && gamearray[7] == char){title.innerHTML = char + " hat gewonnen"; winn = true;}
    else if(gamearray[2] == char && gamearray[5] == char && gamearray[8] == char){title.innerHTML = char + " hat gewonnen"; winn = true;}
    // Diagonal
    else if(gamearray[0] == char && gamearray[4] == char && gamearray[8] == char){title.innerHTML = char + " hat gewonnen"; winn = true;}
    else if(gamearray[2] == char && gamearray[4] == char && gamearray[6] == char){title.innerHTML = char + " hat gewonnen"; winn = true;}


}

box11.addEventListener("click", function(){ 
    if(startwith == "X" && box11.innerHTML =="" && winn == false){
        box11.innerHTML="X";
        gamearray[0] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box11.innerHTML =="" && winn == false){
        box11.innerHTML="O";
        gamearray[0] = "O"
        startwith = "X"
        check("O")
    }
 });

 box12.addEventListener("click", function(){ 
    if(startwith == "X" && box12.innerHTML ==""&& winn == false){
        box12.innerHTML="X";
        gamearray[1] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box12.innerHTML ==""&& winn == false){
        box12.innerHTML="O";
        gamearray[1] = "O"
        startwith = "X"
        check("O")
    }
 });

 box13.addEventListener("click", function(){ 
    if(startwith == "X" && box13.innerHTML ==""&& winn == false){
        box13.innerHTML="X";
        gamearray[2] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box13.innerHTML ==""&& winn == false){
        box13.innerHTML="O";
        gamearray[2] = "O"
        startwith = "X"
        check("O")
    }
 });

 box21.addEventListener("click", function(){ 
    if(startwith == "X" && box21.innerHTML ==""&& winn == false){
        box21.innerHTML="X";
        gamearray[3] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box21.innerHTML ==""&& winn == false){
        box21.innerHTML="O";
        gamearray[3] = "O"
        startwith = "X"
        check("O")
    }
 });

 box22.addEventListener("click", function(){ 
    if(startwith == "X" && box22.innerHTML ==""&& winn == false){
        box22.innerHTML="X";
        gamearray[4] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box22.innerHTML ==""&& winn == false){
        box22.innerHTML="O";
        gamearray[4] = "O"
        startwith = "X"
        check("O")
    }
 });

 box23.addEventListener("click", function(){ 
    if(startwith == "X" && box23.innerHTML ==""&& winn == false){
        box23.innerHTML="X";
        gamearray[5] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box23.innerHTML ==""&& winn == false){
        box23.innerHTML="O";
        gamearray[5] = "O"
        startwith = "X"
        check("O")
    }
 });

 box31.addEventListener("click", function(){ 
    if(startwith == "X" && box31.innerHTML ==""&& winn == false){
        box31.innerHTML="X";
        gamearray[6] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box31.innerHTML ==""&& winn == false){
        box31.innerHTML="O";
        gamearray[6] = "O"
        startwith = "X"
        check("O")
    }
 });
 
 box32.addEventListener("click", function(){ 
    if(startwith == "X" && box32.innerHTML ==""&& winn == false){
        box32.innerHTML="X";
        gamearray[7] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box32.innerHTML ==""&& winn == false){
        box32.innerHTML="O";
        gamearray[7] = "O"
        startwith = "X"
        check("O")
    }
 });

 box33.addEventListener("click", function(){ 
    if(startwith == "X" && box33.innerHTML ==""&& winn == false){
        box33.innerHTML="X";
        gamearray[8] = "X"
        startwith = "O"
        check("X");
    }
    else if(startwith == "O" && box33.innerHTML ==""&& winn == false){
        box33.innerHTML="O";
        gamearray[8] = "O"
        startwith = "X"
        check("O")
    }
 });

 var reload = document.getElementById("reload")

 reload.addEventListener("click", function(){
    for(let i = 0; i < gamearray.length; i++) {
        gamearray[i] = "-";
    }
    winn = false;
    title.innerHTML = "TICTACTOE";
    box11.innerHTML="";
    box12.innerHTML="";
    box13.innerHTML="";

    box21.innerHTML="";
    box22.innerHTML="";
    box23.innerHTML="";

    box31.innerHTML="";
    box32.innerHTML="";
    box33.innerHTML="";


    

    
 })



