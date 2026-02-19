document.addEventListener('DOMContentLoaded', () => {
    // Menu Data
    const menuItems = [
        { name: "Espresso", price: 45, category: "Kahve", image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Cappuccino", price: 55, category: "Kahve", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Latte", price: 60, category: "Kahve", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Türk Kahvesi", price: 40, category: "Kahve", image: "https://images.unsplash.com/photo-1599309927670-349007f9c263?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Çay", price: 25, category: "İçecek", image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Cheesecake", price: 70, category: "Tatlı", image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Kruvasan", price: 50, category: "Atıştırmalık", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Sandviç", price: 80, category: "Atıştırmalık", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Soğuk Kahve", price: 65, category: "Kahve", image: "https://images.unsplash.com/photo-1517701604599-bb29b5c73553?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { name: "Limonata", price: 35, category: "İçecek", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
    ];

    // Elements
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');
    const menuGrid = document.getElementById('menu-grid');
    const priceListBody = document.getElementById('price-list-body');

    // Render Menu Grid (Images + Details)
    if (menuGrid) {
        menuGrid.innerHTML = menuItems.map(item => `
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-coffee-light/20 flex flex-col md:flex-row">
                <div class="md:w-1/3 h-48 md:h-auto">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                </div>
                <div class="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-baseline mb-2">
                            <h3 class="text-xl font-bold text-coffee-dark font-serif">${item.name}</h3>
                            <span class="text-lg font-bold text-coffee-dark bg-cream px-3 py-1 rounded-full">${item.price}₺</span>
                        </div>
                        <p class="text-gray-600 text-sm mb-4">${item.category}</p>
                    </div>
                    <button class="self-start text-sm text-coffee-dark border border-coffee-dark px-4 py-1 rounded hover:bg-coffee-dark hover:text-white transition-colors">Detay</button>
                </div>
            </div>
        `).join('');
    }

    // Render Price List (Simple Table)
    if (priceListBody) {
        priceListBody.innerHTML = menuItems.map(item => `
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="p-4 font-medium text-coffee-dark">${item.name}</td>
                <td class="p-4 text-right font-bold text-coffee-dark">${item.price}₺</td>
            </tr>
        `).join('');
    }

    // Sidebar Logic
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden', 'opacity-0');
        document.body.classList.add('overflow-hidden'); // Prevent scrolling body
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('opacity-0');
        setTimeout(() => {
            sidebarOverlay.classList.add('hidden');
        }, 300); // Wait for fade out
        document.body.classList.remove('overflow-hidden');
    }

    hamburgerBtn.addEventListener('click', openSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Routing Logic
    function handleRouting() {
        const hash = window.location.hash || '#home';
        const targetId = hash.replace('#', '') + '-section';

        // Hide all sections
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            window.scrollTo(0, 0);
        } else {
            // Default to home if hash not found
            document.getElementById('home-section').classList.remove('hidden');
        }
    }

    // Initial Route
    handleRouting();

    // Listen for hash changes
    window.addEventListener('hashchange', handleRouting);
});
