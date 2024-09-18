// Function to toggle the navigation to responsive mode
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"; // Adds the "responsive" class if not already present
  } else {
    x.className = "topnav"; // Resets to "topnav" class if already responsive
  }
}

// Function to open the modal
function openModal() {
  resetErrorMessages(); // Resets any error messages before opening the modal
  modalbg.style.display = "block"; // Displays the modal
}

// Function to close both the form and thank you modals
function closeModals() {
  modalbg.style.display = "none"; // Hides the main modal
  thankYouModal.style.display = "none"; // Hides the thank you modal
  form.reset(); // Resets the form after closing
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
  let isValid = true; // Variable to track if the form is valid

  resetErrorMessages(); // Resets error messages before validation

  // Validate first name (must be at least 2 characters)
  const first = document.getElementById('first').value.trim();
  if (first.length < 2) {
    document.getElementById('error-first').style.display = 'block'; // Show error if invalid
    isValid = false;
  }

  // Validate last name (must be at least 2 characters)
  const last = document.getElementById('last').value.trim();
  if (last.length < 2) {
    document.getElementById('error-last').style.display = 'block'; // Show error if invalid
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
    document.getElementById('error-location').style.display = 'block'; // Show error if invalid
    isValid = false;
  }

  // Validate checkbox (must be checked)
  const checkbox1 = document.getElementById('checkbox1').checked;
  if (!checkbox1) {
    document.getElementById('error-checkbox1').style.display = 'block'; // Show error if unchecked
    isValid = false;
  }

  // If all validations pass, close the form modal and show the thank you modal
  if (isValid) {
    document.getElementById("formModal").style.display = "none"; // Hide form modal
    document.getElementById("thankYouModal").style.display = "block"; // Show thank you modal

    form.reset(); // Reset the form after successful submission
  }
}

// DOM Elements
const modalbg = document.querySelector("#formModal"); // Main modal element
const thankYouModal = document.querySelector("#thankYouModal"); // Thank you modal element
const modalBtns = document.querySelectorAll(".btn-signup"); // Buttons to open the modal
const closeBtns = document.querySelectorAll(".close"); // Buttons to close the modals
const closeThankYouBtn = document.querySelector(".btn-close-thankyou"); // Button to close thank you modal
const form = document.querySelector("#reserveForm"); // The form element

// Add click event to open the modal when any signup button is clicked
modalBtns.forEach(btn => {
  btn.addEventListener("click", openModal);
});

// Add click event to close the modals when the close button is clicked
closeBtns.forEach((btn) => btn.addEventListener("click", closeModals));

// Add submit event to validate form when it is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  validateForm(); // Call form validation function
});

// If the thank you modal close button exists, add click event to close it and reset the form
if (closeThankYouBtn) {
  closeThankYouBtn.addEventListener("click", () => {
    thankYouModal.style.display = "none"; // Hide thank you modal
    form.reset(); // Reset the form
  });
}












