document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Toggle Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

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

    // --- Routing & Rendering Logic ---
    const appContainer = document.getElementById('app');

    const renderHome = () => `
        <div class="text-center animate-fade-in">
            <h2 class="text-4xl md:text-5xl font-bold font-heading mb-4 mt-8">Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">En taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz. Sizi ağırlamaktan mutluluk duyarız.</p>
            <div class="rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-96">
            </div>
        </div>
    `;

    const renderAbout = () => `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="text-3xl font-bold font-heading mb-6 border-b-2 border-brand-brown pb-2 inline-block">Hakkında</h2>
            <p class="text-lg mb-4">Lezzet Kafe, 2010 yılından bu yana kaliteli kahve çekirdekleri ve usta ellerden çıkan tatlılarla misafirlerine eşsiz bir deneyim sunmaktadır.</p>
            <p class="text-lg mb-4">Amacımız, yoğun şehir hayatından uzaklaşıp huzur bulabileceğiniz sıcak bir ortam yaratmaktır.</p>
        </div>
    `;

    const renderSupport = () => `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="text-3xl font-bold font-heading mb-6 border-b-2 border-brand-brown pb-2 inline-block">Destek</h2>
            <p class="text-lg mb-4">Siparişleriniz veya hizmetlerimizle ilgili yaşadığınız her türlü sorun için destek ekibimizle iletişime geçebilirsiniz.</p>
            <p class="text-lg">Bize ulaşmak için <strong>destek@lezzetkafe.com</strong> adresine e-posta gönderebilirsiniz.</p>
        </div>
    `;

    const renderContact = () => `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="text-3xl font-bold font-heading mb-6 border-b-2 border-brand-brown pb-2 inline-block">İletişim</h2>
            <ul class="text-lg space-y-4">
                <li><strong>Adres:</strong> Kahve Sokak No:12, Kadıköy, İstanbul</li>
                <li><strong>Telefon:</strong> 0(212) 555 12 34</li>
                <li><strong>E-posta:</strong> info@lezzetkafe.com</li>
            </ul>
        </div>
    `;

    const renderLocations = () => `
        <div class="max-w-3xl mx-auto py-8">
            <h2 class="text-3xl font-bold font-heading mb-6 border-b-2 border-brand-brown pb-2 inline-block">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div class="bg-white p-6 rounded-lg shadow-md border border-brand-brown border-opacity-20">
                    <h3 class="text-xl font-bold mb-2">Kadıköy Merkez</h3>
                    <p>Kahve Sokak No:12, Kadıköy, İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border border-brand-brown border-opacity-20">
                    <h3 class="text-xl font-bold mb-2">Beşiktaş Şube</h3>
                    <p>Çarşı İçi Cad. No:45, Beşiktaş, İstanbul</p>
                </div>
            </div>
        </div>
    `;

    const renderMenuContent = () => `
        <div class="max-w-4xl mx-auto py-8">
            <h2 class="text-3xl font-bold font-heading mb-8 text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="bg-white p-4 rounded shadow flex justify-between items-center border-l-4 border-brand-brown">
                        <span class="text-lg font-semibold">${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const renderPrices = () => `
        <div class="max-w-4xl mx-auto py-8">
            <h2 class="text-3xl font-bold font-heading mb-8 text-center">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-brand-brown text-brand-cream text-left text-sm font-semibold uppercase tracking-wider">Ürün</th>
                            <th class="px-5 py-3 border-b-2 border-gray-200 bg-brand-brown text-brand-cream text-right text-sm font-semibold uppercase tracking-wider">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menuItems.map(item => `
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 text-lg whitespace-no-wrap">${item.name}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <p class="text-gray-900 font-bold text-lg whitespace-no-wrap">${item.price}</p>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    const renderNotFound = () => `
        <div class="text-center py-16">
            <h2 class="text-4xl font-bold font-heading mb-4">404</h2>
            <p class="text-xl">Sayfa bulunamadı.</p>
        </div>
    `;

    function router() {
        const hash = window.location.hash || '#/';

        // Hide sidebar on route change (for mobile safety)
        closeSidebar();

        switch (hash) {
            case '#/':
                appContainer.innerHTML = renderHome();
                break;
            case '#/hakkinda':
                appContainer.innerHTML = renderAbout();
                break;
            case '#/destek':
                appContainer.innerHTML = renderSupport();
                break;
            case '#/iletisim':
                appContainer.innerHTML = renderContact();
                break;
            case '#/subeler':
                appContainer.innerHTML = renderLocations();
                break;
            case '#/menu':
                appContainer.innerHTML = renderMenuContent();
                break;
            case '#/fiyatlar':
                appContainer.innerHTML = renderPrices();
                break;
            default:
                appContainer.innerHTML = renderNotFound();
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial render
    router();
});