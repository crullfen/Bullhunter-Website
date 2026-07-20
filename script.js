const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.classList.remove('active');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const copyButton = document.querySelector('#copy-contract');
copyButton?.addEventListener('click', async () => {
  const address = document.querySelector('#contract-address')?.textContent?.trim();
  if (!address) return;
  try {
    await navigator.clipboard.writeText(address);
    const old = copyButton.textContent;
    copyButton.textContent = 'Copied';
    setTimeout(() => copyButton.textContent = old, 1600);
  } catch {
    window.prompt('Copy the contract address:', address);
  }
});

const glow = document.querySelector('.cursor-glow');
if (glow && matchMedia('(pointer:fine)').matches) {
  addEventListener('mousemove', event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = '1';
  });
}



document.querySelectorAll('[data-scroll-shell]').forEach(shell => {
  const area = shell.querySelector('[data-scroll-area]');
  if (!area) return;

  const dismiss = () => {
    if (area.scrollLeft > 8) {
      shell.classList.add('has-scrolled');
      area.removeEventListener('scroll', dismiss);
    }
  };

  area.addEventListener('scroll', dismiss, { passive: true });
  area.addEventListener('touchmove', () => shell.classList.add('has-scrolled'), { passive: true, once: true });
  area.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      shell.classList.add('has-scrolled');
    }
  }, { once: true });
});
