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

  // Palette Mode Switcher (Soft Tint Palette vs All-Gradient Saturated)
  const gridContainer = document.getElementById('feature-grid-container');
  const btnModeTint = document.getElementById('btn-mode-tint');
  const btnModeGradient = document.getElementById('btn-mode-gradient');

  if (btnModeTint && btnModeGradient && gridContainer) {
    btnModeTint.addEventListener('click', () => {
      gridContainer.classList.remove('grid-all-gradients');
      btnModeTint.style.background = 'var(--color-ink)';
      btnModeTint.style.color = '#fff';
      btnModeGradient.style.background = 'var(--color-glacier-frost)';
      btnModeGradient.style.color = 'var(--color-ink)';
      showToast('Switched to Soft Multi-Colored Tint Palette');
    });

    btnModeGradient.addEventListener('click', () => {
      gridContainer.classList.add('grid-all-gradients');
      btnModeGradient.style.background = 'var(--color-ink)';
      btnModeGradient.style.color = '#fff';
      btnModeTint.style.background = 'var(--color-glacier-frost)';
      btnModeTint.style.color = 'var(--color-ink)';
      showToast('Switched to Saturated Multi-Gradient Palette');
    });
  }

  // Mouse Pointer-Following Spotlight Glow Tracker with Smooth Fade In/Out
  const glowCards = document.querySelectorAll('.feature-card, .showcase-card, .pricing-card');
  glowCards.forEach(card => {
    const updateGlow = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mouseenter', updateGlow);
    card.addEventListener('mousemove', updateGlow);
  });
});

