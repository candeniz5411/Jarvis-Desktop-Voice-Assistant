document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-container');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebarMenu.classList.toggle('-translate-x-full');
        sidebarOverlay.classList.toggle('hidden');
    }

    hamburgerMenu.addEventListener('click', toggleSidebar);
    closeMenu.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Hash-based Routing
    function handleRouting() {
        let hash = window.location.hash || '#ana-sayfa';

        // Remove trailing slash if present (edge case)
        if (hash.endsWith('/')) {
            hash = hash.slice(0, -1);
        }

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show active section
        const activeSectionId = `${hash.substring(1)}-section`;
        const activeSection = document.getElementById(activeSectionId);

        if (activeSection) {
            activeSection.classList.add('active');
        } else {
            // Default to ana-sayfa if section not found
            document.getElementById('ana-sayfa-section').classList.add('active');
            window.location.hash = '#ana-sayfa';
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    // Close sidebar when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebarMenu.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Initialize routing
    handleRouting();
});