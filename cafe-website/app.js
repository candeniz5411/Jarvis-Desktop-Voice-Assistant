document.addEventListener('DOMContentLoaded', () => {
    // --- State & Data ---
    const menuItems = [
        { name: 'Espresso', price: 45, category: 'Kahveler' },
        { name: 'Cappuccino', price: 55, category: 'Kahveler' },
        { name: 'Latte', price: 60, category: 'Kahveler' },
        { name: 'Türk Kahvesi', price: 40, category: 'Kahveler' },
        { name: 'Soğuk Kahve', price: 65, category: 'Kahveler' },
        { name: 'Çay', price: 25, category: 'Diğer İçecekler' },
        { name: 'Limonata', price: 35, category: 'Diğer İçecekler' },
        { name: 'Cheesecake', price: 70, category: 'Tatlılar & Yiyecekler' },
        { name: 'Kruvasan', price: 50, category: 'Tatlılar & Yiyecekler' },
        { name: 'Sandviç', price: 80, category: 'Tatlılar & Yiyecekler' }
    ];

    // --- DOM Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const appContent = document.getElementById('app-content');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // --- Sidebar Logic ---
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // --- Routing & View Rendering ---

    const views = {
        home: () => `
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <div class="text-center mb-12">
                    <h1 class="font-serif text-4xl sm:text-5xl font-bold text-coffee-dark mb-4">Kahve Dükkanı'na Hoş Geldiniz</h1>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">En taze çekirdekler, özenle demlenmiş kahveler ve sıcak bir atmosfer...</p>
                </div>
                <div class="rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kahve Görseli" class="w-full h-auto object-cover max-h-[500px]">
                </div>
            </div>
        `,
        hakkinda: () => `
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <h2 class="font-serif text-3xl font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Hakkımızda</h2>
                <div class="prose prose-lg text-gray-700">
                    <p class="mb-4">Kahve Dükkanı, kahve tutkusunu en saf haliyle misafirlerine sunmak amacıyla kuruldu. Modern ve minimalist yaklaşımımızla, sadece bir kahve içme alanı değil, aynı zamanda huzurlu bir mola noktası yaratmayı hedefliyoruz.</p>
                    <p>Dünyanın farklı bölgelerinden özenle seçtiğimiz çekirdekleri, uzman baristalarımızın ellerinde sanata dönüştürüyoruz.</p>
                </div>
            </div>
        `,
        destek: () => `
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <h2 class="font-serif text-3xl font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Destek</h2>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <p class="text-gray-700 mb-4">Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili her türlü sorunuz için buradayız.</p>
                    <h3 class="font-bold mt-6 mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Glutensiz ürünleriniz var mı?</li>
                        <li>Vegan süt seçenekleriniz neler?</li>
                        <li>Toplu sipariş alıyor musunuz?</li>
                    </ul>
                </div>
            </div>
        `,
        iletisim: () => `
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <h2 class="font-serif text-3xl font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-4 text-coffee-dark">Bize Ulaşın</h3>
                        <p class="text-gray-600 mb-2"><strong>Email:</strong> info@kahvedukkani.com</p>
                        <p class="text-gray-600 mb-2"><strong>Telefon:</strong> 0 (555) 123 45 67</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h3 class="font-bold text-lg mb-4 text-coffee-dark">Çalışma Saatleri</h3>
                        <p class="text-gray-600 mb-2">Pazartesi - Cuma: 07:30 - 22:00</p>
                        <p class="text-gray-600 mb-2">Cumartesi - Pazar: 09:00 - 23:00</p>
                    </div>
                </div>
            </div>
        `,
        'sube-konumlari': () => `
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <h2 class="font-serif text-3xl font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Şube Konumları</h2>
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-coffee-dark">
                        <h3 class="font-bold text-xl text-gray-800">Merkez Şube</h3>
                        <p class="text-gray-600 mt-2">Atatürk Caddesi, No: 123, Kadıköy / İstanbul</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-coffee-dark">
                        <h3 class="font-bold text-xl text-gray-800">Moda Şubesi</h3>
                        <p class="text-gray-600 mt-2">Moda Caddesi, No: 45, Kadıköy / İstanbul</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-coffee-dark">
                        <h3 class="font-bold text-xl text-gray-800">Beşiktaş Şubesi</h3>
                        <p class="text-gray-600 mt-2">Barbaros Bulvarı, No: 78, Beşiktaş / İstanbul</p>
                    </div>
                </div>
            </div>
        `,
        'menu-icerikleri': () => {
            let html = '<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">';
            html += '<h2 class="font-serif text-3xl font-bold text-coffee-dark mb-8 border-b-2 border-coffee-light pb-2 text-center">Menü İçerikleri</h2>';
            html += '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">';

            menuItems.forEach(item => {
                html += `
                    <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-50 flex flex-col items-center text-center">
                        <div class="w-16 h-16 bg-coffee-light rounded-full flex items-center justify-center mb-4 text-coffee-dark">
                            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 class="font-bold text-lg text-gray-800 mb-1">${item.name}</h3>
                        <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2">${item.category}</span>
                    </div>
                `;
            });

            html += '</div></div>';
            return html;
        },
        fiyatlar: () => {
            let html = '<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">';
            html += '<h2 class="font-serif text-3xl font-bold text-coffee-dark mb-8 border-b-2 border-coffee-light pb-2 text-center">Fiyat Listesi</h2>';
            html += '<div class="bg-white rounded-xl shadow-sm overflow-hidden">';

            // Group by category
            const groupedMenu = menuItems.reduce((acc, item) => {
                if (!acc[item.category]) acc[item.category] = [];
                acc[item.category].push(item);
                return acc;
            }, {});

            for (const category in groupedMenu) {
                html += `
                    <div class="px-6 py-4 bg-coffee-dark text-white font-serif text-xl font-bold">
                        ${category}
                    </div>
                    <ul class="divide-y divide-gray-100">
                `;

                groupedMenu[category].forEach(item => {
                    html += `
                        <li class="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <span class="text-gray-800 font-medium">${item.name}</span>
                            <span class="font-bold text-coffee-dark text-lg">${item.price}₺</span>
                        </li>
                    `;
                });

                html += '</ul>';
            }

            html += '</div></div>';
            return html;
        }
    };

    function renderView() {
        // Get the hash without the '#'
        let route = window.location.hash.substring(1);

        // Default to home if no hash or invalid hash
        if (!route || !views[route]) {
            route = 'home';
            // Don't update URL immediately to prevent history clutter, just render
        }

        // Render the HTML
        appContent.innerHTML = views[route]();

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', renderView);

    // Initial render
    renderView();
});