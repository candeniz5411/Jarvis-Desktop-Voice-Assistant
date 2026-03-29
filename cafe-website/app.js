document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const contentArea = document.getElementById('content');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // === Sidebar Logic ===
    const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    };

    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
    };

    hamburgerBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // === Menu Data ===
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

    // === Routing Logic ===
    const routes = {
        '': renderHome,
        '#': renderHome,
        '#home': renderHome,
        '#hakkinda': renderHakkinda,
        '#destek': renderDestek,
        '#iletisim': renderIletisim,
        '#sube-konumlari': renderSubeKonumlari,
        '#menu-icerikleri': renderMenuIcerikleri,
        '#fiyatlar': renderFiyatlar
    };

    function router() {
        const hash = window.location.hash;
        const renderer = routes[hash] || renderHome;
        contentArea.innerHTML = renderer();
        window.scrollTo(0, 0);
    }

    // Initialize router
    window.addEventListener('hashchange', router);
    router(); // Call on initial load

    // === View Renderers ===
    function renderHome() {
        return `
            <div class="text-center animate-fade-in">
                <h1 class="heading text-4xl mb-4">Hoş Geldiniz</h1>
                <p class="text-lg mb-8 max-w-2xl mx-auto">Kahve Dükkanı'na hoş geldiniz! En taze kahve çekirdekleri ve lezzetli atıştırmalıklarımızla size eşsiz bir deneyim sunmak için buradayız.</p>
                <div class="rounded-lg overflow-hidden shadow-md">
                    <!-- Using placeholder since we cannot guarantee local image exists in a web server context correctly without hosting -->
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" alt="Kahve Dükkanı" class="w-full h-64 object-cover">
                </div>
            </div>
        `;
    }

    function renderHakkinda() {
        return `
            <div class="animate-fade-in max-w-2xl mx-auto">
                <h1 class="heading text-3xl mb-6 text-center border-b border-brand-dark pb-2">Hakkında</h1>
                <p class="mb-4">Kahve Dükkanı, 2023 yılında kahve tutkusunu paylaşmak amacıyla kuruldu. En kaliteli kahve çekirdeklerini özenle seçiyor ve uzman baristalarımızla sizlere sunuyoruz.</p>
                <p>Amacımız sadece kahve satmak değil, aynı zamanda dostlarınızla sohbet edebileceğiniz, kitabınızı okuyabileceğiniz sıcak bir ortam yaratmaktır.</p>
            </div>
        `;
    }

    function renderDestek() {
        return `
            <div class="animate-fade-in max-w-2xl mx-auto">
                <h1 class="heading text-3xl mb-6 text-center border-b border-brand-dark pb-2">Destek</h1>
                <p class="mb-4">Siparişleriniz, ürünlerimiz veya kafemiz hakkında bir sorun mu yaşıyorsunuz? Size yardımcı olmaktan mutluluk duyarız.</p>
                <ul class="list-disc list-inside mb-4 ml-4">
                    <li>Sıkça Sorulan Sorular (SSS)</li>
                    <li>Sipariş Takibi</li>
                    <li>Geri Bildirim</li>
                </ul>
                <p>Bizimle iletişime geçmek için iletişim sayfasını kullanabilirsiniz.</p>
            </div>
        `;
    }

    function renderIletisim() {
        return `
            <div class="animate-fade-in max-w-2xl mx-auto">
                <h1 class="heading text-3xl mb-6 text-center border-b border-brand-dark pb-2">İletişim</h1>
                <div class="bg-white p-6 rounded-lg shadow-md border border-brand-light">
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 1, Kadıköy, İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> 0216 123 45 67</p>
                    <p class="mb-2"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                    <p><strong>Çalışma Saatleri:</strong></p>
                    <p class="ml-4">Pazartesi - Cuma: 08:00 - 22:00</p>
                    <p class="ml-4">Cumartesi - Pazar: 09:00 - 23:00</p>
                </div>
            </div>
        `;
    }

    function renderSubeKonumlari() {
        return `
            <div class="animate-fade-in max-w-2xl mx-auto">
                <h1 class="heading text-3xl mb-6 text-center border-b border-brand-dark pb-2">Şube Konumları</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow-md border border-brand-light">
                        <h2 class="font-bold text-xl mb-2 text-brand-dark font-serif">Kadıköy Merkez Şube</h2>
                        <p>Kahve Sokak No: 1</p>
                        <p class="text-sm text-gray-600">Her gün açık</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md border border-brand-light">
                        <h2 class="font-bold text-xl mb-2 text-brand-dark font-serif">Beşiktaş Şube</h2>
                        <p>Çarşı İçi Cad. No: 45</p>
                        <p class="text-sm text-gray-600">Pzt - Cts açık</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md border border-brand-light">
                        <h2 class="font-bold text-xl mb-2 text-brand-dark font-serif">Karaköy Şube</h2>
                        <p>Liman Cad. No: 12</p>
                        <p class="text-sm text-gray-600">Her gün açık</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenuIcerikleri() {
        const itemsHtml = menuItems.map(item => `
            <li class="p-3 bg-white rounded-md shadow-sm border border-brand-light mb-2 text-center text-lg">
                ${item.name}
            </li>
        `).join('');

        return `
            <div class="animate-fade-in max-w-2xl mx-auto">
                <h1 class="heading text-3xl mb-6 text-center border-b border-brand-dark pb-2">Menü İçerikleri</h1>
                <p class="text-center mb-6">Kafemizde bulabileceğiniz özenle hazırlanmış yiyecek ve içeceklerimiz.</p>
                <ul class="list-none p-0">
                    ${itemsHtml}
                </ul>
            </div>
        `;
    }

    function renderFiyatlar() {
        const itemsHtml = menuItems.map(item => `
            <li class="p-4 bg-white rounded-md shadow-sm border border-brand-light mb-2 flex justify-between items-center">
                <span class="text-lg font-semibold">${item.name}</span>
                <span class="text-xl font-bold text-brand-dark">${item.price}₺</span>
            </li>
        `).join('');

        return `
            <div class="animate-fade-in max-w-2xl mx-auto">
                <h1 class="heading text-3xl mb-6 text-center border-b border-brand-dark pb-2">Fiyatlar</h1>
                <p class="text-center mb-6">Menümüzdeki ürünlerin güncel fiyat listesi.</p>
                <ul class="list-none p-0">
                    ${itemsHtml}
                </ul>
            </div>
        `;
    }
});
