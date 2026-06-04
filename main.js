/**
 * MSukasha.com - Main JavaScript
 * B2B Wholesale & C2C Marketplace
 * GitHub Pages Compatible — All Relative Paths
 */

/* ============================================================
   SHARED HEADER & FOOTER INJECTION
   ============================================================ */

const HEADER_HTML = `
<div class="header-top">
  <div class="container">
    <div>🇵🇰 Pakistan's #1 B2B Wholesale &amp; C2C Trading Platform</div>
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
      <img src="Logo/logo.png" alt="MSukasha" onerror="this.style.display='none';this.nextElementSibling.style.display='inline-block'">
      <span style="display:none;font-size:22px;font-weight:900;color:#ff6600;">MSukasha</span>
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
      <a href="wishlist.html" class="hdr-btn">
        <i class="far fa-heart"></i>
        <span>Wishlist</span>
      </a>
      <a href="cart.html" class="hdr-btn">
        <i class="fas fa-shopping-cart"></i>
        <span>Cart <span id="cart-count"></span></span>
      </a>
      <a href="login.html" class="hdr-btn primary-btn" id="auth-btn">
        <i class="fas fa-user"></i>
        <span id="auth-label">Sign In</span>
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
        <a href="https://www.facebook.com/profile.php?id=61554607264842" class="social-link" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/msukasha.co/" class="social-link" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/msukasha-com-63a18a3a3" class="social-link" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
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
        <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
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
  updateAuthButton();
});

function injectHeader() {
  const el = document.getElementById('site-header');
  if (el) {
    el.innerHTML = HEADER_HTML;
    // Re-run after injection
    updateCartCount();
    updateAuthButton();
    highlightNav();
  }
}

function injectFooter() {
  const el = document.getElementById('site-footer');
  if (el) el.innerHTML = FOOTER_HTML;
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
  setTimeout(() => window.location.href = 'index.html', 1000);
}
function updateAuthButton() {
  const user = getUser();
  const btn = document.getElementById('auth-btn');
  const label = document.getElementById('auth-label');
  if (!btn || !label) return;
  if (user) {
    btn.href = 'my-account.html';
    label.textContent = user.name ? user.name.split(' ')[0] : 'My Account';
  } else {
    btn.href = 'login.html';
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
    window.location.href = `shop.html?q=${encodeURIComponent(q)}&cat=${encodeURIComponent(cat)}`;
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
