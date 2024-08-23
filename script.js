

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
gamearray = ["", "", "", "", "", "", "", "", ""];

box11.addEventListener("click", function(){ 
    if(startwith == "X"){
        box11.innerHTML="X";
        gamearray[0] = "X"
        startwith = "O"
    }
    else{
        box11.innerHTML="O";
        gamearray[0] = "O"
        startwith = "X"
    }
 });

 box12.addEventListener("click", function(){ 
    if(startwith == "X"){
        box12.innerHTML="X";
        gamearray[1] = "X"
        startwith = "O"
    }
    else{
        box12.innerHTML="O";
        gamearray[1] = "O"
        startwith = "X"
    }
 });

 box13.addEventListener("click", function(){ 
    if(startwith == "X"){
        box13.innerHTML="X";
        gamearray[2] = "X"
        startwith = "O"
    }
    else{
        box13.innerHTML="O";
        gamearray[2] = "O"
        startwith = "X"
    }
 });

 box21.addEventListener("click", function(){ 
    if(startwith == "X"){
        box21.innerHTML="X";
        gamearray[3] = "X"
        startwith = "O"
    }
    else{
        box21.innerHTML="O";
        gamearray[3] = "O"
        startwith = "X"
    }
 });

 box22.addEventListener("click", function(){ 
    if(startwith == "X"){
        box22.innerHTML="X";
        gamearray[4] = "X"
        startwith = "O"
    }
    else{
        box22.innerHTML="O";
        gamearray[4] = "O"
        startwith = "X"
    }
 });

 box23.addEventListener("click", function(){ 
    if(startwith == "X"){
        box23.innerHTML="X";
        gamearray[5] = "X"
        startwith = "O"
    }
    else{
        box23.innerHTML="O";
        gamearray[5] = "O"
        startwith = "X"
    }
 });

 box31.addEventListener("click", function(){ 
    if(startwith == "X"){
        box31.innerHTML="X";
        gamearray[6] = "X"
        startwith = "O"
    }
    else{
        box31.innerHTML="O";
        gamearray[6] = "O"
        startwith = "X"
    }
 });
 
 box32.addEventListener("click", function(){ 
    if(startwith == "X"){
        box32.innerHTML="X";
        gamearray[7] = "X"
        startwith = "O"
    }
    else{
        box32.innerHTML="O";
        gamearray[7] = "O"
        startwith = "X"
    }
 });

 box33.addEventListener("click", function(){ 
    if(startwith == "X"){
        box33.innerHTML="X";
        gamearray[8] = "X"
        startwith = "O"
    }
    else{
        box33.innerHTML="O";
        gamearray[8] = "O"
        startwith = "X"
    }
 });