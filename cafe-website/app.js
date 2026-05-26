const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const contentDiv = document.getElementById('content');

// Menu Content and Pricing Data
const menuItems = [
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

// Sidebar toggle functions
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing
const routes = {
    '': homePage,
    '#anasayfa': homePage,
    '#hakkinda': hakkindaPage,
    '#destek': destekPage,
    '#iletisim': iletisimPage,
    '#subeler': subelerPage,
    '#menu-icerikleri': menuIcerikleriPage,
    '#fiyatlar': fiyatlarPage
};

function router() {
    let hash = window.location.hash;

    // Default to home if route not found
    if (!routes[hash] && hash !== '') {
        hash = '#anasayfa';
    }

    const pageContent = (routes[hash] || routes[''])();
    contentDiv.innerHTML = pageContent;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Pages
function homePage() {
    return `
        <div class="flex flex-col items-center justify-center mt-10 text-center">
            <h2 class="font-heading text-4xl font-bold mb-4">Hoş Geldiniz!</h2>
            <p class="text-lg mb-8 max-w-2xl">En iyi kahve deneyimi için doğru yerdesiniz. Özenle seçilmiş çekirdeklerimiz ve lezzetli atıştırmalıklarımızla size hizmet vermekten mutluluk duyarız.</p>
            <div class="w-full max-w-3xl rounded-lg overflow-hidden shadow-xl">
                <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-96">
            </div>
        </div>
    `;
}

function hakkindaPage() {
    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-brown-100 pb-2">Hakkında</h2>
            <p class="text-lg mb-4">Kafemiz 2020 yılından beri sizlere en kaliteli kahve çekirdekleri ve taze atıştırmalıklar sunmaktadır.</p>
            <p class="text-lg mb-4">Misyonumuz, sıcak ve samimi bir ortamda misafirlerimize unutulmaz bir lezzet deneyimi yaşatmaktır.</p>
        </div>
    `;
}

function destekPage() {
    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-brown-100 pb-2">Destek</h2>
            <p class="text-lg mb-4">Sıkça Sorulan Sorular (SSS) veya sorunlarınız için destek ekibimizle iletişime geçebilirsiniz.</p>
            <ul class="list-disc pl-6 space-y-2 mt-4 text-lg">
                <li>Sipariş iptali ve iadesi</li>
                <li>Geri bildirim ve şikayetler</li>
                <li>Özel etkinlik rezervasyonları</li>
            </ul>
        </div>
    `;
}

function iletisimPage() {
    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-brown-100 pb-2">İletişim</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No: 12, Şişli / İstanbul</p>
                <p class="text-lg mb-2"><strong>Telefon:</strong> 0 (212) 555 12 34</p>
                <p class="text-lg mb-4"><strong>E-posta:</strong> info@kafe.com</p>

                <h3 class="font-heading text-xl font-bold mt-6 mb-2">Çalışma Saatleri:</h3>
                <p class="text-lg mb-1">Pazartesi - Cuma: 07:00 - 22:00</p>
                <p class="text-lg">Cumartesi - Pazar: 08:00 - 23:00</p>
            </div>
        </div>
    `;
}

function subelerPage() {
    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-brown-100 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-heading text-xl font-bold mb-2">Merkez Şube (Şişli)</h3>
                    <p class="text-gray-600 mb-2">Kahve Sokak No: 12, Şişli / İstanbul</p>
                    <p class="text-sm text-gray-500">Mecidiyeköy metro istasyonuna 5 dk yürüme mesafesinde.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-heading text-xl font-bold mb-2">Kadıköy Şubesi</h3>
                    <p class="text-gray-600 mb-2">Moda Caddesi No: 45, Kadıköy / İstanbul</p>
                    <p class="text-sm text-gray-500">Moda sahil yoluna yakın, deniz manzaralı.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="font-heading text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                    <p class="text-gray-600 mb-2">Barbaros Bulvarı No: 88, Beşiktaş / İstanbul</p>
                    <p class="text-sm text-gray-500">Çarşı merkezinde, kolay ulaşım.</p>
                </div>
            </div>
        </div>
    `;
}

function menuIcerikleriPage() {
    let itemsHtml = menuItems.map(item => `
        <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between border border-brown-100">
            <span class="text-lg font-bold">${item.name}</span>
        </div>
    `).join('');

    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-brown-100 pb-2">Menü İçerikleri</h2>
            <p class="text-lg mb-6">Özenle hazırladığımız yiyecek ve içecek çeşitlerimiz:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function fiyatlarPage() {
    let itemsHtml = menuItems.map(item => `
        <div class="flex justify-between items-center border-b border-gray-200 py-3 last:border-0">
            <span class="text-lg">${item.name}</span>
            <span class="text-lg font-bold text-brown-800">${item.price}</span>
        </div>
    `).join('');

    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-brown-100 pb-2">Fiyatlar</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                ${itemsHtml}
            </div>
        </div>
    `;
}