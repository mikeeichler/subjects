
function calculate_grade(num) {
    // calculates a mark (A-F) from the input and displays the results
    grade_form = document.getElementById(`grade_form_${num}`) // grab the particular input
    grade = parseInt(grade_form.value); // get the integer grade value
    mark_form = document.getElementById(`mark_form_${num}`) // calculate the mark
    if (grade != grade) { // a JS way of checking for NaN, i.e. if the input field is empty
        mark_form.innerHTML = "";
    } else if (grade < 40) {
        mark_form.innerHTML = "You've got an F from this subject";
    } else if (grade < 50) {
        mark_form.innerHTML = "You've got an E form this subject";
    } else if (grade < 60) {
        mark_form.innerHTML = "You've got an D form this subject";
    } else if (grade < 70) {
        mark_form.innerHTML = "You've got an C form this subject";
    } else if (grade < 80) {
        mark_form.innerHTML = "You've got an B form this subject";
    } else if (grade <= 100) {
        mark_form.innerHTML = "You've got an A form this subject";
    } else {
        mark_form.innerHTML = "Nice story..."; // it can't be over 100%
    }
}

function make_forms() {
    // gets the amount of subjects from user input and displays the appropriate
    // amount of inputs for the user to add their grades to
    // changes with every keyup
    subject_number = parseInt(document.getElementById("sub_num").value);
    // reset the field, otherwise it will always be adding
    document.getElementById("grade_form").innerHTML=""; 
    grade_form_str = `` // prepare the string
    for (let num=1; num<=subject_number; num++) { // starting from 1, it's not nice to ask "what did you get from subject 0"
        // can't get the template string to work if it's outside of the for loop
        grade_form_template = `
        <label for="grade_form_${num}">What was your grade from subject ${num}?:</label>
        <input type="text" inputmode="numeric" class="in40" id="grade_form_${num}" name="grade_form_'${num}" maxlength="3" size="3" onkeyup="calculate_grade(${num})">
        <span id="mark_form_${num}"></span></br>
        `
        grade_form_str += grade_form_template; // add new string to existing
    }
    document.getElementById("grade_form").innerHTML += grade_form_str; // display the needed amount of inputs
}
