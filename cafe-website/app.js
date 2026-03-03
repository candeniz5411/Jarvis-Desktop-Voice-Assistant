document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const appContent = document.getElementById('app');

    // --- Sidebar Toggle Logic ---
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openSidebar);
    if(closeBtn) closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // --- Data ---
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

    // --- Routing System ---
    const routes = {
        '/': `
            <div class="fade-in text-center flex flex-col items-center justify-center min-h-[70vh]">
                <h1 class="font-heading text-4xl md:text-5xl font-bold mb-4 text-brown-900">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-brown-800 mb-8 max-w-2xl mx-auto">En taze çekirdekler, özenle demlenmiş kahveler ve sıcacık bir atmosfer sizi bekliyor.</p>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                     alt="Taze kahve ve dükkan atmosferi"
                     class="w-full max-w-3xl rounded-lg shadow-xl object-cover h-[400px]">
            </div>
        `,
        '/hakkinda': `
            <div class="fade-in bg-cream p-8 rounded-lg shadow-md mt-8">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-900 pb-2">Hakkında</h2>
                <p class="mb-4 text-lg">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini sizlerle buluşturuyoruz. Amacımız sadece kahve satmak değil, misafirlerimize unutulmaz bir deneyim yaşatmaktır.</p>
                <p class="text-lg">Modern ve minimalist tasarım anlayışımızla, şehir hayatının koşturmacasından uzaklaşıp huzur bulabileceğiniz bir mekan yarattık.</p>
            </div>
        `,
        '/destek': `
            <div class="fade-in bg-cream p-8 rounded-lg shadow-md mt-8">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-900 pb-2">Destek</h2>
                <p class="mb-4 text-lg">Müşteri memnuniyeti bizim için her şeyden önemlidir. Herhangi bir sorunuz, öneriniz veya şikayetiniz varsa destek ekibimizle iletişime geçebilirsiniz.</p>
                <p class="font-bold mt-4">Sıkça Sorulan Sorular:</p>
                <ul class="list-disc pl-6 mt-2 space-y-2">
                    <li>Siparişimi nasıl takip edebilirim?</li>
                    <li>Vegan seçenekleriniz var mı?</li>
                    <li>Etkinlik rezervasyonu yapıyor musunuz?</li>
                </ul>
            </div>
        `,
        '/iletisim': `
            <div class="fade-in bg-cream p-8 rounded-lg shadow-md mt-8">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-900 pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p class="font-bold text-lg mb-2">Adres:</p>
                        <p class="mb-4">Kahveciler Sokak No: 42<br>Kadıköy, İstanbul</p>
                        <p class="font-bold text-lg mb-2">Telefon:</p>
                        <p class="mb-4">+90 216 123 45 67</p>
                        <p class="font-bold text-lg mb-2">E-posta:</p>
                        <p>merhaba@kahvedukkani.com</p>
                    </div>
                    <form class="flex flex-col space-y-4">
                        <input type="text" placeholder="Adınız" class="p-2 border border-brown-900 rounded bg-white">
                        <input type="email" placeholder="E-posta Adresiniz" class="p-2 border border-brown-900 rounded bg-white">
                        <textarea placeholder="Mesajınız" rows="4" class="p-2 border border-brown-900 rounded bg-white"></textarea>
                        <button type="button" class="bg-brown-900 text-cream py-2 px-4 rounded hover:bg-brown-800 transition-colors font-bold">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        '/subeler': `
            <div class="fade-in bg-cream p-8 rounded-lg shadow-md mt-8">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-900 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white p-4 rounded shadow border border-brown-900 border-opacity-20">
                        <h3 class="font-heading font-bold text-xl mb-2 text-brown-900">Merkez Şube (Kadıköy)</h3>
                        <p class="text-sm">Kahveciler Sokak No: 42, Kadıköy, İstanbul</p>
                        <p class="text-sm mt-2 font-bold">Çalışma Saatleri: 08:00 - 23:00</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow border border-brown-900 border-opacity-20">
                        <h3 class="font-heading font-bold text-xl mb-2 text-brown-900">Beşiktaş Şubesi</h3>
                        <p class="text-sm">Çarşı İçi Caddesi No: 15, Beşiktaş, İstanbul</p>
                        <p class="text-sm mt-2 font-bold">Çalışma Saatleri: 07:30 - 22:30</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow border border-brown-900 border-opacity-20">
                        <h3 class="font-heading font-bold text-xl mb-2 text-brown-900">Karaköy Şubesi</h3>
                        <p class="text-sm">Rıhtım Caddesi No: 8, Karaköy, İstanbul</p>
                        <p class="text-sm mt-2 font-bold">Çalışma Saatleri: 09:00 - 00:00</p>
                    </div>
                </div>
            </div>
        `,
        '/menu': `
            <div class="fade-in bg-cream p-8 rounded-lg shadow-md mt-8">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-900 pb-2">Menü İçerikleri</h2>
                <p class="mb-6 text-lg text-center">Özenle seçilmiş malzemelerle hazırlanan lezzetlerimiz:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    ${menuItems.map(item => `
                        <div class="bg-white p-4 rounded shadow flex items-center justify-between border-l-4 border-brown-900 hover:transform hover:scale-105 transition-transform duration-200">
                            <span class="font-bold text-lg">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="fade-in bg-cream p-8 rounded-lg shadow-md mt-8">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-900 pb-2">Fiyatlar</h2>
                <div class="max-w-2xl mx-auto bg-white p-6 rounded shadow-lg">
                    <ul class="space-y-4">
                        ${menuItems.map(item => `
                            <li class="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                                <span class="font-heading text-xl text-brown-900">${item.name}</span>
                                <span class="font-bold text-lg bg-brown-900 text-cream px-3 py-1 rounded-full">${item.price}₺</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    const render = () => {
        // Get the hash from URL, default to '/' if none or invalid
        let path = window.location.hash.slice(1) || '/';

        // Render content or a simple 404
        appContent.innerHTML = routes[path] || `
            <div class="text-center mt-20">
                <h2 class="text-3xl font-bold">Sayfa Bulunamadı</h2>
                <a href="#/" class="text-brown-900 underline mt-4 inline-block">Ana Sayfaya Dön</a>
            </div>
        `;

        // Update active state in sidebar (optional but good UX)
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + path) {
                link.classList.add('bg-brown-900', 'text-cream');
            } else {
                link.classList.remove('bg-brown-900', 'text-cream');
            }
        });
    };

    // Listen for hash changes
    window.addEventListener('hashchange', render);

    // Initial render
    render();
});