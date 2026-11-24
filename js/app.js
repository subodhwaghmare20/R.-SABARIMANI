/**
 * R. Sabarimani - Graphic Designer Portfolio Application Logic
 */

// State variables
let currentFilter = 'all';
let currentSearch = '';
let currentFilteredItems = [];
let currentLightboxIndex = -1;

document.addEventListener('DOMContentLoaded', () => {
  initStats();
  initCaseStudySteps();
  initReelsGrid();
  initFilterPills();
  initPortfolioGrid();
  initSkillsAndSoftware();
  initSearch();
  initMobileMenu();
  initBackToTop();
  initKeyboardNav();
  initTouchSwipe();
  initScrollSpy();
});

/* ==========================================================================
   1. Initialize Quick Stats Bar
   ========================================================================== */
function initStats() {
  const statsContainer = document.getElementById('statsGrid');
  if (!statsContainer || !PORTFOLIO_DATA.profile.stats) return;

  statsContainer.innerHTML = PORTFOLIO_DATA.profile.stats.map(stat => `
    <div class="stat-item">
      <span class="stat-num">${stat.number}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

/* ==========================================================================
   2. Initialize Case Study Process Steps
   ========================================================================== */
function initCaseStudySteps() {
  const stepsContainer = document.getElementById('caseStudySteps');
  if (!stepsContainer || !PORTFOLIO_DATA.featuredCaseStudy) return;

  stepsContainer.innerHTML = PORTFOLIO_DATA.featuredCaseStudy.steps.map(step => `
    <div class="step-item">
      <div class="step-num">${step.step}</div>
      <div class="step-details">
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   3. Initialize Reels Section (All 6 Videos)
   ========================================================================== */
function initReelsGrid() {
  const reelsContainer = document.getElementById('reelsGrid');
  if (!reelsContainer) return;

  const videoItems = PORTFOLIO_DATA.items.filter(item => item.type === 'video');

  reelsContainer.innerHTML = videoItems.map(item => `
    <div class="reel-card" onclick="openLightbox('${item.id}')">
      <div class="reel-video-wrapper">
        <video class="reel-video" preload="metadata" muted playsinline loop onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
          <source src="${encodeURI(item.fileUrl)}" type="video/mp4">
        </video>
        <div class="reel-play-overlay">
          <div class="play-btn-circle" aria-label="Play Video">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 20 12 6 20 6 4"></polygon>
            </svg>
          </div>
        </div>
        <span class="reel-badge-top">${item.categoryLabel}</span>
      </div>
      <div class="reel-info">
        <h4 class="reel-title">${item.title}</h4>
        <span class="reel-client">Client: ${item.client}</span>
        <p class="reel-desc">${item.description}</p>
        <div class="reel-tools">
          ${item.tools.map(tool => `<span class="reel-tool-chip">${tool}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Initialize Category Filter Pills
   ========================================================================== */
function initFilterPills() {
  const filterContainer = document.getElementById('filterPills');
  if (!filterContainer) return;

  filterContainer.innerHTML = PORTFOLIO_DATA.categories.map(cat => `
    <button class="filter-btn ${cat.id === currentFilter ? 'active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.category;
    filterAndRenderPortfolio();
  });
}

/* ==========================================================================
   5. Initialize & Render Full Portfolio Grid
   ========================================================================== */
function initPortfolioGrid() {
  filterAndRenderPortfolio();
}

function filterAndRenderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  const counter = document.getElementById('itemsCounter');
  if (!grid) return;

  let items = PORTFOLIO_DATA.items;

  // Filter by Category
  if (currentFilter !== 'all') {
    items = items.filter(item => item.category === currentFilter);
  }

  // Filter by Search Query
  if (currentSearch.trim() !== '') {
    const q = currentSearch.toLowerCase().trim();
    items = items.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchClient = item.client.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTags = item.tags.some(tag => tag.toLowerCase().includes(q));
      const matchTools = item.tools.some(tool => tool.toLowerCase().includes(q));
      return matchTitle || matchClient || matchDesc || matchTags || matchTools;
    });
  }

  currentFilteredItems = items;

  // Update Status Counter
  if (counter) {
    counter.textContent = `Showing ${items.length} of ${PORTFOLIO_DATA.items.length} creative projects`;
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No projects found matching "${currentSearch}"</p>
        <button class="btn btn-secondary btn-sm" onclick="clearSearchFilter()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map((item, index) => {
    const isVideo = item.type === 'video';
    const aspectClass = item.aspect || 'portrait';

    let mediaMarkup = '';
    if (isVideo) {
      mediaMarkup = `
        <div class="item-thumb-wrapper ${aspectClass}">
          <video class="item-thumb" preload="metadata" muted playsinline loop onmouseenter="this.play()" onmouseleave="this.pause();this.currentTime=0;">
            <source src="${encodeURI(item.fileUrl)}" type="video/mp4">
          </video>
          <span class="item-type-badge">▶ Video Reel</span>
          <div class="item-overlay">
            <div class="item-overlay-content">
              <span class="view-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Watch Video
              </span>
            </div>
          </div>
        </div>
      `;
    } else {
      mediaMarkup = `
        <div class="item-thumb-wrapper ${aspectClass}">
          <img class="item-thumb" src="${encodeURI(item.fileUrl)}" alt="${item.title}" loading="lazy">
          <span class="item-type-badge">🎨 ${item.categoryLabel}</span>
          <div class="item-overlay">
            <div class="item-overlay-content">
              <span class="view-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                View High-Res
              </span>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <article class="portfolio-item" onclick="openLightbox('${item.id}')" data-id="${item.id}">
        ${mediaMarkup}
        <div class="item-details">
          <div class="item-meta-row">
            <span class="item-category-label">${item.categoryLabel}</span>
            <span class="item-client">${item.client}</span>
          </div>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-desc">${item.description}</p>
          <div class="item-tools-row">
            ${item.tools.map(tool => `<span class="item-tool-pill">${tool}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   6. Search Filter
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    if (clearBtn) {
      clearBtn.style.display = currentSearch ? 'block' : 'none';
    }
    filterAndRenderPortfolio();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearSearchFilter();
    });
  }
}

function clearSearchFilter() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  currentSearch = '';
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  filterAndRenderPortfolio();
}

/* ==========================================================================
   7. Skills & Software Proficiency Meters
   ========================================================================== */
function initSkillsAndSoftware() {
  const skillsList = document.getElementById('skillsList');
  const softwareMeters = document.getElementById('softwareMeters');

  if (skillsList && PORTFOLIO_DATA.profile.skills) {
    skillsList.innerHTML = PORTFOLIO_DATA.profile.skills.map(skill => `
      <div class="skill-badge-item">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-cat">${skill.category}</span>
      </div>
    `).join('');
  }

  if (softwareMeters && PORTFOLIO_DATA.profile.software) {
    softwareMeters.innerHTML = PORTFOLIO_DATA.profile.software.map(sw => `
      <div class="software-item">
        <div class="software-info">
          <span class="software-name">${sw.name}</span>
          <span class="software-percent">${sw.level}%</span>
        </div>
        <div class="meter-track">
          <div class="meter-fill" style="width: ${sw.level}%"></div>
        </div>
        <span class="software-desc">${sw.desc}</span>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   8. Lightbox / Modal Functionality
   ========================================================================== */
function openLightbox(itemId) {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  // Find index in current filtered list or fallback to all items
  let index = currentFilteredItems.findIndex(i => i.id === itemId);
  if (index === -1) {
    currentFilteredItems = PORTFOLIO_DATA.items;
    index = currentFilteredItems.findIndex(i => i.id === itemId);
  }

  if (index === -1) return;

  currentLightboxIndex = index;
  renderLightboxContent();
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function renderLightboxContent() {
  const item = currentFilteredItems[currentLightboxIndex];
  if (!item) return;

  const mediaBox = document.getElementById('lightboxMediaBox');
  const counterElem = document.getElementById('lightboxCounter');
  const categoryElem = document.getElementById('lightboxCategory');
  const titleElem = document.getElementById('lightboxTitle');
  const clientElem = document.getElementById('lightboxClient');
  const descElem = document.getElementById('lightboxDesc');
  const toolsElem = document.getElementById('lightboxTools');
  const tagsElem = document.getElementById('lightboxTags');
  const downloadBtn = document.getElementById('lightboxDownloadBtn');

  if (counterElem) {
    counterElem.textContent = `${currentLightboxIndex + 1} / ${currentFilteredItems.length}`;
  }

  // Full-size 100% visible media embedding
  if (item.type === 'video') {
    mediaBox.innerHTML = `
      <video controls autoplay playsinline style="max-width:100%; max-height:100%; width:auto; height:auto; object-fit:contain; border-radius:6px; box-shadow:0 10px 40px rgba(0,0,0,0.8);">
        <source src="${encodeURI(item.fileUrl)}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    `;
  } else {
    mediaBox.innerHTML = `
      <img src="${encodeURI(item.fileUrl)}" alt="${item.title}" style="max-width:100%; max-height:100%; width:auto; height:auto; object-fit:contain; border-radius:6px; box-shadow:0 10px 40px rgba(0,0,0,0.8);">
    `;
  }

  if (categoryElem) categoryElem.textContent = item.categoryLabel;
  if (titleElem) titleElem.textContent = item.title;
  if (clientElem) clientElem.textContent = `Client: ${item.client}`;
  if (descElem) descElem.textContent = item.description;

  if (toolsElem) {
    toolsElem.innerHTML = item.tools.map(tool => `<span>${tool}</span>`).join('');
  }

  if (tagsElem) {
    tagsElem.innerHTML = item.tags.map(tag => `<span>#${tag}</span>`).join('');
  }

  if (downloadBtn) {
    downloadBtn.href = encodeURI(item.fileUrl);
    downloadBtn.download = item.title.replace(/[^a-zA-Z0-9]/g, '_');
  }
}

function toggleLightboxInfo() {
  const drawer = document.getElementById('lightboxDrawer');
  const btn = document.getElementById('toggleInfoBtn');
  if (!drawer) return;
  drawer.classList.toggle('collapsed');
  if (btn) btn.classList.toggle('active');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  const mediaBox = document.getElementById('lightboxMediaBox');
  if (!modal) return;

  // Stop video playback if any
  if (mediaBox) {
    const video = mediaBox.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    mediaBox.innerHTML = '';
  }

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentLightboxIndex = -1;
}

function navigateLightbox(direction) {
  if (currentFilteredItems.length <= 1) return;

  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = currentFilteredItems.length - 1;
  } else if (currentLightboxIndex >= currentFilteredItems.length) {
    currentLightboxIndex = 0;
  }

  renderLightboxContent();
}

function openResumeLightbox() {
  openLightbox('img-resume-preview');
}

/* ==========================================================================
   9. Keyboard Navigation & Accessibility
   ========================================================================== */
function initKeyboardNav() {
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    }
  });
}

/* ==========================================================================
   10. Mobile Menu & Navigation Highlighting
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when tapping outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

/* ==========================================================================
   10b. Mobile Touch Swipe for Lightbox Modal
   ========================================================================== */
function initTouchSwipe() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Only trigger if horizontal swipe is dominant and significant
    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX < 0) {
        navigateLightbox(1); // Swipe left -> Next
      } else {
        navigateLightbox(-1); // Swipe right -> Prev
      }
    }
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky navbar elevation on scroll
    if (navbar) {
      if (scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   11. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/* ==========================================================================
   12. Interactive Project Enquiry Form
   ========================================================================== */
function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('senderName').value.trim();
  const contact = document.getElementById('senderContact').value.trim();
  const service = document.getElementById('projectType').value;
  const message = document.getElementById('projectMessage').value.trim();

  if (!name || !contact || !service || !message) return;

  const encodedMessage = encodeURIComponent(
    `*New Project Enquiry from Portfolio*\n\n` +
    `👤 *Name/Brand:* ${name}\n` +
    `📞 *Contact:* ${contact}\n` +
    `🎨 *Service:* ${service}\n\n` +
    `📝 *Details:*\n${message}`
  );

  const whatsappUrl = `https://wa.me/916382658438?text=${encodedMessage}`;
  const mailtoUrl = `mailto:sabaridesigner76@gmail.com?subject=${encodeURIComponent('Project Inquiry: ' + service)}&body=${encodedMessage}`;

  // Hide form, show quick launch options
  const form = document.getElementById('projectForm');
  const successBox = document.getElementById('formSuccessMessage');
  const buttonsBox = document.getElementById('quickLaunchButtons');

  if (form) form.style.display = 'none';
  if (successBox) successBox.style.display = 'block';

  if (buttonsBox) {
    buttonsBox.innerHTML = `
      <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="background:#25d366; border-color:#25d366;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        <span>Send on WhatsApp</span>
      </a>
      <a href="${mailtoUrl}" class="btn btn-secondary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        <span>Send via Email</span>
      </a>
      <button type="button" class="btn btn-ghost" onclick="resetContactForm()">Submit Another Request</button>
    `;
  }
}

function resetContactForm() {
  const form = document.getElementById('projectForm');
  const successBox = document.getElementById('formSuccessMessage');
  if (form) {
    form.reset();
    form.style.display = 'block';
  }
  if (successBox) {
    successBox.style.display = 'none';
  }
}
