const menuData = [
    { name: 'Espresso', price: '45₺', category: 'Kahve' },
    { name: 'Cappuccino', price: '55₺', category: 'Kahve' },
    { name: 'Latte', price: '60₺', category: 'Kahve' },
    { name: 'Türk Kahvesi', price: '40₺', category: 'Kahve' },
    { name: 'Çay', price: '25₺', category: 'Sıcak İçecekler' },
    { name: 'Cheesecake', price: '70₺', category: 'Tatlılar' },
    { name: 'Kruvasan', price: '50₺', category: 'Atıştırmalıklar' },
    { name: 'Sandviç', price: '80₺', category: 'Yiyecekler' },
    { name: 'Soğuk Kahve', price: '65₺', category: 'Soğuk İçecekler' },
    { name: 'Limonata', price: '35₺', category: 'Soğuk İçecekler' }
];

const routes = {
    '/': renderHome,
    '/hakkinda': renderHakkinda,
    '/destek': renderDestek,
    '/iletisim': renderIletisim,
    '/subeler': renderSubeler,
    '/icerikler': renderIcerikler,
    '/fiyatlar': renderFiyatlar
};

const appContainer = document.getElementById('app');

function renderHome() {
    return `
        <div class="flex flex-col items-center text-center">
            <img src="./Images/logo.png" alt="Bizim Kafe Logo" class="w-32 h-32 rounded-full mb-6 border-4 border-brown-900 object-cover">
            <h2 class="text-4xl font-heading font-bold mb-4">Bizim Kafe'ye Hoş Geldiniz!</h2>
            <p class="text-lg mb-8 max-w-2xl">En taze kahve çekirdekleri ve enfes lezzetlerle dolu menümüzle sizlere unutulmaz bir deneyim sunuyoruz.</p>
            <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full max-w-3xl rounded-lg shadow-md object-cover h-64 md:h-96">
        </div>
    `;
}

function renderHakkinda() {
    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Hakkımızda</h2>
            <p class="text-lg mb-4">Bizim Kafe, 2010 yılından beri şehrin kalbinde kahve severlere hizmet vermektedir.</p>
            <p class="text-lg">Amacımız, özenle seçilmiş kahve çekirdeklerini usta baristalarımızın ellerinde mükemmel bir fincan kahveye dönüştürmektir.</p>
        </div>
    `;
}

function renderDestek() {
    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Destek</h2>
            <p class="text-lg mb-4">Müşteri memnuniyeti bizim için ön plandadır. Her türlü soru ve öneriniz için buradayız.</p>
            <p class="text-lg font-bold">Sıkça Sorulan Sorular:</p>
            <ul class="list-disc pl-5 mt-2 text-lg">
                <li>Çalışma saatleriniz nedir? (08:00 - 22:00)</li>
                <li>Rezervasyon yapıyor musunuz? (Evet, iletişim numaramızdan ulaşabilirsiniz.)</li>
                <li>Vegan seçenekleriniz var mı? (Menümüzde vegan seçenekler mevcuttur.)</li>
            </ul>
        </div>
    `;
}

function renderIletisim() {
    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">İletişim</h2>
            <p class="text-lg mb-4">Bize aşağıdaki kanallardan ulaşabilirsiniz:</p>
            <div class="bg-brown-100 p-6 rounded-lg">
                <p class="text-lg mb-2"><strong>Telefon:</strong> 0 (555) 123 45 67</p>
                <p class="text-lg mb-2"><strong>E-posta:</strong> iletisim@bizimkafe.com</p>
                <p class="text-lg"><strong>Adres:</strong> Kahve Sokak No: 123, Merkez / Şehir</p>
            </div>
        </div>
    `;
}

function renderSubeler() {
    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md border border-brown-100">
                    <h3 class="text-2xl font-bold font-heading mb-2">Merkez Şube</h3>
                    <p>Kahve Sokak No: 123</p>
                    <p>Çalışma Saatleri: 08:00 - 22:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border border-brown-100">
                    <h3 class="text-2xl font-bold font-heading mb-2">Sahil Şube</h3>
                    <p>Deniz Yolu Cad. No: 45</p>
                    <p>Çalışma Saatleri: 09:00 - 23:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border border-brown-100">
                    <h3 class="text-2xl font-bold font-heading mb-2">AVM Şube</h3>
                    <p>Büyük AVM, Kat: 2</p>
                    <p>Çalışma Saatleri: 10:00 - 22:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderIcerikler() {
    let itemsHtml = menuData.map(item => `
        <div class="bg-white p-4 rounded shadow border border-brown-100 flex justify-between items-center">
            <span class="text-lg font-bold">${item.name}</span>
            <span class="text-sm bg-brown-100 px-2 py-1 rounded text-brown-900">${item.category}</span>
        </div>
    `).join('');

    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderFiyatlar() {
    let priceHtml = menuData.map(item => `
        <div class="flex justify-between items-center py-3 border-b border-brown-100 last:border-0">
            <span class="text-xl font-bold">${item.name}</span>
            <span class="text-xl font-heading text-brown-500">${item.price}</span>
        </div>
    `).join('');

    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl font-heading font-bold mb-6 border-b border-brown-500 pb-2">Fiyat Listesi</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                ${priceHtml}
            </div>
        </div>
    `;
}

function router() {
    let hash = window.location.hash.slice(1) || '/';
    let renderFunction = routes[hash];

    if (renderFunction) {
        appContainer.innerHTML = renderFunction();
    } else {
        appContainer.innerHTML = '<h2 class="text-3xl font-heading font-bold text-center mt-10">404 - Sayfa Bulunamadı</h2>';
    }
}

// Sidebar logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
