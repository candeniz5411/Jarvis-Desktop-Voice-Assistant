// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const appContent = document.getElementById('app-content');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Sidebar Logic
function toggleMenu() {
    const isClosed = sidebar.classList.contains('-translate-x-full');

    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleMenu();
        }
    });
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
    '/': () => `
        <div class="text-center w-full fade-enter fade-enter-active">
            <h1 class="text-4xl sm:text-5xl font-serif font-bold mb-4">Kahve Köşesine Hoş Geldiniz</h1>
            <p class="text-lg text-brown-600 mb-8 max-w-2xl mx-auto">Günün stresini bir kenara bırakın ve özenle hazırladığımız kahvelerimizin tadını çıkarın. Sizi ağırlamaktan mutluluk duyacağız.</p>
            <div class="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                <img src="Images/hero.jpg" alt="Taze Kahve" class="w-full h-64 sm:h-96 md:h-[500px] object-cover object-center">
            </div>
        </div>
    `,
    '/hakkinda': () => `
        <div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 mx-auto fade-enter fade-enter-active">
            <h2 class="text-3xl font-serif font-bold mb-6 text-center border-b border-gray-200 py-3">Hakkımızda</h2>
            <div class="space-y-4 text-brown-800 leading-relaxed">
                <p>Kahve Köşesi olarak 2010 yılından beri, kahve tutkunlarına en kaliteli çekirdekleri, en samimi ortamda sunmayı misyon edindik.</p>
                <p>Usta baristalarımız, dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini taptaze kavurarak sizin için hazırlıyor. Sadece bir kafe değil, aynı zamanda dostlarınızla sohbet edebileceğiniz, kitabınızı okuyabileceğiniz ya da huzur içinde çalışabileceğiniz sıcak bir yuva vadediyoruz.</p>
            </div>
        </div>
    `,
    '/destek': () => `
        <div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 mx-auto fade-enter fade-enter-active">
            <h2 class="text-3xl font-serif font-bold mb-6 text-center border-b border-gray-200 py-3">Destek Merkezi</h2>
            <p class="mb-4 text-center text-brown-700">Size nasıl yardımcı olabiliriz? Sıkça sorulan sorulara göz atabilir veya bizimle iletişime geçebilirsiniz.</p>
            <div class="space-y-6 mt-8">
                <div>
                    <h3 class="font-bold text-xl mb-2 text-brown-900">Çalışma Saatleriniz Nelerdir?</h3>
                    <p class="text-brown-700">Hafta içi 07:00 - 22:00, Hafta sonu 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2 text-brown-900">Online Sipariş Verebilir Miyim?</h3>
                    <p class="text-brown-700">Şu anda sadece gel-al ve paket servisimiz bulunmaktadır. Online sipariş altyapımız yakında aktif olacaktır.</p>
                </div>
            </div>
        </div>
    `,
    '/iletisim': () => `
        <div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 mx-auto fade-enter fade-enter-active">
            <h2 class="text-3xl font-serif font-bold mb-6 text-center border-b border-gray-200 py-3">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-xl mb-4 text-brown-900">Bize Ulaşın</h3>
                    <ul class="space-y-4 text-brown-800">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            +90 (555) 123 45 67
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            iletisim@kahvekosesi.com
                        </li>
                        <li class="flex items-start">
                            <svg class="w-5 h-5 mr-3 mt-1 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Kahve Sok. No:42 Kadıköy / İstanbul
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-4 text-brown-900">Sosyal Medya</h3>
                    <p class="text-brown-700">Bizi sosyal medyadan takip edin ve yeni tatlardan ilk siz haberdar olun!</p>
                    <div class="flex space-x-4 mt-4 text-brown-600">
                        <span class="font-bold cursor-pointer hover:text-brown-900">Instagram</span>
                        <span class="font-bold cursor-pointer hover:text-brown-900">Twitter</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    '/subeler': () => `
        <div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 mx-auto fade-enter fade-enter-active">
            <h2 class="text-3xl font-serif font-bold mb-6 text-center border-b border-gray-200 py-3">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-4 border border-brown-200 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2 text-brown-900">Kadıköy Merkez (Ana Şube)</h3>
                    <p class="text-brown-700 text-sm mb-2">Moda Cad. Kahve Sok. No:42 Kadıköy / İstanbul</p>
                    <p class="text-brown-500 text-xs">Çalışma: 07:00 - 23:00</p>
                </div>
                <div class="p-4 border border-brown-200 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2 text-brown-900">Beşiktaş Çarşı</h3>
                    <p class="text-brown-700 text-sm mb-2">Sinanpaşa Mah. Ihlamurdere Cad. No:15 Beşiktaş / İstanbul</p>
                    <p class="text-brown-500 text-xs">Çalışma: 07:00 - 22:00</p>
                </div>
                <div class="p-4 border border-brown-200 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2 text-brown-900">Karaköy Şube</h3>
                    <p class="text-brown-700 text-sm mb-2">Kemankeş Mah. Mumhane Cad. No:8 Beyoğlu / İstanbul</p>
                    <p class="text-brown-500 text-xs">Çalışma: 08:00 - 23:00</p>
                </div>
            </div>
        </div>
    `,
    '/menu-icerikleri': () => `
        <div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 mx-auto fade-enter fade-enter-active">
            <h2 class="text-3xl font-serif font-bold mb-6 text-center border-b border-gray-200 py-3">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-serif text-2xl font-bold mb-4 text-brown-800">Sıcak İçecekler</h3>
                    <ul class="list-disc pl-6 space-y-2 text-brown-700">
                        <li>Espresso</li>
                        <li>Cappuccino</li>
                        <li>Latte</li>
                        <li>Türk Kahvesi</li>
                        <li>Çay</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-serif text-2xl font-bold mb-4 text-brown-800">Soğuk İçecekler & Yiyecekler</h3>
                    <ul class="list-disc pl-6 space-y-2 text-brown-700">
                        <li>Soğuk Kahve</li>
                        <li>Limonata</li>
                        <li>Cheesecake</li>
                        <li>Kruvasan</li>
                        <li>Sandviç</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    '/fiyatlar': () => `
        <div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 mx-auto fade-enter fade-enter-active">
            <h2 class="text-3xl font-serif font-bold mb-6 text-center border-b border-gray-200 py-3">Fiyat Listesi</h2>
            <div class="space-y-4">
                ${menuItems.map(item => `
                    <div class="flex justify-between items-center border-b border-gray-100 py-2">
                        <span class="text-lg text-brown-800 font-medium">${item.name}</span>
                        <span class="text-xl font-bold text-brown-900">${item.price}₺</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `
};

// Router function
function router() {
    // Get the hash from the URL, default to '/'
    let path = window.location.hash.slice(1) || '/';

    // Fallback to home if route not found
    if (!views[path]) {
        path = '/';
    }

    // Render content
    appContent.innerHTML = views[path]();
}

// Listen to hash changes
window.addEventListener('hashchange', router);

// Initialize routing on page load
window.addEventListener('load', router);