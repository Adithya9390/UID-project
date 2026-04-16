
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-bar a');
  links.forEach(link => {
    if (link.href === window.location.href || link.href.endsWith(window.location.pathname)) {
      link.classList.add('active');
    }
  });
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));
  const grids = document.querySelectorAll('.places, .craft-grid, .culture-grid, .facts');
  grids.forEach(grid => {
    grid.classList.add('reveal-stagger');
    observer.observe(grid);
  });
});
function validateForm() {
  const name    = document.getElementById('name')?.value.trim();
  const email   = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();
  const error   = document.getElementById('error');

  if (!name || !email || !message) {
    error.innerText = 'All fields are required.';
    error.style.color = '#C0392B';
    return false;
  }
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailReg.test(email)) {
    error.innerText = ' Please enter a valid email address.';
    error.style.color = '#C0392B';
    return false;
  }
  error.innerText = '';
  alert(' Thank you! Your message has been sent successfully.');
  return true;
}
document.addEventListener("DOMContentLoaded", () => {
    const authLink = document.getElementById("auth-link");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        authLink.textContent = "Logout";
        authLink.style.background = "#d9534f"; 
        authLink.onclick = function(e) {
            e.preventDefault(); 
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userName");

            alert("You have logged out.")
            window.location.href = "index.html"; 
        };
    }
});