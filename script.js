// Code for smooth scrolling when clicking on navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contact form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(form);
      console.log(formData);
      
  
      // Convert form data to JSON format
      const jsonData = {};
      for (let [key, value] of formData.entries()) {
        jsonData[key] = value;
      }
      console.log(jsonData);
      
  
      // Create an XMLHttpRequest object
      const xhr = new XMLHttpRequest();
  
      // Configure the request
      xhr.open("POST", "https://840f-2401-4900-1c33-23e2-744a-5c3a-c944-37e9.ngrok-free.app/contact");
      xhr.setRequestHeader("Content-Type", "application/json");
  
      // Handle the response
      xhr.onload = function() {
        if (xhr.status === 200) {
          // Display a success message
          alert("Form submitted successfully!");
          form.reset();
        } else {
          // Display an error message
          alert("Form submission failed. Please try again later.");
        }
      };
  
      // Send the request
      xhr.send(JSON.stringify(jsonData));
    });
  });
  
  const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
});

  

  
  