// script.js

// Function to toggle the 'active' class on button click
function toggleActiveClass() {
    var button = document.querySelector('.btn');
    button.classList.toggle('active');
  }
  
  // Function to show an alert on navigation item click
  function showAlert() {
    alert('You clicked a navigation item!');
  }
  
  // Get current date and display in the h1 element
  var currentDate = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString('en-US', options);
  document.querySelector('h1').innerText += ' ' + formattedDate;
  