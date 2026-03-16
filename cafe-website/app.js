document.addEventListener('DOMContentLoaded', () => {

    // --- UI Logic: Sidebar & Overlay Toggle ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const contentDiv = document.getElementById('content');

    // Toggle side panel visibility
    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            // Open sidebar
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            // Add a slight delay to allow display block before opacity transition
            setTimeout(() => overlay.classList.add('opacity-100'), 10);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        } else {
            // Close sidebar
            sidebar.classList.add('-translate-x-full');
            overlay.classList.remove('opacity-100');
            // Hide after transition
            setTimeout(() => overlay.classList.add('hidden'), 300);
            document.body.style.overflow = ''; // Restore background scroll
        }
    }

    // Event listeners for toggle actions
    hamburgerBtn.addEventListener('click', toggleSidebar);
    closeSidebarBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click (for mobile/responsive behavior)
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });


    // --- Data: Menu & Prices ---
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


    // --- Routing System ---

    const routes = {
        '/': renderHome,
        '/hakkinda': renderAbout,
        '/destek': renderSupport,
        '/iletisim': renderContact,
        '/sube-konumlari': renderLocations,
        '/menu-icerikleri': renderMenu,
        '/fiyatlar': renderPrices,
    };

    function renderPage() {
        let hash = window.location.hash.substring(1) || '/';

        // Clear content and add animation class
        contentDiv.innerHTML = '';
        contentDiv.classList.remove('fade-in');
        // Trigger reflow for animation restart
        void contentDiv.offsetWidth;
        contentDiv.classList.add('fade-in');

        if (routes[hash]) {
            contentDiv.innerHTML = routes[hash]();
        } else {
            contentDiv.innerHTML = renderNotFound();
        }

        // Update document title dynamically based on route
        const titleMap = {
            '/': 'Ana Sayfa',
            '/hakkinda': 'Hakkında',
            '/destek': 'Destek',
            '/iletisim': 'İletişim',
            '/sube-konumlari': 'Şube Konumları',
            '/menu-icerikleri': 'Menü İçerikleri',
            '/fiyatlar': 'Fiyatlar'
        };
        document.title = `${titleMap[hash] || 'Sayfa Bulunamadı'} - Kahve Dükkanı`;
    }

    // Initial render
    window.addEventListener('hashchange', renderPage);
    renderPage(); // Call once on load

    // --- Page Render Functions ---

    function renderHome() {
        return `
            <div class="text-center py-12">
                <h2 class="font-playfair text-4xl md:text-5xl font-bold mb-4 text-[#3E2723]">Hoş Geldiniz!</h2>
                <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Taze çekilmiş çekirdekler, eşsiz aromalar ve sıcacık bir atmosfer. Kahve Dükkanı'na hoş geldiniz, gününüzü güzelleştirecek lezzetler burada.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl mx-auto max-w-3xl">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Kahve Dükkanı" class="w-full h-auto object-cover object-center transform hover:scale-105 transition-transform duration-700">
                </div>
            </div>
        `;
    }

    function renderAbout() {
        return `
            <div class="bg-white p-8 rounded-xl shadow-lg border border-[#E0D8C8]">
                <h2 class="font-playfair text-3xl font-bold mb-6 text-[#3E2723] border-b-2 border-[#8B5A2B] pb-2 inline-block">Hakkında</h2>
                <p class="text-gray-700 leading-relaxed mb-4 text-lg">2010 yılından beri, kahve tutkusunu kalite ve samimiyetle harmanlayarak misafirlerimize eşsiz bir deneyim sunuyoruz.</p>
                <p class="text-gray-700 leading-relaxed text-lg">Amacımız, dünyanın farklı yörelerinden özenle seçilmiş kahve çekirdeklerini en taze haliyle sizlerle buluşturmak ve günün yorgunluğunu atabileceğiniz sıcak, huzurlu bir ortam yaratmaktır.</p>
            </div>
        `;
    }

    function renderSupport() {
        return `
            <div class="bg-white p-8 rounded-xl shadow-lg border border-[#E0D8C8]">
                <h2 class="font-playfair text-3xl font-bold mb-6 text-[#3E2723] border-b-2 border-[#8B5A2B] pb-2 inline-block">Destek Merkezi</h2>
                <p class="text-gray-700 leading-relaxed mb-6 text-lg">Siparişleriniz, ürünlerimiz veya web sitemiz ile ilgili yardıma mı ihtiyacınız var? Sıkça sorulan sorulara göz atabilir veya destek ekibimizle iletişime geçebilirsiniz.</p>

                <div class="space-y-4">
                    <div class="p-4 bg-[#FFFDD0] rounded-lg border border-[#E0D8C8]">
                        <h3 class="font-bold text-[#3E2723] mb-2">Siparişimi nasıl iptal edebilirim?</h3>
                        <p class="text-sm text-gray-700">Siparişinizi oluşturduktan sonra ilk 15 dakika içerisinde iletişim numaralarımızdan bizi arayarak iptal edebilirsiniz.</p>
                    </div>
                    <div class="p-4 bg-[#FFFDD0] rounded-lg border border-[#E0D8C8]">
                        <h3 class="font-bold text-[#3E2723] mb-2">Vegan seçenekleriniz var mı?</h3>
                        <p class="text-sm text-gray-700">Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve vegan atıştırmalıklarımız mevcuttur.</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderContact() {
        return `
            <div class="bg-white p-8 rounded-xl shadow-lg border border-[#E0D8C8]">
                <h2 class="font-playfair text-3xl font-bold mb-6 text-[#3E2723] border-b-2 border-[#8B5A2B] pb-2 inline-block">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-bold text-xl text-[#3E2723] mb-4">Bize Ulaşın</h3>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-center"><svg class="w-5 h-5 mr-3 fill-current text-[#8B5A2B]" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> iletisim@kahvedukkani.com</li>
                            <li class="flex items-center"><svg class="w-5 h-5 mr-3 fill-current text-[#8B5A2B]" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> +90 555 123 45 67</li>
                            <li class="flex items-center"><svg class="w-5 h-5 mr-3 fill-current text-[#8B5A2B]" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> Kahve Caddesi No:42, Kadıköy / İstanbul</li>
                        </ul>
                    </div>
                    <div>
                        <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                            <div>
                                <label class="block text-sm font-bold text-[#3E2723] mb-1">Adınız</label>
                                <input type="text" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#8B5A2B] bg-[#FFFDD0]" required>
                            </div>
                            <div>
                                <label class="block text-sm font-bold text-[#3E2723] mb-1">Mesajınız</label>
                                <textarea rows="4" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#8B5A2B] bg-[#FFFDD0]" required></textarea>
                            </div>
                            <button type="submit" class="bg-[#3E2723] text-[#FFFDD0] px-6 py-2 rounded font-bold hover:bg-[#5C3A21] transition-colors w-full">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    function renderLocations() {
        return `
            <div class="bg-white p-8 rounded-xl shadow-lg border border-[#E0D8C8]">
                <h2 class="font-playfair text-3xl font-bold mb-6 text-[#3E2723] border-b-2 border-[#8B5A2B] pb-2 inline-block">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-[#FFFDD0] p-6 rounded-lg shadow border border-[#E0D8C8] text-center">
                        <h3 class="font-playfair text-2xl font-bold text-[#3E2723] mb-2">Kadıköy Merkez</h3>
                        <p class="text-gray-600 mb-4">Moda Caddesi, No: 12</p>
                        <p class="text-sm font-bold text-[#8B5A2B]">08:00 - 23:00</p>
                    </div>
                    <div class="bg-[#FFFDD0] p-6 rounded-lg shadow border border-[#E0D8C8] text-center">
                        <h3 class="font-playfair text-2xl font-bold text-[#3E2723] mb-2">Beşiktaş</h3>
                        <p class="text-gray-600 mb-4">Barbaros Bulvarı, No: 45</p>
                        <p class="text-sm font-bold text-[#8B5A2B]">07:30 - 22:00</p>
                    </div>
                    <div class="bg-[#FFFDD0] p-6 rounded-lg shadow border border-[#E0D8C8] text-center">
                        <h3 class="font-playfair text-2xl font-bold text-[#3E2723] mb-2">Alsancak</h3>
                        <p class="text-gray-600 mb-4">Kordon Boyu, No: 88</p>
                        <p class="text-sm font-bold text-[#8B5A2B]">08:30 - 00:00</p>
                    </div>
                </div>
            </div>
        `;
    }

    function generateMenuItemsHtml(showPrices = false) {
        let html = '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">';
        menuItems.forEach(item => {
            html += `
                <div class="flex justify-between items-center p-4 bg-[#FFFDD0] rounded-lg border border-[#E0D8C8] hover:shadow-md transition-shadow">
                    <span class="font-bold text-lg text-[#3E2723]">${item.name}</span>
                    ${showPrices ? `<span class="font-playfair text-xl text-[#8B5A2B] font-bold">${item.price}</span>` : ''}
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    function renderMenu() {
        return `
            <div class="bg-white p-8 rounded-xl shadow-lg border border-[#E0D8C8]">
                <h2 class="font-playfair text-3xl font-bold mb-2 text-[#3E2723]">Menü İçerikleri</h2>
                <p class="text-gray-600 mb-8 italic">Özenle hazırladığımız yiyecek ve içeceklerimiz.</p>
                ${generateMenuItemsHtml(false)}
            </div>
        `;
    }

    function renderPrices() {
        return `
            <div class="bg-white p-8 rounded-xl shadow-lg border border-[#E0D8C8]">
                <h2 class="font-playfair text-3xl font-bold mb-2 text-[#3E2723]">Fiyatlar</h2>
                <p class="text-gray-600 mb-8 italic">Güncel fiyat listemiz.</p>
                ${generateMenuItemsHtml(true)}
            </div>
        `;
    }

    function renderNotFound() {
        return `
            <div class="text-center py-16">
                <h2 class="font-playfair text-5xl font-bold mb-4 text-[#3E2723]">404</h2>
                <p class="text-xl text-gray-700 mb-6">Aradığınız sayfa bulunamadı.</p>
                <a href="#/" class="inline-block bg-[#3E2723] text-[#FFFDD0] px-6 py-3 rounded-full font-bold hover:bg-[#5C3A21] transition-colors">Ana Sayfaya Dön</a>
            </div>
        `;
    }

});
