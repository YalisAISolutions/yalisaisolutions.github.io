/* ==========================================================================
   YALIS AI SOLUTIONS - INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. STICKY NAVBAR SCROLL DETECTOR
     ------------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ------------------------------------------------------------------------
     2. MOBILE MENU DRAWER TOGGLE
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
      mobileToggle.innerHTML = isExpanded ? '✕' : '☰';
    });

    // Close menu when clicking on any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. PORTFOLIO DEMO MODAL HANDLER
     ------------------------------------------------------------------------ */
  const modal = document.getElementById('portfolio-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalImg = document.getElementById('modal-img');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalClose = document.getElementById('modal-close');

  // Sample Demo Details Data (EDIT HERE: Customize demo modal information)
  const demoData = {
    salon: {
      title: "Velvet Studio Hair & Beauty Salon",
      category: "Salon & Spa",
      img: "./portfolio_salon.png",
      desc: "A boutique web design created for a local beauty salon. Built to showcase services, introduce stylists, and allow customers to quickly book appointments from their phones.",
      features: [
        "Online Appointment Booking Call-to-Action",
        "Interactive Price List & Treatment Menu",
        "Customer Reviews & Google Maps Integration",
        "Fast-loading Mobile Responsive Design"
      ]
    },
    restaurant: {
      title: "Bella Vista Artisanal Bistro",
      category: "Restaurant & Cafe",
      img: "./portfolio_restaurant.png",
      desc: "A warm, high-converting digital storefront for an authentic restaurant. Displays daily specials, digital menu, location & hours, and WhatsApp orders.",
      features: [
        "Mobile-Friendly Digital Food & Drink Menu",
        "One-Tap WhatsApp & Phone Call Link",
        "Table Reservation Enquiry Form",
        "Optimized Photos for Instant Page Loading"
      ]
    },
    clinic: {
      title: "Apex Dental Care Clinic",
      category: "Healthcare & Clinic",
      img: "./portfolio_clinic.png",
      desc: "A clean, reassuring website designed for a family dental clinic. Helps patients learn about dental procedures, view doctor qualifications, and request consultations.",
      features: [
        "Patient Appointment Request Form",
        "Service Cards (Teeth Whitening, Orthodontics, etc.)",
        "Emergency Contact Banner & Office Hours",
        "Mobile consultation booking workflow"
      ]
    }
  };

  // Open modal when clicking any "View Demo" button
  document.querySelectorAll('.view-demo-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const demoKey = button.getAttribute('data-demo');
      const data = demoData[demoKey];

      if (data) {
        modalTitle.textContent = data.title;
        modalCategory.textContent = data.category;
        modalImg.src = data.img;
        modalImg.alt = data.title;
        modalDesc.textContent = data.desc;

        // Render features list
        modalFeatures.innerHTML = data.features.map(feat => `<li>✓ ${feat}</li>`).join('');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
      }
    });
  });

  // Close modal
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Close modal on clicking backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. SERVICE PLAN PRE-SELECTION IN CONTACT FORM
     ------------------------------------------------------------------------ */
  const selectPlanBtns = document.querySelectorAll('.select-plan-btn');
  const serviceSelect = document.getElementById('service-interest');

  selectPlanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const planName = btn.getAttribute('data-plan');
      if (serviceSelect && planName) {
        serviceSelect.value = planName;
      }
    });
  });

  /* ------------------------------------------------------------------------
     5. INTERACTIVE FAQ ACCORDION
     ------------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. CONTACT FORM SUBMISSION SIMULATOR
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show temporary loading indicator on submit button
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Quote Request...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        // Show styled success banner
        if (successMsg) {
          successMsg.style.display = 'block';
          setTimeout(() => {
            successMsg.style.display = 'none';
          }, 6000);
        }
      }, 1000);
    });
  }

  /* ------------------------------------------------------------------------
     7. DYNAMIC COPYRIGHT YEAR
     ------------------------------------------------------------------------ */
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
