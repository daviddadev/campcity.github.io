// Checks name and last name validation.
function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    var y = document.forms["myForm"]["child-lastname"].value;
    
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }
    
    if (y === "") {
        alert("Child's name must be filled out");
        return false;
    }
}
