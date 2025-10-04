document.addEventListener("DOMContentLoaded", () => {

    // --- SMOOTH SCROLL INITIALIZATION (Lenis) ---
    const lenis = new Lenis({
        autoRaf: true,
    });
    lenis.on('scroll', (e) => {
        // You can add scroll-based effects here if needed
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // --- RESPONSIVE TEXT UPDATE ---
    function updatep() {
        let para = document.getElementById("saletext");
        if (window.innerWidth <= 768) {
            para.textContent = "Adobe Summer Sale!";
        } else {
            para.textContent = "Adobe Summer Sale! Save on select plans including All Apps, Photoshop, and more. Ends Jul 30.";
        }
    }
    window.addEventListener("load", updatep);
    window.addEventListener("resize", updatep);


    // --- DARK/LIGHT THEME TOGGLE ---
    const themeToggle = document.getElementById('theme-toggle');
    // NOTE: Make sure you have sun.png and moon.png in your /material/ folder
    const sunIcon = 'material/sun.png';
    const moonIcon = 'material/moon.png';

    // Function to apply the saved theme on page load
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.src = moonIcon;
            themeToggle.style.transform = 'rotate(360deg)';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.src = sunIcon;
            themeToggle.style.transform = 'rotate(0deg)';
        }
    };

    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    applyTheme(currentTheme);

    // Event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            localStorage.removeItem('theme');
            applyTheme('light');
        } else {
            localStorage.setItem('theme', 'dark');
            applyTheme('dark');
        }
    });


    // --- SCROLL-IN ANIMATIONS (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });

});