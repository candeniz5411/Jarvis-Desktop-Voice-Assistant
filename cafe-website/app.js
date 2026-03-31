const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const navLinks = document.querySelectorAll('.nav-link');
const appContainer = document.getElementById('app');

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
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing
const routes = {
    home: renderHome,
    hakkinda: renderHakkinda,
    destek: renderDestek,
    iletisim: renderIletisim,
    'sube-konumlari': renderSubeKonumlari,
    'menu-icerikleri': renderMenuIcerikleri,
    fiyatlar: renderFiyatlar
};

function router() {
    let hash = window.location.hash.slice(1);
    if (!hash || !routes[hash]) {
        hash = 'home';
        window.location.hash = '#home';
    }
    appContainer.innerHTML = '';
    routes[hash]();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Render Functions
function renderHome() {
    appContainer.innerHTML = `
        <div class="flex flex-col items-center gap-8 mt-8">
            <h2 class="text-3xl md:text-5xl font-heading font-bold text-coffee text-center leading-tight">Kahve Dükkanı'na<br>Hoş Geldiniz</h2>
            <div class="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg border-2 border-white">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Kahve fotoğrafı" class="w-full h-auto aspect-[16/9] object-cover" />
            </div>
            <p class="text-xl md:text-2xl text-center text-gray-700 font-medium mt-4 max-w-2xl px-4">En taze kahveler ve enfes atıştırmalıklarla dolu dünyamızı keşfedin.</p>
        </div>
    `;
}

function renderHakkinda() {
    appContainer.innerHTML = `
        <h2 class="page-title">Hakkında</h2>
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-coffee/10">
            <p class="text-lg text-gray-700 leading-relaxed mb-4">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz.</p>
            <p class="text-lg text-gray-700 leading-relaxed">Amacımız sadece kahve yapmak değil, aynı zamanda misafirlerimize sıcak, samimi ve huzurlu bir ortam sunmaktır.</p>
        </div>
    `;
}

function renderDestek() {
    appContainer.innerHTML = `
        <h2 class="page-title">Destek</h2>
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-coffee/10 text-center">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">Müşteri memnuniyeti bizim için her şeyden önemlidir. Sorularınız veya geri bildirimleriniz için bize her zaman ulaşabilirsiniz.</p>
            <p class="text-xl font-bold text-coffee">Sıkça Sorulan Sorular bölümümüz çok yakında aktif olacaktır.</p>
        </div>
    `;
}

function renderIletisim() {
    appContainer.innerHTML = `
        <h2 class="page-title">İletişim</h2>
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-coffee/10 max-w-2xl mx-auto">
            <div class="flex flex-col gap-6">
                <div>
                    <h3 class="text-xl font-bold text-coffee mb-2">Adres</h3>
                    <p class="text-lg text-gray-700">Kahveciler Cad. No: 42, Kadıköy / İstanbul</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-coffee mb-2">Telefon</h3>
                    <p class="text-lg text-gray-700">+90 216 555 12 34</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-coffee mb-2">E-posta</h3>
                    <p class="text-lg text-gray-700">merhaba@kahvedukkani.com</p>
                </div>
            </div>
        </div>
    `;
}

function renderSubeKonumlari() {
    appContainer.innerHTML = `
        <h2 class="page-title">Şube Konumları</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-coffee/10 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-bold text-coffee mb-2">Kadıköy Merkez (İstanbul)</h3>
                <p class="text-gray-700">Moda Sahili karşısı, kahve kokusunun kalbi.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-coffee/10 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-bold text-coffee mb-2">Beşiktaş (İstanbul)</h3>
                <p class="text-gray-700">Çarşı içi, gençliğin ve enerjinin buluşma noktası.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-coffee/10 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-bold text-coffee mb-2">Alsancak (İzmir)</h3>
                <p class="text-gray-700">Kordon boyunda, Ege esintisiyle kahve keyfi.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-coffee/10 hover:shadow-md transition-shadow">
                <h3 class="text-xl font-bold text-coffee mb-2">Tunalı (Ankara)</h3>
                <p class="text-gray-700">Başkentin en işlek caddesinde sakin bir mola.</p>
            </div>
        </div>
    `;
}

function renderMenuIcerikleri() {
    const itemsHtml = menuItems.map(item => `
        <div class="bg-white p-4 rounded-lg shadow-sm border border-coffee/10 text-center hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold text-coffee">${item.name}</h3>
        </div>
    `).join('');

    appContainer.innerHTML = `
        <h2 class="page-title">Menü İçerikleri</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            ${itemsHtml}
        </div>
    `;
}

function renderFiyatlar() {
    const itemsHtml = menuItems.map(item => `
        <div class="flex justify-between items-center p-4 border-b border-coffee/10 last:border-0 hover:bg-cream/50 transition-colors">
            <span class="text-lg md:text-xl font-medium text-gray-800">${item.name}</span>
            <span class="text-xl md:text-2xl font-bold text-coffee">${item.price}₺</span>
        </div>
    `).join('');

    appContainer.innerHTML = `
        <h2 class="page-title">Fiyatlar</h2>
        <div class="bg-white rounded-lg shadow-sm border border-coffee/10 max-w-2xl mx-auto flex flex-col">
            ${itemsHtml}
        </div>
    `;
}
