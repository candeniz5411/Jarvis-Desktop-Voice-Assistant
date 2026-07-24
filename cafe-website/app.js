document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.content-section');

    // Toggle Sidebar
    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click (especially useful for mobile)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Hash-based Routing
    function handleRouting() {
        const hash = window.location.hash || '#anasayfa';

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('section-show');
            section.classList.add('section-hide');
        });

        // Show the target section
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.classList.remove('section-hide');
            targetSection.classList.add('section-show');
        } else {
            // Fallback to default
            const defaultSection = document.getElementById('anasayfa');
            if(defaultSection) {
                defaultSection.classList.remove('section-hide');
                defaultSection.classList.add('section-show');
            }
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    // Initial load route check
    handleRouting();
});