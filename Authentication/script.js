// Default users array
const defaultUsers = [
    ["yuvraj@chitkara.edu.in", "yuvraj2569"],
    ["vivek@chitkara.edu.in", "vivek2562"],
    ["vinay@chitkara.edu.in", "vinay2560"],
    ["uday@chitkara.edu.in", "uday2550"]
];

// Initialize localStorage with default users if not already present
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(defaultUsers));
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function validateEmail(email) {
    const suffix = '@chitkara.edu.in';
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');

    // Validate that the email contains '@' and ends with the correct domain
    return (atIndex > 0 && dotIndex > atIndex && email.endsWith(suffix));
}

function validatePassword(password) {
    if (password.length >= 8 && password.length <= 12) {
        let isAlphanumeric = true;
        for (let i = 0; i < password.length; i++) {
            const charCode = password.charCodeAt(i);
            if (!((charCode >= 48 && charCode <= 57) || // 0-9
                  (charCode >= 65 && charCode <= 90) || // A-Z
                  (charCode >= 97 && charCode <= 122))) { // a-z
                isAlphanumeric = false;
                break;
            }
        }
        return isAlphanumeric;
    }
    return false;
}

function loginUser() {
    const email = document.getElementById('email').value.trim(); // Use trim to remove whitespace
    const password = document.getElementById('password').value;
    const alertBox = document.getElementById('alert');
    const users = getUsers();

    // Validate email format
    if (!validateEmail(email)) {
        alertBox.textContent = "Please enter a valid email format.";
        return false;
    }

    // Check credentials
    const user = users.find(user => user[0] === email && user[1] === password);
    if (user) {
        // Store user info in localStorage for future use
        localStorage.setItem('loggedInUser', JSON.stringify({ email: user[0], password: user[1] }));

        window.location.href = '../index.html'; // Redirect on successful login
        return false;
    } else {
        alertBox.textContent = "Invalid email or password. Please try again.";
        return false;
    }
}

function signupUser() {
    const email = document.getElementById('signupEmail').value.trim(); // Use trim to remove whitespace
    const password = document.getElementById('signupPassword').value;
    const alertBox = document.getElementById('alert');

    // Validate email format
    if (!validateEmail(email)) {
        alertBox.textContent = "Please enter a valid email format.";
        return false;
    }

    // Validate password
    if (!validatePassword(password)) {
        alertBox.textContent = "Password must be alphanumeric and 8-12 characters long.";
        return false;
    }

    // Store user credentials
    const users = getUsers();
    
    // Check if the email already exists
    const existingUser = users.find(user => user[0] === email);
    if (existingUser) {
        alertBox.textContent = "Email already exists. Please choose a different one.";
        return false;
    }

    users.push([email, password]);
    saveUsers(users);

    // Store user info in localStorage for immediate login
    localStorage.setItem('loggedInUser', JSON.stringify({ email: email, password: password }));

    alertBox.textContent = "Signup successful! Redirecting to login...";
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to login page
    }, 2000);
    
    return false; // Prevent form submission
}

// Real-time email validation for login
document.getElementById('email').addEventListener('input', function () {
    const emailCheck = document.getElementById('emailCheck');
    if (validateEmail(this.value.trim())) {
        emailCheck.textContent = '✔';
    } else {
        emailCheck.textContent = '';
    }
});

// Real-time email validation for signup
document.getElementById('signupEmail').addEventListener('input', function () {
    const signupEmailCheck = document.getElementById('signupEmailCheck');
    if (validateEmail(this.value.trim())) {
        signupEmailCheck.textContent = '✔';
    } else {
        signupEmailCheck.textContent = '';
    }
});