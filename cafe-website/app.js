document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContent = document.getElementById('app-content');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // Menu Data
    const menuItems = [
        { name: 'Espresso', price: '45₺', description: 'Yoğun ve sert kahve deneyimi.' },
        { name: 'Cappuccino', price: '55₺', description: 'Bol süt köpüklü espresso.' },
        { name: 'Latte', price: '60₺', description: 'Bol sütlü hafif kahve.' },
        { name: 'Türk Kahvesi', price: '40₺', description: 'Geleneksel lezzet.' },
        { name: 'Çay', price: '25₺', description: 'Taze demlenmiş siyah çay.' },
        { name: 'Cheesecake', price: '70₺', description: 'Orman meyveli veya limonlu.' },
        { name: 'Kruvasan', price: '50₺', description: 'Tereyağlı, taptaze.' },
        { name: 'Sandviç', price: '80₺', description: 'Günlük taze malzemelerle.' },
        { name: 'Soğuk Kahve', price: '65₺', description: 'Yaz aylarının serinleticisi.' },
        { name: 'Limonata', price: '35₺', description: 'Ev yapımı nane ferahlığı.' }
    ];

    // Sidebar Toggle Logic
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Content Templates
    const templates = {
        'ana-sayfa': `
            <div class="text-center w-full max-w-2xl mt-8">
                <h1 class="heading-primary mb-4 text-4xl">Kahve Dükkanına Hoş Geldiniz</h1>
                <p class="text-body mb-8">En taze kahve çekirdekleri ve enfes tatlılar ile gününüzü güzelleştirin.</p>

                <div class="rounded-xl overflow-hidden shadow-lg mb-8 max-h-[400px]">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Kahve Dükkanı Görsel" class="w-full h-full object-cover">
                </div>

                <a href="#menu-icerikleri" class="inline-block bg-brown-800 hover:bg-brown-900 text-cream-100 font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md">
                    Menüyü İncele
                </a>
            </div>
        `,
        'hakkinda': `
            <div class="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md mt-4">
                <h2 class="heading-primary mb-6 border-b-2 border-brown-500 pb-2">Hakkında</h2>
                <p class="text-body mb-4">Kahve Dükkanı, 2010 yılından beri kahve tutkunlarına en kaliteli çekirdekleri sunmayı amaçlayan butik bir kafedir.</p>
                <p class="text-body mb-4">Her fincanda tutku ve ustalık barındıran kahvelerimiz, özenle seçilmiş yöresel çekirdeklerden hazırlanmaktadır.</p>
                <p class="text-body">Amacımız, samimi bir atmosferde kaliteli kahve deneyimini herkes için erişilebilir kılmaktır.</p>
            </div>
        `,
        'destek': `
            <div class="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md mt-4">
                <h2 class="heading-primary mb-6 border-b-2 border-brown-500 pb-2">Destek</h2>
                <p class="text-body mb-6">Müşteri memnuniyeti bizim için her şeyden önemlidir. Sorularınız veya geri bildirimleriniz için buradayız.</p>

                <div class="space-y-4 text-body">
                    <p><strong>Sıkça Sorulan Sorular:</strong></p>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Siparişlerimi ne zaman teslim alabilirim?</li>
                        <li>Glutensiz ürünleriniz var mı?</li>
                        <li>Hangi ödeme yöntemleri geçerlidir?</li>
                    </ul>
                </div>

                <div class="mt-8 p-4 bg-cream-50 rounded-lg border border-brown-400">
                    <p class="text-brown-900 font-bold">Yardıma mı ihtiyacınız var?</p>
                    <p class="text-brown-700 text-sm mt-1">İletişim sayfasından bize ulaşabilirsiniz.</p>
                </div>
            </div>
        `,
        'iletisim': `
            <div class="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md mt-4">
                <h2 class="heading-primary mb-6 border-b-2 border-brown-500 pb-2">İletişim</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-serif font-bold text-xl text-brown-800 mb-4">Bize Ulaşın</h3>
                        <ul class="space-y-3 text-body">
                            <li class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-brown-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Örnek Mah. Kahve Cad. No:1 Kadıköy/İstanbul</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+90 (555) 123 45 67</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-brown-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>merhaba@kahvedukkani.com</span>
                            </li>
                        </ul>
                    </div>

                    <form class="space-y-4">
                        <div>
                            <input type="text" placeholder="Adınız Soyadınız" class="w-full px-4 py-2 border border-brown-400 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-600 bg-cream-50">
                        </div>
                        <div>
                            <input type="email" placeholder="E-posta Adresiniz" class="w-full px-4 py-2 border border-brown-400 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-600 bg-cream-50">
                        </div>
                        <div>
                            <textarea placeholder="Mesajınız" rows="4" class="w-full px-4 py-2 border border-brown-400 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-600 bg-cream-50"></textarea>
                        </div>
                        <button type="button" class="w-full bg-brown-800 hover:bg-brown-900 text-cream-100 font-bold py-2 px-4 rounded-md transition-colors duration-200">
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        `,
        'subeler': `
            <div class="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md mt-4">
                <h2 class="heading-primary mb-6 border-b-2 border-brown-500 pb-2">Şube Konumları</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Şube 1 -->
                    <div class="border border-brown-300 rounded-lg p-5 bg-cream-50 hover:shadow-md transition-shadow">
                        <h3 class="font-serif font-bold text-lg text-brown-900 mb-2">Kadıköy Merkez</h3>
                        <p class="text-body text-sm mb-3">Moda Cad. No:45 Kadıköy/İstanbul</p>
                        <p class="text-sm text-brown-600 font-bold">Çalışma Saatleri:</p>
                        <p class="text-sm text-brown-800">Pzt - Paz: 08:00 - 23:00</p>
                    </div>

                    <!-- Şube 2 -->
                    <div class="border border-brown-300 rounded-lg p-5 bg-cream-50 hover:shadow-md transition-shadow">
                        <h3 class="font-serif font-bold text-lg text-brown-900 mb-2">Beşiktaş Çarşı</h3>
                        <p class="text-body text-sm mb-3">Ihlamurdere Cad. No:12 Beşiktaş/İstanbul</p>
                        <p class="text-sm text-brown-600 font-bold">Çalışma Saatleri:</p>
                        <p class="text-sm text-brown-800">Pzt - Paz: 07:30 - 22:30</p>
                    </div>

                    <!-- Şube 3 -->
                    <div class="border border-brown-300 rounded-lg p-5 bg-cream-50 hover:shadow-md transition-shadow">
                        <h3 class="font-serif font-bold text-lg text-brown-900 mb-2">Nişantaşı</h3>
                        <p class="text-body text-sm mb-3">Teşvikiye Mah. Valikonağı Cad. Şişli/İstanbul</p>
                        <p class="text-sm text-brown-600 font-bold">Çalışma Saatleri:</p>
                        <p class="text-sm text-brown-800">Pzt - Paz: 08:00 - 22:00</p>
                    </div>

                    <!-- Şube 4 -->
                    <div class="border border-brown-300 rounded-lg p-5 bg-cream-50 hover:shadow-md transition-shadow">
                        <h3 class="font-serif font-bold text-lg text-brown-900 mb-2">Alsancak (İzmir)</h3>
                        <p class="text-body text-sm mb-3">Kıbrıs Şehitleri Cad. Konak/İzmir</p>
                        <p class="text-sm text-brown-600 font-bold">Çalışma Saatleri:</p>
                        <p class="text-sm text-brown-800">Pzt - Paz: 09:00 - 00:00</p>
                    </div>
                </div>
            </div>
        `,
        'menu-icerikleri': `
            <div class="w-full max-w-3xl mt-4">
                <h2 class="heading-primary mb-6 text-center">Menü İçerikleri</h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="menu-grid">
                    <!-- Menu items will be injected here -->
                </div>
            </div>
        `,
        'fiyatlar': `
            <div class="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md mt-4">
                <h2 class="heading-primary mb-6 border-b-2 border-brown-500 pb-2 text-center">Fiyat Listesi</h2>

                <div class="flex flex-col space-y-3" id="price-list">
                    <!-- Price items will be injected here -->
                </div>

                <div class="mt-8 text-center text-sm text-brown-600 italic">
                    <p>* Tüm fiyatlarımıza KDV dahildir.</p>
                </div>
            </div>
        `
    };

    // Routing Logic
    function renderContent(hash) {
        // Default route
        if (!hash || hash === '#' || hash === '') {
            hash = '#ana-sayfa';
        }

        const route = hash.substring(1);

        // Fade out
        appContent.classList.add('opacity-0');

        setTimeout(() => {
            if (templates[route]) {
                appContent.innerHTML = templates[route];

                // If it's a menu or price page, render the dynamic data
                if (route === 'menu-icerikleri') {
                    renderMenuItems();
                } else if (route === 'fiyatlar') {
                    renderPriceList();
                }
            } else {
                appContent.innerHTML = templates['ana-sayfa'];
            }
            // Fade in
            appContent.classList.remove('opacity-0');
        }, 150); // Small delay to allow fade out
    }

    // Helper functions to render data
    function renderMenuItems() {
        const menuGrid = document.getElementById('menu-grid');
        if (menuGrid) {
            let html = '';
            menuItems.forEach(item => {
                html += `
                    <div class="bg-white p-5 rounded-lg shadow-sm border border-brown-200 hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-serif font-bold text-xl text-brown-900">${item.name}</h3>
                            <span class="font-bold text-brown-700 bg-cream-100 px-3 py-1 rounded-full text-sm border border-brown-300">${item.price}</span>
                        </div>
                        <p class="text-brown-600 text-sm">${item.description}</p>
                    </div>
                `;
            });
            menuGrid.innerHTML = html;
        }
    }

    function renderPriceList() {
        const priceList = document.getElementById('price-list');
        if (priceList) {
            let html = '';
            menuItems.forEach(item => {
                html += `
                    <div class="flex justify-between items-center py-3 border-b border-brown-200 last:border-0 hover:bg-cream-50 px-2 rounded transition-colors">
                        <span class="font-sans text-brown-800 font-medium text-lg">${item.name}</span>
                        <span class="font-bold text-brown-900 text-lg">${item.price}</span>
                    </div>
                `;
            });
            priceList.innerHTML = html;
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        renderContent(window.location.hash);
    });

    // Initial render
    renderContent(window.location.hash);
});