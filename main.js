/**
 * MSukasha.com - Main JavaScript
 * B2B Wholesale & C2C Marketplace
 * GitHub Pages Compatible — All Relative Paths
 */

/* ============================================================
   SHARED HEADER & FOOTER INJECTION
   ============================================================ */

function getPageBase() {
  return window.location.pathname.includes('/Pages/') ? './' : 'Pages/';
}

function getRootBase() {
  return window.location.pathname.includes('/Pages/') ? '../' : '';
}

function getHeaderHtml(pageBase, rootBase) {
  return `
<div class="header-top">
  <div class="container">
    <div>🇵🇰 Pakistan's #1 B2B Wholesale &amp; C2C Trading Platform</div>
    <div class="header-top-links">
      <a href="${pageBase}help-center.html"><i class="fas fa-question-circle"></i> Help Center</a>
      <a href="${pageBase}book-call.html"><i class="fas fa-phone"></i> Book a Free Call</a>
      <a href="${pageBase}become-partner.html"><i class="fas fa-handshake"></i> Become a Partner</a>
      <a href="${pageBase}careers.html"><i class="fas fa-briefcase"></i> Careers</a>
    </div>
  </div>
</div>
<div class="header-main">
  <div class="container">
    <a href="${rootBase}index.html" class="site-logo">
      <img src="${rootBase}Logo/logo.png" alt="msukasha" onerror="this.style.display='none';this.nextElementSibling.style.display='inline-block'">
      <span style="display:none;font-size:24px;font-weight:700;color:#132A3D;">msukasha</span>
    </a>
    <form class="search-form" onsubmit="handleSearch(event)">
      <select id="search-cat" aria-label="Category">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion &amp; Apparel</option>
        <option value="home">Home &amp; Living</option>
        <option value="vehicles">Vehicles</option>
        <option value="industrial">Industrial</option>
        <option value="agriculture">Agriculture</option>
      </select>
      <input type="text" placeholder="Search products, brands, suppliers..." id="search-input">
      <button type="submit"><i class="fas fa-search"></i> Search</button>
    </form>
    <div class="header-actions">
      <a href="http://sellermsukasha.com/" class="hdr-btn">
        <i class="fas fa-user"></i>
        <span>Seller Account</span>
      </a>
      <a href="${pageBase}seller-dashboard.html" class="hdr-btn">
        <i class="fas fa-chart-line"></i>
        <span>Seller Dashboard</span>
      </a>
      <a href="${pageBase}wishlist.html" class="hdr-btn">
        <i class="far fa-heart"></i>
        <span>Wishlist</span>
      </a>
      <a href="${pageBase}cart.html" class="hdr-btn">
        <i class="fas fa-shopping-cart"></i>
        <span>Cart <span id="cart-count"></span></span>
      </a>
      <a href="${pageBase}login.html" class="hdr-btn primary-btn" id="auth-btn">
        <i class="fas fa-user"></i>
        <span id="auth-label">Sign In</span>
      </a>
    </div>
  </div>
</div>
<nav class="nav-bar">
  <div class="container">
    <a href="${pageBase}categories.html" class="all-cats"><i class="fas fa-bars"></i> All Categories</a>
    <a href="${pageBase}wholesale.html">Wholesale B2B</a>
    <a href="${pageBase}c2c.html">Used Items (C2C)</a>
    <a href="${pageBase}trade-assurance.html">Trade Assurance</a>
    <a href="${pageBase}verified-suppliers.html">Verified Suppliers</a>
    <a href="${pageBase}logistics-service.html">Logistics</a>
    <a href="${pageBase}blog.html">Blog</a>
    <a href="${pageBase}advertise.html">Advertise</a>
    <a href="${pageBase}contact.html">Contact</a>
  </div>
</nav>
`;
}

function getFooterHtml(pageBase, rootBase) {
  return `
<div class="container">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="${rootBase}Logo/logo.png" alt="msukasha" class="footer-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span style="display:none;font-size:22px;font-weight:700;color:#fff;font-family:'Space Grotesk',sans-serif;">msukasha</span>
      <p>Pakistan's leading platform for B2B wholesale sourcing and C2C local marketplace. Connecting buyers and sellers nationwide.</p>
      <div class="footer-socials">
        <a href="https://www.facebook.com/profile.php?id=61554607264842" class="social-link" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/msukasha.co/" class="social-link" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/msukasha-com-63a18a3a3" class="social-link" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="tel:+923313730953" class="social-link" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <div class="footer-links">
        <a href="${pageBase}about-us.html">About Us</a>
        <a href="${pageBase}careers.html">Careers</a>
        <a href="${pageBase}blog.html">Blog</a>
        <a href="${pageBase}advertise.html">Advertise With Us</a>
        <a href="${pageBase}contact.html">Contact Us</a>
        <a href="${pageBase}terms and conditions.html">Terms &amp; Conditions</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>B2B Services</h5>
      <div class="footer-links">
        <a href="${pageBase}trade-assurance.html">Trade Assurance</a>
        <a href="${pageBase}verified-suppliers.html">Verified Suppliers</a>
        <a href="${pageBase}logistics-service.html">Logistics Service</a>
        <a href="${pageBase}bulk-import-strategies.html">Bulk Import Guide</a>
        <a href="${pageBase}b2b-expert.html">B2B Expert</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>C2C Marketplace</h5>
      <div class="footer-links">
        <a href="${pageBase}post-free-ad.html">Post Free Ad</a>
        <a href="${pageBase}safety-tips.html">Safety Tips</a>
        <a href="${pageBase}buying-guides.html">Buying Guides</a>
        <a href="${pageBase}inspecting-used-goods.html">Inspecting Used Goods</a>
        <a href="${pageBase}safe-bargaining.html">Safe Bargaining</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Support</h5>
      <div class="footer-links">
        <a href="${pageBase}help-center.html">Help Center</a>
        <a href="${pageBase}track-order.html">Track Order</a>
        <a href="${pageBase}book-call.html">Book a Free Call</a>
        <a href="${pageBase}become-partner.html">Become a Partner</a>
        <a href="${pageBase}start-verification.html">Vendor Verification</a>
        <a href="${pageBase}contact.html">Report an Issue</a>
      </div>
    </div>
  </div>
</div>
<div class="footer-bottom">
  <div class="container">
    &copy; 2026 msukasha.com &mdash; Empowering Trade Across Pakistan. All rights reserved.
    <a href="${pageBase}admin_ads.html">Ad Management</a>
  </div>
</div>
`;
}

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  injectHeader();
  injectFooter();
  highlightNav();
  updateCartCount();
  updateAuthButton();
});

function injectHeader() {
  const el = document.getElementById('site-header');
  if (el) {
    const pageBase = getPageBase();
    const rootBase = getRootBase();
    el.innerHTML = getHeaderHtml(pageBase, rootBase);
    // Re-run after injection
    updateCartCount();
    updateAuthButton();
    highlightNav();
  }
}

function injectFooter() {
  const el = document.getElementById('site-footer');
  if (el) {
    const pageBase = getPageBase();
    const rootBase = getRootBase();
    el.innerHTML = getFooterHtml(pageBase, rootBase);
  }
}

function highlightNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-bar a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href && path && href === path) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   AUTH SESSION (localStorage based)
   ============================================================ */
function getUser() {
  try { return JSON.parse(localStorage.getItem('msukasha_user') || 'null'); } catch { return null; }
}
function setUser(user) {
  localStorage.setItem('msukasha_user', JSON.stringify(user));
}
function logout() {
  localStorage.removeItem('msukasha_user');
  showToast('Logged out successfully.', 'info');
  setTimeout(() => window.location.href = `${getRootBase()}index.html`, 1000);
}
function updateAuthButton() {
  const user = getUser();
  const btn = document.getElementById('auth-btn');
  const label = document.getElementById('auth-label');
  if (!btn || !label) return;
  const base = getPageBase();
  if (user) {
    btn.href = `${base}my-account.html`;
    label.textContent = user.name ? user.name.split(' ')[0] : 'My Account';
  } else {
    btn.href = `${base}login.html`;
    label.textContent = 'Sign In';
  }
}

/* ============================================================
   CART
   ============================================================ */
function getCart() {
  try { return JSON.parse(localStorage.getItem('msukasha_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('msukasha_cart', JSON.stringify(cart));
}
function updateCartCount() {
  const cart = getCart();
  const el = document.getElementById('cart-count');
  if (el) {
    el.textContent = cart.length > 0 ? cart.length : '';
    el.style.cssText = cart.length > 0
      ? 'background:var(--orange);color:#fff;border-radius:10px;padding:1px 6px;font-size:10px;'
      : '';
  }
}
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) { existing.qty = (existing.qty || 1) + 1; }
  else { cart.push({ ...product, qty: 1 }); }
  saveCart(cart);
  updateCartCount();
  showToast('Added to cart!', 'success');
}
function removeFromCart(id) {
  let cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  updateCartCount();
}
function getCartTotal() {
  return getCart().reduce((sum, i) => sum + (parseFloat(i.price) || 0) * (i.qty || 1), 0);
}

/* ============================================================
   WISHLIST
   ============================================================ */
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('msukasha_wishlist') || '[]'); } catch { return []; }
}
function addToWishlist(product) {
  const list = getWishlist();
  if (!list.find(i => i.id === product.id)) {
    list.push(product);
    localStorage.setItem('msukasha_wishlist', JSON.stringify(list));
    showToast('Added to wishlist!', 'success');
  } else {
    showToast('Already in wishlist!', 'info');
  }
}
function removeFromWishlist(id) {
  const list = getWishlist().filter(i => i.id !== id);
  localStorage.setItem('msukasha_wishlist', JSON.stringify(list));
}

/* ============================================================
   SEARCH
   ============================================================ */
function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('search-input')?.value?.trim();
  const cat = document.getElementById('search-cat')?.value || '';
  if (q) {
    window.location.href = `${getPageBase()}shop.html?q=${encodeURIComponent(q)}&cat=${encodeURIComponent(cat)}`;
  }
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
function showToast(message, type = 'info') {
  // Remove existing toasts
  document.querySelectorAll('.ms-toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = 'ms-toast';
  const colors = { success: '#22c55e', info: '#0066cc', error: '#ef4444', warning: '#f59e0b' };
  toast.style.cssText = `
    position:fixed;bottom:24px;right:24px;
    background:${colors[type] || colors.info};
    color:#fff;padding:13px 22px;border-radius:10px;
    font-size:14px;font-weight:600;z-index:99999;
    box-shadow:0 6px 24px rgba(0,0,0,0.20);
    animation:msToastIn 0.3s ease;
    max-width:320px;line-height:1.4;
  `;
  toast.textContent = message;

  if (!document.getElementById('ms-toast-style')) {
    const s = document.createElement('style');
    s.id = 'ms-toast-style';
    s.textContent = `
      @keyframes msToastIn { from{transform:translateY(16px);opacity:0} to{transform:translateY(0);opacity:1} }
      @keyframes msToastOut { from{opacity:1} to{opacity:0;transform:translateY(8px)} }
    `;
    document.head.appendChild(s);
  }
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'msToastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ============================================================
   FORM VALIDATION
   ============================================================ */
function validateForm(formEl) {
  let valid = true;
  formEl.querySelectorAll('[required]').forEach(el => {
    const group = el.closest('.form-group');
    el.style.borderColor = '';
    const oldErr = group?.querySelector('.field-error');
    if (oldErr) oldErr.remove();

    if (!el.value.trim()) {
      valid = false;
      el.style.borderColor = '#ef4444';
      if (group) {
        const err = document.createElement('p');
        err.className = 'field-error';
        err.style.cssText = 'color:#ef4444;font-size:12px;margin-top:4px;';
        err.textContent = 'This field is required.';
        group.appendChild(err);
      }
    } else if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
      valid = false;
      el.style.borderColor = '#ef4444';
      if (group) {
        const err = document.createElement('p');
        err.className = 'field-error';
        err.style.cssText = 'color:#ef4444;font-size:12px;margin-top:4px;';
        err.textContent = 'Please enter a valid email address.';
        group.appendChild(err);
      }
    }
  });
  return valid;
}

/* ============================================================
   UTILITY
   ============================================================ */
function formatPrice(num) {
  return 'Rs. ' + Number(num).toLocaleString('en-PK');
}
function getUrlParam(key) {
  return new URLSearchParams(window.location.search).get(key) || '';
}

/* ============================================================
   MSUKASHA DIRECT ADVERTISING
   Homepage ad display + ad status helpers
   ============================================================ */

/*
 * This prepares the frontend for the MSUKASHA advertising system.
 * Approved ads can later be loaded from Firebase/API without
 * changing the homepage code again.
 */
function getAdvertisingAds() {
  try {
    return JSON.parse(localStorage.getItem('msukasha_ads') || '[]');
  } catch {
    return [];
  }
}

function isAdActive(ad) {
  if (!ad || ad.status !== 'approved') return false;

  const now = new Date();
  const start = ad.startDate ? new Date(ad.startDate) : null;
  const end = ad.endDate ? new Date(ad.endDate + 'T23:59:59') : null;

  if (start && now < start) return false;
  if (end && now > end) return false;

  return true;
}

function getActiveAdvertisingAds() {
  return getAdvertisingAds().filter(isAdActive);
}

function recordAdClick(adId) {
  const ads = getAdvertisingAds();
  const ad = ads.find(item => item.id === adId);

  if (ad) {
    ad.clicks = Number(ad.clicks || 0) + 1;
    localStorage.setItem('msukasha_ads', JSON.stringify(ads));
  }
}

function recordAdImpression(adId) {
  const ads = getAdvertisingAds();
  const ad = ads.find(item => item.id === adId);

  if (ad) {
    ad.impressions = Number(ad.impressions || 0) + 1;
    localStorage.setItem('msukasha_ads', JSON.stringify(ads));
  }
}

function renderAdvertisingAds() {
  const container = document.getElementById('msukasha-advertising');
  if (!container) return;

  const ads = getActiveAdvertisingAds();
  if (!ads.length) return;

  const ad = ads[0];

  const sectionHeader = container.querySelector('.section-header');
  const oldBox = container.querySelector('.msukasha-ad-box');

  if (sectionHeader) {
    sectionHeader.innerHTML = `
      <h2 class="section-title">
        <i class="fas fa-bullhorn" style="color:var(--orange);margin-right:8px;"></i>
        Featured Advertisement
      </h2>
      <span class="see-all">Sponsored</span>
    `;
  }

  if (oldBox) {
    oldBox.innerHTML = `
      <a
        href="${ad.targetUrl || '#'}"
        ${ad.targetUrl ? 'target="_blank" rel="noopener noreferrer"' : ''}
        onclick="recordAdClick('${String(ad.id || '').replace(/'/g, "\\'")}')"
        style="display:block;text-decoration:none;color:inherit;"
      >
        ${ad.imageUrl ? `
          <img
            src="${ad.imageUrl}"
            alt="${ad.title || 'MSUKASHA Advertisement'}"
            style="width:100%;max-height:320px;object-fit:cover;border-radius:10px;display:block;"
            onload="recordAdImpression('${String(ad.id || '').replace(/'/g, "\\'")}')"
          >
        ` : `
          <div class="msukasha-ad-content">
            <span class="msukasha-ad-label">SPONSORED</span>
            <h2>${ad.title || 'Advertise With MSUKASHA'}</h2>
            <p>${ad.description || 'Promote your business on MSUKASHA.'}</p>
          </div>
        `}
      </a>
    `;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  renderAdvertisingAds();
});

/* ============================================================
   PRODUCT CATALOG + SHARED PAGE HELPERS (inner pages)
   Catalog below = the listings shown on the homepage.
   Replace / extend it (or load from the API) as listings grow.
   ============================================================ */
const MS_CONTACT = { email: 'info@msukasha.com', whatsapp: '923313730953' };

const MS_CATEGORIES = [
  { id: 'electronics', name: 'Electronics', icon: 'fa-mobile-alt' },
  { id: 'fashion', name: 'Fashion & Apparel', icon: 'fa-tshirt' },
  { id: 'home', name: 'Home & Living', icon: 'fa-couch' },
  { id: 'vehicles', name: 'Vehicles', icon: 'fa-car' },
  { id: 'industrial', name: 'Industrial', icon: 'fa-industry' },
  { id: 'agriculture', name: 'Agriculture', icon: 'fa-seedling' },
  { id: 'sports', name: 'Sports & Fitness', icon: 'fa-futbol' },
  { id: 'books', name: 'Books & Stationery', icon: 'fa-book' },
  { id: 'tools', name: 'Tools', icon: 'fa-tools' }
];

const MS_PRODUCTS = [
  { id: 'p1', type: 'b2b', cat: 'industrial', icon: 'fa-solar-panel', img: 'solar-panels.jpg',
    fallback: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    name: 'Industrial Grade Solar Panels — 545W Mono PERC', short: 'Industrial Solar Panels 545W', price: 120, unit: 'pc', moq: 10 },
  { id: 'p2', type: 'b2b', cat: 'fashion', icon: 'fa-tshirt', img: 't-shirt (2).jpg',
    fallback: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    name: 'Wholesale Cotton Plain T-Shirts (Pack of 50)', short: 'Wholesale Cotton T-Shirts', price: 2.5, unit: 'pc', moq: 100 },
  { id: 'p3', type: 'b2b', cat: 'electronics', icon: 'fa-headphones', img: 'earbuds.jpg',
    fallback: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
    name: 'Professional Wireless Earbuds — Bulk Export Grade', short: 'Wireless Earbuds Bulk', price: 8.9, unit: 'pc', moq: 50 },
  { id: 'p7', type: 'b2b', cat: 'sports', icon: 'fa-baseball-ball', img: 'Baseball-bat-ball.jpg',
    fallback: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
    name: 'Custom Baseball Kit — Wholesale', short: 'Baseball Kit Wholesale', price: 5.2, unit: 'pc', moq: 20 },
  { id: 'p9', type: 'c2c', cat: 'electronics', icon: 'fa-mobile-alt', img: 'iphone.jpg',
    fallback: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&q=80',
    name: 'Used iPhone 12 Pro — 128GB (Water Pack)', short: 'Used iPhone 12 Pro', price: 135000, location: 'DHA, Karachi' },
  { id: 'c2c-honda', type: 'c2c', cat: 'vehicles', icon: 'fa-motorcycle', img: 'honda.jpg',
    fallback: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    name: 'Honda CD 70 — 2024 Model (Urgent Sale)', short: 'Honda CD 70', price: 115000, location: 'Johar Town, Lahore' },
  { id: 'p11', type: 'c2c', cat: 'home', icon: 'fa-chair', img: 'office chair.jpg',
    fallback: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    name: 'Office Desk & Ergonomic Chair Set — Good Condition', short: 'Office Desk & Chair Set', price: 12000, location: 'G-11, Islamabad' },
  { id: 'p12', type: 'c2c', cat: 'electronics', icon: 'fa-camera-retro', img: 'nikon.jpg',
    fallback: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    name: 'Nikon D5600 DSLR Camera with 18-55mm Lens', short: 'Nikon D5600 DSLR Camera', price: 75000, location: 'Peshawar Cantt' }
];

function escHtml(v) {
  return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function getProductById(id) { return MS_PRODUCTS.find(p => p.id === id) || null; }
function getCategoryName(id) { const c = MS_CATEGORIES.find(x => x.id === id); return c ? c.name : id; }
function msImg(p) { return getRootBase() + 'images/' + p.img; }
function msPrice(p) {
  return p.type === 'b2b' ? '$' + Number(p.price).toFixed(2) : 'Rs. ' + Number(p.price).toLocaleString('en-PK');
}
function msImgTag(p) {
  return `<img src="${escHtml(msImg(p))}" alt="${escHtml(p.short)}" onerror="this.onerror=function(){this.remove()};this.src='${p.fallback}'">`;
}

function goToDetail(id, type) {
  window.location.href = `${getPageBase()}product-detail.html?id=${encodeURIComponent(id)}&type=${encodeURIComponent(type || '')}`;
}
function msCart(id) {
  const p = getProductById(id); if (!p) return;
  addToCart({ id: p.id, name: p.short, price: p.price, type: p.type, img: './images/' + p.img });
}
function msWish(id) {
  const p = getProductById(id); if (!p) return;
  addToWishlist({ id: p.id, name: p.short, price: p.price, type: p.type, img: './images/' + p.img });
}

function msProductCard(p) {
  const b2b = p.type === 'b2b';
  const meta = b2b
    ? `<p class="card-moq"><i class="fas fa-box"></i>MOQ: ${p.moq} Pieces</p>`
    : `<p class="card-location"><i class="fas fa-map-marker-alt"></i>${escHtml(p.location)}</p>`;
  const price = b2b ? `${msPrice(p)}<small>/${p.unit}</small>` : msPrice(p);
  const footer = b2b
    ? `<a href="${getPageBase()}contact.html" class="card-btn" onclick="event.stopPropagation()">Inquire Now</a>
       <button class="card-btn solid" onclick="event.stopPropagation();msCart('${p.id}')">Buy Now</button>`
    : `<a href="${getPageBase()}messages.html" class="card-btn" onclick="event.stopPropagation()">Message Seller</a>
       <a href="${getPageBase()}contact.html" class="card-btn solid" onclick="event.stopPropagation()">Call Now</a>`;
  return `
  <div class="product-card zone-${p.type}" onclick="goToDetail('${p.id}','${p.type}')">
    <div class="card-img">
      <i class="fas ${p.icon}"></i>
      ${msImgTag(p)}
      <span class="card-badge">${b2b ? 'B2B' : 'USED'}</span>
      <div class="card-actions">
        <button onclick="event.stopPropagation();msWish('${p.id}')" class="card-action-btn" title="Wishlist"><i class="far fa-heart"></i></button>
      </div>
    </div>
    <div class="card-body">
      <p class="card-name">${escHtml(p.name)}</p>
      <p class="card-price">${price}</p>
      ${meta}
    </div>
    <div class="card-footer">${footer}</div>
  </div>`;
}

/* Catalog page (shop / wholesale / c2c). opts.type = 'b2b' | 'c2c' | '' */
function msRenderCatalog(opts) {
  opts = opts || {};
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;
  const qEl = document.getElementById('f-search');
  const catEl = document.getElementById('f-cat');
  const typeEl = document.getElementById('f-type');
  const sortEl = document.getElementById('f-sort');
  const countEl = document.getElementById('catalog-count');

  catEl.innerHTML = '<option value="">All categories</option>' +
    MS_CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  qEl.value = getUrlParam('q');
  catEl.value = getUrlParam('cat');
  if (typeEl) typeEl.value = getUrlParam('type');

  function render() {
    const q = qEl.value.trim().toLowerCase();
    const cat = catEl.value;
    const type = opts.type || (typeEl ? typeEl.value : '');
    let list = MS_PRODUCTS.filter(p =>
      (!type || p.type === type) &&
      (!cat || p.cat === cat) &&
      (!q || (p.name + ' ' + getCategoryName(p.cat) + ' ' + (p.location || '')).toLowerCase().includes(q)));
    const sort = sortEl.value;
    if (sort === 'name') list = list.slice().sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'low') list = list.slice().sort((a, b) => a.price - b.price);
    if (sort === 'high') list = list.slice().sort((a, b) => b.price - a.price);
    countEl.textContent = list.length + (list.length === 1 ? ' listing' : ' listings');
    grid.innerHTML = list.length ? list.map(msProductCard).join('') : `
      <div class="empty-state" style="grid-column:1/-1;">
        <i class="fas fa-box-open"></i>
        <h3>No listings found</h3>
        <p>Try a different search or category.</p>
        <a href="${getPageBase()}categories.html" class="btn-primary">Browse categories</a>
      </div>`;
  }
  [qEl, catEl, sortEl, typeEl].forEach(el => { if (el) el.addEventListener('input', render); });
  render();
}

/* Lead forms: collects the fields and lets the visitor send them to the
   msukasha team by WhatsApp or email (no backend needed). */
function msHandleLeadForm(e, subject, resultId) {
  e.preventDefault();
  const form = e.target;
  if (typeof validateForm === 'function' && !validateForm(form)) return;
  const lines = [];
  Array.from(form.elements).forEach(el => {
    if (!el.name || el.type === 'submit' || el.type === 'button') return;
    const v = (el.value || '').trim();
    if (!v) return;
    lines.push((el.dataset.label || el.name) + ': ' + v);
  });
  const text = 'msukasha — ' + subject + '\n\n' + lines.join('\n');
  const wa = 'https://wa.me/' + MS_CONTACT.whatsapp + '?text=' + encodeURIComponent(text);
  const mail = 'mailto:' + MS_CONTACT.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(text);
  const box = document.getElementById(resultId);
  if (box) {
    box.innerHTML = `
      <h3><i class="fas fa-check-circle"></i> Your details are ready</h3>
      <p>Choose how you would like to send them to the msukasha team.</p>
      <div class="form-actions">
        <a class="btn-teal" href="${wa}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Send on WhatsApp</a>
        <a class="btn-outline" href="${mail}"><i class="fas fa-envelope"></i> Send by Email</a>
      </div>`;
    box.classList.add('show');
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
