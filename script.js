// Smooth scrolling for navigation links
document.querySelectorAll('ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href'); // Get the href value (e.g., "#home")
    const targetSection = document.querySelector(targetId); // Find the target section
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth' // Smooth scroll to the target section
      });
    }
  });
});


let marker = document.querySelector('#marker');
let list = document.querySelectorAll('ul.nav-links li');

// Function to move the marker
function moveIndicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

// Function to add glowing effect
function addGlow(color) {
    marker.style.background = color;
    marker.style.boxShadow = `0 0 15px ${color},
                              0 0 30px ${color},
                              0 0 40px ${color},
                              0 0 60px ${color}`;
}

// Function to remove glowing effect
function removeGlow() {
    marker.style.background = 'transparent';
    marker.style.boxShadow = 'none';
}

// Define colors for each link
const colors = ['#ff0000', '#df2fff', '#5da6ff', '#0f0', '#ff0'];

list.forEach((link, index) => {
    // Add glow on hover
    link.addEventListener('mouseenter', (e) => {
        moveIndicator(e.target);
        addGlow(colors[index]); // Apply the corresponding color
    });

    // Remove glow when cursor leaves
    link.addEventListener('mouseleave', () => {
        removeGlow();
    });
});

const bubbles = document.querySelector('.bubbles');

// Pause rotation when hovering over any bubble
bubbles.addEventListener('mouseenter', () => {
  bubbles.style.animationPlayState = 'paused';
});

// Resume rotation when leaving the bubbles
bubbles.addEventListener('mouseleave', () => {
  bubbles.style.animationPlayState = 'running';
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

