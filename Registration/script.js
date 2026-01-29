document.getElementById("visitForm").addEventListener("submit", function(e){
e.preventDefault();


let name = document.getElementById("name");
let roll = document.getElementById("roll");
let company = document.getElementById("company");
let date = document.getElementById("date");


let valid = true;


function setError(input, msg){
input.nextElementSibling.innerText = msg;
valid = false;
}


function clearError(input){
input.nextElementSibling.innerText = "";
}


// Name validation
if(name.value.trim() === ""){
setError(name, "Student name required");
} else {
clearError(name);
}


// Roll validation
if(roll.value.trim() === ""){
setError(roll, "Roll number required");
} else {
clearError(roll);
}


// Company validation
if(company.value === ""){
setError(company, "Please select company");
} else {
clearError(company);
}


// Date validation
if(date.value === ""){
setError(date, "Please select visit date");
} else {
clearError(date);
}


if(valid){
alert("Registration Successful!");
document.getElementById("visitForm").reset();
}
});