// Show popup when page loads
window.onload = function() {
  document.getElementById('telegramPopup').style.display = 'block';
}

// Close popup function
function closePopup() {
  document.getElementById('telegramPopup').style.display = 'none';
}

    // Hamburger menu toggle
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

