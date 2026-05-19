// ============================================================
// FOODIE HUB — SCRIPT
// ============================================================

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 50 ? '0 4px 24px rgba(0,0,0,0.15)' : '0 2px 16px rgba(0,0,0,0.08)';
});

// ===== MOBILE MENU =====
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  if (links) links.classList.toggle('open');
  if (ham) ham.classList.toggle('open');
}

// ===== HERO SLIDER =====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

function goSlide(n) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  currentSlide = (n + slides.length) % slides.length;
  if (slides[currentSlide]) slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function changeSlide(dir) { goSlide(currentSlide + dir); }

if (slides.length > 0) {
  setInterval(() => changeSlide(1), 5000);
}

// ===== SCROLL REVEAL =====
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ===== RENDER CATEGORY CARDS =====
function renderCategoryCards(containerId, excludeId = null) {
  const container = document.getElementById(containerId);
  if (!container || typeof categories === 'undefined') return;

  const filtered = excludeId ? categories.filter(c => c.id !== excludeId) : categories;

  container.innerHTML = filtered.map(cat => `
    <a href="category.html?cat=${cat.id}" class="cat-card reveal">
      <div class="cat-card-bg" style="background-image:url('${cat.bgImg}')"></div>
      <div class="cat-card-overlay"></div>
      <div class="cat-card-content">
        <span class="cat-emoji">${cat.emoji}</span>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-desc">${cat.description}</div>
        <div class="cat-count"><i class="fas fa-utensils"></i> ${cat.items.length} items</div>
      </div>
    </a>
  `).join('');

  // Re-observe newly added elements
  container.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
}

// ===== RENDER FOOTER MENU LINKS =====
function renderFooterLinks() {
  const el = document.getElementById('footerMenuLinks');
  if (!el || typeof categories === 'undefined') return;
  el.innerHTML = categories.slice(0, 8).map(cat =>
    `<li><a href="category.html?cat=${cat.id}">${cat.emoji} ${cat.name}</a></li>`
  ).join('');
}

// ===== SPICY INDICATOR =====
function spicyHTML(level) {
  if (level === 0) return '';
  const labels = ['', 'Mild', 'Medium', 'Hot'];
  return `
    <div class="spicy-bar">
      <span class="spicy-label">🌶️ ${labels[level] || ''}:</span>
      <div class="spicy-dots">
        ${[1,2,3].map(i => `<div class="spicy-dot ${i <= level ? 'hot' : ''}"></div>`).join('')}
      </div>
    </div>`;
}

// ===== RENDER ITEM CARDS =====
function renderItems(items) {
  const grid = document.getElementById('itemsGrid');
  if (!grid) return;

  grid.innerHTML = items.map(item => `
    <div class="item-card reveal" data-bestseller="${item.bestseller}" data-new="${item.isNew}" data-spicy="${item.spicyLevel > 1}">
      <div class="item-img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="item-badges">
          ${item.bestseller ? '<span class="badge-bestseller"><i class="fas fa-fire"></i> Bestseller</span>' : ''}
          ${item.isNew ? '<span class="badge-new"><i class="fas fa-star"></i> New</span>' : ''}
        </div>
      </div>
      <div class="item-body">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
        ${spicyHTML(item.spicyLevel)}
        <div class="item-footer">
          <div class="item-price">${item.price}</div>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20want%20to%20order%3A%20${encodeURIComponent(item.name)}%20-%20${encodeURIComponent(item.price)}" 
             class="btn-order" target="_blank">
            <i class="fab fa-whatsapp"></i> Order
          </a>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
}

// ===== FILTER ITEMS =====
let allItems = [];
function filterItems(type) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.closest('.filter-btn').classList.add('active');

  const cards = document.querySelectorAll('.item-card');
  cards.forEach(card => {
    let show = true;
    if (type === 'bestseller') show = card.dataset.bestseller === 'true';
    else if (type === 'new') show = card.dataset.new === 'true';
    else if (type === 'spicy') show = card.dataset.spicy === 'true';
    card.classList.toggle('hidden', !show);
  });
}

// ===== CATEGORY PAGE INIT =====
function initCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const catId = params.get('cat');
  if (!catId || typeof categories === 'undefined') return;

  const cat = categories.find(c => c.id === catId);
  if (!cat) return;

  // Update page title
  document.title = `${cat.name} — Foodie Hub`;

  // Update hero
  const hero = document.getElementById('catHero');
  if (hero) hero.style.backgroundImage = `url('${cat.bgImg}')`;

  const titleEl = document.getElementById('catHeroTitle');
  if (titleEl) titleEl.innerHTML = `Our <span>${cat.name}</span>`;

  const descEl = document.getElementById('catHeroDesc');
  if (descEl) descEl.textContent = cat.description;

  const breadEl = document.getElementById('catBreadcrumb');
  if (breadEl) breadEl.textContent = cat.name;

  const labelEl = document.getElementById('itemsLabel');
  if (labelEl) labelEl.textContent = cat.name;

  const itemsTitleEl = document.getElementById('itemsTitle');
  if (itemsTitleEl) itemsTitleEl.innerHTML = `Choose Your <span>${cat.name}</span>`;

  // Render items
  renderItems(cat.items);

  // Render other categories
  renderCategoryCards('otherCatsGrid', catId);
}

// ===== PAGE INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderFooterLinks();

  // Home page
  if (document.getElementById('categoriesGrid')) {
    renderCategoryCards('categoriesGrid');
  }

  // Category page
  if (document.getElementById('itemsGrid')) {
    initCategoryPage();
  }
});
