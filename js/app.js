document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.querySelector('b').textContent = isOpen ? 'Закрыть меню' : 'Открыть меню';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('b').textContent = 'Открыть меню';
      });
    });
  }

  document.querySelectorAll('.image-container img').forEach((image) => {
    image.addEventListener('click', () => {
      const lightbox = document.createElement('dialog');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `<button type="button" aria-label="Закрыть изображение">×</button><img src="${image.src}" alt="${image.alt}">`;
      document.body.append(lightbox);
      lightbox.showModal();
      const close = () => { lightbox.close(); lightbox.remove(); };
      lightbox.querySelector('button').addEventListener('click', close);
      lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
      lightbox.addEventListener('close', () => lightbox.remove());
    });
  });
});
