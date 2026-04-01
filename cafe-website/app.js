// Data embedded directly into app.js
const menuData = [
    { name: "Espresso", price: "45₺", category: "Sıcak İçecekler", image: "☕" },
    { name: "Cappuccino", price: "55₺", category: "Sıcak İçecekler", image: "☕" },
    { name: "Latte", price: "60₺", category: "Sıcak İçecekler", image: "☕" },
    { name: "Türk Kahvesi", price: "40₺", category: "Sıcak İçecekler", image: "☕" },
    { name: "Çay", price: "25₺", category: "Sıcak İçecekler", image: "🍵" },
    { name: "Soğuk Kahve", price: "65₺", category: "Soğuk İçecekler", image: "🧊" },
    { name: "Limonata", price: "35₺", category: "Soğuk İçecekler", image: "🍋" },
    { name: "Cheesecake", price: "70₺", category: "Tatlılar", image: "🍰" },
    { name: "Kruvasan", price: "50₺", category: "Atıştırmalıklar", image: "🥐" },
    { name: "Sandviç", price: "80₺", category: "Yiyecekler", image: "🥪" }
];

// Router Configuration
const routes = {
    '/': homeView,
    '/hakkinda': hakkindaView,
    '/destek': destekView,
    '/iletisim': iletisimView,
    '/subeler': subelerView,
    '/menu': menuView,
    '/fiyatlar': fiyatlarView
};

// Application State
const appContent = document.getElementById('app-content');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Initialization
function init() {
    setupEventListeners();
    handleRouting();
}

// Event Listeners
function setupEventListeners() {
    // Hamburger Menu Toggle
    menuBtn.addEventListener('click', openSidebar);
    closeMenuBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Sidebar Links Click -> Close Sidebar on mobile (always useful)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });

    // Hash Change Event for Routing
    window.addEventListener('hashchange', handleRouting);
}

// Sidebar Controls
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    sidebarOverlay.classList.add('block'); // Ensuring it becomes visible
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
    sidebarOverlay.classList.remove('block');
}

// Routing Logic
function handleRouting() {
    const hash = window.location.hash || '#/';
    const path = hash.replace('#', '');

    // Find matching route or fallback to Home
    const viewFunction = routes[path] || routes['/'];

    // Clear current content
    appContent.innerHTML = '';

    // Render new content
    appContent.appendChild(viewFunction());

    // Update active link styling
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('bg-white', 'bg-opacity-20');
        } else {
            link.classList.remove('bg-white', 'bg-opacity-20');
        }
    });
}

// --- Views ---

function homeView() {
    const div = document.createElement('div');
    div.className = 'flex flex-col items-center text-center space-y-8 animate-fade-in-up';

    div.innerHTML = `
        <div class="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı Görseli" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6">
                <h2 class="text-4xl md:text-6xl font-playfair font-bold mb-4">Hoş Geldiniz</h2>
                <p class="text-lg md:text-2xl font-lato max-w-2xl text-center">Kahvenin en taze hali, sıcacık bir atmosferle buluşuyor.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div class="text-4xl mb-4">☕</div>
                <h3 class="text-xl font-playfair font-bold mb-2 text-coffee-dark">Özenle Seçilmiş Çekirdekler</h3>
                <p class="text-gray-600 text-center text-sm">Dünyanın dört bir yanından gelen en kaliteli kahve çekirdeklerini sizin için kavuruyoruz.</p>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div class="text-4xl mb-4">🍰</div>
                <h3 class="text-xl font-playfair font-bold mb-2 text-coffee-dark">Taze Tatlılar</h3>
                <p class="text-gray-600 text-center text-sm">Kahvenizin yanına eşlik edecek günlük ve taze yapım tatlı çeşitlerimiz.</p>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                <div class="text-4xl mb-4">🌿</div>
                <h3 class="text-xl font-playfair font-bold mb-2 text-coffee-dark">Sıcak Atmosfer</h3>
                <p class="text-gray-600 text-center text-sm">Arkadaşlarınızla keyifli vakit geçirebileceğiniz ya da rahatça çalışabileceğiniz alanlar.</p>
            </div>
        </div>
    `;
    return div;
}

function hakkindaView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="text-3xl font-playfair font-bold text-coffee-dark mb-6 border-b-2 border-coffee-dark pb-2 inline-block">Hakkında</h2>
        <div class="bg-white p-8 rounded-xl shadow-md text-gray-800 leading-relaxed space-y-4">
            <p>Kahve Dükkanı olarak 2015 yılından bu yana siz değerli misafirlerimize en iyi kahve deneyimini sunmayı amaçlıyoruz. Küçük bir dükkanda başlayan hikayemiz, kahveye olan tutkumuz ve sizlerin desteğiyle büyüdü.</p>
            <p>Amacımız sadece bir içecek sunmak değil, aynı zamanda kendinizi evinizde hissedeceğiniz sıcak bir ortam yaratmaktır. Her bir fincan kahvemizde usta baristalarımızın sevgisi ve özeni bulunmaktadır.</p>
        </div>
    `;
    return div;
}

function destekView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="text-3xl font-playfair font-bold text-coffee-dark mb-6 border-b-2 border-coffee-dark pb-2 inline-block">Destek</h2>
        <div class="bg-white p-8 rounded-xl shadow-md text-gray-800">
            <h3 class="text-xl font-bold mb-4">Sıkça Sorulan Sorular</h3>
            <div class="space-y-4">
                <details class="group border-b border-gray-200 pb-4">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span>Çalışma saatleriniz nedir?</span>
                        <span class="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <p class="text-gray-600 mt-3 group-open:animate-fadeIn">Hafta içi 07:00 - 22:00, Hafta sonu 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                </details>
                <details class="group border-b border-gray-200 pb-4">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span>Paket servisiniz var mı?</span>
                        <span class="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <p class="text-gray-600 mt-3 group-open:animate-fadeIn">Evet, anlaşmalı kurye platformları üzerinden sipariş verebilirsiniz.</p>
                </details>
            </div>
            <div class="mt-8">
                <h3 class="text-xl font-bold mb-2">Bize Ulaşın</h3>
                <p>Sorunlarınız veya önerileriniz için: <a href="mailto:destek@kahvedukkani.com" class="text-blue-600 hover:underline">destek@kahvedukkani.com</a></p>
            </div>
        </div>
    `;
    return div;
}

function iletisimView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="text-3xl font-playfair font-bold text-coffee-dark mb-6 border-b-2 border-coffee-dark pb-2 inline-block">İletişim</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-md text-gray-800">
                <h3 class="text-xl font-bold mb-4">İletişim Bilgileri</h3>
                <ul class="space-y-4">
                    <li class="flex items-center space-x-3">
                        <svg class="w-6 h-6 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>Kahve Caddesi No:123, Kadıköy, İstanbul</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <svg class="w-6 h-6 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <span>0216 555 12 34</span>
                    </li>
                    <li class="flex items-center space-x-3">
                        <svg class="w-6 h-6 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <span>iletisim@kahvedukkani.com</span>
                    </li>
                </ul>
            </div>

            <form class="bg-white p-8 rounded-xl shadow-md text-gray-800 space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                <h3 class="text-xl font-bold mb-4">Bize Yazın</h3>
                <div>
                    <label class="block text-sm font-medium text-gray-700">İsim</label>
                    <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-dark focus:ring focus:ring-coffee-dark focus:ring-opacity-50 p-2 border" required>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">E-posta</label>
                    <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-dark focus:ring focus:ring-coffee-dark focus:ring-opacity-50 p-2 border" required>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700">Mesaj</label>
                    <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee-dark focus:ring focus:ring-coffee-dark focus:ring-opacity-50 p-2 border" required></textarea>
                </div>
                <button type="submit" class="w-full bg-coffee-dark text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors">Gönder</button>
            </form>
        </div>
    `;
    return div;
}

function subelerView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="text-3xl font-playfair font-bold text-coffee-dark mb-6 border-b-2 border-coffee-dark pb-2 inline-block">Şube Konumları</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-coffee-dark">
                <h3 class="text-xl font-bold mb-2">Kadıköy Merkez Şube</h3>
                <p class="text-gray-600 mb-4">Kahve Caddesi No:123, Kadıköy, İstanbul</p>
                <div class="text-sm text-gray-500">
                    <p>Çalışma: 07:00 - 23:00</p>
                    <p>Tel: 0216 555 12 34</p>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-coffee-dark">
                <h3 class="text-xl font-bold mb-2">Beşiktaş Şube</h3>
                <p class="text-gray-600 mb-4">Deniz Sokak No:45, Beşiktaş, İstanbul</p>
                <div class="text-sm text-gray-500">
                    <p>Çalışma: 07:30 - 22:30</p>
                    <p>Tel: 0212 555 45 67</p>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-coffee-dark">
                <h3 class="text-xl font-bold mb-2">Bostanlı Şube</h3>
                <p class="text-gray-600 mb-4">Kordon Boyu No:78, Karşıyaka, İzmir</p>
                <div class="text-sm text-gray-500">
                    <p>Çalışma: 08:00 - 23:30</p>
                    <p>Tel: 0232 555 89 01</p>
                </div>
            </div>
        </div>
    `;
    return div;
}

function menuView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="text-3xl font-playfair font-bold text-coffee-dark mb-6 border-b-2 border-coffee-dark pb-2 inline-block">Menü İçerikleri</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="menu-grid">
            <!-- Items injected by JS -->
        </div>
    `;

    // Group items by category (optional, but requested simple list, so we map them all)
    const grid = div.querySelector('#menu-grid');

    menuData.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow';
        itemCard.innerHTML = `
            <div class="text-5xl bg-coffee-cream p-3 rounded-full flex-shrink-0">${item.image}</div>
            <div class="flex-grow">
                <h3 class="text-xl font-bold text-gray-800">${item.name}</h3>
                <p class="text-sm text-gray-500">${item.category}</p>
            </div>
            <div class="text-xl font-playfair font-bold text-coffee-dark">${item.price}</div>
        `;
        grid.appendChild(itemCard);
    });

    return div;
}

function fiyatlarView() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2 class="text-3xl font-playfair font-bold text-coffee-dark mb-6 border-b-2 border-coffee-dark pb-2 inline-block">Fiyatlar</h2>
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-coffee-dark text-coffee-cream">
                    <tr>
                        <th scope="col" class="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Ürün</th>
                        <th scope="col" class="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Kategori</th>
                        <th scope="col" class="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider">Fiyat</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200" id="pricing-table-body">
                    <!-- Items injected by JS -->
                </tbody>
            </table>
        </div>
    `;

    const tbody = div.querySelector('#pricing-table-body');

    // Sort items by category then name for better presentation
    const sortedData = [...menuData].sort((a, b) => {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return a.name.localeCompare(b.name);
    });

    sortedData.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 transition-colors';
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center space-x-2">
                <span>${item.image}</span>
                <span>${item.name}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.category}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-coffee-dark text-right">${item.price}</td>
        `;
        tbody.appendChild(tr);
    });

    return div;
}

// Start the app
init();
