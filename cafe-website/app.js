// Menu Data
const menuData = [
    { name: 'Espresso', price: '45₺' },
    { name: 'Cappuccino', price: '55₺' },
    { name: 'Latte', price: '60₺' },
    { name: 'Türk Kahvesi', price: '40₺' },
    { name: 'Çay', price: '25₺' },
    { name: 'Cheesecake', price: '70₺' },
    { name: 'Kruvasan', price: '50₺' },
    { name: 'Sandviç', price: '80₺' },
    { name: 'Soğuk Kahve', price: '65₺' },
    { name: 'Limonata', price: '35₺' }
];

// UI Elements
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const app = document.getElementById('app');

// Toggle Sidebar Function
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

// Event Listeners for Sidebar
menuBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Functions
function renderHome() {
    app.innerHTML = `
        <div class="relative w-full h-[60vh] min-h-[400px]">
            <img src="./Images/coffee-bg.jpg" alt="Kahve" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-cafe-cream p-4">
                <h2 class="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Kahve Keyfine Hoş Geldiniz</h2>
                <p class="text-xl md:text-2xl font-body text-center max-w-2xl">En taze çekirdekler, en samimi sohbetler.</p>
            </div>
        </div>
        <div class="container mx-auto p-8">
            <p class="text-center text-lg leading-relaxed max-w-3xl mx-auto">
                Kahve Keyfi olarak size sadece bir içecek değil, aynı zamanda evinizin rahatlığında hissedeceğiniz bir deneyim sunuyoruz. Modern ve minimalist yaklaşımımızla hem gözünüze hem de damağınıza hitap ediyoruz.
            </p>
        </div>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <div class="container mx-auto p-8 max-w-4xl pt-16">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2">Hakkında</h2>
            <p class="text-lg leading-relaxed mb-4">Kahve tutkumuzu, en iyi çekirdekleri bulma arzumuzla birleştirdik. 2024 yılında kurulan Kahve Keyfi, misafirlerine sadece bir kahve molası değil, aynı zamanda huzurlu bir ortam sunmayı amaçlıyor.</p>
            <p class="text-lg leading-relaxed">Sürdürülebilir tarım yöntemleriyle elde edilen kahvelerimizi, ustalarımızın ellerinden özenle fincanınıza taşıyoruz.</p>
        </div>
    `;
}

function renderSupport() {
    app.innerHTML = `
        <div class="container mx-auto p-8 max-w-4xl pt-16">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2">Destek</h2>
            <p class="text-lg leading-relaxed mb-4">Siparişleriniz veya hizmetlerimiz hakkında sorularınız mı var? Size yardımcı olmaktan memnuniyet duyarız.</p>
            <ul class="list-disc list-inside text-lg space-y-2 mt-4">
                <li>Sıkça Sorulan Sorular</li>
                <li>İade ve İptal Koşulları</li>
                <li>Gizlilik Politikası</li>
            </ul>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="container mx-auto p-8 max-w-4xl pt-16">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2">İletişim</h2>
            <div class="bg-white/50 p-6 rounded-lg shadow-sm">
                <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No:123, Lezzet Mahallesi, İstanbul</p>
                <p class="text-lg mb-2"><strong>Telefon:</strong> 0 (212) 555 01 23</p>
                <p class="text-lg mb-4"><strong>E-posta:</strong> merhaba@kahvekeyfi.com</p>
                <p class="text-lg">Her türlü öneri ve şikayetiniz için bize ulaşabilirsiniz.</p>
            </div>
        </div>
    `;
}

function renderLocations() {
    app.innerHTML = `
        <div class="container mx-auto p-8 max-w-4xl pt-16">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div class="bg-white/50 p-6 rounded-lg shadow-sm border border-cafe-brown/20">
                    <h3 class="text-2xl font-heading font-semibold mb-2">Merkez Şube</h3>
                    <p>Lezzet Mahallesi, İstanbul</p>
                </div>
                <div class="bg-white/50 p-6 rounded-lg shadow-sm border border-cafe-brown/20">
                    <h3 class="text-2xl font-heading font-semibold mb-2">Moda Şube</h3>
                    <p>Caferağa Mahallesi, Kadıköy</p>
                </div>
                <div class="bg-white/50 p-6 rounded-lg shadow-sm border border-cafe-brown/20">
                    <h3 class="text-2xl font-heading font-semibold mb-2">Beşiktaş Şube</h3>
                    <p>Sinanpaşa Mahallesi, Beşiktaş</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    let menuItemsHtml = menuData.map(item => `
        <div class="flex justify-between items-center py-3 border-b border-cafe-brown/20 last:border-b-0">
            <span class="text-xl">${item.name}</span>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="container mx-auto p-8 max-w-4xl pt-16">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2">Menü İçerikleri</h2>
            <div class="bg-white/50 p-6 rounded-lg shadow-sm">
                ${menuItemsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    let pricesItemsHtml = menuData.map(item => `
        <div class="flex justify-between items-center py-3 border-b border-cafe-brown/20 last:border-b-0">
            <span class="text-xl font-medium">${item.name}</span>
            <span class="text-xl font-bold font-heading">${item.price}</span>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="container mx-auto p-8 max-w-4xl pt-16">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2">Fiyatlar</h2>
            <div class="bg-white/50 p-6 rounded-lg shadow-sm">
                ${pricesItemsHtml}
            </div>
        </div>
    `;
}

// Router
function router() {
    const hash = window.location.hash;

    switch (hash) {
        case '#hakkinda':
            renderAbout();
            break;
        case '#destek':
            renderSupport();
            break;
        case '#iletisim':
            renderContact();
            break;
        case '#subeler':
            renderLocations();
            break;
        case '#menu':
            renderMenu();
            break;
        case '#fiyatlar':
            renderPrices();
            break;
        case '':
        case '#':
            renderHome();
            break;
        default:
            renderHome();
    }
}

// Initialize Router
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
