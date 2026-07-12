document.addEventListener('DOMContentLoaded', () => {
    // Menu Data
    const menuItems = [
        { name: "Espresso", price: 45 },
        { name: "Cappuccino", price: 55 },
        { name: "Latte", price: 60 },
        { name: "Türk Kahvesi", price: 40 },
        { name: "Çay", price: 25 },
        { name: "Cheesecake", price: 70 },
        { name: "Kruvasan", price: 50 },
        { name: "Sandviç", price: 80 },
        { name: "Soğuk Kahve", price: 65 },
        { name: "Limonata", price: 35 }
    ];

    // Populate Menu İçerikleri (Names only)
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        menuItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'py-2 px-4 bg-white rounded shadow-sm border border-brown-100 font-semibold flex items-center before:content-["•"] before:text-brown-500 before:mr-2';
            div.textContent = item.name;
            menuContainer.appendChild(div);
        });
    }

    // Populate Fiyatlar (Names and Prices)
    const pricesContainer = document.getElementById('prices-container');
    if (pricesContainer) {
        menuItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'flex justify-between items-center py-3 border-b border-brown-300 last:border-0';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'font-bold text-lg';
            nameSpan.textContent = item.name;

            const priceSpan = document.createElement('span');
            priceSpan.className = 'font-bold text-brown-900 bg-white px-3 py-1 rounded shadow-sm';
            priceSpan.textContent = `${item.price}₺`;

            div.appendChild(nameSpan);
            div.appendChild(priceSpan);
            pricesContainer.appendChild(div);
        });
    }

    // Sidebar Toggle Logic
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Hash-based Routing
    const sections = document.querySelectorAll('.section');

    function handleRoute() {
        const hash = window.location.hash || '#anasayfa';

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.classList.add('active');
        } else {
            // Fallback to anasayfa
            document.getElementById('anasayfa').classList.add('active');
        }

        // Close sidebar on navigation (mobile friendly)
        closeSidebar();

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);

    // Handle initial route on load
    handleRoute();
});