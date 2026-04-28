document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const appContainer = document.getElementById('app');

    // Sidebar Toggle Logic
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        sidebarOverlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
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
        '/': `
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-4">Kahve Dükkanına Hoş Geldiniz</h1>
                <p class="text-lg mb-8">En taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz.</p>
                <div class="rounded-lg overflow-hidden shadow-xl inline-block max-w-full">
                    <img src="../Images/Cover_pic.jpg" alt="Kahve Fotoğrafı" class="w-full max-w-2xl mx-auto h-auto object-cover">
                </div>
            </div>
        `,
        '/hakkinda': `
            <div>
                <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-500 pb-2">Hakkında</h2>
                <p class="text-lg leading-relaxed">
                    Kahve Dükkanı, 2023 yılında en kaliteli kahve çekirdeklerini sizlerle buluşturmak amacıyla kuruldu.
                    Amacımız, sıcak ve samimi bir ortamda, günün stresini atabileceğiniz ve lezzetli kahvelerimizin tadını çıkarabileceğiniz bir mekan sunmaktır.
                </p>
            </div>
        `,
        '/destek': `
            <div>
                <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-500 pb-2">Destek</h2>
                <p class="text-lg leading-relaxed mb-4">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Sıkça sorulan sorulara göz atabilir veya bizimle iletişime geçebilirsiniz.</p>
                <ul class="list-disc list-inside text-lg space-y-2 ml-4">
                    <li>Sipariş takibi</li>
                    <li>İade ve değişim politikaları</li>
                    <li>Üyelik işlemleri</li>
                </ul>
            </div>
        `,
        '/iletisim': `
            <div>
                <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-500 pb-2">İletişim</h2>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No:123, Merkez / İstanbul</p>
                    <p class="text-lg mb-2"><strong>Telefon:</strong> 0 (212) 555 12 34</p>
                    <p class="text-lg mb-4"><strong>E-posta:</strong> iletisim@kahvedukkani.com</p>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-bold mb-1">Adınız</label>
                            <input type="text" class="w-full border p-2 rounded focus:outline-none focus:border-brown-500" placeholder="Adınız">
                        </div>
                        <div>
                            <label class="block text-sm font-bold mb-1">Mesajınız</label>
                            <textarea class="w-full border p-2 rounded h-32 focus:outline-none focus:border-brown-500" placeholder="Mesajınız"></textarea>
                        </div>
                        <button type="button" class="bg-brown-500 text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        '/subeler': `
            <div>
                <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-500 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-brown-500">
                        <h3 class="text-xl font-bold mb-2">Merkez Şube</h3>
                        <p>Kahve Sokak No:123, Kadıköy / İstanbul</p>
                        <p class="text-sm text-gray-600 mt-2">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-brown-500">
                        <h3 class="text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                        <p>Çınar Caddesi No:45, Beşiktaş / İstanbul</p>
                        <p class="text-sm text-gray-600 mt-2">Çalışma Saatleri: 07:30 - 23:00</p>
                    </div>
                </div>
            </div>
        `,
        '/icerikler': `
            <div>
                <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-500 pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                            <span class="text-lg font-semibold">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div>
                <h2 class="text-3xl font-bold mb-4 border-b-2 border-brown-500 pb-2">Fiyatlar</h2>
                <div class="bg-white rounded-lg shadow overflow-hidden">
                    <table class="w-full text-left">
                        <thead class="bg-brown-100 border-b">
                            <tr>
                                <th class="p-4 font-bold text-lg">Ürün</th>
                                <th class="p-4 font-bold text-lg text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${menuItems.map((item, index) => `
                                <tr class="${index !== menuItems.length - 1 ? 'border-b' : ''} hover:bg-gray-50">
                                    <td class="p-4 text-lg">${item.name}</td>
                                    <td class="p-4 text-lg font-semibold text-right">${item.price}₺</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    };

    // Router
    function router() {
        // Get hash, default to '/'
        let hash = window.location.hash.slice(1) || '/';

        // Remove trailing slash if present (except for root)
        if (hash.length > 1 && hash.endsWith('/')) {
            hash = hash.slice(0, -1);
        }

        const viewContent = views[hash];

        if (viewContent) {
            appContainer.innerHTML = viewContent;
        } else {
            appContainer.innerHTML = `
                <div class="text-center py-20">
                    <h2 class="text-3xl font-bold mb-4">404 - Sayfa Bulunamadı</h2>
                    <p>Aradığınız sayfa mevcut değil.</p>
                </div>
            `;
        }

        // Scroll to top on route change
        window.scrollTo(0,0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
