const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
function closeMobile(){ mobileMenu.classList.remove('open') }

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target) } });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ── Active Nav ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if(scrollY >= s.offsetTop - 120) current = s.id });
  navLinks.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + current) });
});

// ── Form Submit ──
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
  this.reset();
});

// ── Navbar shadow on scroll ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow = scrollY > 20 ? '0 4px 30px rgba(0,0,0,.4)' : 'none';
});