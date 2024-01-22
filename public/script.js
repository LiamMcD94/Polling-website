var btn1_active = false;
var btn2_active = false;
var btn3_active = false;
var btn4_active = false;
var btn5_active = false;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const submit = document.getElementById("submits");
const pollBar1 = document.getElementById("pollBar1");
const pollBar2 = document.getElementById("pollBar2");
const pollBar3 = document.getElementById("pollBar3");
const pollBar4 = document.getElementById("pollBar4");
const pollBar5 = document.getElementById("pollBar5");

function btn1_click(){
    if (btn1_active == false) {
        btn1_active = true;
        btn2_active = false;
        btn3_active = false;
        btn4_active = false;
        btn5_active = false;
        btn1.style.backgroundColor = "rgba(152,107,248,0.8)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        btn1_active = false;
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    
}

function btn2_click(){
    if (btn2_active == false) {
        btn1_active = false;
        btn2_active = true;
        btn3_active = false;
        btn4_active = false;
        btn5_active = false;
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        btn2_active = false;
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    
}

function btn3_click(){
    if (btn3_active == false) {
        btn1_active = false;
        btn2_active = false;
        btn3_active = true;
        btn4_active = false;
        btn5_active = false;
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        btn3_active = false;
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
}

function btn4_click(){
    if (btn4_active == false) {
        btn1_active = false;
        btn2_active = false;
        btn3_active = false;
        btn4_active = true;
        btn5_active = false;
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        btn4_active = false;
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
}

function btn5_click(){
    if (btn5_active == false) {
        btn1_active = false;
        btn2_active = false;
        btn3_active = false;
        btn4_active = false;
        btn5_active = true;
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(152,107,248, 0.8)";
    }
    else {
        btn5_active = false;
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
}

function updatePollBars() {
    






    value = Math.round(value)
}


function submit_click(){
    if (btn1_active || btn2_active|| btn3_active || btn4_active || btn5_active) {

    }
    else {
        alert("Please make a selection before clicking submit")
    }
   
}
