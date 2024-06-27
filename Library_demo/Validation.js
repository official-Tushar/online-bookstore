function validate(event) {
    event.preventDefault(); 
    var fnamev = document.forms[0].fname.value;
    var lnamev = document.forms[0].lname.value;
        var mobnv = document.forms[0].mobn.value;
        var emailv = document.forms[0].email.value;
        var passwordv = document.forms[0].password.value;
        var fnamereg = new RegExp("^[a-zA-Z]+$");
        var lnamereg = new RegExp("^[a-zA-Z]+$");
        var mobnreg = new RegExp("^[0-9]{10}$");
        var emailreg = new RegExp("^[a-zA-Z][a-zA-Z0-9_.]+@[a-zA-Z]+.[a-zA-Z]{2,3}");
        var passwordreg = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
        var rfname = fnamereg.exec(fnamev);
        var rlname = lnamereg.exec(lnamev);
        var rmobn = mobnreg.exec(mobnv);
        var remail = emailreg.exec(emailv);
        var rpassword = passwordreg.exec(passwordv);
    
        if (fnamev.trim() === '') {
            alert("First name field is required");
            document.forms[0].fname.focus();
            return false;
        }
        if (!rfname) {
            alert("First name field can only contain alphabets");
            document.forms[0].fname.focus();
            return false;
        }
        if (lnamev.trim() === '') {
            alert("Last name field is required");
            document.forms[0].lname.focus();
            return false;
        }
        if (!rlname) {
            alert("Last name field can only contain alphabets");
            document.forms[0].lname.focus();
            return false;
        }
        if (mobnv.trim() === '') {
            alert("Mobile Number field is required");
            document.forms[0].mobn.focus();
            return false;
        }
        if (!rmobn) {
            alert("Phone number must contain 10 numbers");
            document.forms[0].mobn.focus();
            return false;
        }
        if (emailv.trim() === '') {
            alert("Email id field is required");
            document.forms[0].email.focus();
            return false;
        }
        if (!remail) {
            alert("Email id should be like user12@gmail.com");
            document.forms[0].email.focus();
            return false;
        }
        if (passwordv.trim() === '') {
            alert("Password field is required");
            document.forms[0].password.focus();
            return false;
        }
        if (passwordv.length < 8) {
            alert("Password length should be at least 8");
            document.forms[0].password.focus();
            return false;
        }
        if (!rpassword) {
            alert("Password must contain at least 8 characters consisting of uppercase and lowercase letters, numbers, and any of the special characters [@$!%*?&]");
            document.forms[0].password.focus();
            return false;
        }
    
        registerUser();
        return false;
                
}
    
function registerUser() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    var hobby = [];
    for (var checkbox of markedCheckbox) {
        hobby.push(checkbox.value);
    }
    const address = document.getElementById('address').value;
    const mobn = document.getElementById('mobn').value;
    const dept = document.querySelector('input[name="dept"]:checked').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = { fname, lname, gender, hobby, address, mobn, dept, email, password };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully!');
    document.forms[0].reset();
}