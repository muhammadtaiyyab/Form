// // Get the form elements
// const form1 = document.getElementById("form-1");
// const form2 = document.getElementById("form-2");

// // Get the buttons
// const nextBtn = document.querySelector(".btnNext");
// const backBtn = document.querySelector(".backBtn");

// // Check if elements exist
// if (form1 && form2 && nextBtn && backBtn) {
//   // Add click event listeners to the buttons
//   nextBtn.addEventListener("click", () => {
//     form1.style.display = "none";
//     form2.style.display = "block";
//     backBtn.style.display = "block";
//   });

//   backBtn.addEventListener("click", () => {
//     form2.style.display = "none";
//     form1.style.display = "block";
//     backBtn.style.display = "none";
//   });
// } else {
//   console.log("Error: Could not find one or more elements.");
// }

// document.addEventListener("DOMContentLoaded", function() {
//   var currentSection = 1;
  
//   // show the first section, hide the others
//   document.getElementById("form-1").style.display = "block";
//   document.getElementById("form-2").style.display = "none";
//   document.getElementById("form-3").style.display = "none";
  
//   // when next button is clicked, hide the current section and show the next one
//   document.querySelectorAll(".btnNext").forEach(function(button) {
//     button.addEventListener("click", function() {
//       if(currentSection == 1) {
//         document.getElementById("form-1").style.display = "none";
//         document.getElementById("form-2").style.display = "block";
//         currentSection = 2;
//       }
//       else if(currentSection == 2) {
//         document.getElementById("form-2").style.display = "none";
//         document.getElementById("form-3").style.display = "block";
//         currentSection = 3;
//       }
//     });
//   });
  
//   // when back button is clicked, hide the current section and show the previous one
//   document.querySelectorAll(".backBtn").forEach(function(button) {
//     button.addEventListener("click", function() {
//       if(currentSection == 2) {
//         document.getElementById("form-2").style.display = "none";
//         document.getElementById("form-1").style.display = "block";
//         currentSection = 1;
//       }
//       else if(currentSection == 3) {
//         document.getElementById("form-3").style.display = "none";
//         document.getElementById("form-2").style.display = "block";
//         currentSection = 2;
//       }
//     });
//   });
  
//   // when submit button is clicked, show alert message and submit form
//   document.querySelectorAll(".btnSubmit").forEach(function(button) {
//     button.addEventListener("click", function() {
//       alert("Form submitted successfully!");
//       document.querySelector("form").submit();
//     });
//   });
// });

// // Get the form and all form elements
// const form = document.querySelector('form');
// const form1 = document.querySelector('#form-1');
// const form2 = document.querySelector('#form-2');
// const form3 = document.querySelector('#form-3');
// const btnNext = document.querySelectorAll('.btnNext');
// const backBtn = document.querySelectorAll('.backBtn');
// const btnSubmit = document.querySelector('.btnSubmit');

// // Hide all forms except the first one
// form2.style.display = 'none';
// form3.style.display = 'none';

// // Handle the next button clicks
// for (let i = 0; i < btnNext.length; i++) {
//   btnNext[i].addEventListener('click', (e) => {
//     e.preventDefault();
//     if (form1.style.display !== 'none') {
//       form1.style.display = 'none';
//       form2.style.display = 'block';
//       backBtn[0].style.display = 'block';
//     } else if (form2.style.display !== 'none') {
//       form2.style.display = 'none';
//       form3.style.display = 'block';
//       backBtn[0].style.display = 'block';
//       backBtn[1].style.display = 'block';
//       btnSubmit.style.display = 'block';
//     }
//   });
// }

// // Handle the back button clicks
// for (let i = 0; i < backBtn.length; i++) {
//   backBtn[i].addEventListener('click', (e) => {
//     e.preventDefault();
//     if (form2.style.display !== 'none') {
//       form2.style.display = 'none';
//       form1.style.display = 'block';
//       backBtn[0].style.display = 'none';
//     } else if (form3.style.display !== 'none') {
//       form3.style.display = 'none';
//       form2.style.display = 'block';
//       backBtn[1].style.display = 'none';
//       btnSubmit.style.display = 'none';
//     }
//   });
// }

// Get the form and all form elements
const form = document.querySelector('form');
const form1 = document.querySelector('#form-1');
const form2 = document.querySelector('#form-2');
const form3 = document.querySelector('#form-3');
const btnNext = document.querySelectorAll('.btnNext');
const backBtn = document.querySelectorAll('.backBtn');
const btnSubmit = document.querySelector('.btnSubmit');

// Hide all forms except the first one
form2.style.display = 'none';
form3.style.display = 'none';

// Handle the next button clicks
for (let i = 0; i < btnNext.length; i++) {
  btnNext[i].addEventListener('click', (e) => {
    e.preventDefault();
    if (form1.style.display !== 'none') {
      form1.style.display = 'none';
      form2.style.display = 'block';
      backBtn[0].style.display = 'block';
    } else if (form2.style.display !== 'none') {
      form2.style.display = 'none';
      form3.style.display = 'block';
      backBtn[0].style.display = 'block';
      backBtn[1].style.display = 'block';
      btnSubmit.style.display = 'block';
    }
  });
}

// Handle the back button clicks
for (let i = 0; i < backBtn.length; i++) {
  backBtn[i].addEventListener('click', (e) => {
    e.preventDefault();
    if (form2.style.display !== 'none') {
      form2.style.display = 'none';
      form1.style.display = 'block';
      backBtn[0].style.display = 'none';
    } else if (form3.style.display !== 'none') {
      form3.style.display = 'none';
      form2.style.display = 'block';
      backBtn[1].style.display = 'none';
      btnSubmit.style.display = 'none';
    }
  });
}

// Handle the submit button click
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  // Perform validation and submission logic here
  form.submit();
});


//below validation is for id = "form-1"

// const form = document.getElementById('form-1');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   //validate "With whom you want to travel?" radio buttons
//   const partnerRadio = document.getElementById('travel-partner-radioBtn');
//   const childrenRadio = document.getElementById('travel-children-radioBtn');
//   const friendRadio = document.getElementById('travel-friend-radioBtn');
  
//   if (!partnerRadio.checked && !childrenRadio.checked && !friendRadio.checked) {
//     alert('Please select an option for "With whom you want to travel?"');
//     return;
//   }
  
//   //validate "Name" input field
//   const fullNameInput = document.getElementById('fullName');
  
//   if (fullNameInput.value.trim() === '') {
//     alert('Please enter your name');
//     fullNameInput.focus();
//     return;
//   }
  
//   //validate "Date of Birth" input field
//   const dobInput = document.getElementById('dob');
  
//   if (dobInput.value.trim() === '') {
//     alert('Please enter your date of birth');
//     dobInput.focus();
//     return;
//   }
  
//   //validate "Email" input field
//   const emailInput = document.getElementById('email');
  
//   if (emailInput.value.trim() === '') {
//     alert('Please enter your email');
//     emailInput.focus();
//     return;
//   }
  
//   //validate "Password" input field
//   const pwdInput = document.getElementById('pwd');
  
//   if (pwdInput.value.trim() === '') {
//     alert('Please enter your password');
//     pwdInput.focus();
//     return;
//   }
  
//   //validate "Occupation" input field
//   const occupInput = document.getElementById('occup');
  
//   if (occupInput.value.trim() === '') {
//     alert('Please enter your occupation');
//     occupInput.focus();
//     return;
//   }
  
//   //validate "Gender" radio buttons
//   const maleRadio = document.getElementById('male-radio-btn');
//   const femaleRadio = document.getElementById('female-radio-btn');
//   const otherRadio = document.getElementById('other-radio-btn');
  
//   if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
//     alert('Please select an option for "Gender"');
//     return;
//   }
  
//   //validate "Dietary Requirements" radio buttons
//   const vegetarianRadio = document.getElementById('vegetarian-radio-btn');
//   const veganRadio = document.getElementById('vegan-radio-btn');
//   const halalRadio = document.getElementById('halal-radio-btn');
//   const kosherRadio = document.getElementById('kosher-radio-btn');
//   const allergiesRadio = document.getElementById('allergies-radio-btn');
  
//   if (!vegetarianRadio.checked && !veganRadio.checked && !halalRadio.checked && !kosherRadio.checked && !allergiesRadio.checked) {
//     alert('Please select an option for "Dietary Requirements"');
//     return;
//   }
  
//   //validate "Budget Range" select field
//   const budgetSelect = document.getElementById('budget');
  
//   if (budgetSelect.value === '') {
//     alert('Please select a budget range');
//     return;
//   }
  
//   //validate "How Active?" select field
//   const activityLevelSelect = document.getElementById('activitylevel');
  
//   if (activityLevelSelect.value === '') {
//     alert('Please select an option for "How Active?"');
//     return;
//   }
  
//   //validate "Preferred Travel Dates" input field
//   const preferredDatesInput = document.getElementById('preferreddates');
  
//   if (preferredDatesInput.value.trim() === '') {
//     alert('Please enter your preferred travelates');
//     preferredDatesInput.focus();
//     return;
//     }
    
//     // All fields are valid, submit the form
//     alert('Form submitted successfully!');
//     form.submit();
//     });

// //below validation is for id = "form-2"    

// const form = document.querySelector('#form-2');
// const errorElement = document.querySelector('.error-message');

// form.addEventListener('submit', (event) => {
//   let isError = false;

//   // Validate radio buttons
//   const hotelRadios = document.querySelectorAll('input[name="3-Hotel-RadioBtn"], input[name="5-Hotel-RadioBtn"], input[name="Motel-RadioBtn"]');
//   if (!validateRadio(hotelRadios)) {
//     errorElement.textContent = 'Please select a type of accommodation.';
//     isError = true;
//   }

//   const roomRadios = document.querySelectorAll('input[name="single-room-RadioBtn"], input[name="shared-room-RadioBtn"]');
//   if (!validateRadio(roomRadios)) {
//     errorElement.textContent = 'Please select a type of room.';
//     isError = true;
//   }

//   // Validate select dropdown
//   const bedroomDropdown = document.querySelector('#bedroom');
//   if (!validateSelect(bedroomDropdown)) {
//     errorElement.textContent = 'Please select a number of bedrooms.';
//     isError = true;
//   }

//   // Validate at least one checkbox is checked
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   if (!validateCheckbox(checkboxes)) {
//     errorElement.textContent = 'Please select at least one facility.';
//     isError = true;
//   }

//   if (isError) {
//     event.preventDefault();
//     errorElement.style.display = 'block';
//   } else {
//     errorElement.style.display = 'none';
//   }
// });

// // Function to validate radio buttons
// function validateRadio(radios) {
//   for (const radio of radios) {
//     if (radio.checked) {
//       return true;
//     }
//   }
//   return false;
// }

// // Function to validate select dropdown
// function validateSelect(dropdown) {
//   return dropdown.selectedIndex > 0;
// }

// // Function to validate at least one checkbox is checked
// function validateCheckbox(checkboxes) {
//   for (const checkbox of checkboxes) {
//     if (checkbox.checked) {
//       return true;
//     }
//   }
//   return false;
// }

// //below validation is for id = "form-3"

// const form = document.getElementById('form-3');

// form.addEventListener('submit', (event) => {
//   // Prevent form submission
//   event.preventDefault();

//   // Validate form fields
//   const air = document.getElementById('air').value;
//   const water = document.getElementById('water').value;
//   const other = document.getElementById('other').value;
//   const enviornment = document.getElementById('enviornment').value;
//   const africa = document.getElementById('africa').checked;
//   const asia = document.getElementById('asia').checked;
//   const centralAmerica = document.getElementById('central-america').checked;
//   const europe = document.getElementById('europe').checked;
//   const middleEast = document.getElementById('middle-east').checked;
//   const northAmerica = document.getElementById('north-america').checked;
//   const europeanUnion = document.getElementById('european-union').checked;
//   const oceaniaPapua = document.getElementById('oceania-papua').checked;
//   const southAmerica = document.getElementById('south-america').checked;

//   // Check if required fields are filled out
//   if (!air || !water || !other || !enviornment || (!africa && !asia && !centralAmerica && !europe && !middleEast && !northAmerica && !europeanUnion && !oceaniaPapua && !southAmerica)) {
//     alert('Please fill out all required fields.');
//     return;
//   }

//   // Submit the form
//   form.submit();
// });