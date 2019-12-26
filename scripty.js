// Carly Pennock, JavaScript Final, Fall 2019

"use strict";

// CUSTOM FUNCTIONS ----------------------------------------------

    function getName() {
        let name = prompt('What are you called?');
        document.getElementById("name").innerHTML = 'Greetings, ' + name + '.';
    
        if // name entered
            (name !== null) {
            console.log('Interviewee name' + ': ' + name);
            }

        else  // no name entered 
            {
            console.log('Interviewee name' + ': ' + 'anonymous');
            }
    }

    function mathCheck() {
        let answer = document.getElementById("inputAnswer").value;

        if // if correct
            (answer == 20) {
            document.getElementById("mathA").textContent = 'Correct! Your answer was:' + answer; 
        } 
        
        else // if incorrect
            {     
            document.getElementById("buttonAnswer").style.color = "red";
            document.getElementById("buttonAnswer").textContent = "Again?";
        }
    }

    function mathPicker() {
        const n1 = Number(document.getElementById("number1").value);
            console.log("The first number you chose is: " + n1);
        const n2 = Number(document.getElementById("number2").value);
            console.log("The second number you chose is: " + n2);
        const operator = document.getElementById("mathy").value;
            console.log("The operator you chose is: " + operator);
        const answer = document.getElementById("answer");
            let result = 0;
        switch (operator) {
            case "add": result = n1 + n2; break;
            case "subtract": result = n1 - n2; break;
            case "multiply": result = n1 * n2; break;
            case "divide": result = n1 / n2; break;
            case "exponentation": result = n1 ** n2; break;
            case "remainder": result = n1 % n2; break;
        }
        result = "The answer is: " + result;
        answer.textContent = result;
    }

    function greaterThanCheck() {    
        let n3 = Number(document.getElementById("favNum").value);
        if (n3 >= 50 && n3 <= 100) {
            document.getElementById("favNumCheck").textContent = 'Correct!'; 
        }
        else {
            document.getElementById("favNumCheck").textContent = 'Incorrect! Do you even know numbers?';
        }
    }

// EVENT LISTENERS ----------------------------------------------

    document.getElementById("calcButton").addEventListener("click", mathPicker);

    document.getElementById("buttonAnswer").onclick = function() {mathCheck()};
   
    document.getElementById("favNumSubmit").onclick = function() {
        let n3 = Number(document.getElementById("favNum").value);    
        console.log("Your favorite number is: " + n3); 
    };

    document.getElementById("radio1").onchange = function() {greaterThanCheck()}

    document.getElementById("radio2").onchange = function() {greaterThanCheck()}

    document.getElementById("inputAnswer").addEventListener("keyup", function(event) {
        console.log("key pressed in \"inputAnswer\": " + event.keyCode);
        if (event.keyCode === 13){
            event.preventDefault();
            mathCheck();
        }
    });

// CODE BODY ----------------------------------------------


alert('Do not be afraid. We mean you no harm. Please click through to answer a few questions.');

getName(); 
console.log("getName called");

// grab checkbox & label array
let checkboxes = document.getElementById("pickMovie").querySelectorAll("input"); 
let labels = document.getElementById("pickMovie").querySelectorAll("label");

console.log(checkboxes.length + ", " + labels.length);

// color change on click for mathTwo
for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("change", function() {
            if // checked color
            (checkboxes[i].checked == true) {
            labels[i].style.color = "green";     
            }

            else // unchecked color
            {
                labels[i].style.color = "black";
            }
            console.log("checked");
            console.log([i]);
        });

}




