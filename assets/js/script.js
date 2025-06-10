document.addEventListener("DOMContentLoaded", function () {
  // ======================
  // DOM ELEMENTS
  // ======================
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const searchToggle = document.querySelector(".search-toggle");
  const searchBox = document.querySelector(".search-box");
  const mainNav = document.getElementById("main-nav");
  const overlay = document.querySelector(".mobile-overlay");
  const dropdowns = document.querySelectorAll(".dropdown");
  const closeMobileMenu = document.querySelector(".close-mobile-menu");
  const newsGrid = document.querySelector(".news-grid");
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.querySelector(".slider-dots");

  // ======================
  // CONSTANTS tinggaal edit sesuai kebutuhan
  // ======================
  const SLIDE_DURATION = 5000; // 5 seconds
  const NEWS_DATA = [
    {
      title: "Medical Check Up CPNS di RSUD Mijen",
      date: "28 Januari 2025",
      excerpt: "Pemeriksaan Kesehatan CPNS.",
      fullContent: `<p>
      Layanan MCU untuk CPNS tersedia di RSUD Mijen dengan tarif paket <strong>Rp 350.000</strong>. Pemeriksaan meliputi:
    </p>
    <ul>
      <li>✔ Tes Narkoba (6 parameter): Rp 100.000</li>
      <li>✔ Tes MMPI + Konsultasi Psikolog: Rp 225.000</li>
      <li>✔ Tes Jasmani & Buta Warna: Rp 25.000</li>
    </ul>
    <p>
      Pendaftaran dapat dilakukan secara online melalui: <br>
      <a href="https://smg.city/mcucpnsrsmijen" target="_blank">https://smg.city/mcucpnsrsmijen</a>
    </p>
    <p><strong>Jam Pelayanan MCU:</strong> Senin - Sabtu (08:00 - 12:00 WIB)</p>
    <p><em>Catatan:</em> Penambahan harga disesuaikan kebutuhan. Tidak berlaku untuk pemeriksaan di luar paket.</p>
 `,
      image: "assets/images/MedikalCekUpCPNS.jpeg"
    },
    {
      title: "Medical Check Up PPPK di RSUD Mijen",
      date: "6 Januari 2025",
      excerpt: "Pemeriksaan Kesehatan PPPK.",
      fullContent: `<p>
      RSUD Mijen menyediakan layanan MCU (Medical Check Up) untuk peserta PPPK dengan tarif paket sebesar <strong>Rp 350.000</strong>. Pemeriksaan mencakup:
    </p>
    <ul>
      <li>✔ Tes Narkoba (3 parameter): Rp 100.000</li>
      <li>✔ Tes MMPI + Konsultasi Psikolog: Rp 225.000</li>
      <li>✔ Tes Jasmani & Buta Warna: Rp 25.000</li>
    </ul>
    <p>
      <strong>Jam Pendaftaran:</strong> Senin - Sabtu (07:30 - 11:00 WIB)<br>
      <strong>Jam Pelayanan:</strong> Senin - Sabtu (08:00 - 12:00 WIB)
    </p>
    <p><em>“Kesembuhan dan Senyuman Anda adalah Semangat Kami”</em></p>`,
      image: "assets/images/MCUPPK.jpeg"
    },

    {
      title: "Cek Kesehatan Gratis (CKG) di RSUD Mijen",
      date: "12 MMaret 2025",
      excerpt: "Pemeriksaan Kesehatan Gratis.",
      fullContent: `<p>
                Program <strong>CKG</strong> adalah inisiatif dari RSUD Mijen yang memberikan layanan pemeriksaan kesehatan gratis untuk seluruh masyarakat, dari bayi hingga lansia.
              </p>
              <p>
                Manfaat: deteksi dini penyakit, penanganan lebih cepat, mengurangi beban biaya, serta meningkatkan kesadaran masyarakat akan pentingnya pemeriksaan rutin dan pola hidup sehat.
              </p>
              <a href="https://wa.me/6282324220902" class="read-more" target="_blank">Info Lebih Lanjut <i class="fas fa-arrow-right"></i></a>
           `,
      image: "assets/images/CKGRSUDMijen.jpeg"
    },
    {
      title: "Paket Khitan Libur Sekolah di RSUD Mijen",
      date: "10 Mei 2025",
      excerpt: "Paket Khitan Spesial.",
      fullContent: `  <p>
                RSUD Mijen Semarang menghadirkan paket khitan spesial selama libur sekolah hanya dengan <strong>Rp 500.599</strong>.
                Termasuk konsultasi dan pemeriksaan dokter spesialis, obat untuk 3 hari, dan 1x kontrol gratis.
              </p>
              <p>
                Tindakan dilakukan oleh Dokter Spesialis Bedah, khusus untuk kasus tanpa penyulit.
                Pelayanan tersedia pada Senin, Selasa, Kamis, Jumat, dan Sabtu pukul 07.00–11.00 WIB.
              </p>
              <a href="https://wa.me/6282324220902" class="read-more" target="_blank">Hubungi Sekarang <i class="fas fa-arrow-right"></i></a>
           `,
      image: "assets/images/kitan.jpg"
    },
    // ... data berita lainnya
  ];

  // ======================
  // MOBILE MENU FUNCTIONALITY
  // ======================
  function toggleMobileMenu() {
    mainNav.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = mainNav.classList.contains("active")
      ? "hidden"
      : "";

    if (mainNav.classList.contains("active")) {
      searchBox.classList.remove("active");
    }
  }

  mobileMenuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMobileMenu();
  });

  closeMobileMenu.addEventListener("click", toggleMobileMenu);

  // ======================
  // SEARCH FUNCTIONALITY
  // ======================
  function toggleSearchBox() {
    searchBox.classList.toggle("active");

    if (searchBox.classList.contains("active")) {
      mainNav.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
      setTimeout(() => searchBox.querySelector("input").focus(), 50);
    }
  }

  searchToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleSearchBox();
  });

  // ======================
  // EVENT LISTENERS
  // ======================
  document.addEventListener("click", function (e) {
    // Close search box when clicking outside
    if (
      !e.target.closest(".search-container") &&
      searchBox.classList.contains("active")
    ) {
      searchBox.classList.remove("active");
    }

    // Close mobile menu when clicking outside
    if (
      !e.target.closest("#main-nav") &&
      !e.target.closest(".mobile-menu-toggle") &&
      mainNav.classList.contains("active")
    ) {
      toggleMobileMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (searchBox.classList.contains("active"))
        searchBox.classList.remove("active");
      if (mainNav.classList.contains("active")) toggleMobileMenu();
    }
  });

  // ======================
  // DROPDOWN FUNCTIONALITY
  // ======================
  function setupDropdowns() {
    dropdowns.forEach((dropdown) => {
      const link = dropdown.querySelector("a:first-child");

      if (window.innerWidth > 768) {
        // Desktop hover behavior
        dropdown.addEventListener("mouseenter", () => showDropdown(dropdown));
        dropdown.addEventListener("mouseleave", () => hideDropdown(dropdown));
      } else {
        // Mobile click behavior
        link.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          dropdowns.forEach((otherDropdown) => {
            if (
              otherDropdown !== dropdown &&
              otherDropdown.classList.contains("active")
            ) {
              otherDropdown.classList.remove("active");
            }
          });

          dropdown.classList.toggle("active");
        });
      }
    });
  }

  function showDropdown(dropdown) {
    const menu = dropdown.querySelector(".dropdown-menu");
    menu.style.opacity = "1";
    menu.style.visibility = "visible";
    menu.style.transform = "translateY(0)";
  }

  function hideDropdown(dropdown) {
    const menu = dropdown.querySelector(".dropdown-menu");
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
    menu.style.transform = "translateY(15px)";
  }

  // ======================
  // NEWS FUNCTIONALITY
  // ======================
  function loadNewsItems() {
    NEWS_DATA.forEach(news => {
      const newsItem = document.createElement('article');
      newsItem.className = 'news-item';
      newsItem.innerHTML = `
            <img src="${news.image}" alt="${news.title}" loading="lazy">
            <div class="news-content">
                <h3>${news.title}</h3>
                <small><i class="far fa-calendar-alt"></i> ${news.date}</small>
                <p>${news.excerpt}</p>
                <a href="#" class="read-more" data-full-content='${encodeURIComponent(JSON.stringify(news.fullContent))}' data-title="${news.title}" data-date="${news.date}" data-image="${news.image}">Baca Selengkapnya <i class="fas fa-chevron-right"></i></a>
            </div>
        `;
      newsGrid.appendChild(newsItem);
    });

    // Tambahkan event listener untuk "Baca Selengkapnya"
    document.querySelectorAll('.read-more').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openFullNews(this);
      });
    });
  }
  // Fungsi untuk membuka berita lengkap
  function openFullNews(element) {
    const fullContent = JSON.parse(decodeURIComponent(element.getAttribute('data-full-content')));
    const title = element.getAttribute('data-title');
    const date = element.getAttribute('data-date');
    const image = element.getAttribute('data-image');

    // Buat modal
    const modal = document.createElement('div');
    modal.className = 'news-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <img src="${image}" alt="${title}" class="modal-image">
            <div class="modal-body">
                <h2>${title}</h2>
                <small><i class="far fa-calendar-alt"></i> ${date}</small>
                <div class="full-content">${fullContent}</div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Tambahkan event listener untuk tombol close
    modal.querySelector('.close-modal').addEventListener('click', () => {
      modal.remove();
      document.body.style.overflow = '';
    });

    modal.querySelector('.modal-overlay').addEventListener('click', () => {
      modal.remove();
      document.body.style.overflow = '';
    });
  }
  // ======================
  // SLIDER FUNCTIONALITY
  // ======================
  function initSlider() {
    let currentSlide = 0;
    let slideInterval;
    const dots = [];

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });

    function goToSlide(index) {
      slides[currentSlide].classList.remove("active");
      dots[currentSlide].classList.remove("active");

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");

      resetTimer();
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startTimer() {
      slideInterval = setInterval(nextSlide, SLIDE_DURATION);
    }

    function resetTimer() {
      clearInterval(slideInterval);
      startTimer();
    }

    // Event listeners
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Pause on hover
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", startTimer);

    // Start auto sliding
    startTimer();
  }

  // ======================
  // UTILITY FUNCTIONS
  // ======================
  function makePhoneNumbersClickable() {
    document
      .querySelectorAll('.contact-item a[href^="tel:"]')
      .forEach((link) => {
        link.addEventListener("click", (e) => e.stopPropagation());
      });
  }

  function handleResize() {
    if (window.innerWidth > 768) {
      // Reset mobile menu
      mainNav.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";

      // Reset search box
      searchBox.classList.remove("active");

      // Reset dropdowns
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  }

  // ======================
  // INITIALIZATION
  // ======================
  function init() {
    setupDropdowns();
    loadNewsItems();
    makePhoneNumbersClickable();
    initSlider();
    handleResize();

    window.addEventListener("resize", handleResize);
  }

  init();
}); // Dalam fungsi init() tambahkan:
function setupWhatsAppButtons() {
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((button) => {
    button.addEventListener("click", function (e) {
      // Track click event for analytics
      if (typeof gtag !== "undefined") {
        gtag("event", "whatsapp_click", {
          specialist: this.textContent.trim(),
        });
      }

      // Open in new tab if Ctrl/Cmd clicked
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        window.open(this.href, "_blank");
      }
    });
  });
}

// Panggil dalam init():
setupWhatsAppButtons();
// ======================
// QUEUE MONITOR FUNCTIONALITY
// ======================
function initQueueMonitor() {
  const queueMonitor = document.getElementById("queueMonitor");
  const closeBtn = document.getElementById("closeQueueMonitor");
  const refreshBtn = document.getElementById("refreshQueue");
  const queueFrame = document.getElementById("queueFrame");

  // Buka monitor antrian dari menu
  document.querySelectorAll("[data-queue-monitor]").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      queueMonitor.style.display = "flex";
      document.body.style.overflow = "hidden";

      // Force refresh iframe saat dibuka
      queueFrame.src = queueFrame.src;
    });
  });

  // Tutup monitor
  closeBtn.addEventListener("click", function () {
    queueMonitor.style.display = "none";
    document.body.style.overflow = "";
  });

  // Refresh iframe
  refreshBtn.addEventListener("click", function () {
    queueFrame.src = queueFrame.src;
  });

  // Tutup saat klik di luar
  queueMonitor.addEventListener("click", function (e) {
    if (e.target === queueMonitor) {
      queueMonitor.style.display = "none";
      document.body.style.overflow = "";
    }
  });
}

// Panggil dalam init():
initQueueMonitor(); // Tambahkan di bagian init() atau DOMContentLoaded
function setupWhatsAppConsultation() {
  // Nomor WhatsApp RSUD (ganti dengan nomor yang benar)
  const whatsappNumber = "6281234567890";

  document.querySelectorAll(".wa-consult").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const specialist = this.getAttribute("data-specialist");
      let message = `Halo, saya ingin konsultasi dengan dokter ${specialist}`;

      // Encode message untuk URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
    });
  });
}

// Tambahkan juga di init()
function init() {
  // ... kode sebelumnya ...
  setupWhatsAppConsultation();
  // ... kode setelahnya ...
}
// Copy Coordinates Functionality
document.querySelector('.copy-coordinates')?.addEventListener('click', function () {
  const coords = "-7.000648, 110.319149";
  navigator.clipboard.writeText(coords).then(() => {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = 'Koordinat disalin!';
    document.body.appendChild(notification);

    // Show notification
    notification.style.display = 'block';

    // Hide after 2 seconds
    setTimeout(() => {
      notification.style.animation = 'fadeIn 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  });
});// Di file script.js atau sebelum </body>
document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const overlay = document.querySelector('.mobile-overlay');

  mobileMenuToggle?.addEventListener('click', function (e) {
    e.stopPropagation();
    mainNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
  });

  // Search Toggle
  const searchToggle = document.querySelector('.search-toggle');
  const searchBox = document.querySelector('.search-box');

  searchToggle?.addEventListener('click', function (e) {
    e.stopPropagation();
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
      searchBox.querySelector('input').focus();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#main-nav') && !e.target.closest('.mobile-menu-toggle')) {
      mainNav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (!e.target.closest('.search-container')) {
      searchBox.classList.remove('active');
    }
  });
}); function initSlider() {
  if (!slider) return;

  // Set tinggi slider berdasarkan aspect ratio gambar (16:9)
  const setSliderHeight = () => {
    const aspectRatio = 16 / 9;
    const width = slider.offsetWidth;
    const height = width / aspectRatio;
    slider.style.height = `${height}px`;
  };

  // Inisialisasi dan update saat resize
  setSliderHeight();
  window.addEventListener('resize', setSliderHeight);

  // ... kode slider yang sudah ada ...
}
// Lightbox functionality
let currentImageIndex = 0;
const images = [
  {
    src: "../../assets/images/AlurPelayananRaJal.jpeg",
    alt: "Alur Pelayanan RSUD Mijen"
  },
  {
    src: "../../assets/images/AlurPelayananPolidots.png",
    alt: "Alur Pelayanan Polidots"
  }
];

function openLightbox(src, alt) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Find the clicked image index
  currentImageIndex = images.findIndex(img => img.src === src);

  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function changeImage(direction) {
  currentImageIndex += direction;

  // Wrap around if at beginning or end
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = images[currentImageIndex].src;
  lightboxImg.alt = images[currentImageIndex].alt;
}

// Close lightbox when clicking outside image
document.addEventListener('click', function (e) {
  const lightbox = document.getElementById('lightbox');
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.classList.contains('active')) {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      changeImage(-1);
    } else if (e.key === 'ArrowRight') {
      changeImage(1);
    }
  }
});