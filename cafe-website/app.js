document.addEventListener('DOMContentLoaded', () => {
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

    // DOM Elements
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sidebar Toggle Logic
    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    };

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    };

    menuToggle.addEventListener('click', openSidebar);
    menuClose.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar on link click (mobile friendly)
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Content Templates
    const templates = {
        home: `
            <div class="content-section text-center">
                <h2 class="page-title !border-0 text-4xl mb-4">Hoş Geldiniz</h2>
                <p class="text-lg mb-8 text-gray-700">Bean & Brew Cafe'ye hoş geldiniz. En taze kahve çekirdekleri ve enfes tatlılarımızla sizleri bekliyoruz.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl inline-block max-w-full">
                    <img src="./Images/hero.jpg" alt="Taze Kahve" class="w-full h-auto max-h-[500px] object-cover">
                </div>
            </div>
        `,
        hakkinda: `
            <div class="content-section">
                <h2 class="page-title">Hakkımızda</h2>
                <p class="mb-4">Bean & Brew, 2010 yılından bu yana kahve tutkunlarına en kaliteli deneyimi sunmak için çalışmaktadır. Kendi kavurduğumuz özel harman çekirdeklerimiz ve deneyimli baristalarımızla her fincanda mutluluk sunmayı hedefliyoruz.</p>
                <p>Misyonumuz, sadece bir kahve dükkanı olmak değil, aynı zamanda misafirlerimizin kendilerini evlerinde hissedecekleri sıcak bir buluşma noktası yaratmaktır.</p>
            </div>
        `,
        destek: `
            <div class="content-section">
                <h2 class="page-title">Destek</h2>
                <p class="mb-4">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Sıkça sorulan sorularımıza göz atabilir veya doğrudan ekibimizle iletişime geçebilirsiniz.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li>Geri ödeme politikası</li>
                    <li>Sipariş takibi</li>
                    <li>Alerjen bilgileri</li>
                </ul>
            </div>
        `,
        iletisim: `
            <div class="content-section">
                <h2 class="page-title">İletişim</h2>
                <p class="mb-4">Bize ulaşmak çok kolay. Görüş, öneri ve şikayetlerinizi dinlemekten memnuniyet duyarız.</p>
                <div class="space-y-2 text-gray-700">
                    <p><strong>Telefon:</strong> 0 (212) 555 01 23</p>
                    <p><strong>E-posta:</strong> merhaba@beanandbrew.com</p>
                    <p><strong>Adres:</strong> Kahve Sokak, No:42, Kadıköy/İstanbul</p>
                </div>
            </div>
        `,
        subeler: `
            <div class="content-section">
                <h2 class="page-title">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-4 border rounded bg-gray-50">
                        <h3 class="font-bold text-xl mb-2">Kadıköy Merkez Şube</h3>
                        <p>Kahve Sokak, No:42, Kadıköy/İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 08:00 - 23:00</p>
                    </div>
                    <div class="p-4 border rounded bg-gray-50">
                        <h3 class="font-bold text-xl mb-2">Beşiktaş Şube</h3>
                        <p>Çarşı İçi, No:15, Beşiktaş/İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 07:30 - 22:00</p>
                    </div>
                </div>
            </div>
        `,
        menu: `
            <div class="content-section">
                <h2 class="page-title">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex items-center p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                            <span class="font-medium flex-1">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: `
            <div class="content-section">
                <h2 class="page-title">Fiyat Listesi</h2>
                <div class="max-w-2xl mx-auto">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                            <span class="font-medium">${item.name}</span>
                            <span class="font-bold text-cafe-brown">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // Router Logic
    const renderPage = () => {
        let hash = window.location.hash.substring(1);

        // Default to home if hash is empty or not found in templates
        if (!hash || !templates[hash]) {
            hash = 'home';
        }

        mainContent.innerHTML = templates[hash];
        window.scrollTo(0, 0);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', renderPage);

    // Initial render
    renderPage();
});
