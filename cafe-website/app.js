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

const routes = {
    '': renderHome,
    '#home': renderHome,
    '#about': renderAbout,
    '#support': renderSupport,
    '#contact': renderContact,
    '#locations': renderLocations,
    '#menu': renderMenu,
    '#prices': renderPrices,
};

const appDiv = document.getElementById('app');

function renderHome() {
    return `
        <div class="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center text-center">
            <h1 class="font-heading text-4xl md:text-6xl font-bold mb-4">Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl mb-8 max-w-2xl">Cafe Lumière'e hoş geldiniz. En taze kahve çekirdekleri ve enfes lezzetlerle dolu sıcak bir mola için doğru yerdesiniz.</p>
            <div class="w-full rounded-lg overflow-hidden shadow-2xl">
                <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="w-full max-w-3xl mx-auto px-4 py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 text-center">Hakkımızda</h2>
            <p class="text-lg mb-4">Cafe Lumière, şehrin kalbinde, yoğun tempodan uzaklaşıp nefes alabileceğiniz bir lezzet durağıdır.</p>
            <p class="text-lg mb-4">Özenle seçilmiş kahve çekirdeklerimiz ve günlük taze hazırlanan atıştırmalıklarımızla sizlere eşsiz bir deneyim sunmayı hedefliyoruz.</p>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="w-full max-w-3xl mx-auto px-4 py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 text-center">Destek</h2>
            <p class="text-lg mb-4 text-center">Size nasıl yardımcı olabiliriz?</p>
            <div class="bg-brand-white p-6 rounded-lg shadow-md">
                <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Glutensiz ürünleriniz var mı? - Evet, menümüzde glutensiz seçenekler mevcuttur.</li>
                    <li>Rezervasyon alıyor musunuz? - Hafta içi rezervasyon almaktayız.</li>
                    <li>Siparişleri paket servis yapıyor musunuz? - Evet, tüm ürünlerimiz paket servis için uygundur.</li>
                </ul>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="w-full max-w-3xl mx-auto px-4 py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 text-center">İletişim</h2>
            <div class="bg-brand-white p-6 rounded-lg shadow-md text-center">
                <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No: 42, Lezzet Mahallesi</p>
                <p class="text-lg mb-2"><strong>Telefon:</strong> 0(212) 555 01 23</p>
                <p class="text-lg mb-2"><strong>E-posta:</strong> merhaba@cafelumiere.com</p>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div class="w-full max-w-3xl mx-auto px-4 py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 text-center">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-brand-white p-6 rounded-lg shadow-md">
                    <h3 class="font-bold text-xl mb-2">Merkez Şube</h3>
                    <p>Kahve Sokak No: 42, Lezzet Mahallesi</p>
                    <p class="text-sm text-gray-500 mt-2">Hafta içi: 07:00 - 22:00</p>
                </div>
                <div class="bg-brand-white p-6 rounded-lg shadow-md">
                    <h3 class="font-bold text-xl mb-2">Sahil Şube</h3>
                    <p>Deniz Caddesi No: 15, Yalı Mahallesi</p>
                    <p class="text-sm text-gray-500 mt-2">Hafta içi: 08:00 - 23:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    let menuList = menuItems.map(item => `
        <div class="bg-brand-white p-4 rounded-lg shadow-sm border border-opacity-20 border-brand-brown">
            <span class="font-semibold text-lg">${item.name}</span>
        </div>
    `).join('');

    return `
        <div class="w-full max-w-3xl mx-auto px-4 py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${menuList}
            </div>
        </div>
    `;
}

function renderPrices() {
    let priceList = menuItems.map(item => `
        <div class="flex justify-between items-center border-b border-opacity-20 border-brand-brown py-3">
            <span class="font-semibold text-lg">${item.name}</span>
            <span class="font-bold text-xl">${item.price}</span>
        </div>
    `).join('');

    return `
        <div class="w-full max-w-3xl mx-auto px-4 py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 text-center">Fiyatlar</h2>
            <div class="bg-brand-white p-6 rounded-lg shadow-md">
                ${priceList}
            </div>
        </div>
    `;
}

function router() {
    let hash = window.location.hash;
    let renderFunction = routes[hash];

    if (renderFunction) {
        appDiv.innerHTML = renderFunction();
    } else {
        appDiv.innerHTML = renderHome(); // Fallback to home
    }
}

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

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

// Event Listeners for Routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
