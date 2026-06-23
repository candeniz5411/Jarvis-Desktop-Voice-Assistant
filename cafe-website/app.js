document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const app = document.getElementById('app');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click (mobile friendly)
    sidebar.querySelectorAll('a').forEach(link => {
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

    // Views
    const views = {
        home: `
            <div class="flex flex-col items-center">
                <img src="Images/coffee-bg.jpg" alt="Kafe Görseli" class="w-full h-64 object-cover rounded-lg shadow-lg mb-8">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-4">Kafe Keyfine Hoş Geldiniz</h2>
                <p class="text-center text-gray-700 leading-relaxed max-w-2xl">
                    Özenle seçilmiş kahve çekirdeklerimiz ve taze atıştırmalıklarımızla size en iyi deneyimi sunmak için buradayız.
                    Sıcak bir atmosferde dinlenmek ve lezzetli kahvelerimizi tatmak için sizi bekliyoruz.
                </p>
            </div>
        `,
        hakkinda: `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">Hakkımızda</h2>
                <p class="text-gray-700 leading-relaxed mb-4">
                    Kafe Keyfi, 2010 yılından beri kahve tutkunlarına hizmet veren bir aile işletmesidir.
                    Amacımız, en kaliteli kahve çekirdeklerini özenle kavurarak misafirlerimize unutulmaz bir lezzet deneyimi sunmaktır.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    Sadece bir kafe değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz,
                    çalışabileceğiniz veya sadece kitabınızı okurken huzur bulabileceğiniz bir yaşam alanı yaratmayı hedefliyoruz.
                </p>
            </div>
        `,
        destek: `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">Destek</h2>
                <p class="text-gray-700 leading-relaxed mb-6">
                    Müşteri memnuniyeti bizim için önceliklidir. Herhangi bir sorunuz, öneriniz veya şikayetiniz varsa bize aşağıdaki kanallardan ulaşabilirsiniz.
                </p>
                <div class="space-y-4">
                    <p class="font-bold text-brown-900">Sıkça Sorulan Sorular (SSS)</p>
                    <ul class="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Çalışma saatleriniz nelerdir? (Her gün 08:00 - 22:00)</li>
                        <li>Wi-Fi hizmetiniz var mı? (Evet, ücretsiz Wi-Fi sunuyoruz.)</li>
                        <li>Rezervasyon yapıyor musunuz? (Sadece 6 kişi ve üzeri gruplar için.)</li>
                    </ul>
                </div>
            </div>
        `,
        iletisim: `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">İletişim</h2>
                <div class="space-y-4 text-gray-700">
                    <p><strong>Adres:</strong> Kahve Sokak No:12, Lezzet Mahallesi, İstanbul</p>
                    <p><strong>Telefon:</strong> +90 555 123 45 67</p>
                    <p><strong>E-posta:</strong> info@kafekeyfi.com</p>
                </div>
                <form class="mt-8 space-y-4">
                    <div>
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Adınız</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-brown-500" id="name" type="text" placeholder="Adınız">
                    </div>
                    <div>
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">E-posta</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-brown-500" id="email" type="email" placeholder="E-posta">
                    </div>
                    <div>
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Mesajınız</label>
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-brown-500 h-32" id="message" placeholder="Mesajınız"></textarea>
                    </div>
                    <button class="bg-brown-900 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors" type="button">
                        Gönder
                    </button>
                </form>
            </div>
        `,
        sube_konumlari: `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border p-4 rounded-lg">
                        <h3 class="font-bold text-xl mb-2 text-brown-900">Merkez Şube</h3>
                        <p class="text-gray-700">Kahve Sokak No:12, Lezzet Mahallesi, İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                    <div class="border p-4 rounded-lg">
                        <h3 class="font-bold text-xl mb-2 text-brown-900">Kadıköy Şube</h3>
                        <p class="text-gray-700">Moda Caddesi No:45, Kadıköy, İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 09:00 - 23:00</p>
                    </div>
                    <div class="border p-4 rounded-lg">
                        <h3 class="font-bold text-xl mb-2 text-brown-900">Beşiktaş Şube</h3>
                        <p class="text-gray-700">Çarşı İçi Sokak No:8, Beşiktaş, İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 08:30 - 22:30</p>
                    </div>
                </div>
            </div>
        `,
        menu_icerikleri: `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="p-4 border border-brown-200 rounded-lg hover:bg-brown-50 transition-colors">
                            <span class="font-bold text-brown-900 text-lg">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-2">Fiyatlar</h2>
                <div class="space-y-0">
                    ${menuItems.map((item, index) => `
                        <div class="flex justify-between items-center p-4 ${index % 2 === 0 ? 'bg-brown-50' : 'bg-white'} border-b border-brown-100 last:border-0">
                            <span class="font-bold text-gray-700">${item.name}</span>
                            <span class="font-bold text-brown-900 text-lg">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // Routing Logic
    function handleRoute() {
        let hash = window.location.hash.slice(1);

        // Remove trailing slash if exists
        if (hash.endsWith('/')) {
            hash = hash.slice(0, -1);
        }

        // Remove leading slash if exists
        if (hash.startsWith('/')) {
            hash = hash.slice(1);
        }

        let viewName = hash || 'home';

        // Map kebab-case hash to snake_case view name
        viewName = viewName.replace(/-/g, '_');

        // Check if view exists, otherwise default to home
        if (!views[viewName]) {
             viewName = 'home';
        }

        app.innerHTML = views[viewName];
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleRoute);

    // Initial load
    handleRoute();
});