document.getElementById('regno').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('phone').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('pincode').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;

    const regno = document.getElementById('regno').value;
    const regnoError = document.getElementById('regnoError');
    if (regno.length !== 9) {
        regnoError.textContent = 'Registration number must be 9 digits';
        regnoError.style.display = 'block';
        isValid = false;
    } else {
        regnoError.style.display = 'none';
    }

    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (phone.length !== 10) {
        phoneError.textContent = 'Phone number must be 10 digits';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    const pincode = document.getElementById('pincode').value;
    const pincodeError = document.getElementById('pincodeError');
    if (pincode.length !== 6) {
        pincodeError.textContent = 'Pincode must be 6 digits';
        pincodeError.style.display = 'block';
        isValid = false;
    } else {
        pincodeError.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('registrationForm').reset();
    document.querySelectorAll('.error').forEach(function(errorElement) {
        errorElement.style.display = 'none';
    });
});
