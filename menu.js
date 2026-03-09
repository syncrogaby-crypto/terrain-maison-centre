// menu.js

// Function to toggle the mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Event listener for mobile menu toggle button
const toggleButton = document.getElementById('menu-toggle-button');
toggleButton.addEventListener('click', toggleMobileMenu);