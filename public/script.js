var btn1_active = false;
var btn2_active = false;
var btn3_active = false;
var btn4_active = false;
var btn5_active = false;
const btn1 = document.getElementById("btn0");
const btn2 = document.getElementById("btn1");
const btn3 = document.getElementById("btn2");
const btn4 = document.getElementById("btn3");
const btn5 = document.getElementById("btn4");
const submit = document.getElementById("submits");

// on click, if not active, activates button and deactivates all other buttons
function btn0_click(){
    if (btn1_active == false) {
        btn1_active = true;
        btn2_active = false;
        btn3_active = false;
        btn4_active = false;
        btn5_active = false;
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(152,107,248,0.8)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        // if clicked while active, deactivates and returns colour to inactive state
        btn1_active = false;
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    
}
// on click, if not active, activates button and deactivates all other buttons
function btn1_click(){
    if (btn2_active == false) {
        btn1_active = false;
        btn2_active = true;
        btn3_active = false;
        btn4_active = false;
        btn5_active = false;
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        // if clicked while active, deactivates and returns colour to inactive state
        btn2_active = false;
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    
}
// on click, if not active, activates button and deactivates all other buttons
function btn2_click(){
    if (btn3_active == false) {
        btn1_active = false;
        btn2_active = false;
        btn3_active = true;
        btn4_active = false;
        btn5_active = false;
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        // if clicked while active, deactivates and returns colour to inactive state
        btn3_active = false;
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
}
// on click, if not active, activates button and deactivates all other buttons
function btn3_click(){
    if (btn4_active == false) {
        btn1_active = false;
        btn2_active = false;
        btn3_active = false;
        btn4_active = true;
        btn5_active = false;
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
         // if clicked while active, deactivates and returns colour to inactive state
        btn4_active = false;
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
}
// on click, if not active, activates button and deactivates all other buttons
function btn4_click(){
    if (btn5_active == false) {
        btn1_active = false;
        btn2_active = false;
        btn3_active = false;
        btn4_active = false;
        btn5_active = true;
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(152,107,248, 0.8)";
    }
    else {
        // if clicked while active, deactivates and returns colour to inactive state
        btn5_active = false;
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
}
// checks if a button is active, if so redirects to the results page
function submit_click(id){
    if (btn1_active || btn2_active|| btn3_active || btn4_active || btn5_active) {

        var url = "http://localhost:3000/results/" + id.toString();
        window.location.replace(url)
    }
    else {
        alert("Please make a selection before clicking submit")
    }
   
}
