const menuItems = [
    { name: "Espresso", price: 45 },
    { name: "Cappuccino", price: 55 },
    { name: "Latte", price: 60 },
    { name: "Türk Kahvesi", price: 40 },
    { name: "Çay", price: 25 },
    { name: "Cheesecake", price: 70 },
    { name: "Kruvasan", price: 50 },
    { name: "Sandviç", price: 80 },
    { name: "Soğuk Kahve", price: 65 },
    { name: "Limonata", price: 35 }
];

// Sidebar Logic
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    sidebarOverlay.classList.toggle('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar on navigation links click
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
const mainContent = document.getElementById('main-content');

const views = {
    '': homeView,
    '#home': homeView,
    '#hakkinda': hakkindaView,
    '#destek': destekView,
    '#iletisim': iletisimView,
    '#subeler': subelerView,
    '#menu': menuView,
    '#fiyatlar': fiyatlarView
};

function router() {
    const hash = window.location.hash;
    const viewRender = views[hash] || notFoundView;
    mainContent.innerHTML = viewRender();

    // After rendering the view, inject dynamic content if needed
    if (hash === '#menu') {
        injectMenuContent();
    } else if (hash === '#fiyatlar') {
        injectPricesContent();
    }
}

function injectMenuContent() {
    const container = document.getElementById('menu-items-container');
    if (!container) return;

    let html = '';
    menuItems.forEach(item => {
        html += `
            <div class="bg-brown-100 p-4 rounded-lg shadow-sm border-l-4 border-brown-600 flex justify-between items-center">
                <span class="font-bold text-brown-900">${item.name}</span>
                <span class="text-brown-700 font-heading">${item.price}₺</span>
            </div>
        `;
    });
    container.innerHTML = html;
}

function injectPricesContent() {
    const tbody = document.getElementById('fiyatlar-table-body');
    if (!tbody) return;

    let html = '';
    menuItems.forEach(item => {
        html += `
            <tr class="hover:bg-brown-50 transition-colors">
                <td class="p-4 text-brown-900 font-medium">${item.name}</td>
                <td class="p-4 text-right text-brown-800 font-bold">${item.price}₺</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// View Functions
function homeView() {
    return `
        <div class="text-center space-y-6">
            <h1 class="text-4xl font-heading font-bold text-brown-900">Kahve Dükkanı'na Hoş Geldiniz</h1>
            <p class="text-lg text-brown-700">En taze kahve çekirdekleri ve lezzetli atıştırmalıklarla dolu bir dünyaya adım atın.</p>
            <div class="flex justify-center">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Kahve Görseli" class="rounded-lg shadow-lg max-w-full h-auto object-cover max-h-96">
            </div>
        </div>
    `;
}

function hakkindaView() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold text-brown-900 border-b-2 border-brown-500 pb-2">Hakkında</h2>
            <p class="text-brown-800 leading-relaxed">Kahve Dükkanı, 2024 yılında tutkulu kahve severler tarafından kurulmuştur. Amacımız, her yudumda size en kaliteli ve unutulmaz kahve deneyimini yaşatmaktır. Modern ve minimalist yaklaşımımızla, hem gözünüze hem de damağınıza hitap eden bir ortam sunuyoruz.</p>
            <p class="text-brown-800 leading-relaxed">Özenle seçilmiş çekirdeklerimiz ve taze hazırlanan menümüz ile sizleri ağırlamaktan mutluluk duyuyoruz.</p>
        </div>
    `;
}

function destekView() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold text-brown-900 border-b-2 border-brown-500 pb-2">Destek</h2>
            <p class="text-brown-800">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Destek ekibimiz size yardımcı olmaktan memnuniyet duyar.</p>
            <p class="font-bold text-brown-900">Sıkça Sorulan Sorular (SSS):</p>
            <ul class="list-disc pl-5 text-brown-800 space-y-2">
                <li>Online sipariş verebilir miyim? (Şu an için sadece mağaza içi hizmet vermekteyiz.)</li>
                <li>Vegan seçenekleriniz var mı? (Evet, bitkisel süt seçeneklerimiz mevcuttur.)</li>
            </ul>
        </div>
    `;
}

function iletisimView() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold text-brown-900 border-b-2 border-brown-500 pb-2">İletişim</h2>
            <p class="text-brown-800">Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
            <div class="bg-brown-100 p-6 rounded-lg shadow-inner text-brown-900">
                <p><strong>Adres:</strong> Kahve Sokak No:1, Lezzet Mahallesi, İstanbul</p>
                <p><strong>Telefon:</strong> 0 (212) 555 12 34</p>
                <p><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
            </div>
            <p class="text-brown-800">Çalışma Saatleri: Her gün 08:00 - 22:00</p>
        </div>
    `;
}

function subelerView() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold text-brown-900 border-b-2 border-brown-500 pb-2">Şube Konumları</h2>
            <p class="text-brown-800 mb-4">Size en yakın Kahve Dükkanı şubesini ziyaret edin:</p>
            <div class="grid gap-4 md:grid-cols-2">
                <div class="bg-white p-4 rounded shadow border border-brown-200">
                    <h3 class="font-bold text-xl text-brown-900 mb-2">Merkez Şube</h3>
                    <p class="text-brown-700">Kahve Sokak No:1, Lezzet Mahallesi, İstanbul</p>
                </div>
                <div class="bg-white p-4 rounded shadow border border-brown-200">
                    <h3 class="font-bold text-xl text-brown-900 mb-2">Moda Şubesi</h3>
                    <p class="text-brown-700">Deniz Caddesi No:45, Moda, Kadıköy</p>
                </div>
                <div class="bg-white p-4 rounded shadow border border-brown-200">
                    <h3 class="font-bold text-xl text-brown-900 mb-2">Nişantaşı Şubesi</h3>
                    <p class="text-brown-700">Teşvikiye Yolu No:12, Nişantaşı, Şişli</p>
                </div>
            </div>
        </div>
    `;
}

function menuView() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold text-brown-900 border-b-2 border-brown-500 pb-2">Menü İçerikleri</h2>
            <p class="text-brown-800 mb-4">Özenle hazırladığımız lezzetleri keşfedin:</p>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" id="menu-items-container">
                <!-- Injected via DOM logic -->
            </div>
        </div>
    `;
}

function fiyatlarView() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold text-brown-900 border-b-2 border-brown-500 pb-2">Fiyatlar</h2>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="w-full text-left">
                    <thead class="bg-brown-800 text-cream font-heading">
                        <tr>
                            <th class="p-4">Ürün</th>
                            <th class="p-4 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody id="fiyatlar-table-body" class="divide-y divide-brown-200">
                        <!-- Injected via DOM logic -->
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function notFoundView() {
    return `
        <div class="text-center space-y-4 py-10">
            <h2 class="text-3xl font-heading font-bold text-brown-900">Sayfa Bulunamadı</h2>
            <p class="text-brown-700">Aradığınız sayfa mevcut değil.</p>
            <a href="#home" class="inline-block bg-brown-800 text-cream px-6 py-2 rounded hover:bg-brown-700 transition-colors">Ana Sayfaya Dön</a>
        </div>
    `;
}
