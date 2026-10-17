// Maison Zazou — comportements de navigation
(function () {
  var header = document.querySelector('.site-top');

  // 1. En-tête : devient blanc dès qu'on quitte le haut de la page (accueil)
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 40 || document.body.classList.contains('menu-open'));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 2. Menu mobile
  var burger = document.querySelector('.burger');
  var closeBtn = document.querySelector('.menu-close');
  var setMenu = function (open) {
    document.body.classList.toggle('menu-open', open);
    if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (header && header.classList.contains('site-top--overlay')) {
      header.classList.toggle('is-scrolled', open || window.scrollY > 40);
    }
  };
  if (burger) burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', function (e) {
    if (document.body.classList.contains('menu-open') && !e.target.closest('.nav, .burger')) setMenu(false);
  });
  document.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // 3. Images : apparition douce une fois chargées
  document.querySelectorAll('.photo img').forEach(function (img) {
    if (img.complete) return;
    img.classList.add('is-loading');
    var done = function () { img.classList.remove('is-loading'); };
    img.addEventListener('load', done);
    img.addEventListener('error', done);
  });

  // 4. Formulaires Netlify : envoi sans quitter la page, message de confirmation
  document.querySelectorAll('form[data-netlify]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = new URLSearchParams(new FormData(form)).toString();
      var btn = form.querySelector('[type=submit]');
      if (btn) btn.disabled = true;
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          var msg = document.createElement('p');
          msg.className = 'form-ok';
          msg.setAttribute('role', 'status');
          msg.textContent = form.getAttribute('data-ok') || 'Merci, votre inscription est bien enregistrée.';
          form.replaceWith(msg);
        })
        .catch(function () {
          if (btn) btn.disabled = false;
          form.submit();
        });
    });
  });
})();
