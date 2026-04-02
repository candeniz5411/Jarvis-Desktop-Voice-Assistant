// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const appContainer = document.getElementById('app');

// Sidebar Logic
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar on link click
const navLinks = document.querySelectorAll('#sidebar nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing
function router() {
    const hash = window.location.hash || '#/';

    // Simple view mapping
    const views = {
        '#/': renderHome,
        '#/hakkinda': renderHakkinda,
        '#/destek': renderDestek,
        '#/iletisim': renderIletisim,
        '#/subeler': renderSubeler,
        '#/menu': renderMenu,
        '#/fiyatlar': renderFiyatlar
    };

    const renderFunc = views[hash] || renderNotFound;
    appContainer.innerHTML = renderFunc();
}

// Window event listeners for routing
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// Menu Data
const menuItems = [
    { name: 'Espresso', price: '45₺', type: 'drink', desc: 'Sert ve yoğun İtalyan kahvesi.' },
    { name: 'Cappuccino', price: '55₺', type: 'drink', desc: 'Espresso, sıcak süt ve bol süt köpüğü.' },
    { name: 'Latte', price: '60₺', type: 'drink', desc: 'Espresso ve bol sıcak süt, hafif köpük.' },
    { name: 'Türk Kahvesi', price: '40₺', type: 'drink', desc: 'Geleneksel yöntemle pişirilmiş köpüklü kahve.' },
    { name: 'Çay', price: '25₺', type: 'drink', desc: 'Taze demlenmiş siyah çay.' },
    { name: 'Soğuk Kahve', price: '65₺', type: 'drink', desc: 'Buzlu ve ferahlatıcı kahve.' },
    { name: 'Limonata', price: '35₺', type: 'drink', desc: 'Ev yapımı, taze sıkılmış serinletici limonata.' },
    { name: 'Cheesecake', price: '70₺', type: 'food', desc: 'Özel soslu taze cheesecake.' },
    { name: 'Kruvasan', price: '50₺', type: 'food', desc: 'Tereyağlı, taptaze ve çıtır kruvasan.' },
    { name: 'Sandviç', price: '80₺', type: 'food', desc: 'Özel ekmek arası doyurucu sandviç.' }
];

// View Rendering Functions
function renderHome() {
    return `<div class="flex flex-col items-center justify-center text-center space-y-8 mt-10">
                <h2 class="text-4xl md:text-5xl font-serif font-bold tracking-wide">Kahve Dükkanına Hoş Geldiniz</h2>
                <p class="text-xl md:text-2xl font-sans max-w-2xl">Gününüzü güzelleştirecek taptaze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full">
                    <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı" class="w-full h-auto object-cover max-h-96" onerror="this.src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'">
                </div>
            </div>`;
}

function renderHakkinda() {
    return `<div class="max-w-3xl mx-auto bg-white bg-opacity-50 p-8 rounded-lg shadow-sm">
                <h2 class="text-3xl font-serif font-bold mb-6 text-center">Hakkında</h2>
                <p class="text-lg leading-relaxed">Kahve Dükkanı olarak, en kaliteli kahve çekirdeklerini özenle seçiyor ve uzman baristalarımızla sizlere sunuyoruz. Amacımız, her yudumda kahve tutkusunu hissettirmektir.</p>
            </div>`;
}

function renderDestek() {
    return `<div class="max-w-3xl mx-auto bg-white bg-opacity-50 p-8 rounded-lg shadow-sm">
                <h2 class="text-3xl font-serif font-bold mb-6 text-center">Destek</h2>
                <p class="text-lg leading-relaxed">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Müşteri destek ekibimiz size yardımcı olmaktan mutluluk duyar. Lütfen iletişim sayfamızdan bize ulaşın.</p>
            </div>`;
}

function renderIletisim() {
    return `<div class="max-w-3xl mx-auto bg-white bg-opacity-50 p-8 rounded-lg shadow-sm">
                <h2 class="text-3xl font-serif font-bold mb-6 text-center">İletişim</h2>
                <p class="text-lg mb-4"><strong>Adres:</strong> Kahve Sokak No:1, Kadıköy, İstanbul</p>
                <p class="text-lg mb-4"><strong>Telefon:</strong> 0(216) 123 45 67</p>
                <p class="text-lg"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
            </div>`;
}

function renderSubeler() {
    return `<div class="max-w-3xl mx-auto bg-white bg-opacity-50 p-8 rounded-lg shadow-sm">
                <h2 class="text-3xl font-serif font-bold mb-6 text-center">Şube Konumları</h2>
                <ul class="list-disc list-inside text-lg space-y-2">
                    <li>Kadıköy Merkez Şube</li>
                    <li>Beşiktaş Sahil Şube</li>
                    <li>Nişantaşı Butik Şube</li>
                    <li>Karaköy Galata Şube</li>
                </ul>
            </div>`;
}

function renderMenu() {
    const itemsHtml = menuItems.map(item => `
        <div class="bg-white bg-opacity-60 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 class="text-2xl font-serif font-bold text-coffee mb-2">${item.name}</h3>
            <p class="text-lg text-gray-700">${item.desc}</p>
        </div>
    `).join('');

    return `<div class="max-w-5xl mx-auto">
                <h2 class="text-4xl font-serif font-bold mb-10 text-center border-b-2 border-coffee pb-4 inline-block mx-auto">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${itemsHtml}
                </div>
            </div>`;
}

function renderFiyatlar() {
    const itemsHtml = menuItems.map(item => `
        <div class="flex justify-between items-center py-4 border-b border-gray-300 last:border-0">
            <span class="text-xl font-sans font-semibold">${item.name}</span>
            <span class="text-xl font-serif font-bold text-coffee">${item.price}</span>
        </div>
    `).join('');

    return `<div class="max-w-3xl mx-auto bg-white bg-opacity-50 p-8 rounded-lg shadow-md">
                <h2 class="text-4xl font-serif font-bold mb-8 text-center">Fiyatlar</h2>
                <div class="flex flex-col">
                    ${itemsHtml}
                </div>
            </div>`;
}

function renderNotFound() {
    return `<div class="text-center py-20">
                <h2 class="text-4xl font-serif font-bold mb-4">404</h2>
                <p class="text-xl">Sayfa bulunamadı.</p>
            </div>`;
}
