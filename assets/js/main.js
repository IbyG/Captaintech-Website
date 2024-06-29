(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    /*
    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/logo/logo-2.svg";
    } else {
      logo.src = "assets/images/logo/logo.svg";
    }
      */

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  // ===== submenu
  const submenuButton = document.querySelectorAll(".nav-item-has-children");
  submenuButton.forEach((elem) => {
    elem.querySelector("a").addEventListener("click", () => {
      elem.querySelector(".ud-submenu").classList.toggle("show");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };


  document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('8NQOl5-QIZZKgHOFW'); // Replace with your EmailJS user ID
  
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const serviceID = 'service_olsz3kb'; // Replace with your EmailJS service ID
      const templateID = 'template_v9jzuzt'; // Replace with your EmailJS template ID
  
      emailjs.sendForm(serviceID, templateID, this)
        .then((response) => {
          
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent!');
          
          //window.location.href = 'submission_page.html'; // Redirect to the target page
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send your message. Please try again later.');
        });
    });
  });



})();
