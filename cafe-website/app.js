// DOM Elements
const appDiv = document.getElementById('app');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Sidebar Logic
function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

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

// Views
const views = {
    '/': `
        <div class="flex flex-col items-center justify-center text-center mt-8 space-y-6">
            <h1 class="text-4xl font-bold text-brown-900 mb-4">Cafe Serenity'ye Hoş Geldiniz</h1>
            <p class="text-lg text-gray-700 max-w-xl">Günün yorgunluğunu atmak, taptaze kahvelerimizin ve enfes tatlılarımızın tadını çıkarmak için doğru yerdesiniz. Sizi ağırlamaktan mutluluk duyarız.</p>
            <div class="w-full max-w-2xl overflow-hidden rounded-xl shadow-xl mt-6">
                <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
            </div>
        </div>
    `,
    '/hakkinda': `
        <div class="bg-white rounded-xl shadow-lg p-6 mt-8 w-full max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-brown-900 mb-6 text-center border-b border-brown-100 pb-4">Hakkımızda</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
                Cafe Serenity, 2010 yılından bu yana kahve tutkunlarına en kaliteli çekirdeklerden özenle hazırlanan kahveleri sunmaktadır.
                Amacımız sadece bir kafe olmak değil, misafirlerimize huzurlu ve samimi bir ortam sağlamaktır.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
                Usta baristalarımız ve taptaze günlük tatlılarımızla her ziyaretinizi özel kılmak için çalışıyoruz.
                Sizleri de ailemizin bir parçası olmaya davet ediyoruz.
            </p>
        </div>
    `,
    '/destek': `
        <div class="bg-white rounded-xl shadow-lg p-6 mt-8 w-full max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-brown-900 mb-6 text-center border-b border-brown-100 pb-4">Destek</h2>
            <div class="space-y-4">
                <div class="bg-brown-100/30 p-4 rounded-lg">
                    <h3 class="font-bold text-brown-900 text-xl mb-2">Sıkça Sorulan Sorular</h3>
                    <p class="text-gray-700"><strong>S:</strong> Çalışma saatleriniz nelerdir?<br><strong>C:</strong> Haftanın her günü 08:00 - 23:00 saatleri arasında hizmet veriyoruz.</p>
                </div>
                <div class="bg-brown-100/30 p-4 rounded-lg">
                    <h3 class="font-bold text-brown-900 text-xl mb-2">Geri Bildirim</h3>
                    <p class="text-gray-700">Hizmetlerimizle ilgili görüş ve önerilerinizi bizimle paylaşmak için iletişim formumuzu kullanabilirsiniz. Geri bildirimleriniz bizim için değerlidir.</p>
                </div>
            </div>
        </div>
    `,
    '/iletisim': `
        <div class="bg-white rounded-xl shadow-lg p-6 mt-8 w-full max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-brown-900 mb-6 text-center border-b border-brown-100 pb-4">İletişim</h2>
            <div class="space-y-6 text-center">
                <div>
                    <h3 class="text-xl font-bold text-brown-900">Adres</h3>
                    <p class="text-gray-700">Kahveci Sokak No:12, Kadıköy, İstanbul</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-brown-900">Telefon</h3>
                    <p class="text-gray-700">+90 (216) 123 45 67</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-brown-900">E-posta</h3>
                    <p class="text-gray-700">info@cafeserenity.com</p>
                </div>
                <div class="mt-6 pt-6 border-t border-brown-100">
                    <p class="text-brown-500 italic">Bizi sosyal medyadan da takip edebilirsiniz!</p>
                </div>
            </div>
        </div>
    `,
    '/subeler': `
        <div class="bg-white rounded-xl shadow-lg p-6 mt-8 w-full max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-brown-900 mb-6 text-center border-b border-brown-100 pb-4">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border border-brown-100 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Kadıköy (Merkez)</h3>
                    <p class="text-gray-700 mb-2">Moda Caddesi, Kahveci Sok. No:12</p>
                    <p class="text-sm text-brown-500">Hafta içi: 08:00 - 23:00</p>
                </div>
                <div class="border border-brown-100 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Beşiktaş</h3>
                    <p class="text-gray-700 mb-2">Barbaros Bulvarı No:45</p>
                    <p class="text-sm text-brown-500">Hafta içi: 07:30 - 22:30</p>
                </div>
                <div class="border border-brown-100 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Nişantaşı</h3>
                    <p class="text-gray-700 mb-2">Valikonağı Caddesi No:88</p>
                    <p class="text-sm text-brown-500">Hafta içi: 08:30 - 23:30</p>
                </div>
                <div class="border border-brown-100 p-4 rounded-lg hover:shadow-md transition-shadow">
                    <h3 class="text-xl font-bold text-brown-900 mb-2">Karaköy</h3>
                    <p class="text-gray-700 mb-2">Kemankeş Caddesi No:21</p>
                    <p class="text-sm text-brown-500">Hafta içi: 09:00 - 00:00</p>
                </div>
            </div>
        </div>
    `,
    '/menu': `
        <div class="bg-white rounded-xl shadow-lg p-6 mt-8 w-full max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-brown-900 mb-6 text-center border-b border-brown-100 pb-4">Menü İçerikleri</h2>
            <p class="text-center text-gray-600 mb-6 italic">En taze malzemelerle hazırlanan lezzetlerimiz...</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-brown-50 transition-colors rounded">
                        <span class="font-medium text-lg text-brown-900">${item.name}</span>
                        <span class="font-bold text-brown-500">${item.price}₺</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '/fiyatlar': `
        <div class="bg-white rounded-xl shadow-lg p-6 mt-8 w-full max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-brown-900 mb-6 text-center border-b border-brown-100 pb-4">Fiyat Listesi</h2>
            <div class="w-full">
                ${menuItems.map(item => `
                    <div class="flex justify-between items-center py-3 border-b border-dashed border-brown-100">
                        <span class="text-lg text-gray-800">${item.name}</span>
                        <span class="font-bold text-xl text-brown-900">${item.price}₺</span>
                    </div>
                `).join('')}
                <div class="mt-6 text-center text-sm text-gray-500">
                    <p>* Tüm fiyatlarımıza KDV dahildir.</p>
                </div>
            </div>
        </div>
    `
};

// Router
function router() {
    // Get the hash from the URL, default to '/'
    let path = window.location.hash.slice(1) || '/';

    // Update active link in sidebar
    navLinks.forEach(link => {
        link.classList.remove('bg-brown-500/20');
        if (link.getAttribute('href') === '#' + path) {
            link.classList.add('bg-brown-500/20');
        }
    });

    // Render the view
    appDiv.innerHTML = views[path] || `
        <div class="text-center mt-20">
            <h2 class="text-4xl font-bold text-brown-900 mb-4">404</h2>
            <p class="text-xl text-gray-600">Sayfa bulunamadı.</p>
            <a href="#/" class="mt-6 inline-block bg-brown-900 text-cream px-6 py-2 rounded-lg hover:bg-brown-500 transition-colors">Ana Sayfaya Dön</a>
        </div>
    `;

    // Scroll to top on route change
    window.scrollTo(0, 0);
}

// Event listeners for routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
