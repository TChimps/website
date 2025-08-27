// Auto-detect system theme and allow switching if desired
(function() {
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
  // Detect system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("scrollUpBtn");
    if (!btn) {
      // nothing to do if button doesn't exist
      return;
    }

    // Helper to show/hide the scroll button based on current scroll position.
    function updateScrollBtn() {
      // Use pageYOffset for cross-browser consistency
      if (window.pageYOffset > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    }

    // Initial check on DOMContentLoaded (covers normal page loads)
    updateScrollBtn();

    // Listen for scroll events (passive for performance)
    window.addEventListener('scroll', updateScrollBtn, { passive: true });

    // Handle bfcache / back-forward navigation where scripts may not fully re-run:
    // the pageshow event fires when the page is loaded from bfcache.
    window.addEventListener('pageshow', function (evt) {
      // small timeout ensures layout/scroll position is settled
      setTimeout(updateScrollBtn, 0);
    });

    // Scroll-to-top when clicked
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

})();