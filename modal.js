function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// Function to open the modal
function openModal() {
  resetErrorMessages();
  modalbg.style.display = 'block';
}

// Function to close both the form and thank you modals
function closeModals() {
  modalbg.style.display = 'none';
  thankYouModal.style.display = 'none';
}

// Function to reset error messages (hides them)
function resetErrorMessages() {
  document.getElementById('error-first').style.display = 'none';
  document.getElementById('error-last').style.display = 'none';
  document.getElementById('error-email').style.display = 'none';
  document.getElementById('error-birthdate').style.display = 'none';
  document.getElementById('error-quantity').style.display = 'none';
  document.getElementById('error-location').style.display = 'none';
  document.getElementById('error-checkbox1').style.display = 'none';
}

// Function to validate the form
function validateForm() {
  let isValid = true;

  resetErrorMessages();

  // Declare the regular expression only once at the beginning
  const letterRegex = /^[A-Za-z]+$/;

  // Validate the first name
  const first = document.getElementById('first').value.trim();
  const errorFirstMessage = document.getElementById('error-first');

  // Display the default error message
  errorFirstMessage.style.display = 'block';

  if (first.length < 2) {
    errorFirstMessage.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    isValid = false;
  } else if (!letterRegex.test(first)) {
    errorFirstMessage.textContent = 'Seules les lettres sont autorisées pour le champ du prénom.';
    isValid = false;
  } else {
    errorFirstMessage.style.display = 'none';
  }

  // Validate the last name
  const last = document.getElementById('last').value.trim();
  const errorLastMessage = document.getElementById('error-last');

  // Display the default error message
  errorLastMessage.style.display = 'block';

  if (last.length < 2) {
    errorLastMessage.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    isValid = false;
  } else if (!letterRegex.test(last)) {
    errorLastMessage.textContent = 'Seules les lettres sont autorisées pour le champ du nom.';
    isValid = false;
  } else {
    errorLastMessage.style.display = 'none';
  }

  // New regular expression for stricter email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|fr|net|org|edu|gov|info)$/;

  // Validate the email (cannot be empty and must have a valid format)
  const email = document.getElementById('email').value.trim();
  const errorEmailMessage = document.getElementById('error-email');

  // Reset the display of the error message
  errorEmailMessage.style.display = 'none';

  if (email === '') {
    // If the email is empty
    errorEmailMessage.textContent = 'Veuillez entrer une adresse e-mail.';
    errorEmailMessage.style.display = 'block';
  } else if (!emailRegex.test(email)) {
    // If the email is invalid
    errorEmailMessage.textContent = 'Veuillez entrer un email valide.';
    errorEmailMessage.style.display = 'block';
  } else {
    // If everything is correct, hide the error
    errorEmailMessage.style.display = 'none';
  }

  // Validate the birthdate (must not be empty and must be at least 18 years old)

  const birthdate = document.getElementById('birthdate').value;
  const errorBirthdateMessage = document.getElementById('error-birthdate');

  // Reset the display of the error message
  errorBirthdateMessage.style.display = 'none';

  if (!birthdate) {
    // If the birthdate is empty
    errorBirthdateMessage.textContent = 'Veuillez entrer votre date de naissance.';
    errorBirthdateMessage.style.display = 'block';
    isValid = false;
  } else {
    // Calculate the age
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    // Check if the birthday has occurred this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    if (age < 18) {
      // If the user is under 18 years old
      errorBirthdateMessage.textContent = 'Vous devez avoir au moins 18 ans.';
      errorBirthdateMessage.style.display = 'block';
      isValid = false;
    }
  }

  // Validate quantity (must be a number and cannot be empty)
  const quantity = document.getElementById('quantity').value.trim();
  if (quantity === '' || isNaN(quantity)) {
    document.getElementById('error-quantity').style.display = 'block';
    isValid = false;
  }

  // Validate location selection (one must be selected)
  const locationSelected = document.querySelector('input[name="location"]:checked');
  if (!locationSelected) {
    document.getElementById('error-location').style.display = 'block';
    isValid = false;
  }

  // Validate checkbox (must be checked)
  const checkbox1 = document.getElementById('checkbox1').checked;
  if (!checkbox1) {
    document.getElementById('error-checkbox1').style.display = 'block';
    isValid = false;
  }

  // If all validations pass, close the form modal and show the thank you modal
  if (isValid) {
    modalbg.style.display = 'none';
    thankYouModal.style.display = 'block';
    form.reset();
    console.log('first ' + ' ' + isValid);
    console.log('last ' + ' ' + isValid);
    console.log('email ' + ' ' + isValid);
    console.log('birthdate ' + ' ' + isValid);
    console.log('quantity ' + ' ' + isValid);
    console.log('location ' + ' ' + isValid);
    console.log('checkbox1 ' + ' ' + isValid);
    console.log('checkbox2 ' + ' ' + isValid);
  }
}

// DOM Elements
const modalbg = document.querySelector('#formModal');
const thankYouModal = document.querySelector('#thankYouModal');
const modalBtns = document.querySelectorAll('.btn-signup');
const closeBtns = document.querySelectorAll('.close');
const closeThankYouBtn = document.querySelector('.btn-close-thankyou');
const form = document.querySelector('#reserveForm');


// Add click event to open the modal when any signup button is clicked
modalBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// Add click event to close the modals when the close button is clicked
closeBtns.forEach((btn) => btn.addEventListener('click', closeModals));

// Add submit event to validate form when it is submitted
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

// If the thank you modal close button exists, add click event to close it without resetting the form
if (closeThankYouBtn) {
  closeThankYouBtn.addEventListener('click', () => {
    thankYouModal.style.display = 'none';
  });
}
















