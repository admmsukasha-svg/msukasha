/*
 * msukasha ad slider.
 *
 *   <link rel="stylesheet" href="ad-slider.css">
 *   <div id="ad-slider" hidden></div>
 *   <script src="ad-slider.js"></script>
 *   <script>AdSlider.mount('#ad-slider', { api: 'https://YOUR-API-DOMAIN' });</script>
 *
 * It loads GET {api}/api/ads/approved and plays the ads. With no approved ads, or if the
 * request fails, the container stays hidden so the page layout is not affected.
 */
(function (global) {
  'use strict';

  var THEMES = {
    teal:   { name: 'Teal',   c: ['#0b3b3c', '#1b7f72', '#ffcf5c'] },
    plum:   { name: 'Plum',   c: ['#3b1d4a', '#8a3b6e', '#ffb38a'] },
    blue:   { name: 'Blue',   c: ['#14253f', '#2b5aa0', '#8ff0c8'] },
    rust:   { name: 'Rust',   c: ['#4a1f12', '#a8452a', '#ffd9a0'] },
    forest: { name: 'Forest', c: ['#16301b', '#3f7d3a', '#f3e27a'] },
    slate:  { name: 'Slate',  c: ['#1f242b', '#475569', '#ff9f6e'] }
  };

  function h(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function safeLink(u) {
    u = String(u || '');
    return /^https?:\/\/[^\s]+$/i.test(u) || /^#[a-z-]*$/.test(u) ? u : '#';
  }
  function safeImage(u) {
    u = String(u || '');
    return /^https?:\/\/[^\s]+$/i.test(u) || /^\/(?!\/)[^\s]*$/.test(u) ? u : '';
  }

  /* One slide from an ad object. Every text goes in with textContent. */
  function buildSlide(ad, flag, callbacks) {
    var t = (THEMES[ad.theme] || THEMES.teal).c;
    var a = h('article', 'sad-slide');
    a.style.setProperty('--c1', t[0]);
    a.style.setProperty('--c2', t[1]);
    a.style.setProperty('--pop', t[2]);
    var copy = h('div', 'sad-copy');
    copy.appendChild(h('p', 'sad-tag', ad.tag || ''));
    copy.appendChild(h('h2', null, ad.headline || ''));
    if (ad.sub) copy.appendChild(h('p', 'sad-sub', ad.sub));
    if (ad.price) {
      var price = h('p', 'sad-price');
      price.appendChild(h('strong', null, ad.price));
      if (ad.compareAtPrice) price.appendChild(h('del', null, ad.compareAtPrice));
      if (ad.discount) price.appendChild(h('span', null, ad.discount));
      copy.appendChild(price);
    }
    if (ad.link) {
      var cta = h('a', 'sad-cta', ad.cta || 'Learn more');
      var href = safeLink(ad.link);
      cta.setAttribute('href', href);
      if (href.charAt(0) !== '#') { cta.target = '_blank'; cta.rel = 'noopener noreferrer'; }
      if (callbacks && callbacks.onClick) {
        cta.addEventListener('click', function () { callbacks.onClick(ad); });
      }
      copy.appendChild(cta);
    }
    var vis = h('div', 'sad-visual');
    var image = safeImage(ad.imageUrl);
    if (image) {
      vis.classList.add('sad-visual-image');
      var img = h('img', 'sad-image');
      img.src = image;
      img.alt = ad.headline || 'Sponsored advertisement';
      vis.appendChild(img);
    } else {
      var badge = h('span', 'sad-badge');
      badge.appendChild(h('b', null, ad.badgeBig || ''));
      if (ad.badgeSmall) badge.appendChild(h('small', null, ad.badgeSmall));
      vis.appendChild(badge);
    }
    a.appendChild(copy);
    a.appendChild(vis);
    if (flag) a.appendChild(h('span', 'sad-flag', 'Ad'));
    return a;
  }

  /* A single static slide: used by the advertise form and the admin page. */
  function renderPreview(into, ad) {
    into.replaceChildren();
    var box = h('div', 'sad sad-static');
    var track = h('div', 'sad-track');
    track.appendChild(buildSlide(ad, true));
    box.appendChild(track);
    into.appendChild(box);
  }

  function createSlider(host, callbacks) {
    host.replaceChildren();
    host.classList.add('sad');
    host.setAttribute('aria-roledescription', 'carousel');
    host.setAttribute('aria-label', 'Promotions');
    var track = h('div', 'sad-track');
    var prev = h('button', 'sad-nav sad-prev', '‹');
    var next = h('button', 'sad-nav sad-next', '›');
    prev.type = 'button'; next.type = 'button';
    prev.setAttribute('aria-label', 'Previous slide');
    next.setAttribute('aria-label', 'Next slide');
    var box = h('div', 'sad-dots');
    host.appendChild(track); host.appendChild(prev); host.appendChild(next); host.appendChild(box);

    var delay = 5000; /* time per slide, in milliseconds */
    var slides = [], dots = [], n = 0, i = 0, timer = null, startX = null, lastSig = null;
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function go(k) {
      if (!n) return;
      i = (k + n) % n;
      track.style.transform = 'translateX(' + (-100 * i) + '%)';
      for (var d = 0; d < n; d++) {
        dots[d].classList.toggle('on', d === i);
        slides[d].inert = d !== i;
      }
      if (callbacks && callbacks.onImpression) callbacks.onImpression(slides[i].ad);
    }
    function stop() { clearInterval(timer); timer = null; }
    function play() {
      stop();
      if (still || n < 2) return;
      timer = setInterval(function () { go(i + 1); }, delay);
    }
    prev.addEventListener('click', function () { go(i - 1); play(); });
    next.addEventListener('click', function () { go(i + 1); play(); });
    host.addEventListener('mouseenter', stop);
    host.addEventListener('mouseleave', play);
    host.addEventListener('focusin', stop);
    host.addEventListener('focusout', play);
    host.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { go(i - 1); play(); }
      if (e.key === 'ArrowRight') { go(i + 1); play(); }
    });
    host.addEventListener('pointerdown', function (e) { startX = e.clientX; });
    host.addEventListener('pointerup', function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) { go(dx < 0 ? i + 1 : i - 1); play(); }
    });

    function setAds(list) {
      var sig = JSON.stringify(list);
      if (sig === lastSig) return;
      lastSig = sig;
      track.replaceChildren();
      box.replaceChildren();
      slides = []; dots = [];
      list.forEach(function (ad, k) {
        var s = buildSlide(ad, true, callbacks);
        s.ad = ad;
        s.setAttribute('role', 'group');
        s.setAttribute('aria-label', (k + 1) + ' of ' + list.length);
        track.appendChild(s);
        slides.push(s);
        var b = h('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Go to slide ' + (k + 1));
        b.addEventListener('click', function () { go(k); play(); });
        box.appendChild(b);
        dots.push(b);
      });
      n = list.length;
      box.hidden = n < 2; prev.hidden = n < 2; next.hidden = n < 2;
      go(Math.min(i, Math.max(n - 1, 0)));
      play();
    }
    return { setAds: setAds };
  }

  /* mount(target, { api, path, refreshMs, onError }) */
  async function mount(target, opts) {
    var host = typeof target === 'string' ? document.querySelector(target) : target;
    if (!host) return null;
    opts = opts || {};
    var url = String(opts.api || '').replace(/\/$/, '') + (opts.path || '/api/ads/approved');
    var slider = null;

    async function load() {
      try {
        var data;
        if (typeof opts.loadAds === 'function') {
          data = await opts.loadAds();
        } else {
          var res = await fetch(url, { headers: { Accept: 'application/json' } });
          if (!res.ok) throw new Error('HTTP ' + res.status);
          data = await res.json();
        }
        var ads = Array.isArray(data) ? data : (Array.isArray(data.ads) ? data.ads : []);
        if (!ads.length) {
          host.hidden = true;
          if (opts.onAds) opts.onAds([]);
          return;
        }
        if (!slider) slider = createSlider(host, opts);
        slider.setAds(ads);
        host.hidden = false;
        if (opts.onAds) opts.onAds(ads);
      } catch (e) {
        if (opts.onError) opts.onError(e);
      }
    }
    await load();
    if (opts.refreshMs > 0) setInterval(load, opts.refreshMs);
    return { reload: load };
  }

  global.AdSlider = { mount: mount, buildSlide: buildSlide, renderPreview: renderPreview, THEMES: THEMES, safeLink: safeLink };
})(window);
