'use strict';

const data = [
  {
    image: 'images/desktop-image-hero-1.jpg',
    header: 'Discover innovative ways to decorate',
    paragraph:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    image: 'images/desktop-image-hero-2.jpg',
    header: 'We are available all across the globe',
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: 'images/desktop-image-hero-3.jpg',
    header: 'Manufactured with the best materials',
    paragraph:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];

let currentPage = 0;

const heroSlide = () => {
  const next = document.querySelector('.right-arrow');
  const prev = document.querySelector('.left-arrow');

  const heroImg = document.querySelector('.image-section');
  const heroHeader = document.querySelector('.main-text');
  const heroParagraph = document.querySelector('.section-text');

  const updateBackground = () => {
    heroImg.style.backgroundImage = `url(${data[currentPage].image}`;
    // heroImg.style.transition = "background-image 2s";
    heroHeader.innerHTML = data[currentPage].header;
    // heroHeader.classList.add("moveFromLeft");
    heroParagraph.innerHTML = data[currentPage].paragraph;
  };

  next.addEventListener('click', () => {
    setTimeout(function () {
      currentPage++;
      if (currentPage > data.length - 1) {
        currentPage = 0;
      }
      updateBackground();
    }, 300);
  });

  prev.addEventListener('click', () => {
    setTimeout(function () {
      currentPage--;
      if (currentPage < 0) {
        currentPage = data.length - 1;
      }
      updateBackground();
    }, 300);
  });
};

heroSlide();

// Ham menu
const openMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close');
const nav = document.querySelector('.mainNav');
const logo = document.querySelector('.logo');

openMenu.addEventListener('click', () => {
  nav.style.transform = 'translateX(0%)';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  logo.style.display = 'none';
});
closeMenu.addEventListener('click', () => {
  nav.style.transform = 'translateX(100%)';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
  logo.style.display = 'block';
});
