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

  // Global token copy button
  const copyTokensBtn = document.getElementById('btn-copy-tokens');
  if (copyTokensBtn) {
    copyTokensBtn.addEventListener('click', () => {
      copyToClipboard(
        `--color-sapphire: #1657a7;\n--color-sapphire-deep: #0d386c;\n--color-azure: #2d7ee8;\n--color-glacier: #edf4fc;\n--color-abyss: #060d17;\n--color-ink: #0f172a;\n--color-slate: #475569;\n--color-mist: #e2e8f0;`,
        'Copied core design tokens CSS!'
      );
    });
  }
});
