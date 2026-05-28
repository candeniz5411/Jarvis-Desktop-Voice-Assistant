// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const contentDiv = document.getElementById('content');

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

// Sidebar Logic
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    sidebarOverlay.classList.toggle('hidden');
}

menuToggle.addEventListener('click', toggleSidebar);
closeMenu.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar on link click (for mobile experience)
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing Logic and Content Generation
const routes = {
    '': homeContent,
    '#home': homeContent,
    '#hakkinda': hakkindaContent,
    '#destek': destekContent,
    '#iletisim': iletisimContent,
    '#sube-konumlari': subeKonumlariContent,
    '#menu-icerikleri': menuIcerikleriContent,
    '#fiyatlar': fiyatlarContent
};

function router() {
    const hash = window.location.hash;
    const renderFunction = routes[hash] || notFoundContent;
    contentDiv.innerHTML = renderFunction();
    window.scrollTo(0, 0); // Scroll to top on route change
}

// Event Listeners for routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Content Functions
function homeContent() {
    return `
        <div class="text-center animate-fade-in-up">
            <h1 class="text-4xl md:text-5xl lg:text-6xl text-brown-900 mb-6">Kafe Modern'e Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl text-brown-700 mb-8 max-w-2xl mx-auto">En taze kahve çekirdekleri ve enfes tatlılarımızla size unutulmaz bir deneyim sunuyoruz.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl mb-8 max-w-4xl mx-auto">
                <img src="./Images/cover.jpg" alt="Kafe Atmosferi" class="w-full h-auto object-cover max-h-[500px]">
            </div>
            <a href="#menu-icerikleri" class="inline-block bg-brown-900 text-cream px-8 py-3 rounded-full font-bold hover:bg-brown-700 transition-colors shadow-lg">Menümüzü Keşfedin</a>
        </div>
    `;
}

function hakkindaContent() {
    return `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="text-3xl md:text-4xl text-brown-900 border-b-2 border-brown-300 pb-2 mb-6">Hakkımızda</h2>
            <div class="bg-white p-6 rounded-lg shadow-md space-y-4 text-lg text-brown-700 leading-relaxed">
                <p>Kafe Modern, kahve tutkusunu kalite ve estetikle buluşturma vizyonuyla kurulmuştur.</p>
                <p>Modern ve minimalist yaklaşımımız sadece mekanımızın tasarımına değil, sunduğumuz lezzetlerin sadeliğine ve mükemmelliğine de yansır.</p>
                <p>Her yudumda size en iyisini sunmak için dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini kullanıyoruz.</p>
            </div>
        </div>
    `;
}

function destekContent() {
    return `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="text-3xl md:text-4xl text-brown-900 border-b-2 border-brown-300 pb-2 mb-6">Destek ve SSS</h2>
            <div class="space-y-4">
                <div class="bg-white p-5 rounded-lg shadow-sm border border-brown-100">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Çalışma Saatleriniz Nelerdir?</h3>
                    <p class="text-brown-700">Hafta içi 08:00 - 22:00, hafta sonu 09:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-sm border border-brown-100">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Rezervasyon Alıyor musunuz?</h3>
                    <p class="text-brown-700">Evet, 5 kişi ve üzeri gruplar için iletişim numaramızdan rezervasyon yaptırabilirsiniz.</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow-sm border border-brown-100">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Paket Servisiniz Var mı?</h3>
                    <p class="text-brown-700">Şu an için paket servisimiz bulunmamaktadır, ancak gel-al servisimiz aktiftir.</p>
                </div>
            </div>
        </div>
    `;
}

function iletisimContent() {
    return `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="text-3xl md:text-4xl text-brown-900 border-b-2 border-brown-300 pb-2 mb-6">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold text-brown-900 mb-4">Bize Ulaşın</h3>
                    <ul class="space-y-3 text-brown-700">
                        <li class="flex items-center"><span class="font-bold mr-2 w-20">Telefon:</span> 0 (212) 555 01 23</li>
                        <li class="flex items-center"><span class="font-bold mr-2 w-20">E-posta:</span> info@kafemodern.com</li>
                        <li class="flex items-start"><span class="font-bold mr-2 w-20">Adres:</span> Modern Sokak No:42<br>Kadıköy / İstanbul</li>
                    </ul>
                </div>
                <form class="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Bize Yazın</h3>
                    <input type="text" placeholder="Adınız Soyadınız" required class="p-2 border border-brown-300 rounded focus:outline-none focus:border-brown-900 focus:ring-1 focus:ring-brown-900">
                    <input type="email" placeholder="E-posta Adresiniz" required class="p-2 border border-brown-300 rounded focus:outline-none focus:border-brown-900 focus:ring-1 focus:ring-brown-900">
                    <textarea placeholder="Mesajınız" rows="4" required class="p-2 border border-brown-300 rounded focus:outline-none focus:border-brown-900 focus:ring-1 focus:ring-brown-900 resize-none"></textarea>
                    <button type="submit" class="bg-brown-900 text-cream py-2 rounded font-bold hover:bg-brown-700 transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function subeKonumlariContent() {
    return `
        <div class="max-w-4xl mx-auto py-8">
            <h2 class="text-3xl md:text-4xl text-brown-900 border-b-2 border-brown-300 pb-2 mb-6">Şube Konumları</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Şube 1 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-brown-100">
                    <div class="bg-brown-100 h-32 flex items-center justify-center">
                        <svg class="w-12 h-12 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div class="p-4 text-center">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Kadıköy Merkez</h3>
                        <p class="text-brown-700 text-sm">Moda Caddesi, No: 12<br>Kadıköy / İstanbul</p>
                    </div>
                </div>
                <!-- Şube 2 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-brown-100">
                    <div class="bg-brown-100 h-32 flex items-center justify-center">
                        <svg class="w-12 h-12 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div class="p-4 text-center">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Beşiktaş Şube</h3>
                        <p class="text-brown-700 text-sm">Barbaros Bulvarı, No: 45<br>Beşiktaş / İstanbul</p>
                    </div>
                </div>
                <!-- Şube 3 -->
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-brown-100">
                    <div class="bg-brown-100 h-32 flex items-center justify-center">
                        <svg class="w-12 h-12 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div class="p-4 text-center">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Nişantaşı Şube</h3>
                        <p class="text-brown-700 text-sm">Valikonağı Caddesi, No: 88<br>Şişli / İstanbul</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function menuIcerikleriContent() {
    let itemsHtml = menuItems.map(item => `
        <div class="bg-white p-4 rounded-lg shadow-sm border border-brown-100 flex justify-between items-center hover:shadow-md transition-shadow">
            <span class="text-lg font-bold text-brown-900">${item.name}</span>
            <span class="text-brown-500 text-sm italic">İncele</span>
        </div>
    `).join('');

    return `
        <div class="max-w-4xl mx-auto py-8">
            <h2 class="text-3xl md:text-4xl text-brown-900 border-b-2 border-brown-300 pb-2 mb-6">Menü İçerikleri</h2>
            <p class="text-brown-700 mb-6 text-lg">Özenle hazırladığımız yiyecek ve içeceklerimiz.</p>
            <div class="grid sm:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function fiyatlarContent() {
    let itemsHtml = menuItems.map(item => `
        <div class="flex justify-between items-center border-b border-brown-100 py-3 last:border-0">
            <span class="text-lg font-semibold text-brown-900">${item.name}</span>
            <span class="text-xl font-bold text-brown-700">${item.price}</span>
        </div>
    `).join('');

    return `
        <div class="max-w-2xl mx-auto py-8">
            <h2 class="text-3xl md:text-4xl text-brown-900 border-b-2 border-brown-300 pb-2 mb-6">Fiyat Listesi</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                ${itemsHtml}
            </div>
            <p class="text-sm text-brown-500 mt-4 text-center italic">* Fiyatlarımıza KDV dahildir.</p>
        </div>
    `;
}

function notFoundContent() {
    return `
        <div class="text-center py-20">
            <h2 class="text-4xl text-brown-900 font-bold mb-4">404</h2>
            <p class="text-xl text-brown-700 mb-8">Aradığınız sayfa bulunamadı.</p>
            <a href="#home" class="inline-block bg-brown-900 text-cream px-6 py-2 rounded font-bold hover:bg-brown-700">Ana Sayfaya Dön</a>
        </div>
    `;
}
