/**
 * TJH Design System — Preview Showcase Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');

  // Copy to clipboard helper
  function copyToClipboard(text, message = 'Copied to clipboard!') {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  // Toast notifier
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // Swatch click to copy
  document.querySelectorAll('.swatch-card').forEach(card => {
    card.addEventListener('click', () => {
      const hex = card.getAttribute('data-hex');
      const token = card.getAttribute('data-token');
      copyToClipboard(hex, `Copied ${token} (${hex})`);
    });
  });

  // Prompt copy buttons
  document.querySelectorAll('.btn-copy-prompt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-target');
      const codeEl = document.getElementById(targetId);
      if (codeEl) {
        copyToClipboard(codeEl.textContent.trim(), 'Copied LLM prompt recipe!');
      }
    });
  });

  // Theme gradient switcher for featured card
  const featuredCard = document.getElementById('featured-demo-card');
  document.querySelectorAll('.btn-theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      if (featuredCard) {
        // Remove all previous theme classes
        featuredCard.classList.remove('card-theme-sapphire', 'card-theme-cobalt', 'card-theme-emerald', 'card-theme-amber');
        featuredCard.classList.add(`card-theme-${theme}`);
        showToast(`Switched card theme to ${theme.toUpperCase()} gradient`);
      }
    });
  });
});

