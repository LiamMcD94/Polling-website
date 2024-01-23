var btn1_active = false;
var buttonActive = null;

const btn1 = document.getElementById("btn0");
const btn2 = document.getElementById("btn1");
const btn3 = document.getElementById("btn2");
const btn4 = document.getElementById("btn3");
const btn5 = document.getElementById("btn4");
const submit = document.getElementById("submits");

// on click, if not active, puts "buttonActive" to id value
function btn0_click(id){
    if (buttonActive != id) {
        buttonActive = id
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(152,107,248,0.8)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        // if clicked while active, "buttonActive"= null again;
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        buttonActive = null;
    }
    
}
// on click, if not active, puts "buttonActive" to id value
function btn1_click(id){
    if (buttonActive != id) {
        buttonActive = id
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        
    }
    else {
        // if clicked while active, "buttonActive"= null again;
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        buttonActive = null;
    }
    
}
// on click, if not active, puts "buttonActive" to id value
function btn2_click(id){
    if (buttonActive != id) {
        buttonActive = id;
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
        // if clicked while active, "buttonActive"= null again;
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        buttonActive = null;
    }
}
// on click, if not active, puts "buttonActive" to id value
function btn3_click(id){
    if (buttonActive != id) {
        buttonActive = id;
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(152,107,248, 0.8)";
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    else {
         // if clicked while active, "buttonActive"= null again;
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        buttonActive = null;
    }
}
// on click, if not active, puts "buttonActive" to id value
function btn4_click(id){
    if (buttonActive != id) {
        buttonActive = id;
        // changes the colour to signify active state
        btn1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        btn5.style.backgroundColor = "rgba(152,107,248, 0.8)";
    }
    else {
        // if clicked while active, "buttonActive"= null again;
        btn5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        buttonActive = null;
    }
}
// checks if buttonActive does not equal null, if so creates a form, updates the vote number and
// redirects to the results page

function submit_click(id){
    if (buttonActive != null) {
    var voteForm = document.createElement('form');
    voteForm.action = "/results/" + id;
    voteForm.method = 'POST';
    var pollInput = document.createElement('input');
    var voteInput = document.createElement('input');
    pollInput.type = 'hidden';
    pollInput.name = 'pollId';
    pollInput.value = id;
    voteInput.type = 'hidden';
    voteInput.name = 'vote';
    voteInput.value = buttonActive;

    voteForm.appendChild(pollInput);
    voteForm.appendChild(voteInput);

    document.getElementById('voteform').appendChild(voteForm);
    voteForm.submit();

    // var url = "http://localhost:3000/results/" + id.toString();
    // window.location.replace(url)     
    }
    else {
        alert("Please make a selection before clicking submit")
    }
   
}
