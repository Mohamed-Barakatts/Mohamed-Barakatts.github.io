document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        
        if (target.startsWith('#')) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

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

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    // Get the current page's filename
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      // Get the link's filename
      const linkPage = link.getAttribute('href').split('/').pop();
  
      // Highlight the link if it matches the current page
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    // Get the current page's filename
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      // Get the link's filename
      const linkPage = link.getAttribute('href').split('/').pop();
  
      // Highlight the link if it matches the current page
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    // Get the current page's filename
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      // Highlight the link if it matches the current page
      if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  
    // Add scroll event listener to highlight the current section
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('main section');
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
  
      sections.forEach(section => {
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          section.classList.add('active-section');
          document.querySelector(`nav ul li a[href*=${section.id}]`).classList.add('active');
        } else {
          section.classList.remove('active-section');
          document.querySelector(`nav ul li a[href*=${section.id}]`).classList.remove('active');
        }
      });
    });
  });
  
  