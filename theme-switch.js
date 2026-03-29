// Auto-detect system theme and allow manual toggle
(function() {
  var STORAGE_KEY = 'tc_theme_pref';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function getInitialTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var currentTheme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', currentTheme);

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.addEventListener('click', function() {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(next);
        currentTheme = next;
      });
    });

    var btn = document.getElementById('scrollUpBtn');
    if (!btn) return;
    function updateScrollBtn() {
      btn.style.display = window.pageYOffset > 200 ? 'flex' : 'none';
    }
    updateScrollBtn();
    window.addEventListener('scroll', updateScrollBtn, { passive: true });
    window.addEventListener('pageshow', function() { setTimeout(updateScrollBtn, 0); });
    btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  });
})();
