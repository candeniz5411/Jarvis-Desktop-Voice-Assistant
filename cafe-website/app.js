// Menu Data
const menuItems = [
    { name: "Espresso", price: 45, image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Cappuccino", price: 55, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Latte", price: 60, image: "https://images.unsplash.com/photo-1593456986500-37f311c12574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Türk Kahvesi", price: 40, image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Çay", price: 25, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Cheesecake", price: 70, image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Kruvasan", price: 50, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Sandviç", price: 80, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Soğuk Kahve", price: 65, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Limonata", price: 35, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const mainContent = document.getElementById('main-content');
const sections = document.querySelectorAll('.page-section');

// Navigation Logic
function handleRouting() {
    const hash = window.location.hash || '#home';
    const activeSectionId = hash.substring(1) + '-section'; // e.g. "home-section"

    // Hide all sections
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the active section
    const activeSection = document.getElementById(activeSectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    } else {
        // Fallback to home if section not found
        document.getElementById('home-section').classList.remove('hidden');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Sidebar Logic
function openSidebar() {
    sidebar.classList.add('sidebar-open'); // Apply CSS override
    // Also remove the Tailwind translate class just in case, though the override handles it
    sidebar.classList.remove('-translate-x-full');

    sidebarOverlay.classList.remove('hidden');
    sidebarOverlay.classList.add('overlay-open');
}

function closeSidebar() {
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('-translate-x-full');

    sidebarOverlay.classList.remove('overlay-open');
    sidebarOverlay.classList.add('hidden');
}

// Render Menu Items
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    const priceListBody = document.getElementById('price-list-body');

    if (menuContainer) {
        menuContainer.innerHTML = menuItems.map(item => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl text-coffee-dark mb-2">${item.name}</h3>
                    <p class="text-gray-600 font-bold">${item.price}₺</p>
                </div>
            </div>
        `).join('');
    }

    if (priceListBody) {
        priceListBody.innerHTML = menuItems.map(item => `
            <tr>
                <td class="py-3 px-4 border-b border-gray-100">${item.name}</td>
                <td class="py-3 px-4 border-b border-gray-100 text-right font-bold">${item.price}₺</td>
            </tr>
        `).join('');
    }
}

// Event Listeners
window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', () => {
    handleRouting(); // Handle initial load
    renderMenu();    // Populate menu
});

menuBtn.addEventListener('click', openSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Make closeSidebar global so onclick in HTML works
window.closeSidebar = closeSidebar;
