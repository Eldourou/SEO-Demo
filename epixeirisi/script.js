
function loginUser(){

const user=document.getElementById("username").value;
const pass=document.getElementById("password").value;

if(user==="student" && pass==="1234"){
document.getElementById("loginMessage").innerText="Επιτυχής σύνδεση!";
}else{
document.getElementById("loginMessage").innerText="Λάθος στοιχεία.";
}

return false;
}
