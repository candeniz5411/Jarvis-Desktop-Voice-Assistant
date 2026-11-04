document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidePanel = document.getElementById('side-panel');
    const panelOverlay = document.getElementById('panel-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Toggle Side Panel
    function togglePanel() {
        const isOpen = sidePanel.classList.contains('open');

        if (isOpen) {
            sidePanel.classList.remove('open');
            hamburgerBtn.classList.remove('menu-open');
            panelOverlay.classList.add('hidden');
        } else {
            sidePanel.classList.add('open');
            hamburgerBtn.classList.add('menu-open');
            panelOverlay.classList.remove('hidden');
        }
    }

    hamburgerBtn.addEventListener('click', togglePanel);
    panelOverlay.addEventListener('click', togglePanel);

    // Hash-based Routing
    function handleRouting() {
        const hash = window.location.hash || '#home';

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.classList.add('active');
        } else {
            // Fallback to home if hash is invalid
            document.getElementById('home').classList.add('active');
        }

        // Close side panel if open (especially on mobile)
        if (sidePanel.classList.contains('open')) {
            togglePanel();
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    // Handle initial route on page load
    if(window.location.hash) {
         handleRouting();
    }

    // Add click listeners to links to ensure routing logic fires even if already on the hash
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const currentHash = window.location.hash || '#home';
            const targetHash = new URL(e.target.href).hash;

            if(currentHash === targetHash) {
                 e.preventDefault();
                 if (sidePanel.classList.contains('open')) {
                    togglePanel();
                }
            }
        });
    });
});
