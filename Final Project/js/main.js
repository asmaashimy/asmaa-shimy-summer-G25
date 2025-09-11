
/* fixed navbar after scroll and specific height */

window.addEventListener('scroll', function () {
  const header = document.getElementById('mainHeader');
  const triggerHeight = 400;

  if (window.scrollY > triggerHeight) {
    header.classList.add('sticky-active');
  } else {
    header.classList.remove('sticky-active');
  }
});


/*  Scroll to Top Button use it to return the first or top page again show after the specific height */

document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});



// validation form 

const form = document.getElementById('contactForm');
const generalError = document.getElementById('general-error');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const errors = document.querySelectorAll('.error-message');
  errors.forEach(err => err.style.display = 'none');

  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(input => input.classList.remove('input-error'));

  generalError.style.display = 'none';
  successMessage.style.display = 'none';

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');

  let valid = true;

  if (name.value.trim() === '') {
    document.getElementById('error-name').style.display = 'block';
    name.classList.add('input-error');
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    document.getElementById('error-email').style.display = 'block';
    email.classList.add('input-error');
    valid = false;
  }

  if (subject.value.trim() === '') {
    document.getElementById('error-subject').style.display = 'block';
    subject.classList.add('input-error');
    valid = false;
  }

  if (!valid) {
    generalError.style.display = 'block';
  } else {
    successMessage.style.display = 'block';
  }
});
