// Schema.org Structured Data
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Servicios Industriales Especializados",
  description:
    "Especialistas en reparación de tanques FRP, instalación de tuberías de fibra de vidrio y acero, tanques PEAD y sistemas industriales",
  url: "https://www.serviciosindustriales.com",
  logo: "https://www.serviciosindustriales.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+24568915146",
    contactType: "customer service",
    email: "info@getintouch.com",
    availableLanguage: ["Spanish", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Grennroad St.",
    addressLocality: "Ciudad",
    addressCountry: "ES",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [
    "https://www.linkedin.com/company/serviciosindustriales",
    "https://www.facebook.com/serviciosindustriales",
  ],
  service: [
    {
      "@type": "Service",
      name: "Reparación de Tanques FRP",
      description:
        "Especialistas en reparación y mantenimiento de tanques de fibra de vidrio reforzada con plástico",
    },
    {
      "@type": "Service",
      name: "Instalación de Tuberías",
      description:
        "Instalación profesional de sistemas de tuberías de fibra de vidrio y acero",
    },
    {
      "@type": "Service",
      name: "Reparación de Tanques de Acero",
      description: "Reparación especializada de tanques de acero industriales",
    },
  ],
};

// Local Business Schema data as JavaScript object
const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Servicios Industriales Especializados",
  image: "https://www.serviciosindustriales.com/business-image.jpg",
  telephone: "+24568915146",
  email: "info@getintouch.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Grennroad St.",
    addressLocality: "Ciudad",
    addressCountry: "ES",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$",
};

// Función para scroll suave a secciones
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const button = form.querySelector(".btn-submit");
  const originalText = button.textContent;

  button.textContent = "ENVIANDO...";
  button.disabled = true;

  setTimeout(() => {
    form.reset();
    button.textContent = originalText;
    button.disabled = false;

    // Mostrar modal personalizado
    const alertModal = document.getElementById("custom-alert");
    if (alertModal) {
      alertModal.style.display = "flex";
      alertModal.classList.remove("custom-alert-hidden");
    }
  }, 2000);
}

// Cerrar el modal al hacer clic en la X o fuera del contenido
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("custom-alert-close");
  const alertModal = document.getElementById("custom-alert");
  if (closeBtn && alertModal) {
    closeBtn.onclick = function () {
      alertModal.style.display = "none";
      alertModal.classList.add("custom-alert-hidden");
    };
    alertModal.onclick = function (e) {
      if (e.target === alertModal) {
        alertModal.style.display = "none";
        alertModal.classList.add("custom-alert-hidden");
      }
    };
  }
});
// Función para resaltar tarjetas de servicio
function highlightCard(card) {
  card.classList.add("highlight");
  setTimeout(() => {
    card.classList.remove("highlight");
  }, 2000);
}

// Animación de entrada para elementos al hacer scroll
function animateOnScroll() {
  const elements = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Event listeners
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Efecto de tipeo para el título principal
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Inicializar efectos cuando la página carga
document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector("h1");
  if (title) {
    const originalText = title.textContent;
    typeWriter(title, originalText, 80);
  }
});

// Efecto parallax suave en el header
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const header = document.querySelector("header");
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
