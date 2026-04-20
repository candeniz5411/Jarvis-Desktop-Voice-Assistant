// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuToggleBtn = document.getElementById('menu-toggle');
const menuCloseBtn = document.getElementById('menu-close');
const contentDiv = document.getElementById('content');
const sidebarLinks = document.querySelectorAll('#sidebar a');

// Menu Data
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

menuToggleBtn.addEventListener('click', openSidebar);
menuCloseBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Views
const views = {
    home: () => `
        <div class="text-center animate-fade-in flex flex-col items-center justify-center flex-grow py-8">
            <h1 class="font-heading text-4xl md:text-5xl font-bold mb-4">Kahve Dükkanına Hoş Geldiniz</h1>
            <p class="text-lg mb-8 max-w-2xl text-gray-700">En taze kahve çekirdekleri ve enfes lezzetlerle dolu sıcak bir mola.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl mb-8 w-full max-w-2xl">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Kahve Dükkanı İçi" class="w-full h-auto object-cover">
            </div>
            <a href="#menu" class="bg-cafeBrown text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-opacity">Menüyü İncele</a>
        </div>
    `,
    hakkinda: () => `
        <div class="animate-fade-in py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-cafeBrown pb-2">Hakkında</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="mb-4">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor, ustalıkla kavuruyor ve sizlere sunuyoruz.</p>
                <p>Amacımız sadece kahve satmak değil, misafirlerimize sıcak, samimi ve ilham verici bir ortam sağlamaktır. Modern ve minimalist yaklaşımımızla hem göze hem damağa hitap ediyoruz.</p>
            </div>
        </div>
    `,
    destek: () => `
        <div class="animate-fade-in py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-cafeBrown pb-2">Destek</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="mb-4">Sorularınız veya geri bildirimleriniz bizim için değerli.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li class="mb-2">Sıkça Sorulan Sorular</li>
                    <li class="mb-2">Hesap İşlemleri</li>
                    <li class="mb-2">Geri Ödeme ve İade Politikası</li>
                </ul>
                <p>Detaylı bilgi için destek ekibimizle iletişime geçebilirsiniz.</p>
            </div>
        </div>
    `,
    iletisim: () => `
        <div class="animate-fade-in py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-cafeBrown pb-2">İletişim</h2>
            <div class="bg-white p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6">
                <div>
                    <h3 class="font-bold text-xl mb-3">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No:1, Moda, Kadıköy / İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> 0216 123 45 67</p>
                    <p class="mb-2"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-3">Çalışma Saatleri</h3>
                    <p class="mb-1">Pazartesi - Cuma: 07:00 - 22:00</p>
                    <p class="mb-1">Cumartesi - Pazar: 08:00 - 23:00</p>
                </div>
            </div>
        </div>
    `,
    subeler: () => `
        <div class="animate-fade-in py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-cafeBrown pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-cafeBrown">
                    <h3 class="font-bold text-xl mb-2">Kadıköy Moda (Merkez)</h3>
                    <p class="text-gray-600">Moda Caddesi, Kahve Sokak No:1</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-cafeBrown">
                    <h3 class="font-bold text-xl mb-2">Beşiktaş Çarşı</h3>
                    <p class="text-gray-600">Kartal Heykeli Yanı No:42</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-cafeBrown">
                    <h3 class="font-bold text-xl mb-2">Karaköy Rıhtım</h3>
                    <p class="text-gray-600">Kemankeş Caddesi No:18</p>
                </div>
            </div>
        </div>
    `,
    menu: () => `
        <div class="animate-fade-in py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-cafeBrown pb-2">Menü İçerikleri</h2>
            <p class="mb-6 text-gray-700">Özenle hazırladığımız yiyecek ve içecek seçeneklerimiz.</p>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <ul class="divide-y divide-gray-200">
                    ${menuItems.map(item => `
                        <li class="p-4 hover:bg-gray-50 flex justify-between items-center">
                            <span class="font-medium text-lg">${item.name}</span>
                            <span class="text-gray-400 text-sm italic">Taze Hazırlanır</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `,
    fiyatlar: () => `
        <div class="animate-fade-in py-8">
            <h2 class="font-heading text-3xl font-bold mb-6 border-b-2 border-cafeBrown pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <ul class="divide-y divide-gray-200">
                    ${menuItems.map(item => `
                        <li class="p-4 flex justify-between items-center hover:bg-gray-50">
                            <span class="font-medium text-lg">${item.name}</span>
                            <span class="font-bold text-cafeBrown text-lg">${item.price}₺</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <p class="mt-4 text-sm text-gray-500 text-right">* Fiyatlarımıza KDV dahildir.</p>
        </div>
    `,
    notfound: () => `
        <div class="text-center py-16">
            <h2 class="font-heading text-4xl font-bold mb-4">404</h2>
            <p class="text-xl mb-6">Aradığınız sayfa bulunamadı.</p>
            <a href="#home" class="text-cafeBrown underline font-bold">Ana Sayfaya Dön</a>
        </div>
    `
};

// Router Logic
function router() {
    let hash = window.location.hash.replace('#', '') || 'home';

    // Check if view exists, else fallback to notfound
    const view = views[hash] ? views[hash] : views['notfound'];

    contentDiv.innerHTML = view();

    // Optional: Add simple fade-in animation via CSS class
    contentDiv.classList.remove('opacity-0');
    contentDiv.classList.add('opacity-100');
}

// Event Listeners for Routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
