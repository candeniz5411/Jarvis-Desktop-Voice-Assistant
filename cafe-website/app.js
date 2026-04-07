document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const appContent = document.getElementById('app');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Sidebar Toggle Logic
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openSidebar);
    closeMenuBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(link => {
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
        '/': renderHome,
        '/hakkinda': renderAbout,
        '/destek': renderSupport,
        '/iletisim': renderContact,
        '/subeler': renderLocations,
        '/menu': renderMenu,
        '/fiyatlar': renderPrices
    };

    function renderHome() {
        return `
            <div class="text-center space-y-8 animate-fade-in">
                <h1 class="text-4xl md:text-5xl font-serif font-bold mb-4">Kahve Dükkanına Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-brown-light max-w-2xl mx-auto">
                    Özenle seçilmiş kahve çekirdeklerimiz ve taze lezzetlerimizle size en iyi deneyimi sunmak için buradayız.
                </p>
                <div class="mt-8 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
                    <!-- Using a reliable Unsplash coffee image as placeholder -->
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Taze Kahve" class="w-full h-auto object-cover max-h-96">
                </div>
            </div>
        `;
    }

    function renderAbout() {
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-light pb-2">Hakkında</h2>
                <p class="text-lg">Kahve Dükkanı, şehrin kalbinde, kahve tutkunları için özel olarak tasarlanmış butik bir mekandır.</p>
                <p class="text-lg">Amacımız, sadece kahve satmak değil, aynı zamanda dostlukların pekiştiği, sıcak ve samimi bir ortam sunmaktır. En kaliteli kahve çekirdeklerini özenle kavuruyor, ustalıkla demliyor ve size sunuyoruz.</p>
            </div>
        `;
    }

    function renderSupport() {
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-light pb-2">Destek</h2>
                <p class="text-lg">Herhangi bir sorunuz veya sorununuz mu var? Size yardımcı olmaktan mutluluk duyarız.</p>
                <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow">
                    <h3 class="font-bold text-xl mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Nasıl sipariş verebilirim?</li>
                        <li>Vegan seçenekleriniz var mı?</li>
                        <li>Toplu sipariş alıyor musunuz?</li>
                    </ul>
                </div>
            </div>
        `;
    }

    function renderContact() {
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-light pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-bold text-xl mb-4">Bize Ulaşın</h3>
                        <p><strong>Adres:</strong> Kahve Sokak, No: 42, İstanbul</p>
                        <p><strong>Telefon:</strong> 0(212) 555 00 00</p>
                        <p><strong>E-posta:</strong> info@kahvedukkani.com</p>
                    </div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <label class="block mb-1">İsim:</label>
                            <input type="text" class="w-full p-2 rounded border border-brown-light bg-cream" required>
                        </div>
                        <div>
                            <label class="block mb-1">Mesajınız:</label>
                            <textarea class="w-full p-2 rounded border border-brown-light bg-cream h-24" required></textarea>
                        </div>
                        <button type="submit" class="bg-brown text-cream px-6 py-2 rounded hover:bg-brown-light transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        `;
    }

    function renderLocations() {
        return `
            <div class="space-y-6">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-light pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow border border-brown-light">
                        <h3 class="font-bold text-xl mb-2">Merkez Şube</h3>
                        <p>Kadıköy, İstanbul</p>
                        <p class="text-sm text-brown-light mt-2">Pzt-Paz: 08:00 - 23:00</p>
                    </div>
                    <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow border border-brown-light">
                        <h3 class="font-bold text-xl mb-2">Moda Şubesi</h3>
                        <p>Moda, İstanbul</p>
                        <p class="text-sm text-brown-light mt-2">Pzt-Paz: 09:00 - 22:00</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenu() {
        let menuHtml = `
            <div class="space-y-6">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-light pb-2">Menü İçerikleri</h2>
                <p class="mb-4">Taze hazırlanmış içeceklerimiz ve yiyeceklerimiz:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        `;

        menuItems.forEach(item => {
            menuHtml += `
                <div class="flex items-center space-x-4 bg-white bg-opacity-40 p-4 rounded shadow-sm">
                    <div class="w-12 h-12 bg-brown-light rounded-full flex items-center justify-center text-cream font-serif text-xl">
                        ${item.name.charAt(0)}
                    </div>
                    <span class="text-lg font-medium">${item.name}</span>
                </div>
            `;
        });

        menuHtml += `
                </div>
            </div>
        `;
        return menuHtml;
    }

    function renderPrices() {
        let priceHtml = `
            <div class="space-y-6">
                <h2 class="text-3xl font-serif font-bold border-b-2 border-brown-light pb-2">Fiyatlar</h2>
                <div class="bg-white bg-opacity-50 rounded-lg shadow overflow-hidden">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-brown text-cream">
                                <th class="p-4 font-semibold">Ürün</th>
                                <th class="p-4 font-semibold text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

        menuItems.forEach((item, index) => {
            const bgClass = index % 2 === 0 ? 'bg-transparent' : 'bg-black bg-opacity-5';
            priceHtml += `
                <tr class="${bgClass} border-b border-brown border-opacity-20 last:border-0">
                    <td class="p-4">${item.name}</td>
                    <td class="p-4 text-right font-bold">${item.price}₺</td>
                </tr>
            `;
        });

        priceHtml += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        return priceHtml;
    }

    // Router Logic
    function router() {
        let hash = window.location.hash.slice(1) || '/';
        const renderFunction = views[hash] || views['/'];
        appContent.innerHTML = renderFunction();
    }

    window.addEventListener('hashchange', router);

    // Initial load
    router();
});