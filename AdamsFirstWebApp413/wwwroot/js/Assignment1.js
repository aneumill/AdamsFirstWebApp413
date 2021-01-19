/* This file contains the Javascript File used in Assignment One.
 

Adam Neumiller
Last Modfied: 01/15/2021
Program Description:

The program collects values from the DOM and then calculates the final grade based on grade weights for IS 413. 
If the user enters a percentage value that falls outside of the acceptable ranges than the user is alerted with a 
pop-up alert and is instructed enter in an appropriate value. 
 
 
 
 
 */

var o_submit = document.getElementById("calcGrade");

o_submit.addEventListener("click", function () {

    //Collect the variables from the DOM
    var iAssignmentGrade;
    var iProjectGrade;
    var iQuizGrade;
    var iExamGrade;
    var iIntexGrade;
    var bContinue; 
    var sDisplayGrade = 0; 
    

  
    iAssignmentGrade = parseFloat(document.getElementById('iAssignmentGrade').value);
    iProjectGrade = parseFloat(document.getElementById("iGroupProjectGrade").value);
    iQuizGrade = parseFloat(document.getElementById("iQuizGrade").value);
    iIntexGrade = parseFloat(document.getElementById("iIntexGrade").value);
    iExamGrade = parseFloat(document.getElementById("iExamGrade").value);

    //The following IF/Statement checks to see if 


        sDisplayGrade = iAssignmentGrade + iProjectGrade + iQuizGrade + iExamGrade + iIntexGrade

        if (sDisplayGrade >= 94) 
        {
            alert("Congrats you scored a " + sDisplayGrade + " which is an A.")
        }
        else if (sDisplayGrade >= 90)
        {
            alert("Congrats you scored a " + sDisplayGrade + " which is an A-.")
        }
        else if (sDisplayGrade >= 87) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an B+.")
        }
        else if (sDisplayGrade >= 84) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an B.")
        }
        else if (sDisplayGrade >= 80) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an B-.")
        }
        else if (sDisplayGrade >= 77) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an C+.")
        }
        else if (sDisplayGrade >= 74) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an C.")
        }
        else if (sDisplayGrade >= 70) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an C-.")
        }
        else if (sDisplayGrade >= 67) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an D+.")
        }
        else if (sDisplayGrade >= 64) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an D.")
        }
        else if (sDisplayGrade >= 60) {
            alert("Congrats you scored a " + sDisplayGrade + " which is an D-.")
        }
        else  {
            alert("With an " + sDisplayGrade + " ,you didn't pass the class, you got an E.")
        }

    
 
    
})