// Highlight current page in nav
(function () {
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });
})();

// Open all external links in a new tab
(function () {
  const host = window.location.hostname;
  document.querySelectorAll('a[href]').forEach(function (a) {
    const href = a.getAttribute('href') || '';
    const isExternal = /^https?:\/\//i.test(href) && !href.includes(host);
    if (isExternal) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });
})();
