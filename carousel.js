    // --- Hero Carousel JS ---
    const cards = Array.from(document.querySelectorAll('.carousel-card'));
    const indicators = document.getElementById('carousel-indicators');
    let activeIndex = 0;
    let carouselTimer;

    function showCard(idx) {
      cards.forEach((c, i) => c.style.display = i === idx ? 'flex' : 'none');
      if (indicators) {
        Array.from(indicators.children).forEach((d, i) => {
          d.classList.toggle('active', i === idx);
        });
      }
      activeIndex = idx;
      resetCarouselTimer();
    }

    function nextCard() {
      showCard((activeIndex + 1) % cards.length);
    }
    function goToCard(idx) {
      showCard(idx);
    }
    function resetCarouselTimer() {
      if (carouselTimer) clearTimeout(carouselTimer);
      carouselTimer = setTimeout(nextCard, 5000);
    }

    // Indicators (dots)
    if (indicators) {
      indicators.innerHTML = '';
      cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-indicator' + (i === 0 ? ' active' : '');
        dot.onclick = () => goToCard(i);
        indicators.appendChild(dot);
      });
    }

    showCard(0);

    // Pause timer on hover
    document.getElementById('hero-carousel').addEventListener('mouseenter', () => { if (carouselTimer) clearTimeout(carouselTimer); });
    document.getElementById('hero-carousel').addEventListener('mouseleave', resetCarouselTimer);

    // Touch support for mobile
    let touchStartX = 0;
    document.getElementById('hero-carousel').addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    document.getElementById('hero-carousel').addEventListener('touchend', function(e) {
      let dx = e.changedTouches[0].screenX - touchStartX;
      if (dx > 50) showCard((activeIndex - 1 + cards.length) % cards.length);
      else if (dx < -50) nextCard();
    });