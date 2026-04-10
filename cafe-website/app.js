document.addEventListener('DOMContentLoaded', () => {
    // === Sidebar Logic ===
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // === Data ===
    const menuItems = [
        { name: 'Espresso', price: 45, category: 'Sıcak Kahveler' },
        { name: 'Cappuccino', price: 55, category: 'Sıcak Kahveler' },
        { name: 'Latte', price: 60, category: 'Sıcak Kahveler' },
        { name: 'Türk Kahvesi', price: 40, category: 'Sıcak Kahveler' },
        { name: 'Çay', price: 25, category: 'Sıcak İçecekler' },
        { name: 'Soğuk Kahve', price: 65, category: 'Soğuk İçecekler' },
        { name: 'Limonata', price: 35, category: 'Soğuk İçecekler' },
        { name: 'Cheesecake', price: 70, category: 'Tatlılar' },
        { name: 'Kruvasan', price: 50, category: 'Atıştırmalıklar' },
        { name: 'Sandviç', price: 80, category: 'Yiyecekler' }
    ];

    // === Routing Logic ===
    const appContent = document.getElementById('app-content');

    const routes = {
        '': renderHome,
        'home': renderHome,
        'about': renderAbout,
        'support': renderSupport,
        'contact': renderContact,
        'locations': renderLocations,
        'menu': renderMenu,
        'prices': renderPrices
    };

    function handleRoute() {
        let hash = window.location.hash.substring(1);
        if (!hash || !routes[hash]) {
            hash = 'home';
        }
        appContent.innerHTML = ''; // Clear current content
        appContent.appendChild(routes[hash]());
        window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', handleRoute);

    // Initial load
    handleRoute();

    // === Page Renderers ===

    function renderHome() {
        const div = document.createElement('div');
        div.className = 'text-center mt-8 space-y-8';
        div.innerHTML = `
            <div class="content-container">
                <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-gray-700 mb-6 font-body">En taze çekirdekler, en iyi atmosfer.</p>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" alt="Kahve Fotoğrafı" class="rounded-lg shadow-lg mx-auto w-full max-w-2xl h-64 md:h-96 object-cover object-center">
            </div>

            <div class="content-container mt-8 bg-cafe-dark text-cafe-light">
                <h2 class="text-2xl font-heading font-bold mb-4">Bugün Ne İstersiniz?</h2>
                <a href="#menu" class="inline-block bg-cafe-accent hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded transition">Menüyü İncele</a>
            </div>
        `;
        return div;
    }

    function renderAbout() {
        const div = document.createElement('div');
        div.className = 'content-container mt-8';
        div.innerHTML = `
            <h1 class="text-3xl font-heading font-bold border-b border-cafe-accent pb-4 mb-6">Hakkında</h1>
            <p class="mb-4 text-lg">
                Kahve Dükkanı olarak 2010 yılından beri sizlere en kaliteli kahve deneyimini sunmak için çalışıyoruz.
                Dünyanın farklı bölgelerinden özenle seçtiğimiz kahve çekirdeklerini, usta baristalarımızın ellerinde
                sanata dönüştürüyoruz.
            </p>
            <p class="text-lg">
                Amacımız sadece kahve satmak değil, aynı zamanda dostlarınızla sohbet edebileceğiniz, kitabınızı
                okuyabileceğiniz veya çalışabileceğiniz sıcak ve samimi bir ortam sağlamaktır. Modern ve minimalist
                tasarımımızla size huzurlu bir mola sunuyoruz.
            </p>
        `;
        return div;
    }

    function renderSupport() {
        const div = document.createElement('div');
        div.className = 'content-container mt-8';
        div.innerHTML = `
            <h1 class="text-3xl font-heading font-bold border-b border-cafe-accent pb-4 mb-6">Destek</h1>
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded border border-gray-200">
                            <h4 class="font-bold">Çalışma saatleriniz nelerdir?</h4>
                            <p class="text-gray-600">Hafta içi 08:00 - 22:00, Hafta sonu 09:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded border border-gray-200">
                            <h4 class="font-bold">Paket servisiniz var mı?</h4>
                            <p class="text-gray-600">Evet, anlaşmalı yemek platformları üzerinden sipariş verebilirsiniz.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-2">Yardım Merkezi</h3>
                    <p>Müşteri deneyiminizle ilgili bir sorun yaşadıysanız lütfen bize bildirin.</p>
                    <a href="#contact" class="text-cafe-accent hover:underline font-bold mt-2 inline-block">Bize Ulaşın</a>
                </div>
            </div>
        `;
        return div;
    }

    function renderContact() {
        const div = document.createElement('div');
        div.className = 'content-container mt-8';
        div.innerHTML = `
            <h1 class="text-3xl font-heading font-bold border-b border-cafe-accent pb-4 mb-6">İletişim</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-cafe-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            0 (212) 555 01 23
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 mr-3 text-cafe-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            merhaba@kahvedukkani.com
                        </li>
                    </ul>
                </div>
                <div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <label class="block text-sm font-bold mb-1">Adınız</label>
                            <input type="text" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-cafe-accent" required>
                        </div>
                        <div>
                            <label class="block text-sm font-bold mb-1">Mesajınız</label>
                            <textarea rows="4" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-cafe-accent" required></textarea>
                        </div>
                        <button type="submit" class="bg-cafe-dark hover:bg-cafe-accent text-white font-bold py-2 px-4 rounded transition">Gönder</button>
                    </form>
                </div>
            </div>
        `;
        return div;
    }

    function renderLocations() {
        const div = document.createElement('div');
        div.className = 'content-container mt-8';
        div.innerHTML = `
            <h1 class="text-3xl font-heading font-bold border-b border-cafe-accent pb-4 mb-6">Şube Konumları</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border border-gray-200 p-4 rounded-lg bg-gray-50">
                    <h3 class="text-xl font-bold mb-2">Merkez Şube</h3>
                    <p class="text-gray-600 mb-2">Kahveciler Sokak No:12, Kadıköy / İstanbul</p>
                    <div class="bg-gray-300 h-32 rounded flex items-center justify-center text-gray-500">Harita Görünümü</div>
                </div>
                <div class="border border-gray-200 p-4 rounded-lg bg-gray-50">
                    <h3 class="text-xl font-bold mb-2">Sahil Şubesi</h3>
                    <p class="text-gray-600 mb-2">Deniz Caddesi No:45, Beşiktaş / İstanbul</p>
                    <div class="bg-gray-300 h-32 rounded flex items-center justify-center text-gray-500">Harita Görünümü</div>
                </div>
                <div class="border border-gray-200 p-4 rounded-lg bg-gray-50">
                    <h3 class="text-xl font-bold mb-2">Üniversite Şubesi</h3>
                    <p class="text-gray-600 mb-2">Kampüs Yolu, Sarıyer / İstanbul</p>
                    <div class="bg-gray-300 h-32 rounded flex items-center justify-center text-gray-500">Harita Görünümü</div>
                </div>
            </div>
        `;
        return div;
    }

    function renderMenu() {
        const div = document.createElement('div');
        div.className = 'content-container mt-8';

        let html = '<h1 class="text-3xl font-heading font-bold border-b border-cafe-accent pb-4 mb-6">Menü İçerikleri</h1>';

        // Group items by category
        const categories = {};
        menuItems.forEach(item => {
            if (!categories[item.category]) categories[item.category] = [];
            categories[item.category].push(item);
        });

        for (const [category, items] of Object.entries(categories)) {
            html += `<h2 class="text-2xl font-bold mt-6 mb-4 text-cafe-accent">${category}</h2>`;
            html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
            items.forEach(item => {
                html += `
                    <div class="border border-gray-200 p-4 rounded bg-gray-50 flex items-center">
                        <div class="w-12 h-12 bg-cafe-dark rounded-full flex items-center justify-center text-cafe-light mr-4 flex-shrink-0">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">${item.name}</h3>
                            <p class="text-sm text-gray-500">Taze hazırlanmış özel tarifimiz.</p>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
        }

        div.innerHTML = html;
        return div;
    }

    function renderPrices() {
        const div = document.createElement('div');
        div.className = 'content-container mt-8';

        let html = '<h1 class="text-3xl font-heading font-bold border-b border-cafe-accent pb-4 mb-6">Fiyatlar</h1>';
        html += '<div class="bg-gray-50 rounded-lg p-6 border border-gray-200">';
        html += '<ul class="divide-y divide-gray-300">';

        menuItems.forEach(item => {
            html += `
                <li class="py-4 flex justify-between items-center">
                    <span class="text-lg font-bold">${item.name}</span>
                    <span class="text-xl font-heading text-cafe-accent font-bold">${item.price}₺</span>
                </li>
            `;
        });

        html += '</ul></div>';

        div.innerHTML = html;
        return div;
    }
});
