document.addEventListener('DOMContentLoaded', () => {
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

    // DOM Elements
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const mainContent = document.getElementById('main-content');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Sidebar Logic
    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    };

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    };

    menuToggle.addEventListener('click', openSidebar);
    menuClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking a link (mobile friendly)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth < 768) {
                closeSidebar();
            }
        });
    });

    // Pages Content Generator
    const pages = {
        '/': `
            <div class="relative w-full h-[60vh] bg-gray-900 overflow-hidden">
                <img src="./Images/coffee_bg.jpg" alt="Kafe Arka Plan" class="absolute inset-0 w-full h-full object-cover opacity-60">
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <img src="./Images/logo.png" alt="Logo" class="h-24 w-24 mb-6 filter invert brightness-0 saturate-100" style="filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(30deg);">
                    <h1 class="text-4xl md:text-6xl font-playfair text-white font-bold mb-4 drop-shadow-lg">Kafe Keyfi'ne Hoş Geldiniz</h1>
                    <p class="text-xl md:text-2xl text-white font-lato drop-shadow-md">En taze kahveler ve lezzetli atıştırmalıklar sizi bekliyor.</p>
                </div>
            </div>
            <div class="container mx-auto px-4 py-12 text-center">
                <h2 class="text-3xl font-playfair font-bold mb-6">Bizimle Anı Yaşayın</h2>
                <p class="max-w-2xl mx-auto text-lg leading-relaxed">Modern, minimalist ve samimi ortamımızda sevdiklerinizle keyifli vakit geçirin. Sizi ağırlamaktan mutluluk duyacağız.</p>
            </div>
        `,
        '/hakkinda': `
            <div class="container mx-auto px-4 py-12">
                <h1 class="text-4xl font-playfair font-bold mb-8 text-center">Hakkımızda</h1>
                <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-coffee-dark">
                    <p class="text-lg leading-relaxed mb-4">Kafe Keyfi, kahve tutkusunu kalite ve samimiyetle buluşturmak amacıyla kuruldu. Modern ve minimalist yaklaşımımızla, şehrin karmaşasından uzaklaşıp huzur bulabileceğiniz bir ortam sunuyoruz.</p>
                    <p class="text-lg leading-relaxed">Özenle seçilmiş çekirdeklerimiz ve taptaze atıştırmalıklarımızla her yudumda ve her lokmada mutluluğu hedefliyoruz.</p>
                </div>
            </div>
        `,
        '/destek': `
            <div class="container mx-auto px-4 py-12">
                <h1 class="text-4xl font-playfair font-bold mb-8 text-center">Destek</h1>
                <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-coffee-dark">
                    <h2 class="text-2xl font-bold mb-4 font-playfair">Sıkça Sorulan Sorular</h2>
                    <div class="space-y-4">
                        <div>
                            <h3 class="font-bold text-lg">Çalışma saatleriniz nelerdir?</h3>
                            <p>Haftanın her günü 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Wi-Fi hizmetiniz var mı?</h3>
                            <p>Evet, tüm şubelerimizde misafirlerimiz için ücretsiz ve hızlı Wi-Fi hizmeti bulunmaktadır.</p>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Rezervasyon yapıyor musunuz?</h3>
                            <p>Büyük gruplar için rezervasyon almaktayız. Detaylı bilgi için iletişim sayfamızdan bize ulaşabilirsiniz.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        '/iletisim': `
            <div class="container mx-auto px-4 py-12">
                <h1 class="text-4xl font-playfair font-bold mb-8 text-center">İletişim</h1>
                <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-coffee-dark">
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 class="text-2xl font-bold mb-4 font-playfair">Bize Ulaşın</h2>
                            <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 1, Lezzet Mahallesi, İstanbul</p>
                            <p class="mb-2"><strong>Telefon:</strong> 0212 555 00 00</p>
                            <p class="mb-2"><strong>E-posta:</strong> info@kafekeyfi.com</p>
                        </div>
                        <div>
                            <form class="flex flex-col space-y-4">
                                <input type="text" placeholder="Adınız" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-brown">
                                <input type="email" placeholder="E-posta Adresiniz" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-brown">
                                <textarea placeholder="Mesajınız" rows="4" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-brown"></textarea>
                                <button type="button" class="bg-coffee-brown text-white py-2 rounded-lg hover:bg-coffee-dark transition-colors font-bold">Gönder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `,
        '/subeler': `
            <div class="container mx-auto px-4 py-12">
                <h1 class="text-4xl font-playfair font-bold mb-8 text-center">Şube Konumları</h1>
                <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md text-coffee-dark">
                        <h2 class="text-2xl font-bold mb-2 font-playfair">Merkez Şube</h2>
                        <p class="mb-1 text-gray-600">Kadıköy, İstanbul</p>
                        <p>Moda Caddesi üzerinde, deniz manzaralı huzurlu bir köşe.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md text-coffee-dark">
                        <h2 class="text-2xl font-bold mb-2 font-playfair">Beşiktaş Şubesi</h2>
                        <p class="mb-1 text-gray-600">Beşiktaş, İstanbul</p>
                        <p>Çarşının kalbinde, enerjik ve canlı bir atmosfer.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md text-coffee-dark">
                        <h2 class="text-2xl font-bold mb-2 font-playfair">Alsancak Şubesi</h2>
                        <p class="mb-1 text-gray-600">Konak, İzmir</p>
                        <p>Kordon'a yürüme mesafesinde, keyifli sohbetlerin adresi.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md text-coffee-dark">
                        <h2 class="text-2xl font-bold mb-2 font-playfair">Çankaya Şubesi</h2>
                        <p class="mb-1 text-gray-600">Çankaya, Ankara</p>
                        <p>Şehrin merkezinde, iş molaları için ideal bir mola noktası.</p>
                    </div>
                </div>
            </div>
        `,
        '/icerikler': `
            <div class="container mx-auto px-4 py-12">
                <h1 class="text-4xl font-playfair font-bold mb-8 text-center">Menü İçerikleri</h1>
                <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-coffee-dark">
                    <p class="mb-6 text-center text-lg">Özenle hazırladığımız ürünlerimizin tam listesi.</p>
                    <div class="grid grid-cols-2 gap-4">
                        ${menuItems.map(item => `
                            <div class="border-b py-3 flex items-center">
                                <span class="w-2 h-2 rounded-full bg-coffee-brown mr-3"></span>
                                <span class="font-bold font-lato text-lg">${item.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="container mx-auto px-4 py-12">
                <h1 class="text-4xl font-playfair font-bold mb-8 text-center">Fiyatlar</h1>
                <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-coffee-dark">
                    <div class="flex flex-col space-y-4">
                        ${menuItems.map(item => `
                            <div class="flex justify-between items-center border-b pb-2">
                                <span class="text-xl font-bold font-lato">${item.name}</span>
                                <span class="text-xl text-coffee-brown font-bold">${item.price}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    };

    // Router
    const router = () => {
        let hash = window.location.hash || '#/';
        // remove hash
        let path = hash.replace('#', '');

        if (pages[path]) {
            mainContent.innerHTML = `<div class="content-section active">${pages[path]}</div>`;
        } else {
            mainContent.innerHTML = `<div class="content-section active"><div class="container mx-auto px-4 py-12 text-center"><h1 class="text-4xl font-bold">404 - Sayfa Bulunamadı</h1></div></div>`;
        }

        // Update active link styling
        sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('bg-coffee-light');
            } else {
                link.classList.remove('bg-coffee-light');
            }
        });
    };

    // Listen to hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
