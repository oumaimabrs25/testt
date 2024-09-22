const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

/**Pop up */

document.addEventListener('DOMContentLoaded', function() {
  console.log('hello');
   const form = document.getElementById('subscribeForm');
   const popup = document.getElementById('popup');
   const closePopup = document.getElementById('closePopup');
   
   form.addEventListener('submit', function(event) {
       event.preventDefault(); 
       popup.classList.remove('hidden');
   });

   closePopup.addEventListener('click', function() {
       popup.classList.add('hidden'); 
   });
});
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");






  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');





function switchTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  
  themeIcon.classList.toggle('ri-sun-line', newTheme === 'light');
  themeIcon.classList.toggle('ri-moon-line', newTheme === 'dark');
}


document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeIcon.classList.toggle('ri-sun-line', savedTheme === 'light');
  themeIcon.classList.toggle('ri-moon-line', savedTheme === 'dark');
});


themeToggleBtn.addEventListener('click', switchTheme);




const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});





const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);



// nabeul

document.addEventListener('DOMContentLoaded', () => {
  const elementsAct = document.querySelectorAll('.elementsact');

  elementsAct.forEach(element => {
      element.addEventListener('click', () => {
          element.classList.toggle('active');
      });
  });
});



