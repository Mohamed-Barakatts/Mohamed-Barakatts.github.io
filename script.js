// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
  
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });

// script.js

// Get all modal buttons
var modalBtns = document.querySelectorAll('.modal-btn');

// Add click event to each modal button
modalBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var modal = document.getElementById(btn.getAttribute('data-modal'));
    modal.style.display = 'block';
  });
});

// Get all close buttons
var closeBtns = document.querySelectorAll('.close-btn');

// Add click event to each close button
closeBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var modal = btn.closest('.modal');
    modal.style.display = 'none';
  });
});

// Close modal when clicking outside of modal content
window.onclick = function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};
