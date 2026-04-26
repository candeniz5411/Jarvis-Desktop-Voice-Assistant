document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');
    const sidebarLinks = document.querySelectorAll('#sidebar a');

    // Menu and Pricing Data
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
        { name: 'Limonata', price: '35₺' },
    ];

    // Views Content Generation
    const views = {
        home: `
            <div class="text-center">
                <h2 class="text-4xl font-heading font-bold mb-4 text-brown-900">Hoş Geldiniz!</h2>
                <p class="text-lg text-brown-700 mb-8">En taze kahve çekirdekleri ve lezzetli atıştırmalıklarla dolu dünyamıza adım atın.</p>
                <div class="rounded-lg overflow-hidden shadow-lg mx-auto max-w-2xl">
                    <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı" class="w-full h-auto object-cover object-center max-h-96">
                </div>
            </div>
        `,
        hakkinda: `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b-2 border-brown-200 pb-2">Hakkında</h2>
                <p class="text-lg text-brown-800 leading-relaxed">Kahve Dükkanı olarak 2024 yılından bu yana en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz. Amacımız sadece kahve yapmak değil, aynı zamanda misafirlerimize sıcak ve samimi bir ortam sunmaktır. Modern ve minimalist yaklaşımımızla kahve deneyiminizi en üst seviyeye çıkarmayı hedefliyoruz.</p>
            </div>
        `,
        destek: `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b-2 border-brown-200 pb-2">Destek</h2>
                <p class="text-lg text-brown-800 mb-4">Herhangi bir sorununuz mu var? Size yardımcı olmaktan mutluluk duyarız.</p>
                <ul class="list-disc list-inside text-brown-800 space-y-2">
                    <li>Sıkça Sorulan Sorular (SSS)</li>
                    <li>Sipariş ve İade Politikaları</li>
                    <li>Hesap Ayarları</li>
                </ul>
            </div>
        `,
        iletisim: `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b-2 border-brown-200 pb-2">İletişim</h2>
                <div class="bg-white p-6 rounded-lg shadow-md border border-brown-100">
                    <p class="text-lg text-brown-800 mb-2"><strong>Adres:</strong> Kahve Sokak No:123, Lezzet Mahallesi, İstanbul</p>
                    <p class="text-lg text-brown-800 mb-2"><strong>Telefon:</strong> +90 212 555 00 00</p>
                    <p class="text-lg text-brown-800 mb-4"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                    <p class="text-brown-700 italic">Çalışma Saatleri: Her gün 08:00 - 22:00</p>
                </div>
            </div>
        `,
        subeler: `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-4 border-b-2 border-brown-200 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div class="bg-white p-4 rounded-lg shadow border border-brown-100">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Kadıköy Şubesi</h3>
                        <p class="text-brown-700">Moda Caddesi, Kadıköy</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow border border-brown-100">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Beşiktaş Şubesi</h3>
                        <p class="text-brown-700">Çarşı İçi, Beşiktaş</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow border border-brown-100">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Karaköy Şubesi</h3>
                        <p class="text-brown-700">Galata Port Yakını, Karaköy</p>
                    </div>
                </div>
            </div>
        `,
        menu: `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brown-200 pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-brown-100 hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center h-32">
                            <h3 class="text-xl font-bold text-brown-900">${item.name}</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: `
            <div>
                <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brown-200 pb-2">Fiyatlar</h2>
                <div class="bg-white rounded-lg shadow overflow-hidden border border-brown-100">
                    <table class="min-w-full divide-y divide-brown-200">
                        <thead class="bg-brown-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-brown-700 uppercase tracking-wider">Ürün</th>
                                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-brown-700 uppercase tracking-wider">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-brown-100">
                            ${menuItems.map((item, index) => `
                                <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-brown-50/50'} hover:bg-brown-100 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-brown-900">${item.name}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-brown-900 text-right font-bold">${item.price}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    };

    // Sidebar Toggle Logic
    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            // Open sidebar
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            // Close sidebar
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    }

    hamburgerBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Routing Logic
    function handleRoute() {
        const hash = window.location.hash.substring(1);

        // Default to home if no hash or invalid hash
        if (!hash || !views[hash]) {
            mainContent.innerHTML = views['home'];
            window.history.replaceState(null, null, '#home');
        } else {
            mainContent.innerHTML = views[hash];
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);

    // Initial route rendering
    handleRoute();
});
