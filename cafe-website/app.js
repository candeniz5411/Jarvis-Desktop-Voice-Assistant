// Menu Data
const menuItems = [
    { name: "Espresso", price: 45, image: "https://images.unsplash.com/photo-1510591509098-f40962d438a7?auto=format&fit=crop&w=600&q=80" },
    { name: "Cappuccino", price: 55, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80" },
    { name: "Latte", price: 60, image: "https://images.unsplash.com/photo-1561882468-9110e03e0f7e?auto=format&fit=crop&w=600&q=80" },
    { name: "Türk Kahvesi", price: 40, image: "https://images.unsplash.com/photo-1599583753768-450ebf924151?auto=format&fit=crop&w=600&q=80" },
    { name: "Çay", price: 25, image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80" },
    { name: "Cheesecake", price: 70, image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80" },
    { name: "Kruvasan", price: 50, image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=600&q=80" },
    { name: "Sandviç", price: 80, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80" },
    { name: "Soğuk Kahve", price: 65, image: "https://images.unsplash.com/photo-1517701604599-bb29b5c73516?auto=format&fit=crop&w=600&q=80" },
    { name: "Limonata", price: 35, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" }
];

// Elements
const app = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeSidebarBtn = document.getElementById('close-sidebar');

// Sidebar Toggle
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

hamburgerBtn.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar on link click (mobile UX)
document.querySelectorAll('#sidebar nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Only close if on mobile or if sidebar is open
        if (!sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
        }
    });
});

// Routing
const routes = {
    '#home': renderHome,
    '#about': renderAbout,
    '#support': renderSupport,
    '#contact': renderContact,
    '#locations': renderLocations,
    '#menu': renderMenu,
    '#prices': renderPrices
};

function router() {
    const hash = window.location.hash || '#home';
    const renderFn = routes[hash] || renderHome;
    renderFn();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Render Functions
function renderHome() {
    app.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
            <h2 class="text-4xl font-bold text-coffee">Hoş Geldiniz</h2>
            <p class="text-xl max-w-2xl text-coffee-dark">
                En taze kahve çekirdekleri ve lezzetli atıştırmalıklarla keyifli anlar yaşamanız için buradayız.
            </p>
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1000&q=80"
                 alt="Kahve Keyfi"
                 class="rounded-lg shadow-xl w-full max-w-3xl object-cover h-64 md:h-96">
            <a href="#menu" class="bg-coffee hover:bg-coffee-dark text-cream font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
                Menüyü İncele
            </a>
        </div>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Hakkımızda</h2>
            <p class="text-lg leading-relaxed">
                Kafe Keyfi, kahve tutkusunu bir sanat haline getirenlerin buluşma noktasıdır. Yılların getirdiği deneyimle, dünyanın en iyi kahve çekirdeklerini özenle seçiyor ve sizin için kavuruyoruz.
            </p>
            <p class="text-lg leading-relaxed">
                Modern ve minimalist tasarımımızla, sadece bir kafe değil, aynı zamanda huzurlu bir çalışma ve sosyalleşme alanı sunuyoruz.
            </p>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80" class="rounded-lg shadow-md" alt="Kafe İçi">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80" class="rounded-lg shadow-md" alt="Kahve Hazırlığı">
            </div>
        </div>
    `;
}

function renderSupport() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Destek</h2>
            <p>Herhangi bir sorunuz veya öneriniz mi var? Size yardımcı olmaktan mutluluk duyarız.</p>
            <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-coffee">
                <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Rezervasyon gerekiyor mu? - Hayır, dilediğiniz zaman gelebilirsiniz.</li>
                    <li>Vegan seçenekleriniz var mı? - Evet, menümüzde vegan seçenekler mevcuttur.</li>
                    <li>Wi-Fi hizmetiniz var mı? - Evet, tüm müşterilerimize ücretsiz yüksek hızlı Wi-Fi sunuyoruz.</li>
                </ul>
            </div>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                        <span class="text-2xl">📍</span>
                        <p>Bağdat Caddesi No: 123, İstanbul</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <span class="text-2xl">📞</span>
                        <p>+90 (212) 555 00 00</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <span class="text-2xl">✉️</span>
                        <p>info@kafekeyfi.com</p>
                    </div>
                </div>
                <form class="space-y-4 bg-white p-6 rounded-lg shadow-md" onsubmit="event.preventDefault(); alert('Mesajınız alındı!');">
                    <input type="text" placeholder="Adınız" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee">
                    <input type="email" placeholder="E-posta" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee">
                    <textarea placeholder="Mesajınız" rows="4" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee"></textarea>
                    <button type="submit" class="w-full bg-coffee text-cream font-bold py-2 rounded hover:bg-coffee-dark transition">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderLocations() {
    app.innerHTML = `
        <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Location 1 -->
                <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 class="font-bold text-xl mb-2 text-coffee">Kadıköy</h3>
                    <p class="text-sm text-gray-600 mb-4">Moda Caddesi, No:45</p>
                    <div class="bg-gray-200 h-32 rounded flex items-center justify-center text-gray-500">Harita Görünümü</div>
                </div>
                <!-- Location 2 -->
                <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 class="font-bold text-xl mb-2 text-coffee">Beşiktaş</h3>
                    <p class="text-sm text-gray-600 mb-4">Çarşı İçi, No:12</p>
                    <div class="bg-gray-200 h-32 rounded flex items-center justify-center text-gray-500">Harita Görünümü</div>
                </div>
                <!-- Location 3 -->
                <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 class="font-bold text-xl mb-2 text-coffee">Karaköy</h3>
                    <p class="text-sm text-gray-600 mb-4">Kemankeş Cad, No:8</p>
                    <div class="bg-gray-200 h-32 rounded flex items-center justify-center text-gray-500">Harita Görünümü</div>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    const itemsHtml = menuItems.map(item => `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div class="h-48 overflow-hidden">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition duration-500 hover:scale-110">
            </div>
            <div class="p-4 flex justify-between items-center bg-white">
                <h3 class="font-bold text-lg text-coffee-dark">${item.name}</h3>
                <span class="text-coffee font-bold text-xl">${item.price}₺</span>
            </div>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="space-y-6 animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    const rowsHtml = menuItems.map(item => `
        <tr class="border-b border-coffee-light hover:bg-cream transition">
            <td class="py-4 px-6 font-medium">${item.name}</td>
            <td class="py-4 px-6 text-right font-bold text-coffee">${item.price}₺</td>
        </tr>
    `).join('');

    app.innerHTML = `
        <div class="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee mb-6 border-b-2 border-coffee pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-coffee text-cream">
                            <th class="py-4 px-6 font-bold uppercase text-sm">Ürün</th>
                            <th class="py-4 px-6 font-bold uppercase text-sm text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
