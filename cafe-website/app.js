document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Elements & Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    };

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    };

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // --- Menu Data ---
    const menuItems = [
        { name: 'Espresso', price: 45, icon: 'fa-mug-hot' },
        { name: 'Cappuccino', price: 55, icon: 'fa-mug-hot' },
        { name: 'Latte', price: 60, icon: 'fa-mug-hot' },
        { name: 'Türk Kahvesi', price: 40, icon: 'fa-mug-saucer' },
        { name: 'Çay', price: 25, icon: 'fa-mug-saucer' },
        { name: 'Cheesecake', price: 70, icon: 'fa-cake-candles' },
        { name: 'Kruvasan', price: 50, icon: 'fa-cookie' },
        { name: 'Sandviç', price: 80, icon: 'fa-bread-slice' },
        { name: 'Soğuk Kahve', price: 65, icon: 'fa-glass-water' },
        { name: 'Limonata', price: 35, icon: 'fa-lemon' }
    ];

    // --- Routing System ---
    const appContainer = document.getElementById('app');

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

    function router() {
        let hash = window.location.hash;

        // Default to home if route not found
        const renderFunction = routes[hash] || routes['#home'];

        // Add fade-out animation effect (optional, simple clear for now)
        appContainer.innerHTML = '';

        // Render new content
        const content = renderFunction();
        appContainer.appendChild(content);

        // Trigger fade-in animation
        content.classList.add('fade-in');
    }

    // Initialize router
    window.addEventListener('hashchange', router);
    router(); // Load initial route

    // --- View Rendering Functions ---

    function createContainer() {
        const div = document.createElement('div');
        div.className = 'w-full h-full flex flex-col';
        return div;
    }

    function renderHome() {
        const container = createContainer();
        container.innerHTML = `
            <div class="flex-grow flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-10">
                <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cafe-brown">Kahve Dükkanı'na Hoş Geldiniz</h2>
                <p class="text-lg md:text-xl mb-10 text-gray-700 max-w-2xl">En taze çekirdekler ve özenle hazırlanan lezzetlerimizle size unutulmaz bir deneyim sunuyoruz.</p>
                <div class="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl relative mb-8">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Kahve Dükkanı Görseli" class="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500">
                </div>
                <a href="#menu" class="bg-cafe-brown text-cafe-cream px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Menümüzü İnceleyin</a>
            </div>
        `;
        return container;
    }

    function renderHakkinda() {
        const container = createContainer();
        container.innerHTML = `
            <div class="max-w-3xl mx-auto py-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 class="font-heading text-3xl font-bold mb-6 text-cafe-brown border-b-2 border-[#3E2723] pb-2 inline-block">Hakkımızda</h2>
                <p class="mb-4 text-gray-700 leading-relaxed text-lg">Kahve Dükkanı, 2024 yılında kahve tutkusunu paylaşmak amacıyla kuruldu. Modern ve minimalist yaklaşımımızla, sadece bir içecek değil, bir yaşam tarzı sunmayı hedefliyoruz.</p>
                <p class="text-gray-700 leading-relaxed text-lg">Özenle seçilmiş çekirdeklerimiz, usta baristalarımızın ellerinde sanata dönüşürken, siz değerli misafirlerimize huzurlu bir ortamda eşsiz bir deneyim yaşatıyoruz.</p>
            </div>
        `;
        return container;
    }

    function renderDestek() {
        const container = createContainer();
        container.innerHTML = `
            <div class="max-w-3xl mx-auto py-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 class="font-heading text-3xl font-bold mb-6 text-cafe-brown border-b-2 border-[#3E2723] pb-2 inline-block">Destek Merkezi</h2>
                <div class="space-y-6">
                    <div class="bg-cafe-cream p-4 rounded-lg">
                        <h3 class="font-bold text-lg mb-2"><i class="fas fa-question-circle mr-2"></i>Sıkça Sorulan Sorular</h3>
                        <p class="text-gray-700">Online sipariş verebilir miyim?</p>
                        <p class="text-sm text-gray-500 mt-1">- Şu an için sadece şubelerimizden hizmet vermekteyiz.</p>
                    </div>
                    <div class="bg-cafe-cream p-4 rounded-lg">
                        <h3 class="font-bold text-lg mb-2"><i class="fas fa-undo mr-2"></i>İade ve Geri Bildirim</h3>
                        <p class="text-gray-700">Ürünlerimizle ilgili her türlü geri bildiriminizi önemsiyoruz. Lütfen mağaza yöneticilerimizle iletişime geçmekten çekinmeyin.</p>
                    </div>
                </div>
            </div>
        `;
        return container;
    }

    function renderIletisim() {
        const container = createContainer();
        container.innerHTML = `
            <div class="max-w-4xl mx-auto py-10 grid md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 class="font-heading text-3xl font-bold mb-6 text-cafe-brown border-b-2 border-[#3E2723] pb-2 inline-block">İletişim</h2>
                    <ul class="space-y-6 text-lg">
                        <li class="flex items-start"><i class="fas fa-map-marker-alt mt-1 mr-4 text-xl text-cafe-brown w-6 text-center"></i><span class="text-gray-700">Kahve Caddesi No:1, Moda, İstanbul</span></li>
                        <li class="flex items-center"><i class="fas fa-phone mr-4 text-xl text-cafe-brown w-6 text-center"></i><span class="text-gray-700">+90 212 555 01 23</span></li>
                        <li class="flex items-center"><i class="fas fa-envelope mr-4 text-xl text-cafe-brown w-6 text-center"></i><span class="text-gray-700">merhaba@kahvedukkani.com</span></li>
                    </ul>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center">
                    <h3 class="font-heading text-2xl font-bold mb-4 text-cafe-brown">Bize Yazın</h3>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <input type="text" placeholder="Adınız" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2723]" required>
                        <input type="email" placeholder="E-posta" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2723]" required>
                        <textarea placeholder="Mesajınız" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E2723]" required></textarea>
                        <button type="submit" class="bg-cafe-brown text-cafe-cream px-6 py-3 rounded-lg font-bold w-full hover:bg-opacity-90 transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        `;
        return container;
    }

    function renderSubeler() {
        const container = createContainer();
        container.innerHTML = `
            <div class="max-w-4xl mx-auto py-10">
                <h2 class="font-heading text-3xl font-bold mb-8 text-cafe-brown border-b-2 border-[#3E2723] pb-2 inline-block">Şube Konumları</h2>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                        <h3 class="font-bold text-xl mb-2 text-cafe-brown"><i class="fas fa-store mr-2"></i>Moda Şubesi (Merkez)</h3>
                        <p class="text-gray-600 mb-2">Moda Caddesi, Kadıköy</p>
                        <p class="text-sm font-semibold text-green-600">Açık - 08:00 / 23:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                        <h3 class="font-bold text-xl mb-2 text-cafe-brown"><i class="fas fa-store mr-2"></i>Karaköy Şubesi</h3>
                        <p class="text-gray-600 mb-2">Kemankeş Karamustafa Paşa</p>
                        <p class="text-sm font-semibold text-green-600">Açık - 07:30 / 22:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                        <h3 class="font-bold text-xl mb-2 text-cafe-brown"><i class="fas fa-store mr-2"></i>Nişantaşı Şubesi</h3>
                        <p class="text-gray-600 mb-2">Teşvikiye Caddesi, Şişli</p>
                        <p class="text-sm font-semibold text-green-600">Açık - 08:30 / 22:30</p>
                    </div>
                </div>
            </div>
        `;
        return container;
    }

    function renderMenu() {
        const container = createContainer();
        let itemsHtml = menuItems.map(item => `
            <div class="menu-item-card bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center justify-center text-center">
                <i class="fas ${item.icon} text-4xl text-cafe-brown mb-4"></i>
                <h3 class="font-heading text-xl font-bold text-gray-800">${item.name}</h3>
                <p class="text-sm text-gray-500 mt-2">Özenle hazırlanmış lezzet</p>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="max-w-5xl mx-auto py-10">
                <h2 class="font-heading text-3xl font-bold mb-8 text-center text-cafe-brown border-b-2 border-[#3E2723] pb-2 inline-block mx-auto flex justify-center w-max">Menü İçerikleri</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    ${itemsHtml}
                </div>
            </div>
        `;
        return container;
    }

    function renderFiyatlar() {
        const container = createContainer();
        let itemsHtml = menuItems.map(item => `
            <div class="flex justify-between items-center py-4 border-b border-gray-200 last:border-0 hover:bg-cafe-cream/30 px-4 rounded transition-colors">
                <span class="font-bold text-lg text-gray-800 flex items-center"><i class="fas ${item.icon} mr-3 text-cafe-brown w-6 text-center"></i>${item.name}</span>
                <span class="font-bold text-xl text-cafe-brown">${item.price}₺</span>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="max-w-3xl mx-auto py-10">
                <h2 class="font-heading text-3xl font-bold mb-8 text-center text-cafe-brown border-b-2 border-[#3E2723] pb-2 inline-block mx-auto flex justify-center w-max">Fiyat Listesi</h2>
                <div class="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                    <div class="flex flex-col">
                        ${itemsHtml}
                    </div>
                </div>
            </div>
        `;
        return container;
    }
});
