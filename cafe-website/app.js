// Sidebar Logic
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeMenuBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar on link click (mobile friendly)
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Menu Data
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

// SPA Routing Logic
const app = document.getElementById('app');

const routes = {
    '': renderHome,
    '#': renderHome,
    '#hakkinda': renderHakkinda,
    '#destek': renderDestek,
    '#iletisim': renderIletisim,
    '#subeler': renderSubeler,
    '#menu-icerikleri': renderMenuIcerikleri,
    '#fiyatlar': renderFiyatlar
};

function renderHome() {
    return `
        <div class="text-center animate-fade-in">
            <h2 class="text-4xl font-serif text-brown-900 mb-6 mt-8">Kafe'mize Hoş Geldiniz!</h2>
            <p class="text-lg text-brown-800 mb-8 max-w-2xl mx-auto">En taze kahve çekirdekleri ve enfes tatlılarımızla size unutulmaz bir deneyim sunmak için buradayız.</p>
            <div class="rounded-xl overflow-hidden shadow-xl max-w-3xl mx-auto border-4 border-brown-900">
                <img src="./Images/coffee.jpg" alt="Lezzetli Kahve" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `;
}

function renderHakkinda() {
    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif text-brown-900 mb-6 border-b-2 border-brown-900 pb-2">Hakkında</h2>
            <p class="text-lg text-brown-800 leading-relaxed mb-4">
                Hikayemiz yıllar önce küçük bir çekirdeğin peşinde başladı. Bugün, en iyi kahveyi en sıcak ortamda sunmayı amaçlıyoruz.
            </p>
            <p class="text-lg text-brown-800 leading-relaxed">
                Yerel üreticileri destekliyor, sürdürülebilirliğe önem veriyor ve her fincanda sevgi sunuyoruz.
            </p>
        </div>
    `;
}

function renderDestek() {
    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif text-brown-900 mb-6 border-b-2 border-brown-900 pb-2">Destek</h2>
            <p class="text-lg text-brown-800 mb-4">Her türlü sorununuz veya öneriniz için yanınızdayız.</p>
            <div class="bg-white bg-opacity-40 p-6 rounded-lg shadow-sm border border-brown-800">
                 <p class="font-bold mb-2 text-brown-900">Sıkça Sorulan Sorular:</p>
                 <ul class="list-disc pl-5 space-y-2 text-brown-800">
                    <li>Siparişimi nasıl iptal edebilirim?</li>
                    <li>Alerjen bilgilerinize nereden ulaşabilirim?</li>
                    <li>Hediye kartı satıyor musunuz?</li>
                 </ul>
            </div>
        </div>
    `;
}

function renderIletisim() {
    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif text-brown-900 mb-6 border-b-2 border-brown-900 pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8 text-brown-800">
                <div>
                    <h3 class="font-bold text-xl mb-3 text-brown-900">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Email:</strong> info@kafe.com</p>
                    <p class="mb-2"><strong>Telefon:</strong> 0(212) 555 12 34</p>
                    <p class="mb-4"><strong>Adres:</strong> Kahve Sokak, No:42, Kadıköy/İstanbul</p>
                </div>
                <div>
                     <h3 class="font-bold text-xl mb-3 text-brown-900">Çalışma Saatleri</h3>
                     <p>Pazartesi - Cuma: 08:00 - 22:00</p>
                     <p>Cumartesi - Pazar: 09:00 - 23:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderSubeler() {
    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif text-brown-900 mb-6 border-b-2 border-brown-900 pb-2">Şube Konumları</h2>
            <ul class="space-y-4">
                <li class="bg-white bg-opacity-40 p-4 rounded-lg shadow-sm border border-brown-800">
                    <h3 class="font-bold text-xl text-brown-900">Kadıköy Şubesi (Merkez)</h3>
                    <p class="text-brown-800">Kahve Sokak, No:42, Kadıköy/İstanbul</p>
                </li>
                <li class="bg-white bg-opacity-40 p-4 rounded-lg shadow-sm border border-brown-800">
                    <h3 class="font-bold text-xl text-brown-900">Beşiktaş Şubesi</h3>
                    <p class="text-brown-800">Çarşı İçi, Deniz Sk. No:5, Beşiktaş/İstanbul</p>
                </li>
                 <li class="bg-white bg-opacity-40 p-4 rounded-lg shadow-sm border border-brown-800">
                    <h3 class="font-bold text-xl text-brown-900">Alsancak Şubesi</h3>
                    <p class="text-brown-800">Kordon Boyu, Yalı Cad. No:12, Konak/İzmir</p>
                </li>
            </ul>
        </div>
    `;
}

function renderMenuIcerikleri() {
    let listItems = menuItems.map(item => `
        <li class="flex items-center justify-between p-3 border-b border-brown-700 hover:bg-brown-900 hover:bg-opacity-10 transition-colors">
            <span class="text-lg font-semibold text-brown-900">${item.name}</span>
        </li>
    `).join('');

    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif text-brown-900 mb-6 border-b-2 border-brown-900 pb-2">Menü İçerikleri</h2>
            <p class="mb-6 text-brown-800">Taze hazırlanmış ürünlerimiz:</p>
            <ul class="bg-white bg-opacity-30 rounded-lg shadow-sm border border-brown-800">
                ${listItems}
            </ul>
        </div>
    `;
}

function renderFiyatlar() {
     let listItems = menuItems.map(item => `
        <li class="flex items-center justify-between p-3 border-b border-brown-700 hover:bg-brown-900 hover:bg-opacity-10 transition-colors">
            <span class="text-lg font-semibold text-brown-900">${item.name}</span>
            <span class="text-lg font-bold text-brown-900">${item.price}</span>
        </li>
    `).join('');

    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif text-brown-900 mb-6 border-b-2 border-brown-900 pb-2">Fiyatlar</h2>
            <ul class="bg-white bg-opacity-30 rounded-lg shadow-sm border border-brown-800">
                ${listItems}
            </ul>
        </div>
    `;
}

function router() {
    const hash = window.location.hash;
    const renderFn = routes[hash] || renderHome;
    app.innerHTML = renderFn();
}

// Event listener for hash changes
window.addEventListener('hashchange', router);

// Initial call to set correct content based on URL on load
window.addEventListener('DOMContentLoaded', router);
