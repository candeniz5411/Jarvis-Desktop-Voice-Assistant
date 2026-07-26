document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-page');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Simple Hash-based Routing
    function handleRouting() {
        let hash = window.location.hash || '#ana-sayfa';

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.classList.add('active');
        } else {
            // Default to ana-sayfa if hash doesn't match any section
            document.getElementById('ana-sayfa').classList.add('active');
        }

        // Close sidebar on mobile after clicking a link
        if (!sidebar.classList.contains('-translate-x-full') && window.innerWidth < 768) {
            toggleSidebar();
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);

    // Initial route check
    handleRouting();
});