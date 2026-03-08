document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContent = document.getElementById('app');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // --- Sidebar Toggle Logic ---
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

    // --- Data ---
    const menuItems = [
        { name: "Espresso", price: "45₺", category: "coffee" },
        { name: "Cappuccino", price: "55₺", category: "coffee" },
        { name: "Latte", price: "60₺", category: "coffee" },
        { name: "Türk Kahvesi", price: "40₺", category: "coffee" },
        { name: "Çay", price: "25₺", category: "tea" },
        { name: "Soğuk Kahve", price: "65₺", category: "coffee" },
        { name: "Limonata", price: "35₺", category: "cold" },
        { name: "Cheesecake", price: "70₺", category: "food" },
        { name: "Kruvasan", price: "50₺", category: "food" },
        { name: "Sandviç", price: "80₺", category: "food" }
    ];

    // --- Render Functions ---
    function renderHome() {
        return `
            <div class="content-card fade-in flex flex-col items-center text-center">
                <div class="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-md">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                         alt="Taze kahve ve dükkan atmosferi" class="w-full h-full object-cover">
                </div>

                <h2 class="text-4xl font-heading font-bold text-[#3E2723] mb-4">Kahve Dükkanı'na Hoş Geldiniz</h2>
                <p class="text-lg text-[#3E2723] max-w-2xl mx-auto opacity-80 mb-6">
                    En taze çekirdeklerden özenle hazırladığımız kahvelerimiz ve lezzetli atıştırmalıklarımızla
                    gününüzü güzelleştirmek için buradayız.
                </p>

                <a href="#/menu" class="bg-[#3E2723] text-[#FFFDD0] px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                    Menüyü İncele
                </a>
            </div>
        `;
    }

    function renderAbout() {
        return `
            <div class="content-card fade-in">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] border-b pb-2 mb-6">Hakkımızda</h2>
                <div class="space-y-4 text-[#3E2723] opacity-90">
                    <p>
                        Kahve Dükkanı, 2020 yılından beri kahve tutkunlarına en kaliteli hizmeti sunmayı amaçlayan butik bir kafedir.
                        Dünyanın farklı bölgelerinden özenle seçtiğimiz çekirdekleri, ustalıkla kavurarak fincanınıza taşıyoruz.
                    </p>
                    <p>
                        Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimizin kendilerini evlerinde hissedebilecekleri,
                        sıcak ve samimi bir atmosfer yaratmaktır. Her bir fincan kahvemizde sevgimizi ve tutkumuzu paylaşıyoruz.
                    </p>
                </div>
            </div>
        `;
    }

    function renderSupport() {
        return `
            <div class="content-card fade-in">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] border-b pb-2 mb-6">Destek</h2>
                <div class="space-y-6 text-[#3E2723]">
                    <p class="opacity-90">Müşteri memnuniyeti bizim için çok önemlidir. Soru, görüş ve önerileriniz için aşağıdaki formu doldurabilirsiniz.</p>

                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <label class="block mb-1 font-bold">Adınız Soyadınız</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#3E2723]" required>
                        </div>
                        <div>
                            <label class="block mb-1 font-bold">E-posta Adresiniz</label>
                            <input type="email" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#3E2723]" required>
                        </div>
                        <div>
                            <label class="block mb-1 font-bold">Mesajınız</label>
                            <textarea rows="4" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#3E2723]" required></textarea>
                        </div>
                        <button type="submit" class="bg-[#3E2723] text-[#FFFDD0] px-6 py-2 rounded font-bold hover:opacity-90 transition-opacity">
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        `;
    }

    function renderContact() {
        return `
            <div class="content-card fade-in">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] border-b pb-2 mb-6">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#3E2723]">
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <div>
                                <h3 class="font-bold">Adres</h3>
                                <p class="opacity-90">Kahve Mahallesi, Çekirdek Sokak No: 1, İstanbul</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <div>
                                <h3 class="font-bold">E-posta</h3>
                                <p class="opacity-90">merhaba@kahvedukkani.com</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <div>
                                <h3 class="font-bold">Telefon</h3>
                                <p class="opacity-90">+90 555 123 45 67</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-bold mb-2">Çalışma Saatleri</h3>
                        <ul class="opacity-90 space-y-2">
                            <li class="flex justify-between border-b border-gray-100 pb-1"><span>Pazartesi - Cuma</span> <span>07:30 - 22:00</span></li>
                            <li class="flex justify-between border-b border-gray-100 pb-1"><span>Cumartesi</span> <span>08:00 - 23:00</span></li>
                            <li class="flex justify-between pb-1"><span>Pazar</span> <span>09:00 - 22:00</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    function renderLocations() {
        return `
            <div class="content-card fade-in">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] border-b pb-2 mb-6">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-[#FFFDD0] p-4 rounded-lg shadow-sm border border-gray-100">
                        <h3 class="font-bold text-xl mb-2 text-[#3E2723]">Kadıköy Şubesi (Merkez)</h3>
                        <p class="text-sm opacity-90 mb-2">Moda Caddesi No: 42, Kadıköy / İstanbul</p>
                        <p class="text-sm font-semibold">Tel: +90 216 111 22 33</p>
                    </div>
                    <div class="bg-[#FFFDD0] p-4 rounded-lg shadow-sm border border-gray-100">
                        <h3 class="font-bold text-xl mb-2 text-[#3E2723]">Beşiktaş Şubesi</h3>
                        <p class="text-sm opacity-90 mb-2">Akaretler Sıraevler No: 15, Beşiktaş / İstanbul</p>
                        <p class="text-sm font-semibold">Tel: +90 212 444 55 66</p>
                    </div>
                    <div class="bg-[#FFFDD0] p-4 rounded-lg shadow-sm border border-gray-100">
                        <h3 class="font-bold text-xl mb-2 text-[#3E2723]">Karaköy Şubesi</h3>
                        <p class="text-sm opacity-90 mb-2">Kemankeş Caddesi No: 8, Beyoğlu / İstanbul</p>
                        <p class="text-sm font-semibold">Tel: +90 212 777 88 99</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenu() {
        let menuHtml = `
            <div class="content-card fade-in">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] border-b pb-2 mb-6">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        `;

        // Gruplayarak listele
        const categories = {
            "Kahveler": menuItems.filter(item => item.category === "coffee"),
            "Diğer İçecekler": menuItems.filter(item => item.category === "tea" || item.category === "cold"),
            "Yiyecekler": menuItems.filter(item => item.category === "food")
        };

        for (const [categoryName, items] of Object.entries(categories)) {
            menuHtml += `
                <div>
                    <h3 class="text-xl font-bold text-[#3E2723] mb-4">${categoryName}</h3>
                    <ul class="space-y-3">
            `;

            items.forEach(item => {
                menuHtml += `
                        <li class="flex justify-between items-center bg-[#FFFDD0] p-3 rounded-lg menu-item">
                            <span class="font-semibold">${item.name}</span>
                            <span class="font-bold">${item.price}</span>
                        </li>
                `;
            });

            menuHtml += `
                    </ul>
                </div>
            `;
        }

        menuHtml += `
                </div>
            </div>
        `;
        return menuHtml;
    }

    function renderPrices() {
        let pricesHtml = `
            <div class="content-card fade-in">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] border-b pb-2 mb-6">Fiyat Listesi</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-[#3E2723] text-[#FFFDD0]">
                                <th class="p-3 rounded-tl-lg">Ürün Adı</th>
                                <th class="p-3 text-right rounded-tr-lg">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

        // Tüm ürünleri fiyata göre artan sırala veya alfabetik sırala. Biz düz listeleyelim.
        menuItems.forEach((item, index) => {
            const rowClass = index % 2 === 0 ? 'bg-[#FFFDD0] bg-opacity-50' : 'bg-white';
            pricesHtml += `
                            <tr class="${rowClass} border-b border-gray-100 hover:bg-[#FFFDD0] transition-colors">
                                <td class="p-3 font-medium">${item.name}</td>
                                <td class="p-3 text-right font-bold text-[#3E2723]">${item.price}</td>
                            </tr>
            `;
        });

        pricesHtml += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        return pricesHtml;
    }

    // --- Routing System ---
    const routes = {
        '/': renderHome,
        '/hakkinda': renderAbout,
        '/destek': renderSupport,
        '/iletisim': renderContact,
        '/subeler': renderLocations,
        '/menu': renderMenu,
        '/fiyatlar': renderPrices
    };

    function router() {
        // Get path from URL hash, default to '/'
        let path = window.location.hash.slice(1) || '/';

        // Remove trailing slash if it's not the root path
        if (path !== '/' && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        const renderFunction = routes[path] || renderHome;
        appContent.innerHTML = renderFunction();

        // Update active state in sidebar
        sidebarLinks.forEach(link => {
            const linkPath = link.getAttribute('href').slice(1);
            if (linkPath === path || (linkPath === '/' && path === '/')) {
                link.classList.add('bg-[#FFFDD0]');
            } else {
                link.classList.remove('bg-[#FFFDD0]');
            }
        });
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});