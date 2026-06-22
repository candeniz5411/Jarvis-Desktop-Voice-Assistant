document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContainer = document.getElementById('app');

    // Toggle Sidebar Function
    const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    };

    // Event Listeners for Sidebar
    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Menu Data
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

    // Page Renderers
    const pages = {
        '/': () => `
            <div class="text-center mt-8">
                <h2 class="text-4xl font-heading font-bold text-brand-dark mb-4">Hoş Geldiniz</h2>
                <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">En taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz. Sizi ağırlamaktan mutluluk duyarız.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto border-4 border-brand-cream">
                    <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-auto object-cover max-h-[500px]">
                </div>
            </div>
        `,
        '/hakkinda': () => `
            <div class="mt-8">
                <h2 class="text-3xl font-heading font-bold text-brand-dark mb-6 border-b-2 border-brand-dark pb-2">Hakkında</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">2010 yılından beri şehrin kalbinde, en kaliteli kahve çekirdeklerini özenle seçerek sizlere sunuyoruz. Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize sıcak ve huzurlu bir ortam sağlamaktır.</p>
                <p class="text-lg text-gray-700 leading-relaxed">Usta baristalarımız ve taptaze ürünlerimizle her gününüzü güzelleştirmek için çalışıyoruz.</p>
            </div>
        `,
        '/destek': () => `
            <div class="mt-8">
                <h2 class="text-3xl font-heading font-bold text-brand-dark mb-6 border-b-2 border-brand-dark pb-2">Destek</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Sıkça sorulan soruları inceleyebilir veya müşteri temsilcilerimizle iletişime geçebilirsiniz.</p>
                <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2">
                    <li>Sipariş takibi</li>
                    <li>İade ve değişim koşulları</li>
                    <li>Üyelik işlemleri</li>
                </ul>
            </div>
        `,
        '/iletisim': () => `
            <div class="mt-8">
                <h2 class="text-3xl font-heading font-bold text-brand-dark mb-6 border-b-2 border-brand-dark pb-2">İletişim</h2>
                <div class="bg-brand-cream p-6 rounded-lg shadow-md">
                    <p class="text-lg text-brand-dark mb-2"><strong>Adres:</strong> Kahve Sokak No:123, Lezzet Mahallesi, İstanbul</p>
                    <p class="text-lg text-brand-dark mb-2"><strong>Telefon:</strong> 0(212) 555 12 34</p>
                    <p class="text-lg text-brand-dark mb-2"><strong>E-posta:</strong> info@kafewebsitesi.com</p>
                    <p class="text-lg text-brand-dark mt-4"><strong>Çalışma Saatleri:</strong><br>Pazartesi - Cuma: 07:00 - 22:00<br>Hafta Sonu: 08:00 - 23:00</p>
                </div>
            </div>
        `,
        '/subeler': () => `
            <div class="mt-8">
                <h2 class="text-3xl font-heading font-bold text-brand-dark mb-6 border-b-2 border-brand-dark pb-2">Şube Konumları</h2>
                <div class="grid gap-6 md:grid-cols-2">
                    <div class="border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                        <h3 class="text-xl font-bold text-brand-dark mb-2">Merkez Şube</h3>
                        <p class="text-gray-600">Kadıköy, Moda Caddesi</p>
                    </div>
                    <div class="border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                        <h3 class="text-xl font-bold text-brand-dark mb-2">Beşiktaş Şube</h3>
                        <p class="text-gray-600">Beşiktaş, Çarşı İçi</p>
                    </div>
                    <div class="border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                        <h3 class="text-xl font-bold text-brand-dark mb-2">Karaköy Şube</h3>
                        <p class="text-gray-600">Karaköy, Rıhtım Sokak</p>
                    </div>
                </div>
            </div>
        `,
        '/menu': () => `
            <div class="mt-8">
                <h2 class="text-3xl font-heading font-bold text-brand-dark mb-6 border-b-2 border-brand-dark pb-2">Menü İçerikleri</h2>
                <div class="grid gap-4 sm:grid-cols-2">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-4 bg-brand-cream rounded-lg shadow-sm">
                            <span class="text-lg font-bold text-brand-dark">${item.name}</span>
                            <span class="text-lg text-brand-dark font-medium">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': () => `
            <div class="mt-8">
                <h2 class="text-3xl font-heading font-bold text-brand-dark mb-6 border-b-2 border-brand-dark pb-2">Fiyatlar</h2>
                <p class="text-lg text-gray-700 mb-6">Tüm ürünlerimizin güncel fiyat listesi aşağıdadır.</p>
                <div class="overflow-x-auto bg-white rounded-lg shadow">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-brand-dark text-brand-cream">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ürün</th>
                                <th scope="col" class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            ${menuItems.map(item => `
                                <tr class="hover:bg-brand-cream hover:bg-opacity-50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.name}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">${item.price}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    };

    // Router Logic
    const router = () => {
        // Get the hash without the '#' sign, default to '/'
        let hash = window.location.hash.slice(1) || '/';

        // Find the matching renderer function or default to a 404 message
        const render = pages[hash] || (() => `
            <div class="text-center mt-12">
                <h2 class="text-3xl font-bold text-red-600 mb-4">Sayfa Bulunamadı</h2>
                <p class="text-lg text-gray-600">Aradığınız sayfa mevcut değil. Lütfen menüyü kullanarak gezinmeye devam edin.</p>
            </div>
        `);

        // Inject the HTML into the app container
        appContainer.innerHTML = render();

        // Scroll to top
        window.scrollTo(0, 0);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
