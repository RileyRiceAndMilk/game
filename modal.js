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

  resetErrorMessages(); // Resets error messages before validation

  // Validate first name (must be at least 2 characters)
  const first = document.getElementById('first').value.trim();
  if (first.length < 2) {
    document.getElementById('error-first').style.display = 'block';
    isValid = false;
  }

  // Validate last name (must be at least 2 characters)
  const last = document.getElementById('last').value.trim();
  if (last.length < 2) {
    document.getElementById('error-last').style.display = 'block';
    isValid = false;
  }

  // Validate email (cannot be empty)
  const email = document.getElementById('email').value.trim();
  if (email === '') {
    document.getElementById('error-email').style.display = 'block'; // Show error if invalid
    isValid = false;
  }

  // Validate birthdate (must not be empty)
  const birthdate = document.getElementById('birthdate').value;
  if (!birthdate) {
    document.getElementById('error-birthdate').style.display = 'block'; // Show error if invalid
    isValid = false;
  }

  // Validate quantity (must be a number and cannot be empty)
  const quantity = document.getElementById('quantity').value.trim();
  if (quantity === '' || isNaN(quantity)) {
    document.getElementById('error-quantity').style.display = 'block'; // Show error if invalid
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
    console.log('first '+ ' ' + isValid);
    console.log('last ' + ' '  + isValid);
    console.log('email ' + ' ' + isValid);
    console.log('birthdate '+ ' '  + isValid);
    console.log('quantity '+ ' '  + isValid);
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
















