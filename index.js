var nameInput = document.getElementById('name');
var emailInput = document.getElementById('mail');
var passInput = document.getElementById('Password');
var users = [];

 
function signUp() {
    if (nameInput.value == "" || emailInput.value == "" || passInput.value=="") {
        document.getElementById('message').innerHTML = 'Please fill in all fields.';
        return;
    }
    var user = {
        userName: nameInput.value,
        mail: emailInput.value,
        password: passInput.value
    };

     
    for (let i = 0; i < users.length; i++) {
        if (users[i].mail == user.mail) {
            document.getElementById('message').innerHTML = 'Email already exists. Please use a different email.';
            return;
        }
       
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));  
    document.getElementById('message').textContent = 'Success';


    

}
 
function login() {
    var mail = emailInput.value;
    var password = passInput.value;

    checkLogin(mail, password);
}

 function checkLogin(mail, password) {
 
    const users = JSON.parse(localStorage.getItem('users')) ;  
    let userFound = false; 

    for (var i = 0; i < users.length; i++) {
        var z= i ;
        if (users[i].mail == mail && users[i].password == password) {
            document.getElementById('alert').innerHTML = 'Logged in successfully';
            userFound = true;  
            localStorage.setItem('currentUser', JSON.stringify(users[i]));
            window.location.href = 'home.html'; 


            break;  
        }
        else{        document.getElementById('alert').innerHTML = 'Invalid email or password.';
        }

    }
 
 
 
} document.addEventListener('DOMContentLoaded', function() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser){
document.getElementById('welcome').innerHTML = `Welcome ${currentUser.userName}` ; }
}
)

function logout() {
    localStorage.removeItem('currentUser'); 
    window.location.href = 'index.html';  
}