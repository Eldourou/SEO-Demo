
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
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Εμποδίζουμε τη φόρμα από το να κάνει ανανέωση (refresh) τη σελίδα
    event.preventDefault();

    // 2. Παίρνουμε τις τιμές που έγραψε ο χρήστης
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;

    // 3. Βρίσκουμε το div που θα μπει το μήνυμα
    const messageDiv = document.getElementById('responseMessage');

    // 4. Φτιάχνουμε το κείμενο του μηνύματος
    messageDiv.innerText = `Γεια σου ${userName}! Λάβαμε το μήνυμά σου και θα σου απαντήσουμε σύντομα στο ${userEmail}.`;

    // 5. Εμφανίζουμε το μήνυμα και κρύβουμε τη φόρμα
    messageDiv.style.display = 'block';
    document.getElementById('contactForm').style.display = 'none';
});
