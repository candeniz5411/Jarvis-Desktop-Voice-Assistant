document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContainer = document.getElementById('app');
    const navLinks = document.querySelectorAll('#sidebar a');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Content Data
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
        home: `
            <div class="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 mt-8">
                <img src="./Images/coffee-hero.jpg" alt="Hoşgeldiniz Kahvesi" class="w-full max-w-4xl h-auto rounded-lg shadow-2xl object-cover mb-4">
                <h1 class="text-4xl lg:text-5xl font-playfair font-bold text-brown-900 mt-4">Cafe Relax'a Hoş Geldiniz</h1>
                <p class="text-xl text-brown-800 max-w-2xl mt-4">Modern, minimalist ve samimi ortamımızda en kaliteli kahvelerin ve atıştırmalıkların tadını çıkarın. Sizi ağırlamaktan mutluluk duyarız.</p>
            </div>
        `,
        about: `
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">Hakkımızda</h2>
                <p class="text-lg text-gray-700 leading-relaxed space-y-4">Cafe Relax olarak, şehrin kalabalığından uzaklaşıp huzurlu bir mola vermek isteyen herkes için buradayız. Özenle seçilmiş kahve çekirdeklerimiz ve taze hazırlanan atıştırmalıklarımızla misafirlerimize eşsiz bir deneyim sunmayı amaçlıyoruz. Modern ve minimalist tasarımımızla hem dinlenmek hem de çalışmak için ideal bir atmosfer yaratıyoruz.</p>
            </div>
        `,
        support: `
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">Destek</h2>
                <p class="text-lg text-gray-700 mb-4">Yardıma mı ihtiyacınız var? Müşteri memnuniyeti bizim için ön plandadır. Herhangi bir sorunuz, öneriniz veya şikayetiniz varsa aşağıdaki kanallardan bize ulaşabilirsiniz.</p>
                <ul class="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                    <li>Sıkça Sorulan Sorular (SSS) sayfamızı ziyaret edin.</li>
                    <li>Sipariş takibi için hesabınıza giriş yapın.</li>
                    <li>Canlı destek hattımıza bağlanın (Çalışma saatleri: 09:00 - 18:00).</li>
                </ul>
            </div>
        `,
        contact: `
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8 flex flex-col md:flex-row gap-8">
                <div class="flex-1">
                    <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">İletişim</h2>
                    <div class="space-y-4 text-lg text-gray-700 mt-4">
                        <p><strong>Adres:</strong> Kahve Sokak, No: 42, Kadıköy, İstanbul</p>
                        <p><strong>Telefon:</strong> 0 (212) 555 00 00</p>
                        <p><strong>E-posta:</strong> iletisim@caferelax.com</p>
                    </div>
                </div>
            </div>
        `,
        locations: `
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="p-4 border rounded-lg bg-cream-200">
                        <h3 class="text-2xl font-playfair font-bold text-brown-900 mb-2">Kadıköy Merkez Şube</h3>
                        <p class="text-gray-700">Kahve Sokak, No: 42, Kadıköy, İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                    <div class="p-4 border rounded-lg bg-cream-200">
                        <h3 class="text-2xl font-playfair font-bold text-brown-900 mb-2">Beşiktaş Şube</h3>
                        <p class="text-gray-700">Çınar Caddesi, No: 15, Beşiktaş, İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 07:30 - 23:00</p>
                    </div>
                    <div class="p-4 border rounded-lg bg-cream-200">
                        <h3 class="text-2xl font-playfair font-bold text-brown-900 mb-2">Alsancak Şube</h3>
                        <p class="text-gray-700">Kordon Boyu, No: 88, Konak, İzmir</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 08:00 - 24:00</p>
                    </div>
                </div>
            </div>
        `,
        menu: `
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2 text-center">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    ${menuItems.map(item => `
                        <div class="bg-cream-200 p-4 rounded-lg shadow hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                            <span class="text-xl font-bold font-playfair text-brown-900">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        prices: `
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2 text-center">Fiyatlar</h2>
                <ul class="space-y-4 mt-6 divide-y divide-gray-200">
                    ${menuItems.map(item => `
                        <li class="flex justify-between items-center pt-4">
                            <span class="text-lg font-semibold text-gray-800">${item.name}</span>
                            <span class="text-xl font-bold text-brown-900">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `
    };

    // Router Function
    function router() {
        // Simple hash router
        let hash = window.location.hash.slice(1) || 'home';

        // Handle invalid hashes
        if (!pages[hash]) {
            hash = 'home';
        }

        // Fade out transition
        appContainer.style.opacity = 0;

        setTimeout(() => {
            appContainer.innerHTML = pages[hash];
            // Fade in transition
            appContainer.style.opacity = 1;
            window.scrollTo(0, 0);
        }, 300);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial render
    router();
});