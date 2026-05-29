/**
 * MSukasha.com - Main JavaScript
 * B2B Wholesale & C2C Marketplace
 */

/* ============================================================
   SHARED HEADER & FOOTER INJECTION
   ============================================================ */

const HEADER_HTML = `
<div class="header-top">
  <div class="container">
    <div>🇵🇰 Pakistan's #1 B2B Wholesale & C2C Trading Platform</div>
    <div class="header-top-links">
      <a href="help-center.html"><i class="fas fa-question-circle"></i> Help Center</a>
      <a href="book-call.html"><i class="fas fa-phone"></i> Book a Free Call</a>
      <a href="become-partner.html"><i class="fas fa-handshake"></i> Become a Partner</a>
      <a href="careers.html"><i class="fas fa-briefcase"></i> Careers</a>
    </div>
  </div>
</div>
<div class="header-main">
  <div class="container">
    <a href="index.html" class="site-logo">
      <img src="Logo/logo.png" alt="MSukasha - Pakistan's Trading Hub" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span style="display:none;font-size:22px;font-weight:900;color:#ff6600;">MSukasha</span>
    </a>
    <form class="search-form" action="shop.html" method="get" onsubmit="handleSearch(event)">
      <select name="category" aria-label="Category">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion & Apparel</option>
        <option value="home">Home & Living</option>
        <option value="vehicles">Vehicles</option>
        <option value="industrial">Industrial</option>
        <option value="agriculture">Agriculture</option>
      </select>
      <input type="text" name="q" placeholder="Search products, brands, suppliers..." id="search-input">
      <button type="submit"><i class="fas fa-search"></i> Search</button>
    </form>
    <div class="header-actions">
      <a href="wishlist.html" class="hdr-btn">
        <i class="far fa-heart"></i>
        <span>Wishlist</span>
      </a>
      <a href="cart.html" class="hdr-btn">
        <i class="fas fa-shopping-cart"></i>
        <span>Cart <span id="cart-count" style="background:var(--orange);color:#fff;border-radius:10px;padding:1px 6px;font-size:10px;"></span></span>
      </a>
      <a href="login.html" class="hdr-btn primary-btn">
        <i class="fas fa-user"></i>
        <span>Sign In</span>
      </a>
    </div>
  </div>
</div>
<nav class="nav-bar">
  <div class="container">
    <a href="categories.html" class="all-cats"><i class="fas fa-bars"></i> All Categories</a>
    <a href="wholesale.html">Wholesale B2B</a>
    <a href="c2c.html">Used Items (C2C)</a>
    <a href="trade-assurance.html">Trade Assurance</a>
    <a href="verified-suppliers.html">Verified Suppliers</a>
    <a href="logistics-service.html">Logistics</a>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<div class="container">
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="Logo/logo.png" alt="MSukasha" class="footer-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <span style="display:none;font-size:20px;font-weight:900;color:#fff;margin-bottom:12px;display:block;">MSukasha</span>
      <p>Pakistan's leading platform for B2B wholesale sourcing and C2C local marketplace. Connecting buyers and sellers nationwide.</p>
      <div class="footer-socials">
        <a href="https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61554607264842&sk=about" class="social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/msukasha.co/" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/msukasha-com-63a18a3a3" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="tel:+923313730953" class="social-link" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <div class="footer-links">
        <a href="about-us.html">About Us</a>
        <a href="careers.html">Careers</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact Us</a>
        <a href="terms and conditions.html">Terms & Conditions</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>B2B Services</h5>
      <div class="footer-links">
        <a href="trade-assurance.html">Trade Assurance</a>
        <a href="verified-suppliers.html">Verified Suppliers</a>
        <a href="logistics-service.html">Logistics Service</a>
        <a href="bulk-import-strategies.html">Bulk Import Guide</a>
        <a href="b2b-expert.html">B2B Expert</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>C2C Marketplace</h5>
      <div class="footer-links">
        <a href="post-free-ad.html">Post Free Ad</a>
        <a href="safety-tips.html">Safety Tips</a>
        <a href="buying-guides.html">Buying Guides</a>
        <a href="inspecting-used-goods.html">Inspecting Used Goods</a>
        <a href="safe-bargaining.html">Safe Bargaining</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Support</h5>
      <div class="footer-links">
        <a href="help-center.html">Help Center</a>
        <a href="track-order.html">Track Order</a>
        <a href="book-call.html">Book a Free Call</a>
        <a href="become-partner.html">Become a Partner</a>
        <a href="start-verification.html">Vendor Verification</a>
        <a href="contact.html">Report an Issue</a>
      </div>
    </div>
  </div>
</div>
<div class="footer-bottom">
  <div class="container">
    &copy; 2026 MSukasha.com &mdash; Empowering Trade Across Pakistan. All rights reserved.
  </div>
</div>
`;

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  injectHeader();
  injectFooter();
  highlightNav();
  updateCartCount();
});

function injectHeader() {
  const el = document.getElementById('site-header');
  if (el) el.innerHTML = HEADER_HTML;
}

function injectFooter() {
  const el = document.getElementById('site-footer');
  if (el) el.innerHTML = FOOTER_HTML;
}

function highlightNav() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-bar a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path && href === path) {
      link.classList.add('active');
    }
  });
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
  if (el) el.textContent = cart.length > 0 ? cart.length : '';
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
function addToWishlist(product) {
  const list = JSON.parse(localStorage.getItem('msukasha_wishlist') || '[]');
  if (!list.find(i => i.id === product.id)) { list.push(product); }
  localStorage.setItem('msukasha_wishlist', JSON.stringify(list));
  showToast('Added to wishlist!', 'success');
}

/* ============================================================
   SEARCH
   ============================================================ */
function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('search-input')?.value?.trim();
  if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  const colors = { success: '#22c55e', info: '#0066cc', error: '#ef4444', warning: '#f59e0b' };
  toast.style.cssText = `
    position: fixed; bottom: 24px; right: 24px;
    background: ${colors[type] || colors.info};
    color: #fff; padding: 12px 22px; border-radius: 8px;
    font-size: 14px; font-weight: 600; z-index: 9999;
    box-shadow: 0 6px 20px rgba(0,0,0,0.18);
    animation: slideIn 0.3s ease;
  `;
  toast.textContent = message;
  if (!document.getElementById('toast-style')) {
    const s = document.createElement('style');
    s.id = 'toast-style';
    s.textContent = '@keyframes slideIn { from { transform: translateY(20px); opacity:0; } to { transform: translateY(0); opacity:1; } }';
    document.head.appendChild(s);
  }
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ============================================================
   FORM VALIDATION
   ============================================================ */
function validateForm(formEl) {
  let valid = true;
  formEl.querySelectorAll('[required]').forEach(el => {
    const group = el.closest('.form-group');
    if (!el.value.trim()) {
      valid = false;
      el.style.borderColor = '#ef4444';
      if (group) {
        let err = group.querySelector('.field-error');
        if (!err) { err = document.createElement('p'); err.className = 'field-error'; err.style.cssText = 'color:#ef4444;font-size:12px;margin-top:4px;'; group.appendChild(err); }
        err.textContent = 'This field is required.';
      }
    } else {
      el.style.borderColor = '';
      const err = group?.querySelector('.field-error');
      if (err) err.remove();
    }
    if (el.type === 'email' && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
      valid = false;
      el.style.borderColor = '#ef4444';
    }
  });
  return valid;
}
