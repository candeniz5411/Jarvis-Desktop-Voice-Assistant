const menuItems = [
    { name: "Espresso", price: 45, category: "Kahve" },
    { name: "Cappuccino", price: 55, category: "Kahve" },
    { name: "Latte", price: 60, category: "Kahve" },
    { name: "Türk Kahvesi", price: 40, category: "Kahve" },
    { name: "Çay", price: 25, category: "İçecek" },
    { name: "Cheesecake", price: 70, category: "Tatlı" },
    { name: "Kruvasan", price: 50, category: "Atıştırmalık" },
    { name: "Sandviç", price: 80, category: "Atıştırmalık" },
    { name: "Soğuk Kahve", price: 65, category: "Kahve" },
    { name: "Limonata", price: 35, category: "İçecek" },
];

document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Initialize overlay state
    overlay.classList.add('opacity-0');

    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            // Open
            sidebar.classList.remove('-translate-x-full');

            overlay.classList.remove('hidden');
            // Trigger reflow to enable transition
            void overlay.offsetWidth;
            overlay.classList.remove('opacity-0');
            // overlay.classList.add('opacity-100'); // Default opacity is 1 if opacity-0 is removed, unless base style is different.
            // Tailwind bg-black bg-opacity-50 sets --tw-bg-opacity. opacity-0 sets opacity: 0.
            // So removing opacity-0 is enough if the element has normal opacity.
        } else {
            // Close
            sidebar.classList.add('-translate-x-full');

            overlay.classList.add('opacity-0');

            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
        }
    }

    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // --- Routing Logic ---
    function handleRouting() {
        const hash = window.location.hash || '#home';
        const sections = document.querySelectorAll('.page-section');

        sections.forEach(section => {
            section.classList.add('hidden');
        });

        const activeSection = document.querySelector(hash);
        if (activeSection) {
            activeSection.classList.remove('hidden');
            // Re-trigger animation
            activeSection.classList.remove('animate-fade-in');
            void activeSection.offsetWidth; // Trigger reflow
            activeSection.classList.add('animate-fade-in');

            // Scroll to top
            window.scrollTo(0, 0);
        }
    }

    window.addEventListener('hashchange', handleRouting);
    // Initial load
    handleRouting();

    // --- Render Menu & Prices ---
    const menuContainer = document.getElementById('menu-container');
    const priceListBody = document.getElementById('price-list-body');

    if (menuContainer) {
        menuItems.forEach(item => {
            // Render Card for "Menu İçerikleri"
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 border border-gray-100';
            card.innerHTML = `
                <div class="h-48 flex items-center justify-center bg-coffee-light relative group">
                    <span class="text-6xl text-coffee-dark opacity-30 font-serif group-hover:scale-110 transition-transform duration-500">${item.name.charAt(0)}</span>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-bold text-xl text-coffee-dark font-serif">${item.name}</h3>
                        <span class="text-lg font-bold text-coffee-medium bg-cream px-2 py-1 rounded">${item.price}₺</span>
                    </div>
                    <p class="text-gray-600 text-sm italic border-t border-gray-100 pt-2 mt-2">${item.category}</p>
                </div>
            `;
            menuContainer.appendChild(card);
        });
    }

    if (priceListBody) {
        menuItems.forEach(item => {
            // Render Row for "Fiyat Listesi"
            const row = document.createElement('tr');
            row.className = 'hover:bg-cream transition-colors group';
            row.innerHTML = `
                <td class="p-4 border-b border-gray-100 font-medium text-coffee-dark group-hover:pl-6 transition-all duration-300">${item.name}</td>
                <td class="p-4 border-b border-gray-100 text-right font-bold text-coffee-medium">${item.price}₺</td>
            `;
            priceListBody.appendChild(row);
        });
    }
});
