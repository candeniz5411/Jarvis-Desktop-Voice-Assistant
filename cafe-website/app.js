const menuItems = [
    { name: "Espresso", price: 45, category: "Kahve" },
    { name: "Cappuccino", price: 55, category: "Kahve" },
    { name: "Latte", price: 60, category: "Kahve" },
    { name: "Türk Kahvesi", price: 40, category: "Kahve" },
    { name: "Çay", price: 25, category: "İçecek" },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk İçecek" },
    { name: "Limonata", price: 35, category: "Soğuk İçecek" },
    { name: "Cheesecake", price: 70, category: "Tatlı" },
    { name: "Kruvasan", price: 50, category: "Atıştırmalık" },
    { name: "Sandviç", price: 80, category: "Atıştırmalık" },
];

// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const mainContent = document.getElementById('main-content');
const sidebarLinks = document.querySelectorAll('#sidebar nav a');

// Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

if (menuBtn) menuBtn.addEventListener('click', openSidebar);
if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
const pages = {
    home: `
        <div class="flex flex-col items-center justify-center text-center fade-in space-y-8">
            <h2 class="text-4xl md:text-5xl font-serif font-bold text-coffee mb-4">Hoş Geldiniz</h2>
            <p class="text-xl max-w-2xl text-coffee/80">En taze kahve çekirdekleri ve sıcak atmosferimizle sizi bekliyoruz. Kahve tutkusu burada başlar.</p>
            <div class="w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Kahve Dükkanı Atmosferi" class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700">
            </div>
            <a href="#menu" class="mt-8 bg-coffee text-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition shadow-lg">Menüyü İncele</a>
        </div>
    `,
    about: `
        <div class="max-w-3xl mx-auto fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee/20 pb-2">Hakkımızda</h2>
            <p class="text-lg leading-relaxed mb-4">Kahve Dükkanı olarak, 2010 yılından beri şehrin en iyi kahvesini sunma tutkusuyla çalışıyoruz. Çekirdeklerimizi özenle seçiyor, her fincanda size mükemmel deneyimi yaşatmayı hedefliyoruz.</p>
            <p class="text-lg leading-relaxed">Sadece kahve değil, aynı zamanda dostluk ve keyifli sohbetlerin de adresi olmak istiyoruz.</p>
        </div>
    `,
    support: `
        <div class="max-w-3xl mx-auto fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee/20 pb-2">Destek</h2>
            <p class="text-lg mb-4">Sizlere daha iyi hizmet verebilmek için her türlü görüş, öneri ve şikayetinizi dinlemeye hazırız.</p>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Rezervasyon yapabilir miyim? - Evet, telefon ile arayarak yapabilirsiniz.</li>
                    <li>Vegan seçenekleriniz var mı? - Evet, süt alternatiflerimiz ve vegan atıştırmalıklarımız mevcut.</li>
                    <li>Wi-Fi var mı? - Evet, müşterilerimiz için ücretsiz yüksek hızlı internetimiz var.</li>
                </ul>
            </div>
        </div>
    `,
    contact: `
        <div class="max-w-3xl mx-auto fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee/20 pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-xl mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Adres:</strong> Bağdat Caddesi No: 123, Kadıköy / İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> +90 212 555 1234</p>
                    <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                </div>
                <div class="bg-coffee/10 p-6 rounded-lg">
                    <h3 class="font-bold text-xl mb-4">Çalışma Saatleri</h3>
                    <p>Pazartesi - Cuma: 07:00 - 22:00</p>
                    <p>Cumartesi - Pazar: 08:00 - 23:00</p>
                </div>
            </div>
        </div>
    `,
    locations: `
        <div class="max-w-4xl mx-auto fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee/20 pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition menu-card">
                    <h3 class="font-bold text-xl mb-2 text-coffee">Kadıköy Merkez</h3>
                    <p class="text-sm text-gray-600">Bağdat Caddesi No: 123</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition menu-card">
                    <h3 class="font-bold text-xl mb-2 text-coffee">Beşiktaş İskele</h3>
                    <p class="text-sm text-gray-600">Çırağan Caddesi No: 45</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition menu-card">
                    <h3 class="font-bold text-xl mb-2 text-coffee">Karaköy Sahil</h3>
                    <p class="text-sm text-gray-600">Kemankeş Caddesi No: 12</p>
                </div>
            </div>
        </div>
    `,
    menu: `
        <div class="max-w-5xl mx-auto fade-in">
            <h2 class="text-3xl font-serif font-bold mb-8 text-center border-b-2 border-coffee/20 pb-4">Menü İçerikleri</h2>
            <div id="menu-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Menu items injected here -->
            </div>
        </div>
    `,
    prices: `
        <div class="max-w-3xl mx-auto fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-coffee/20 pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-coffee text-cream">
                        <tr>
                            <th class="p-4">Ürün</th>
                            <th class="p-4 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody id="price-table-body" class="divide-y divide-gray-200">
                        <!-- Price items injected here -->
                    </tbody>
                </table>
            </div>
        </div>
    `
};

function renderMenuContent() {
    const container = document.getElementById('menu-container');
    if (!container) return;

    container.innerHTML = menuItems.map(item => `
        <div class="bg-white p-6 rounded-lg shadow-md menu-card border-l-4 border-coffee flex justify-between items-center">
            <div>
                <h3 class="font-bold text-xl text-coffee">${item.name}</h3>
                <span class="text-sm text-gray-500 uppercase tracking-wide">${item.category}</span>
            </div>
            <span class="font-bold text-2xl text-coffee">${item.price}₺</span>
        </div>
    `).join('');
}

function renderPriceContent() {
    const tbody = document.getElementById('price-table-body');
    if (!tbody) return;

    tbody.innerHTML = menuItems.map(item => `
        <tr class="hover:bg-gray-50 transition">
            <td class="p-4 font-medium text-coffee">${item.name}</td>
            <td class="p-4 text-right font-bold text-coffee">${item.price}₺</td>
        </tr>
    `).join('');
}

function router() {
    // Get hash or default to home
    let hash = window.location.hash.slice(1) || 'home';

    // Check if hash exists in pages, if not default to home
    if (!pages[hash]) {
        hash = 'home';
    }

    // Render content
    if (mainContent) {
        mainContent.innerHTML = pages[hash];
    }

    // Reset scroll to top
    window.scrollTo(0, 0);

    // Execute specific logic for dynamic pages
    if (hash === 'menu') {
        renderMenuContent();
    } else if (hash === 'prices') {
        renderPriceContent();
    }
}

// Listen for hash changes
window.addEventListener('hashchange', router);

// Initial load
window.addEventListener('DOMContentLoaded', router);