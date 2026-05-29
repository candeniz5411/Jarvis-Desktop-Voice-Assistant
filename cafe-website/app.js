const menuData = [
    { name: "Espresso", price: "45₺" },
    { name: "Cappuccino", price: "55₺" },
    { name: "Latte", price: "60₺" },
    { name: "Türk Kahvesi", price: "40₺" },
    { name: "Çay", price: "25₺" },
    { name: "Cheesecake", price: "70₺" },
    { name: "Kruvasan", price: "50₺" },
    { name: "Sandviç", price: "80₺" },
    { name: "Soğuk Kahve", price: "65₺" },
    { name: "Limonata", price: "35₺" }
];

const appContainer = document.getElementById('app');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

// Sidebar toggle logic
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar on link click
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing and Rendering logic
const routes = {
    '': renderHome,
    '#home': renderHome,
    '#about': renderAbout,
    '#support': renderSupport,
    '#contact': renderContact,
    '#locations': renderLocations,
    '#menu': renderMenu,
    '#prices': renderPrices
};

function router() {
    const hash = window.location.hash;
    const renderFunction = routes[hash] || renderHome;

    // Fade out effect
    appContainer.style.opacity = 0;

    setTimeout(() => {
        appContainer.innerHTML = renderFunction();
        // Fade in effect
        appContainer.style.opacity = 1;
    }, 150);
}

// Ensure smooth transition
appContainer.style.transition = 'opacity 0.15s ease-in-out';

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// Render Functions

function renderHome() {
    return `
        <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-brown-900 mb-4">Hoş Geldiniz!</h2>
            <p class="text-lg text-brown-700 mb-6 font-body">Kahvenin en taze, atmosferin en sıcak hali Kahve Dünyası'na hoş geldiniz. Sizi aramızda görmekten mutluluk duyuyoruz.</p>
            <div class="rounded-xl overflow-hidden shadow-md w-full aspect-video">
                <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-full object-cover">
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div>
            <h2 class="text-2xl font-heading font-bold text-brown-900 mb-4 border-b border-brown-200 pb-2">Hakkımızda</h2>
            <p class="text-brown-700 font-body mb-4">Kahve Dünyası olarak, en kaliteli kahve çekirdeklerini özenle seçiyor ve usta baristalarımızın ellerinde sanata dönüştürüyoruz. Amacımız, misafirlerimize sadece bir kahve değil, unutulmaz bir deneyim sunmaktır.</p>
            <p class="text-brown-700 font-body">Modern ve minimalist atmosferimizde, sevdiklerinizle keyifli vakit geçirebilir veya huzurlu bir şekilde çalışabilirsiniz.</p>
        </div>
    `;
}

function renderSupport() {
    return `
        <div>
            <h2 class="text-2xl font-heading font-bold text-brown-900 mb-4 border-b border-brown-200 pb-2">Destek</h2>
            <p class="text-brown-700 font-body mb-4">Her türlü soru, öneri ve şikayetiniz için bize ulaşabilirsiniz. Müşteri memnuniyeti bizim için her şeyden önemlidir.</p>
            <ul class="list-disc list-inside text-brown-700 font-body space-y-2">
                <li>Sıkça Sorulan Sorular (SSS)</li>
                <li>Geri Bildirim Formu</li>
                <li>İade ve Değişim Politikası</li>
            </ul>
        </div>
    `;
}

function renderContact() {
    return `
        <div>
            <h2 class="text-2xl font-heading font-bold text-brown-900 mb-4 border-b border-brown-200 pb-2">İletişim</h2>
            <div class="space-y-4 text-brown-700 font-body">
                <p><strong>Adres:</strong> Kahve Sokak, No: 42, Kadıköy, İstanbul</p>
                <p><strong>Telefon:</strong> +90 (212) 555 01 23</p>
                <p><strong>E-posta:</strong> info@kahvedunyasi.com.tr</p>
                <div class="mt-6 p-4 bg-brown-50 rounded-lg">
                    <h3 class="font-bold mb-2">Çalışma Saatleri</h3>
                    <p>Pazartesi - Cuma: 07:00 - 22:00</p>
                    <p>Hafta Sonu: 08:00 - 23:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div>
            <h2 class="text-2xl font-heading font-bold text-brown-900 mb-4 border-b border-brown-200 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-body">
                <div class="p-4 border border-brown-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-brown-900 text-lg mb-1">Kadıköy Merkez (Anadolu)</h3>
                    <p class="text-brown-700 text-sm">Moda Caddesi, Kadıköy / İstanbul</p>
                </div>
                <div class="p-4 border border-brown-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-brown-900 text-lg mb-1">Beşiktaş (Avrupa)</h3>
                    <p class="text-brown-700 text-sm">Barbaros Bulvarı, Beşiktaş / İstanbul</p>
                </div>
                <div class="p-4 border border-brown-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-brown-900 text-lg mb-1">Karşıyaka</h3>
                    <p class="text-brown-700 text-sm">Cemal Gürsel Caddesi, Karşıyaka / İzmir</p>
                </div>
                <div class="p-4 border border-brown-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-brown-900 text-lg mb-1">Çankaya</h3>
                    <p class="text-brown-700 text-sm">Tunalı Hilmi Caddesi, Çankaya / Ankara</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    let menuHtml = `
        <div>
            <h2 class="text-2xl font-heading font-bold text-brown-900 mb-4 border-b border-brown-200 pb-2">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-body">
    `;

    menuData.forEach(item => {
        menuHtml += `
            <div class="flex items-center p-3 bg-brown-50 rounded-lg border border-brown-100">
                <span class="w-2 h-2 bg-brown-500 rounded-full mr-3"></span>
                <span class="text-brown-800 font-medium">${item.name}</span>
            </div>
        `;
    });

    menuHtml += `
            </div>
        </div>
    `;
    return menuHtml;
}

function renderPrices() {
    let pricesHtml = `
        <div>
            <h2 class="text-2xl font-heading font-bold text-brown-900 mb-4 border-b border-brown-200 pb-2">Fiyatlar</h2>
            <div class="space-y-2 font-body">
    `;

    menuData.forEach(item => {
        pricesHtml += `
            <div class="flex justify-between items-center p-3 border-b border-brown-100 last:border-0 hover:bg-brown-50 transition-colors rounded">
                <span class="font-medium text-brown-800">${item.name}</span>
                <span class="font-bold text-brown-900">${item.price}</span>
            </div>
        `;
    });

    pricesHtml += `
            </div>
        </div>
    `;
    return pricesHtml;
}
