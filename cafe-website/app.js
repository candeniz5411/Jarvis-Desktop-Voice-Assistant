document.addEventListener('DOMContentLoaded', () => {
    // Menu Sidebar functionality
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    function openMenu() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }

    function closeMenu() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // SPA Routing
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

    const pages = {
        '/': `
            <div class="relative w-full h-[60vh]">
                <img src="Images/coffee-bg.jpg" alt="Kafe Arka Plan" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div class="text-center text-brand-white p-8 bg-brand-dark bg-opacity-80 rounded-lg max-w-2xl">
                        <h2 class="text-4xl md:text-5xl mb-4 font-serif text-brand-light">Kafe Keyfi'ne Hoş Geldiniz</h2>
                        <p class="text-xl font-sans text-brand-light">En taze kahveler, enfes tatlılar ve sıcak bir atmosfer...</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 py-12 max-w-4xl text-center">
                <h3 class="text-3xl mb-6 text-brand-dark">Günün Her Saati Sizinleyiz</h3>
                <p class="text-lg text-brand-dark mb-8">Modern, minimalist ve samimi ortamımızda kahvenizi yudumlarken, günün yorgunluğunu atabilirsiniz. İster tek başınıza kitabınızı okuyun, ister arkadaşlarınızla sohbet edin, Kafe Keyfi her zaman sizin için burada.</p>
                <a href="#/menu" class="inline-block bg-brand-dark text-brand-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-opacity">Menüyü İncele</a>
            </div>
        `,
        '/hakkinda': `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h2 class="text-3xl mb-6 text-brand-dark border-b-2 border-brand-dark pb-2">Hakkında</h2>
                <div class="bg-brand-white p-8 rounded-lg shadow-md">
                    <p class="mb-4 text-lg">2010 yılından beri, en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz.</p>
                    <p class="text-lg">Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize kendilerini evlerinde hissedecekleri sıcak ve samimi bir ortam sunmaktır. Usta baristalarımız her bir fincanı sanat eseri titizliğiyle hazırlarken, mutfağımızdan çıkan taptaze günlük tatlılar ve atıştırmalıklar kahve keyfinizi taçlandırır.</p>
                </div>
            </div>
        `,
        '/destek': `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h2 class="text-3xl mb-6 text-brand-dark border-b-2 border-brand-dark pb-2">Destek</h2>
                <div class="bg-brand-white p-8 rounded-lg shadow-md">
                    <h3 class="text-xl mb-4 text-brand-dark">Size Nasıl Yardımcı Olabiliriz?</h3>
                    <p class="mb-6 text-lg">Müşteri memnuniyeti bizim için en önemli önceliktir. Herhangi bir sorunuz, öneriniz veya şikayetiniz varsa lütfen bize bildirin.</p>
                    <ul class="list-disc pl-6 space-y-2 text-lg">
                        <li>Sıkça Sorulan Sorular</li>
                        <li>Sipariş ve İade Politikası</li>
                        <li>Geri Bildirim Formu</li>
                    </ul>
                </div>
            </div>
        `,
        '/iletisim': `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h2 class="text-3xl mb-6 text-brand-dark border-b-2 border-brand-dark pb-2">İletişim</h2>
                <div class="bg-brand-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8">
                    <div class="flex-1">
                        <h3 class="text-xl mb-4 text-brand-dark">Bize Ulaşın</h3>
                        <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 123, Lezzet Mahallesi, İstanbul</p>
                        <p class="mb-2"><strong>Telefon:</strong> 0212 555 00 00</p>
                        <p class="mb-4"><strong>E-posta:</strong> info@kafekeyfi.com</p>
                        <h3 class="text-xl mb-2 text-brand-dark mt-6">Çalışma Saatleri</h3>
                        <p class="mb-1">Pazartesi - Cuma: 07:00 - 22:00</p>
                        <p>Cumartesi - Pazar: 08:00 - 23:00</p>
                    </div>
                </div>
            </div>
        `,
        '/subeler': `
            <div class="container mx-auto px-4 py-12 max-w-4xl">
                <h2 class="text-3xl mb-6 text-brand-dark border-b-2 border-brand-dark pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-brand-white p-6 rounded-lg shadow-md">
                        <h3 class="text-2xl mb-2 text-brand-dark">Merkez Şube</h3>
                        <p class="mb-4">Kahve Sokak No: 123, Lezzet Mahallesi, İstanbul</p>
                        <div class="bg-gray-200 h-48 w-full flex items-center justify-center rounded text-gray-500">[Harita Görünümü]</div>
                    </div>
                    <div class="bg-brand-white p-6 rounded-lg shadow-md">
                        <h3 class="text-2xl mb-2 text-brand-dark">Kadıköy Şubesi</h3>
                        <p class="mb-4">Moda Caddesi No: 45, Kadıköy, İstanbul</p>
                        <div class="bg-gray-200 h-48 w-full flex items-center justify-center rounded text-gray-500">[Harita Görünümü]</div>
                    </div>
                    <div class="bg-brand-white p-6 rounded-lg shadow-md">
                        <h3 class="text-2xl mb-2 text-brand-dark">Beşiktaş Şubesi</h3>
                        <p class="mb-4">Barbaros Bulvarı No: 88, Beşiktaş, İstanbul</p>
                        <div class="bg-gray-200 h-48 w-full flex items-center justify-center rounded text-gray-500">[Harita Görünümü]</div>
                    </div>
                </div>
            </div>
        `,
        '/menu': `
            <div class="container mx-auto px-4 py-12 max-w-4xl">
                <h2 class="text-3xl mb-6 text-brand-dark border-b-2 border-brand-dark pb-2 text-center md:text-left">Menü İçerikleri</h2>
                <div class="bg-brand-white rounded-lg shadow-md overflow-hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                        ${menuItems.map(item => `
                            <div class="flex items-center p-4 border-b border-gray-100 last:border-0 hover:bg-brand-light transition-colors rounded">
                                <div class="w-12 h-12 bg-brand-dark text-brand-light rounded-full flex items-center justify-center mr-4 shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h4 class="text-lg font-serif text-brand-dark">${item.name}</h4>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h2 class="text-3xl mb-6 text-brand-dark border-b-2 border-brand-dark pb-2 text-center md:text-left">Fiyat Listesi</h2>
                <div class="bg-brand-white rounded-lg shadow-md overflow-hidden">
                    <ul class="divide-y divide-gray-200">
                        ${menuItems.map(item => `
                            <li class="flex justify-between items-center p-4 hover:bg-brand-light transition-colors">
                                <span class="text-xl font-serif text-brand-dark">${item.name}</span>
                                <span class="text-xl font-bold text-brand-dark bg-brand-light px-3 py-1 rounded-full">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    function router() {
        let hash = window.location.hash.slice(1) || '/';

        // Remove trailing slash if present (except for root)
        if (hash.length > 1 && hash.endsWith('/')) {
            hash = hash.slice(0, -1);
        }

        const content = pages[hash];

        if (content) {
            appContainer.innerHTML = content;
        } else {
            appContainer.innerHTML = `
                <div class="container mx-auto px-4 py-20 text-center">
                    <h2 class="text-4xl mb-4 text-brand-dark">404 - Sayfa Bulunamadı</h2>
                    <p class="text-xl mb-8">Aradığınız sayfaya ulaşılamıyor.</p>
                    <a href="#/" class="inline-block bg-brand-dark text-brand-light font-bold py-2 px-6 rounded hover:bg-opacity-90 transition-opacity">Ana Sayfaya Dön</a>
                </div>
            `;
        }

        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
