const menuItems = [
    { name: "Espresso", price: 45, category: "Kahve" },
    { name: "Cappuccino", price: 55, category: "Kahve" },
    { name: "Latte", price: 60, category: "Kahve" },
    { name: "Türk Kahvesi", price: 40, category: "Kahve" },
    { name: "Çay", price: 25, category: "İçecek" },
    { name: "Cheesecake", price: 70, category: "Tatlı" },
    { name: "Kruvasan", price: 50, category: "Atıştırmalık" },
    { name: "Sandviç", price: 80, category: "Atıştırmalık" },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk İçecek" },
    { name: "Limonata", price: 35, category: "Soğuk İçecek" }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeSidebarBtn = document.getElementById('close-sidebar');
const mainContent = document.getElementById('main-content');

// Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

hamburgerBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
const routes = {
    'home': renderHome,
    'about': renderAbout,
    'menu': renderMenu,
    'prices': renderPrices,
    'locations': renderLocations,
    'support': renderSupport,
    'contact': renderContact
};

function router() {
    let hash = window.location.hash.slice(1) || 'home';
    const renderFunction = routes[hash] || renderHome;
    renderFunction();
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Render Functions
function renderHome() {
    mainContent.innerHTML = `
        <div class="text-center fade-in">
            <h2 class="text-4xl font-serif font-bold mb-6 text-coffee-800">Hoş Geldiniz</h2>
            <p class="text-xl mb-8">En taze kahve çekirdekleri ve sıcak atmosferimizle hizmetinizdeyiz.</p>
            <div class="flex justify-center mb-8">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Kahve Fotoğrafı" class="rounded-lg shadow-xl w-full max-w-2xl object-cover h-96">
            </div>
            <a href="#menu" class="bg-coffee-800 text-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-coffee-900 transition shadow-lg">Menümüzü Keşfedin</a>
        </div>
    `;
}

function renderAbout() {
    mainContent.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif font-bold mb-6 text-coffee-800 border-b-2 border-coffee-800 pb-2">Hakkımızda</h2>
            <p class="mb-4 text-lg">Kahve Dükkanı olarak, kahve tutkusunu bir sanata dönüştürüyoruz. 2010 yılından beri şehrin en işlek caddesinde, en kaliteli çekirdekleri özenle seçip kavurarak misafirlerimize sunuyoruz.</p>
            <p class="mb-4 text-lg">Sadece kahve değil, aynı zamanda dostlukların pekiştiği, kitapların okunduğu ve güzel anıların biriktiği bir mekan olmayı hedefliyoruz.</p>
        </div>
    `;
}

function renderSupport() {
    mainContent.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif font-bold mb-6 text-coffee-800 border-b-2 border-coffee-800 pb-2">Destek</h2>
            <p class="mb-4">Müşteri memnuniyeti bizim için her şeyden önemlidir. Herhangi bir sorunuz, şikayetiniz veya öneriniz varsa lütfen bizimle iletişime geçmekten çekinmeyin.</p>
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Rezervasyon gerekli mi? - Hayır, ancak kalabalık gruplar için önerilir.</li>
                    <li>Wi-Fi var mı? - Evet, tüm müşterilerimiz için ücretsiz yüksek hızlı internet mevcuttur.</li>
                    <li>Vegan seçenekleriniz var mı? - Evet, menümüzde bitkisel süt seçenekleri ve vegan atıştırmalıklar bulunmaktadır.</li>
                </ul>
            </div>
        </div>
    `;
}

function renderContact() {
    mainContent.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif font-bold mb-6 text-coffee-800 border-b-2 border-coffee-800 pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-xl mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 12, İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> (0212) 555 12 34</p>
                    <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                    <p class="mb-2"><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 23:00</p>
                </div>
                <div class="bg-coffee-800 text-cream p-6 rounded-lg shadow-lg">
                    <h3 class="font-bold text-xl mb-4">Mesaj Gönderin</h3>
                    <form onsubmit="event.preventDefault(); alert('Mesajınız alındı!');">
                        <input type="text" placeholder="Adınız" class="w-full mb-3 p-2 rounded text-coffee-800" required>
                        <input type="email" placeholder="E-posta" class="w-full mb-3 p-2 rounded text-coffee-800" required>
                        <textarea placeholder="Mesajınız" class="w-full mb-3 p-2 rounded text-coffee-800 h-24" required></textarea>
                        <button type="submit" class="bg-cream text-coffee-800 px-4 py-2 rounded font-bold hover:bg-white transition w-full">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderLocations() {
    mainContent.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-serif font-bold mb-6 text-coffee-800 border-b-2 border-coffee-800 pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md menu-card">
                    <h3 class="font-bold text-xl mb-2 text-coffee-800">Merkez Şube (Kadıköy)</h3>
                    <p class="text-gray-600">Moda Caddesi No:42, Kadıköy/İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md menu-card">
                    <h3 class="font-bold text-xl mb-2 text-coffee-800">Beşiktaş Şube</h3>
                    <p class="text-gray-600">Çarşı İçi, Kartal Heykeli Yanı, Beşiktaş/İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md menu-card">
                    <h3 class="font-bold text-xl mb-2 text-coffee-800">Karaköy Şube</h3>
                    <p class="text-gray-600">Fransız Geçidi No:8, Karaköy/İstanbul</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    let menuHtml = `
        <h2 class="text-3xl font-serif font-bold mb-6 text-coffee-800 border-b-2 border-coffee-800 pb-2">Menü İçerikleri</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    menuItems.forEach(item => {
        menuHtml += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden menu-card border border-gray-100">
                <div class="h-40 bg-gray-200 flex items-center justify-center text-gray-400">
                    <span class="text-4xl">☕</span> <!-- Placeholder Icon -->
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-bold text-xl text-coffee-800">${item.name}</h3>
                        <span class="bg-cream text-coffee-800 px-2 py-1 rounded text-sm font-bold">${item.price}₺</span>
                    </div>
                    <p class="text-gray-600 text-sm">${item.category}</p>
                </div>
            </div>
        `;
    });

    menuHtml += `</div>`;
    mainContent.innerHTML = menuHtml;
}

function renderPrices() {
    let pricesHtml = `
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-coffee-800">
            <h2 class="text-3xl font-serif font-bold mb-6 text-center text-coffee-800 border-b-2 border-dashed border-coffee-800 pb-4">Fiyat Listesi</h2>
            <ul class="space-y-4">
    `;

    menuItems.forEach(item => {
        pricesHtml += `
            <li class="flex justify-between items-center border-b border-gray-100 pb-2">
                <span class="text-lg font-medium text-gray-800">${item.name}</span>
                <span class="text-xl font-bold text-coffee-800">${item.price}₺</span>
            </li>
        `;
    });

    pricesHtml += `
            </ul>
        </div>
    `;
    mainContent.innerHTML = pricesHtml;
}
