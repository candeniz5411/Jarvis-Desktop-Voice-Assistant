document.addEventListener('DOMContentLoaded', () => {
    // Sidebar logic
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', toggleSidebar); // Auto-close on mobile/click
    });

    // Routing and Content Logic
    const appContainer = document.getElementById('app');

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

    const routes = {
        '': renderHome,
        '#home': renderHome,
        '#hakkinda': renderHakkinda,
        '#destek': renderDestek,
        '#iletisim': renderIletisim,
        '#subeler': renderSubeler,
        '#menu': renderMenu,
        '#fiyatlar': renderFiyatlar
    };

    function renderHome() {
        return `
            <div class="text-center mt-12">
                <i class="fas fa-mug-hot text-6xl text-brown mb-6"></i>
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl mb-8 text-brown/80">En taze çekirdeklerle hazırlanan kahvelerimizin keyfini çıkarın.</p>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kahve" class="rounded-lg shadow-xl mx-auto w-full max-w-2xl object-cover h-64 md:h-96">
            </div>
        `;
    }

    function renderHakkinda() {
        return `
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
                <h2 class="text-3xl font-bold mb-6 text-brown border-b-2 border-brown/20 pb-2">Hakkımızda</h2>
                <p class="text-lg leading-relaxed text-gray-700">
                    Kahve Dükkanı olarak amacımız, şehrin karmaşasından uzaklaşıp sıcak bir kahve eşliğinde rahatlayabileceğiniz modern ve samimi bir ortam sunmaktır.
                    Özenle seçilmiş kahve çekirdeklerimiz ve taze atıştırmalıklarımızla her yudumda kaliteyi hissetmenizi istiyoruz.
                </p>
            </div>
        `;
    }

    function renderDestek() {
         return `
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
                <h2 class="text-3xl font-bold mb-6 text-brown border-b-2 border-brown/20 pb-2">Destek Merkezi</h2>
                <p class="text-lg mb-6 text-gray-700">Siparişleriniz, geri bildirimleriniz veya sorularınız için bize ulaşmaktan çekinmeyin.</p>
                <div class="bg-cream/50 p-4 rounded-md">
                    <p class="font-semibold text-brown"><i class="fas fa-envelope mr-2"></i> E-posta: destek@kahvedukkani.com</p>
                    <p class="font-semibold text-brown mt-2"><i class="fas fa-phone mr-2"></i> Telefon: +90 555 123 4567</p>
                </div>
            </div>
        `;
    }

    function renderIletisim() {
         return `
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
                <h2 class="text-3xl font-bold mb-6 text-brown border-b-2 border-brown/20 pb-2">İletişim</h2>
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-bold mb-2" for="name">Adınız Soyadınız</label>
                        <input class="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown" id="name" type="text" placeholder="Adınız">
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-2" for="email">E-posta Adresiniz</label>
                        <input class="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown" id="email" type="email" placeholder="E-posta">
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-2" for="message">Mesajınız</label>
                        <textarea class="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown" id="message" rows="4" placeholder="Mesajınızı buraya yazın..."></textarea>
                    </div>
                    <button class="bg-brown text-cream font-bold py-2 px-6 rounded hover:bg-opacity-90 transition-colors" type="button">Gönder</button>
                </form>
            </div>
        `;
    }

    function renderSubeler() {
         return `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
                <h2 class="text-3xl font-bold mb-6 text-brown border-b-2 border-brown/20 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 class="text-xl font-bold mb-2"><i class="fas fa-map-marker-alt text-red-500 mr-2"></i>Merkez Şube</h3>
                        <p class="text-gray-600">Atatürk Caddesi No: 15, Kadıköy / İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                    <div class="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 class="text-xl font-bold mb-2"><i class="fas fa-map-marker-alt text-red-500 mr-2"></i>Moda Şubesi</h3>
                        <p class="text-gray-600">Moda Caddesi No: 42, Kadıköy / İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 09:00 - 23:00</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenu() {
        let menuHtml = `
            <div class="max-w-4xl mx-auto mt-8">
                <h2 class="text-3xl font-bold mb-8 text-center text-brown">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        `;

        menuItems.forEach(item => {
            menuHtml += `
                <div class="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center border-l-4 border-brown">
                    <span class="text-lg font-semibold">${item.name}</span>
                    <i class="fas fa-utensils text-brown/30"></i>
                </div>
            `;
        });

        menuHtml += `
                </div>
            </div>
        `;
        return menuHtml;
    }

    function renderFiyatlar() {
        let fiyatHtml = `
            <div class="max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold mb-8 text-center text-brown border-b-2 border-brown/20 pb-4">Fiyat Listesi</h2>
                <ul class="space-y-4">
        `;

        menuItems.forEach(item => {
            fiyatHtml += `
                <li class="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                    <span class="text-lg text-gray-800">${item.name}</span>
                    <span class="text-xl font-bold text-brown">${item.price}</span>
                </li>
            `;
        });

        fiyatHtml += `
                </ul>
            </div>
        `;
        return fiyatHtml;
    }

    function handleRoute() {
        const path = window.location.hash;
        const renderFunction = routes[path] || routes[''];
        appContainer.innerHTML = renderFunction();
    }

    // Initialize routing
    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Load initial route
});