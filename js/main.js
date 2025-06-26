// main.js - Antalya VIP Transfer
// Tüm sayfalarda ortak kullanılacak JS fonksiyonları

document.addEventListener('DOMContentLoaded', function () {
  // Aktif navbar linkini belirle
  const navLinks = document.querySelectorAll('.navbar-links a');
  const currentPath = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Rezervasyon formu doğrulama (rezervasyon.html)
  const reservationForm = document.querySelector('#reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      const requiredFields = reservationForm.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('input-error');
          valid = false;
        } else {
          field.classList.remove('input-error');
        }
      });
      if (valid) {
        alert('Rezervasyonunuz alınmıştır! (Demo)');
        reservationForm.reset();
      } else {
        alert('Lütfen tüm zorunlu alanları doldurun.');
      }
    });
  }

  // Kullanıcı yorumları slider
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentTestimonial = 0;
  function showTestimonial(idx) {
    testimonials.forEach((el, i) => {
      el.classList.toggle('active', i === idx);
    });
  }
  if (prevBtn && nextBtn && testimonials.length > 0) {
    prevBtn.addEventListener('click', function () {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
    nextBtn.addEventListener('click', function () {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
    showTestimonial(currentTestimonial);
  }

  // İletişim formu doğrulama
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('input-error');
          valid = false;
        } else {
          field.classList.remove('input-error');
        }
      });
      if (valid) {
        alert('Mesajınız başarıyla gönderildi! (Demo)');
        contactForm.reset();
      } else {
        alert('Lütfen tüm zorunlu alanları doldurun.');
      }
    });
  }

  // Hizmetlerimiz kartları fade-in animasyonu
  const hizmetKartlar = document.querySelectorAll('.hizmet-kart');
  if (hizmetKartlar.length > 0) {
    hizmetKartlar.forEach((kart, i) => {
      setTimeout(() => {
        kart.classList.add('visible');
      }, 300 + i * 200);
    });
  }

  // Hizmet Verdiğimiz Yerler kartları fade-in animasyonu
  const yerKartlar = document.querySelectorAll('.yer-kart');
  if (yerKartlar.length > 0) {
    yerKartlar.forEach((kart, i) => {
      setTimeout(() => {
        kart.classList.add('visible');
      }, 300 + i * 120);
    });
  }

  // Hamburger Menü Aç/Kapat
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');
  if (navbarToggle && navbarLinks) {
    navbarToggle.addEventListener('click', function () {
      navbarLinks.classList.toggle('open');
    });
    // Menüden bir linke tıklanınca menüyü kapat
    navbarLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        navbarLinks.classList.remove('open');
      });
    });
  }

  // Galeri Carousel
  const galleryCarousel = document.querySelector('.gallery-carousel');
  const galleryPrev = document.querySelector('.gallery-carousel-prev');
  const galleryNext = document.querySelector('.gallery-carousel-next');
  if (galleryCarousel && galleryPrev && galleryNext) {
    const scrollAmount = 350;
    galleryPrev.addEventListener('click', () => {
      galleryCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    galleryNext.addEventListener('click', () => {
      galleryCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    // Touch swipe
    let startX = 0;
    galleryCarousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    galleryCarousel.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) galleryCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      else if (endX - startX > 50) galleryCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  // Yerler Carousel
  const yerlerCarousel = document.querySelector('.yerler-carousel');
  const yerlerPrev = document.querySelector('.yerler-carousel-prev');
  const yerlerNext = document.querySelector('.yerler-carousel-next');
  if (yerlerCarousel && yerlerPrev && yerlerNext) {
    const scrollAmount = 270;
    yerlerPrev.addEventListener('click', () => {
      yerlerCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    yerlerNext.addEventListener('click', () => {
      yerlerCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    // Touch swipe
    let startX = 0;
    yerlerCarousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    yerlerCarousel.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) yerlerCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      else if (endX - startX > 50) yerlerCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }
}); 