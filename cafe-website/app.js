// Data
const menuItems = [
  { name: 'Espresso', price: 45 },
  { name: 'Cappuccino', price: 55 },
  { name: 'Latte', price: 60 },
  { name: 'Türk Kahvesi', price: 40 },
  { name: 'Çay', price: 25 },
  { name: 'Cheesecake', price: 70 },
  { name: 'Kruvasan', price: 50 },
  { name: 'Sandviç', price: 80 },
  { name: 'Soğuk Kahve', price: 65 },
  { name: 'Limonata', price: 35 },
];

// Populate Data
const menuList = document.getElementById('menu-list');
const priceList = document.getElementById('price-list');

if (menuList) {
    menuList.innerHTML = menuItems.map(item => `
        <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-coffee-500 hover:shadow-lg transition-shadow">
            <span class="text-xl font-medium text-coffee-800">${item.name}</span>
            <span class="text-xl font-bold text-coffee-600">${item.price}₺</span>
        </div>
    `).join('');
}

if (priceList) {
    priceList.innerHTML = menuItems.map(item => `
        <tr class="border-b border-coffee-100 hover:bg-coffee-50 transition-colors">
            <td class="py-3 px-6 text-coffee-700">${item.name}</td>
            <td class="py-3 px-6 text-right font-semibold text-coffee-900">${item.price}₺</td>
        </tr>
    `).join('');
}

// Icons
if (window.lucide) {
    lucide.createIcons();
}

// Sidebar Logic
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

let isOpen = false;

function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        menuBtn.innerHTML = '<i data-lucide="x"></i>';
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    }
    if (window.lucide) lucide.createIcons();
}

if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isOpen) toggleMenu();
    });
});

// Routing Logic
function handleRoute() {
    // Default to 'home' if empty or just '#'
    const hash = window.location.hash;
    let path = 'home';

    if (hash.length > 2) {
        path = hash.substring(2); // Remove '#/'
    } else if (hash === '#/' || hash === '') {
        path = 'home';
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(path);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        // Fallback to home if page not found
        document.getElementById('home').classList.add('active');
    }
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
