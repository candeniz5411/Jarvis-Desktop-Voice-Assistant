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

    // Sidebar DOM Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const appContent = document.getElementById('app-content');
    const sidebarLinks = document.querySelectorAll('#sidebar nav a');

    // Sidebar Toggle Logic
    function toggleSidebar() {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
            sidebar.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
        } else {
            sidebar.classList.remove('-translate-x-full');
            sidebarOverlay.classList.remove('hidden');
        }
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click (especially useful for mobile)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Routing Logic
    const routes = {
        '': renderHome,
        '#': renderHome,
        '#hakkinda': renderAbout,
        '#destek': renderSupport,
        '#iletisim': renderContact,
        '#subeler': renderBranches,
        '#menu': renderMenu,
        '#fiyatlar': renderPrices
    };

    function handleRouting() {
        const hash = window.location.hash;
        const renderFunction = routes[hash] || renderHome;
        appContent.innerHTML = renderFunction();
    }

    // Initialize routing
    window.addEventListener('hashchange', handleRouting);
    handleRouting();

    // View Renderers
    function renderHome() {
        return `
            <div class="mt-8 text-center animate-fade-in">
                <h1 class="font-heading text-4xl md:text-5xl font-bold text-coffee-dark mb-4">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="text-lg text-coffee-medium mb-8">En taze kahve çekirdekleriyle hazırlanan eşsiz lezzetler.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" alt="Kahve Dükkanı" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
                </div>
            </div>
        `;
    }

    function renderAbout() {
        return `
            <div class="mt-8 p-6 bg-cream rounded-xl shadow-md border border-coffee-light/20">
                <h2 class="font-heading text-3xl font-bold text-coffee-dark mb-4 border-b border-coffee-light/30 pb-2">Hakkımızda</h2>
                <p class="text-coffee-dark mb-4 leading-relaxed">Kahve Dükkanı olarak 2024 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz. Amacımız, modern ve sıcak bir ortamda kaliteli kahve deneyimi sunmaktır.</p>
                <p class="text-coffee-dark leading-relaxed">Sadece kahve değil, birbirinden lezzetli tatlılarımız ve atıştırmalıklarımızla da gününüzü güzelleştirmeyi hedefliyoruz.</p>
            </div>
        `;
    }

    function renderSupport() {
        return `
            <div class="mt-8 p-6 bg-cream rounded-xl shadow-md border border-coffee-light/20">
                <h2 class="font-heading text-3xl font-bold text-coffee-dark mb-4 border-b border-coffee-light/30 pb-2">Destek</h2>
                <p class="text-coffee-dark mb-4 leading-relaxed">Müşteri memnuniyeti bizim için her zaman ön plandadır. Herhangi bir sorunuz, öneriniz veya şikayetiniz için destek ekibimizle iletişime geçebilirsiniz.</p>
                <div class="bg-white p-4 rounded-lg shadow-inner mt-4">
                    <h3 class="font-heading text-xl font-bold text-coffee-dark mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc list-inside text-coffee-dark space-y-2">
                        <li>Çalışma saatleriniz nedir? (08:00 - 22:00)</li>
                        <li>Vegan seçenekleriniz var mı? (Evet, bitkisel süt seçeneklerimiz mevcuttur)</li>
                        <li>Wi-Fi hizmetiniz var mı? (Tüm şubelerimizde ücretsiz Wi-Fi bulunmaktadır)</li>
                    </ul>
                </div>
            </div>
        `;
    }

    function renderContact() {
        return `
            <div class="mt-8 p-6 bg-cream rounded-xl shadow-md border border-coffee-light/20">
                <h2 class="font-heading text-3xl font-bold text-coffee-dark mb-4 border-b border-coffee-light/30 pb-2">İletişim</h2>
                <div class="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 class="font-heading text-xl font-bold text-coffee-dark mb-2">Bize Ulaşın</h3>
                        <p class="text-coffee-dark mb-2"><strong>Telefon:</strong> 0 (555) 123 45 67</p>
                        <p class="text-coffee-dark mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                        <p class="text-coffee-dark mb-4"><strong>Adres:</strong> Kahve Cad. No:1 Moda, Kadıköy / İstanbul</p>

                        <div class="flex gap-4 mt-4">
                            <!-- Social Icons placeholders -->
                            <a href="#" class="w-10 h-10 rounded-full bg-coffee-dark text-cream flex items-center justify-center hover:bg-coffee-medium transition-colors">IG</a>
                            <a href="#" class="w-10 h-10 rounded-full bg-coffee-dark text-cream flex items-center justify-center hover:bg-coffee-medium transition-colors">TW</a>
                            <a href="#" class="w-10 h-10 rounded-full bg-coffee-dark text-cream flex items-center justify-center hover:bg-coffee-medium transition-colors">FB</a>
                        </div>
                    </div>
                    <div>
                        <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                            <div>
                                <label class="block text-coffee-dark text-sm font-bold mb-1" for="name">İsim Soyisim</label>
                                <input class="w-full px-3 py-2 border border-coffee-light/50 rounded-lg focus:outline-none focus:border-coffee-dark focus:ring-1 focus:ring-coffee-dark" id="name" type="text" placeholder="Adınız">
                            </div>
                            <div>
                                <label class="block text-coffee-dark text-sm font-bold mb-1" for="email">E-posta</label>
                                <input class="w-full px-3 py-2 border border-coffee-light/50 rounded-lg focus:outline-none focus:border-coffee-dark focus:ring-1 focus:ring-coffee-dark" id="email" type="email" placeholder="E-posta adresiniz">
                            </div>
                            <div>
                                <label class="block text-coffee-dark text-sm font-bold mb-1" for="message">Mesaj</label>
                                <textarea class="w-full px-3 py-2 border border-coffee-light/50 rounded-lg focus:outline-none focus:border-coffee-dark focus:ring-1 focus:ring-coffee-dark" id="message" rows="4" placeholder="Mesajınız..."></textarea>
                            </div>
                            <button class="bg-coffee-dark text-cream font-bold py-2 px-6 rounded-lg hover:bg-coffee-medium transition-colors w-full" type="submit">
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    function renderBranches() {
        return `
            <div class="mt-8 p-6 bg-cream rounded-xl shadow-md border border-coffee-light/20">
                <h2 class="font-heading text-3xl font-bold text-coffee-dark mb-6 border-b border-coffee-light/30 pb-2">Şube Konumları</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-coffee-light/10">
                        <h3 class="font-heading text-xl font-bold text-coffee-dark mb-2">Moda Şubesi (Merkez)</h3>
                        <p class="text-sm text-coffee-medium mb-2">Kahve Cad. No:1 Moda, Kadıköy / İstanbul</p>
                        <p class="text-sm text-coffee-medium font-bold">Her gün 08:00 - 22:00</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-coffee-light/10">
                        <h3 class="font-heading text-xl font-bold text-coffee-dark mb-2">Beşiktaş Şubesi</h3>
                        <p class="text-sm text-coffee-medium mb-2">Çarşı İçi Sok. No:45 Beşiktaş / İstanbul</p>
                        <p class="text-sm text-coffee-medium font-bold">Her gün 07:30 - 23:00</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-coffee-light/10">
                        <h3 class="font-heading text-xl font-bold text-coffee-dark mb-2">Karaköy Şubesi</h3>
                        <p class="text-sm text-coffee-medium mb-2">Galata Yolu No:12 Karaköy / İstanbul</p>
                        <p class="text-sm text-coffee-medium font-bold">Her gün 08:30 - 00:00</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenu() {
        let menuHTML = `
            <div class="mt-8 p-6 bg-cream rounded-xl shadow-md border border-coffee-light/20">
                <h2 class="font-heading text-3xl font-bold text-coffee-dark mb-6 border-b border-coffee-light/30 pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        `;

        menuItems.forEach(item => {
            menuHTML += `
                <div class="bg-white p-4 rounded-lg shadow-sm border border-coffee-light/10 text-center hover:shadow-md transition-shadow">
                    <span class="font-heading text-lg font-bold text-coffee-dark block">${item.name}</span>
                </div>
            `;
        });

        menuHTML += `
                </div>
            </div>
        `;
        return menuHTML;
    }

    function renderPrices() {
        let pricesHTML = `
            <div class="mt-8 p-6 bg-cream rounded-xl shadow-md border border-coffee-light/20 max-w-2xl mx-auto">
                <h2 class="font-heading text-3xl font-bold text-coffee-dark mb-6 border-b border-coffee-light/30 pb-2 text-center">Fiyat Listesi</h2>
                <div class="space-y-3">
        `;

        menuItems.forEach(item => {
            pricesHTML += `
                <div class="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-coffee-light/10">
                    <span class="font-heading text-lg font-bold text-coffee-dark">${item.name}</span>
                    <span class="text-lg font-bold text-coffee-medium border-b-2 border-coffee-medium/30">${item.price}</span>
                </div>
            `;
        });

        pricesHTML += `
                </div>
            </div>
        `;
        return pricesHTML;
    }
});
