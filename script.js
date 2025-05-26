const movieCards = document.querySelectorAll('.movie-card');
const fixedVideoContainer = document.querySelector('#fixed-video-container');
const fixedTextContainer = document.querySelector('#fixed-text-container');
const faqElements = document.querySelectorAll('.elem');


movieCards.forEach((card) => {
  const video = card.querySelector('video');

  card.addEventListener('mouseenter', () => {
    fixedVideoContainer.style.display = 'block';

    // Clear previous content
    fixedVideoContainer.innerHTML = '';

    // Clone and play hovered video
    const clone = video.cloneNode(true);
    clone.muted = false;
    clone.autoplay = true;
    clone.loop = true;
    fixedVideoContainer.appendChild(clone);
  });

  card.addEventListener('mouseleave', () => {
    fixedVideoContainer.style.display = 'none';
    fixedVideoContainer.innerHTML = '';
  });
});

// FAQ hover text display logic
faqElements.forEach((faq) => {
  faq.addEventListener('mouseenter', () => {
    const infoText = faq.getAttribute('data-info');
    
    fixedTextContainer.innerHTML = '';

    const h3 = document.createElement('h3');
    h3.innerText = infoText;
    fixedTextContainer.appendChild(h3);

    fixedTextContainer.style.display = 'block';
  });

  faq.addEventListener('mouseleave', () => {
    fixedTextContainer.style.display = 'none';
    fixedTextContainer.innerHTML = '';
  });
});


