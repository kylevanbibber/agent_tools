const header = document.querySelector('.header');
const logos = document.querySelectorAll('.logo'); // Select all elements with the 'logo' class
const colors = ['#319B42', '#474c55', '#f1b80f', '#5683b8', '#41a39f', '#b25361', '#97b63d', '#f4742e', '#5bd9ae', '#00558C'];
let currentIndex = -1;

logos.forEach(logo => { // Iterate over each logo
  logo.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % colors.length;
    header.style.backgroundColor = colors[currentIndex];
  });
});