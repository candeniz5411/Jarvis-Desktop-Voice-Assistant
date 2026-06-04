document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContent = document.getElementById('app-content');

    // Toggle Sidebar
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

    // Close sidebar on link click (mobile responsive)
    const navLinks = sidebar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Data
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

    // Page Components
    const pages = {
        home: `
            <div class="flex flex-col items-center justify-center space-y-8">
                <h2 class="text-3xl md:text-5xl lg:text-6xl heading-text text-center mb-6">Kafemize Hoş Geldiniz</h2>
                <img src="./Images/coffee.jpg" alt="Coffee Cup" class="object-cover w-full h-64 md:h-96 rounded-xl shadow-xl">
                <p class="text-lg md:text-xl text-center max-w-2xl mt-8">Gününüzü güzelleştirecek en taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz.</p>
            </div>
        `,
        hakkinda: `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl heading-text mb-6 border-b pb-2">Hakkında</h2>
                <p class="text-lg leading-relaxed mb-4">Şehrin kalbinde, modern ve minimalist tasarımıyla dikkat çeken kafemiz, kahve tutkunları için özel olarak tasarlandı. En kaliteli çekirdekleri özenle seçiyor, her yudumda mükemmelliği hedefliyoruz.</p>
                <p class="text-lg leading-relaxed">Amacımız, sadece bir kahve dükkanı olmak değil, aynı zamanda misafirlerimizin huzur bulabileceği, keyifli vakit geçirebileceği bir yaşam alanı sunmaktır.</p>
            </div>
        `,
        destek: `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl heading-text mb-6 border-b pb-2">Destek</h2>
                <p class="text-lg mb-4">Müşteri memnuniyeti bizim için önceliktir. Siparişleriniz, ürünlerimiz veya diğer her türlü konuda destek almak için lütfen SSS sayfamızı ziyaret edin veya iletişim formumuzu kullanın.</p>
                <div class="mt-6">
                    <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li>Glutensiz seçenekleriniz var mı?</li>
                        <li>Siparişimi iptal edebilir miyim?</li>
                        <li>Toplu etkinlik rezervasyonu yapıyor musunuz?</li>
                    </ul>
                </div>
            </div>
        `,
        iletisim: `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl heading-text mb-6 border-b pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak, No: 42, Moda, İstanbul</p>
                        <p class="text-lg mb-2"><strong>Telefon:</strong> +90 555 123 45 67</p>
                        <p class="text-lg mb-4"><strong>E-posta:</strong> merhaba@kafe.com</p>
                        <h3 class="text-xl font-bold mb-2 mt-6">Çalışma Saatleri</h3>
                        <p>Pazartesi - Cuma: 08:00 - 22:00</p>
                        <p>Hafta Sonu: 09:00 - 23:00</p>
                    </div>
                    <div>
                        <form class="flex flex-col space-y-4">
                            <input type="text" placeholder="Adınız" class="border border-brown-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500">
                            <input type="email" placeholder="E-posta Adresiniz" class="border border-brown-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500">
                            <textarea placeholder="Mesajınız" rows="4" class="border border-brown-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500"></textarea>
                            <button type="button" class="bg-brown-600 text-cream px-4 py-2 rounded hover:bg-brown-700 transition-colors">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `,
        'sube-konumlari': `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl heading-text mb-6 border-b pb-2">Şube Konumları</h2>
                <div class="space-y-6">
                    <div class="border border-brown-200 p-4 rounded-lg">
                        <h3 class="text-xl font-bold text-brown-800">Moda Şubesi (Merkez)</h3>
                        <p>Kahve Sokak, No: 42, Moda, Kadıköy, İstanbul</p>
                    </div>
                    <div class="border border-brown-200 p-4 rounded-lg">
                        <h3 class="text-xl font-bold text-brown-800">Beşiktaş Şubesi</h3>
                        <p>Çınar Caddesi, No: 15, Beşiktaş, İstanbul</p>
                    </div>
                    <div class="border border-brown-200 p-4 rounded-lg">
                        <h3 class="text-xl font-bold text-brown-800">Karaköy Şubesi</h3>
                        <p>Liman Sokak, No: 8, Karaköy, Beyoğlu, İstanbul</p>
                    </div>
                </div>
            </div>
        `,
        'menu-icerikleri': `
            <div class="bg-white p-8 rounded-xl shadow-md">
                <h2 class="text-3xl heading-text mb-6 border-b pb-2">Menü İçerikleri</h2>
                <p class="text-lg mb-6">Zengin içerikli menümüzde yer alan lezzetlerimiz:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="flex items-center space-x-3 p-3 bg-brown-50 rounded-lg">
                            <div class="w-2 h-2 bg-brown-600 rounded-full"></div>
                            <span class="text-lg font-semibold text-brown-800">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: `
            <div class="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
                <h2 class="text-3xl heading-text mb-6 border-b pb-2">Fiyatlar</h2>
                <div class="space-y-4">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center border-b border-brown-200 pb-2">
                            <span class="text-xl text-gray-800">${item.name}</span>
                            <span class="text-xl font-bold text-brown-600">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // Router
    function router() {
        let hash = window.location.hash.substring(1);
        if (!hash || !pages[hash]) {
            hash = 'home';
        }
        appContent.innerHTML = pages[hash];
        window.scrollTo(0,0);
    }

    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
