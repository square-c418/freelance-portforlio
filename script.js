const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    
    // Optional: Save preference to the browser
    localStorage.setItem('theme', targetTheme);
});

// Check for saved user preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}
