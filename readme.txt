HOW TO RUN - to run this code, open up console and type in "npm run dev". this will host app in localhost:3000. 
Accessing the polls in database.js - insert the number at the end of url example: http://localhost:3000/1
current availible poll numbers: 1, 2, 3

TESTING
all tests are used by manually editing files and checking the dev tools in a browser

TESTING FRONTEND:
Buttons can only have one button activated at a time? - checked - if user tries to click on an active button when another one is active, it disabled the previous active button.
Submit button can only be selected once one button is activated? - checked - tried clicking on submit without any button active and it came up with an alert and refused to do anything else.
Inserting anything other than correct pollId numbers the url redirects user to a 404 page? - checked. - Tried inserting numbers that are not valid polls and inserting words are also refused
loading pages in a mobiles resolution will changed style to mobile version - checked - used F12 to change resolution of webpage

TESTING BACKEND:
changing the name of "resultText" won't break names on bars? - checked - manually changed values
changing name of the "optionText" will break names on buttons? - checked - manually changed values

POTENTIAL SECURITY ISSUES:
A security issue I could see is the potential of someone trying to injecting code into the database to inflate voiting numbers using the url ID function to access polls.
also, I could see someone trying to DDOS the server by trying to spam submitting until the server is overloaded.

Technologies used and why:
for this task I took the suggestion of the tehcnical task and used Node.js and Express but I used the addition of EJS - https://ejs.co which allows the embedding of js
I used EJS as I find it much more convient to use embedded JS code in the same file as the HTML instead of sending information between two differnt files.
EJS also easily allows embedding JS inside of html tags.