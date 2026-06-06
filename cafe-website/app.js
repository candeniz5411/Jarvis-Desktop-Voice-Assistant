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
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const app = document.getElementById('app');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sidebar Toggle
    function toggleSidebar() {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        } else {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        }
    }

    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click (especially useful for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Page Content Generators
    const pages = {
        home: () => `
            <div class="text-center w-full max-w-4xl mx-auto">
                <h1 class="text-4xl md:text-6xl mb-6 text-brown-900 mt-8">Kafe Kahve'ye Hoş Geldiniz</h1>
                <p class="text-xl mb-8">En taze kahve çekirdekleri ve enfes lezzetler.</p>
                <img src="coffee-hero.jpg" alt="Taze Kahve" class="w-full h-[400px] object-cover rounded-lg shadow-xl mb-8">
            </div>
        `,
        hakkinda: () => `
            <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl mb-6 border-b pb-2">Hakkımızda</h2>
                <p class="text-lg mb-4">Kafe Kahve, 2010 yılından beri şehrin kalbinde, kahve tutkunlarına en iyi deneyimi sunmak için hizmet vermektedir.</p>
                <p class="text-lg">Amacımız, özenle seçilmiş kahve çekirdeklerini en iyi kavurma teknikleriyle harmanlayarak sizlere eşsiz bir lezzet sunmaktır.</p>
            </div>
        `,
        destek: () => `
            <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl mb-6 border-b pb-2">Destek</h2>
                <p class="text-lg mb-4">Müşteri memnuniyeti bizim için ön plandadır. Her türlü soru, görüş ve öneriniz için buradayız.</p>
                <p class="text-lg font-bold">Sıkça Sorulan Sorular:</p>
                <ul class="list-disc list-inside mt-2 text-lg">
                    <li>Wi-Fi hizmetiniz var mı? - Evet, tüm şubelerimizde ücretsiz Wi-Fi mevcuttur.</li>
                    <li>Vegan seçenekleriniz bulunuyor mu? - Evet, bitkisel süt alternatiflerimiz ve vegan tatlılarımız mevcuttur.</li>
                </ul>
            </div>
        `,
        iletisim: () => `
            <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl mb-6 border-b pb-2">İletişim</h2>
                <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak, No: 42, Kadıköy / İstanbul</p>
                <p class="text-lg mb-2"><strong>Telefon:</strong> 0 (216) 555 00 00</p>
                <p class="text-lg mb-2"><strong>E-posta:</strong> merhaba@kafekahve.com</p>
            </div>
        `,
        subeler: () => `
            <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl mb-6 border-b pb-2">Şube Konumları</h2>
                <ul class="space-y-4 text-lg">
                    <li class="border-b pb-2"><strong>Kadıköy Merkez:</strong> Moda Cad. No: 42</li>
                    <li class="border-b pb-2"><strong>Beşiktaş:</strong> Çarşı İçi No: 15</li>
                    <li><strong>Karaköy:</strong> Rıhtım Cad. No: 8</li>
                </ul>
            </div>
        `,
        menu: () => `
            <div class="w-full max-w-4xl mx-auto mt-8">
                <h2 class="text-4xl text-center mb-8 text-brown-900">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 class="text-2xl font-bold text-brown-800">${item.name}</h3>
                            <p class="text-gray-600 mt-2">Özenle hazırlanmış enfes lezzet.</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: () => `
            <div class="w-full max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
                <h2 class="text-3xl mb-6 border-b pb-2">Fiyatlar</h2>
                <ul class="space-y-3">
                    ${menuItems.map(item => `
                        <li class="flex justify-between items-center text-xl border-b border-gray-200 pb-2">
                            <span>${item.name}</span>
                            <span class="font-bold text-brown-900">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `
    };

    // Router
    function router() {
        const hash = window.location.hash.slice(1) || 'home';
        const render = pages[hash] || pages.home;
        app.innerHTML = render();
        window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', router);
    router(); // Initial load
});
