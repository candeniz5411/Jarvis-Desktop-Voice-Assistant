document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const appContainer = document.getElementById('app');
    const navLinks = document.querySelectorAll('#nav-links a');

    // --- Sidebar Logic ---
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

    // Close sidebar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // --- Data ---
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

    // --- Views ---
    const views = {
        '/': `
            <div class="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
                <div class="bg-brown-900 text-cream-100 p-8 rounded-full w-32 h-32 flex items-center justify-center shadow-lg mb-4">
                    <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
                    </svg>
                </div>
                <h2 class="text-4xl md:text-5xl font-bold font-serif">Hoş Geldiniz!</h2>
                <p class="text-lg md:text-xl text-brown-800 font-sans max-w-2xl">
                    Kafe Nostalji'ye adım attığınız için teşekkür ederiz. Sizi en iyi kahve ve tatlılarımızla ağırlamaktan mutluluk duyacağız.
                </p>
                <div class="w-full mt-8 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src="./Images/coffee-hero.jpg" alt="Taze Kahve" class="w-full h-96 object-cover hover:scale-105 transition-transform duration-700">
                </div>
            </div>
        `,
        '/hakkinda': `
            <div class="max-w-3xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-sm">
                <h2 class="text-3xl font-bold font-serif mb-6 text-brown-900 border-b pb-4">Hakkımızda</h2>
                <p class="text-lg mb-4 text-gray-700 leading-relaxed">
                    Kafe Nostalji olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz. Amacımız sadece bir kahve dükkanı olmak değil, aynı zamanda misafirlerimize sıcak, huzurlu ve unutulmaz anlar yaşatacak bir mekan sunmaktır.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Usta baristalarımız tarafından hazırlanan özel kahvelerimiz ve günlük olarak fırınımızdan çıkan taze atıştırmalıklarımızla her yudumda kaliteyi hissedeceksiniz.
                </p>
            </div>
        `,
        '/destek': `
            <div class="max-w-3xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-sm">
                <h2 class="text-3xl font-bold font-serif mb-6 text-brown-900 border-b pb-4">Destek Merkezi</h2>
                <p class="text-lg mb-6 text-gray-700">Sıkça Sorulan Sorular (SSS) veya müşteri hizmetlerimiz ile ilgili bilgilere buradan ulaşabilirsiniz.</p>

                <div class="space-y-4">
                    <div class="border rounded-lg p-4 hover:bg-cream-100 transition-colors cursor-pointer">
                        <h3 class="font-bold text-brown-900">Siparişimi nasıl iptal edebilirim?</h3>
                        <p class="text-gray-600 mt-2 text-sm">Siparişiniz yola çıkmadan önce iletişim numaralarımızdan bizi arayarak iptal edebilirsiniz.</p>
                    </div>
                    <div class="border rounded-lg p-4 hover:bg-cream-100 transition-colors cursor-pointer">
                        <h3 class="font-bold text-brown-900">Çalışma saatleriniz nedir?</h3>
                        <p class="text-gray-600 mt-2 text-sm">Haftanın her günü 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                    </div>
                </div>
            </div>
        `,
        '/iletisim': `
            <div class="max-w-3xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-sm">
                <h2 class="text-3xl font-bold font-serif mb-6 text-brown-900 border-b pb-4">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4 text-brown-800">Bize Ulaşın</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-center"><span class="font-bold mr-2 w-20">Telefon:</span> +90 555 123 45 67</li>
                            <li class="flex items-center"><span class="font-bold mr-2 w-20">E-posta:</span> info@kafenostalji.com</li>
                            <li class="flex items-start"><span class="font-bold mr-2 w-20">Adres:</span> Atatürk Caddesi, No:42<br>Kadıköy, İstanbul</li>
                        </ul>
                    </div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <input type="text" placeholder="Adınız Soyadınız" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-900">
                        </div>
                        <div>
                            <input type="email" placeholder="E-posta Adresiniz" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-900">
                        </div>
                        <div>
                            <textarea rows="4" placeholder="Mesajınız..." class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-900"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-brown-900 text-cream-100 py-2 rounded-md hover:bg-brown-800 transition-colors font-bold">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        '/sube-konumlari': `
            <div class="max-w-4xl mx-auto animate-fade-in">
                <h2 class="text-3xl font-bold font-serif mb-8 text-brown-900 text-center">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-brown-900 hover:shadow-md transition-shadow">
                        <h3 class="text-xl font-bold mb-2 text-brown-800">Kadıköy Merkez (İstanbul)</h3>
                        <p class="text-gray-600 mb-4 text-sm">Atatürk Caddesi, No:42 Kadıköy</p>
                        <p class="text-sm font-semibold">Çalışma Saatleri: 08:00 - 23:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-brown-900 hover:shadow-md transition-shadow">
                        <h3 class="text-xl font-bold mb-2 text-brown-800">Beşiktaş (İstanbul)</h3>
                        <p class="text-gray-600 mb-4 text-sm">Barbaros Bulvarı, No:15 Beşiktaş</p>
                        <p class="text-sm font-semibold">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border-t-4 border-brown-900 hover:shadow-md transition-shadow">
                        <h3 class="text-xl font-bold mb-2 text-brown-800">Alsancak (İzmir)</h3>
                        <p class="text-gray-600 mb-4 text-sm">Kıbrıs Şehitleri Caddesi, No:8 Alsancak</p>
                        <p class="text-sm font-semibold">Çalışma Saatleri: 09:00 - 23:30</p>
                    </div>
                </div>
            </div>
        `,
        '/menu-icerikleri': `
            <div class="max-w-4xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-sm">
                <h2 class="text-3xl font-bold font-serif mb-8 text-brown-900 text-center border-b pb-4">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${menuItems.map(item => `
                        <div class="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-cream-100/50 transition-colors rounded-lg">
                            <span class="text-lg font-semibold text-gray-800">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="max-w-4xl mx-auto animate-fade-in bg-white p-8 rounded-xl shadow-sm">
                <h2 class="text-3xl font-bold font-serif mb-8 text-brown-900 text-center border-b pb-4">Fiyat Listesi</h2>
                <div class="space-y-2">
                    ${menuItems.map(item => `
                        <div class="flex items-center justify-between p-4 bg-cream-100/30 hover:bg-cream-100 rounded-lg transition-colors border border-transparent hover:border-brown-900/10">
                            <span class="text-lg font-bold text-brown-800">${item.name}</span>
                            <span class="text-xl font-bold text-brown-900 bg-white px-4 py-1 rounded-full shadow-sm">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // Add some simple CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
    `;
    document.head.appendChild(style);

    // --- Router ---
    function router() {
        // Get the hash part of the URL, default to '/'
        let hash = window.location.hash.slice(1) || '/';

        // Find the view content, or show a 404
        const content = views[hash] || `
            <div class="text-center py-20">
                <h2 class="text-3xl font-bold text-brown-900 mb-4">404 - Sayfa Bulunamadı</h2>
                <p class="mb-6">Aradığınız sayfaya ulaşılamıyor.</p>
                <a href="#/" class="text-brown-900 underline hover:text-brown-700">Ana Sayfaya Dön</a>
            </div>
        `;

        // Inject content
        appContainer.innerHTML = content;

        // Update active link styling in sidebar
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + hash || (hash === '/' && link.getAttribute('href') === '#/')) {
                link.classList.add('bg-brown-800', 'font-bold', 'border-l-4', 'border-cream-100');
            } else {
                link.classList.remove('bg-brown-800', 'font-bold', 'border-l-4', 'border-cream-100');
            }
        });

        // Scroll to top on route change
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});