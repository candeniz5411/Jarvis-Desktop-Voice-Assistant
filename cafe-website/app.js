// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const mainContent = document.getElementById('main-content');

// Menu Data
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
    { name: 'Limonata', price: 35 }
];

// Sidebar Toggle Logic
function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    }
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
const sidebarLinks = sidebar.querySelectorAll('a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/support': renderSupport,
    '/contact': renderContact,
    '/locations': renderLocations,
    '/menu': renderMenu,
    '/prices': renderPrices
};

function router() {
    // Get the hash from the URL, default to '/'
    let hash = window.location.hash.slice(1) || '/';

    // Find the matching route or default to home
    const renderFunction = routes[hash] || routes['/'];

    // Clear content and add animation class
    mainContent.innerHTML = '';
    mainContent.classList.remove('fade-in');

    // Slight delay to re-trigger animation
    setTimeout(() => {
        mainContent.innerHTML = renderFunction();
        mainContent.classList.add('fade-in');
    }, 50);
}

// Listen for hash changes
window.addEventListener('hashchange', router);

// Initialize router on page load
window.addEventListener('load', router);


// --- View Render Functions ---

function renderHome() {
    return `
        <div class="text-center">
            <h2 class="text-4xl md:text-5xl font-serif font-bold text-brown-900 mb-6">Kafe Keyfi'ne Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl text-brown-700 mb-8 max-w-2xl mx-auto">En taze kahve çekirdekleri ve enfes tatlılarımızla gününüze keyif katın. Sıcacık bir atmosferde sizi ağırlamaktan mutluluk duyarız.</p>
            <div class="rounded-lg overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" alt="Kafe İç Mekan ve Kahve" class="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500">
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="bg-brown-100 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-4 border-b border-brown-300 pb-2">Hakkımızda</h2>
            <p class="text-lg text-brown-700 mb-4">Kafe Keyfi, 2010 yılından bu yana şehrin kalbinde kahve tutkunlarına hizmet vermektedir. Amacımız, kaliteli kahve çekirdeklerini usta ellerde işleyerek sizlere eşsiz bir deneyim sunmaktır.</p>
            <p class="text-lg text-brown-700">Sadece bir kafe değil, aynı zamanda dostlarınızla sohbet edebileceğiniz, kitabınızı okuyabileceğiniz ve huzur bulacağınız bir mekan olmak için çalışıyoruz.</p>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="bg-brown-100 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-4 border-b border-brown-300 pb-2">Destek</h2>
            <p class="text-lg text-brown-700 mb-4">Müşteri memnuniyeti bizim için her şeyden önemlidir. Hizmetlerimizle ilgili her türlü soru, öneri veya şikayetiniz için bize ulaşabilirsiniz.</p>
            <ul class="list-disc list-inside text-lg text-brown-700 space-y-2">
                <li>Sıkça Sorulan Sorular (SSS)</li>
                <li>Geri Bildirim Formu</li>
                <li>Kalite Standartlarımız</li>
            </ul>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="bg-brown-100 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-4 border-b border-brown-300 pb-2">İletişim</h2>
            <div class="text-lg text-brown-700 space-y-4">
                <p><strong class="font-bold">Adres:</strong> Kahve Sokak No: 42, Merkez/İstanbul</p>
                <p><strong class="font-bold">Telefon:</strong> +90 (212) 555 01 23</p>
                <p><strong class="font-bold">E-posta:</strong> info@kafekeyfi.com</p>
                <p><strong class="font-bold">Çalışma Saatleri:</strong> Her gün 08:00 - 23:00</p>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div class="bg-brown-100 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-4 border-b border-brown-300 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div class="bg-cream p-4 rounded border border-brown-300">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Merkez Şube</h3>
                    <p class="text-brown-700">Kahve Sokak No: 42, Merkez</p>
                </div>
                <div class="bg-cream p-4 rounded border border-brown-300">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Moda Şubesi</h3>
                    <p class="text-brown-700">Moda Caddesi No: 15, Kadıköy</p>
                </div>
                <div class="bg-cream p-4 rounded border border-brown-300">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Beşiktaş Şubesi</h3>
                    <p class="text-brown-700">Barbaros Bulvarı No: 88, Beşiktaş</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    let itemsHtml = menuItems.map(item => `
        <div class="bg-cream p-4 rounded-md shadow flex justify-between items-center border border-brown-100 hover:border-brown-300 transition-colors">
            <span class="text-lg font-bold text-brown-900">${item.name}</span>
        </div>
    `).join('');

    return `
        <div class="bg-brown-100 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6 border-b border-brown-300 pb-2 text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    let itemsHtml = menuItems.map(item => `
        <div class="flex justify-between items-center p-3 border-b border-brown-300 last:border-0 hover:bg-brown-50 transition-colors">
            <span class="text-lg text-brown-900">${item.name}</span>
            <span class="text-lg font-bold text-brown-700">${item.price}₺</span>
        </div>
    `).join('');

    return `
        <div class="bg-brown-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6 border-b border-brown-300 pb-2 text-center">Fiyatlar</h2>
            <div class="bg-cream rounded-md border border-brown-300">
                ${itemsHtml}
            </div>
        </div>
    `;
}
