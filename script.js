/* ========================= */
/* LOADING SCREEN */
/* ========================= */

window.addEventListener("load", ()=>{

  const loader =
    document.querySelector(".loader");

  setTimeout(()=>{

    loader.classList.add("hidden");

    document.body.style.overflow =
      "visible";

  },2500);

});
/* ========================= */
/* SCROLL REVEAL ANIMATION */
/* ========================= */

const revealElements = document.querySelectorAll(
  ".section-title, .about-container, .destination-card, .story-card, .experience-card, .gallery-item, .testimonial-card, .contact-container"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  const triggerBottom =
    window.innerHeight * 0.85;

  revealElements.forEach((element)=>{

    const elementTop =
      element.getBoundingClientRect().top;

    if(elementTop < triggerBottom){

      element.classList.add("active");

    }

  });

}

revealOnScroll();

/* ========================= */
/* NAVBAR SCROLL EFFECT */
/* ========================= */

const header =
  document.querySelector(".header");

window.addEventListener("scroll", ()=>{

  header.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});

/* ========================= */
/* MOBILE MENU */
/* ========================= */

const menuToggle =
  document.querySelector(".menu-toggle");

const navbar =
  document.querySelector(".navbar");

menuToggle.addEventListener("click", ()=>{

  navbar.classList.toggle("active");

  menuToggle.classList.toggle("active");

});

/* ========================= */
/* CLOSE MENU ON CLICK */
/* ========================= */

const navLinks =
  document.querySelectorAll(".nav-links a");

navLinks.forEach((link)=>{

  link.addEventListener("click", ()=>{

    navbar.classList.remove("active");

    menuToggle.classList.remove("active");

  });

});

/* ========================= */
/* DAY / NIGHT MODE */
/* ========================= */

const themeToggle =
  document.querySelector(".theme-toggle");

/* LOAD SAVED THEME */

if(localStorage.getItem("theme")==="light"){

  document.body.classList.add(
    "light-mode"
  );

}

/* TOGGLE THEME */

themeToggle.addEventListener("click", ()=>{

  document.body.classList.toggle(
    "light-mode"
  );

  /* SAVE THEME */

  if(document.body.classList.contains(
    "light-mode"
  )){

    localStorage.setItem(
      "theme",
      "light"
    );

  }else{

    localStorage.setItem(
      "theme",
      "dark"
    );

  }

});