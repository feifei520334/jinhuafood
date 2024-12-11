function login() {
    // Get form input values
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var email = document.getElementById("email").value.trim();
    var gender = document.getElementById("gender").value;

   
    var storedUser = localStorage.getItem(name);
    var errorMessage = "";

    // Clear any previous error messages
    document.getElementById("error-message").innerText = "";

    // Validate phone number format
    if (!/^1[3-9]\d{9}$/.test(phone)) {
        errorMessage += "Phone number must be 11 digits!\n";
    }

    // Validate password and confirm password match
    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match!\n";
    }

    // Validate email format
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        errorMessage += "Please enter a valid email address!\n";
    }

    // Validate gender selection
    if (!gender) {
        errorMessage += "Please select gender!\n";
    }

    // If there are any errors, display the error message and stop
    if (errorMessage !== "") {
        document.getElementById("error-message").innerText = errorMessage;
        return;
    }

    // If the name already exists, validate phone number and other details
    if (storedUser) {
        // Parse the stored user data
        var storedUserData = JSON.parse(storedUser);

        // Validate phone number match
        if (storedUserData.phone !== phone) {
            document.getElementById("error-message").innerText = "Name and phone number do not match!";
            return;
        }

        // Validate password match
        if (storedUserData.password !== password) {
            document.getElementById("error-message").innerText = "Incorrect password!";
            return;
        }

        // Validate email match
        if (storedUserData.email !== email) {
            document.getElementById("error-message").innerText = "Email does not match!";
            return;
        }

        // Validate gender match
        if (storedUserData.gender !== gender) {
            document.getElementById("error-message").innerText = "Gender selection does not match!";
            return;
        }

        // All details match, login successful
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        // User does not exist, save new user data
        var newUser = {
            phone: phone,
            password: password,
            email: email,
            gender: gender
        };

        // Save user data to localStorage (name as key, user data as value)
        localStorage.setItem(name, JSON.stringify(newUser));

        alert("Registration successful, login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    }
}

function changeBackgroundColor() {
    const colors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
    ];
    const directions = ['to right', 'to left', 'to bottom', 'to top'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const gradientColors = colors.map(color => `rgba(${color}, 0.5)`).join(', ');
    const gradient = `linear-gradient(${direction}, ${gradientColors})`;
    document.body.style.background = gradient;
}

// Change background color every 2 seconds
setInterval(changeBackgroundColor, 2000);
