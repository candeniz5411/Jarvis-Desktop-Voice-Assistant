document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('.content-section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking a link on mobile
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                toggleSidebar();
            }
        });
    });

    // Hash-based routing
    function handleRouting() {
        let hash = window.location.hash || '#home';

        // Hide all sections
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show the active section
        const activeSection = document.querySelector(hash);
        if (activeSection) {
            activeSection.classList.remove('hidden');
        } else {
            // Default to home if hash is invalid
            document.getElementById('home').classList.remove('hidden');
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    // Initial routing on page load
    handleRouting();
});