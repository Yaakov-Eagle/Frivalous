const authContainer = document.getElementById('authContainer');
const authTitle = document.getElementById('authTitle');
const authButton = document.getElementById('authButton');
const switchLink = document.getElementById('switchLink');
const message = document.getElementById('message');
const slider = document.getElementById('slider');
const slidertext = document.getElementById('slidertext');
const switchAuth = document.getElementById('switchAuth')
const showMessage = (msg, type) => {
    message.textContent = msg;
    message.style.color = type === 'error' ? 'red' : 'green';
};

const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
};

const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
};

const handleSignup = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    const users = getUsers();
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        showMessage('User already exists. Please login.', 'error');
        return;
    }

    users.push({ username, password });
    saveUsers(users);
    showMessage('Signup successful! You can now login.', 'success');
};

const handleLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    const users = getUsers();
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        showMessage('Login successful!', 'success');
        window.location.href = '../html/Index.html';
    } else {
        showMessage('Invalid credentials. Please try again.', 'error');
    }
};

const switchAuthMode = () => {
    const isSignup = authTitle.textContent === 'Signup';

    if (isSignup) {
        authTitle.textContent = 'Login';
        authButton.textContent = 'Login';
        switchLink.textContent = 'Signup';
        switchLink.href = '#';
        switchLink.onclick = () => {
            switchAuthMode();
        };  
        authButton.onclick = handleLogin;
    } else {
        authTitle.textContent = 'Signup';
        authButton.textContent = 'Signup';
        switchLink.textContent = 'Login';
        switchLink.href = '#';
        switchLink.onclick = () => {
            switchAuthMode();
        };
        authButton.onclick = handleSignup;
    }
};

switchLink.onclick = () => {
    switchAuthMode();
};

authButton.onclick = handleSignup;
document.addEventListener('DOMContentLoaded', () => {

    switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (slider.classList.contains('signup')) {
            slider.classList.remove('signup');
            slider.classList.add('login');
            authTitle.classList.remove('signupText');
            message.classList.remove('signupText');
            password.classList.remove('signupFields');
            username.classList.remove('signupFields');
           authButton.classList.remove('signupFields');
            authTitle.classList.add('loginText');
            message.classList.add('loginText');
            password.classList.add('loginText');
            username.classList.add('loginText');
           authButton.classList.add('loginText');
            authTitle.textContent = 'Login';
            authButton.textContent = 'Login';
            switchLink.textContent = 'Signup';
            slidertext.textContent = 'Welcome to Frivalous';
              switchAuth.textContent = 'Not a Frivalasion?'

         }
          else {
            slider.classList.remove('login');
            slider.classList.add('signup');
            authTitle.classList.remove('loginText');
            message.classList.remove('loginText');
            password.classList.remove('loginText');
            username.classList.remove('loginText');
           authButton.classList.remove('loginText');
            authTitle.classList.add('signupText');
            message.classList.add('signupText');
            password.classList.add('signupFields');
            username.classList.add('signupFields');
           authButton.classList.add('signupFields');
            authTitle.textContent = 'Signup';
            authButton.textContent = 'Signup';
            switchLink.textContent = 'Login';
            switchAuth.textContent = 'Already a Frivalasion?'
            slidertext.textContent = 'Become a Frivalasion Today!!';
        }
    });
});