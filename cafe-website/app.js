document.addEventListener('DOMContentLoaded', () => {
    // --- UI Logic (Sidebar) ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked (useful on mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
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
        { name: 'Limonata', price: 35 },
    ];

    // --- Routing & Views ---
    const appContent = document.getElementById('app-content');

    const views = {
        '/': `
            <div class="flex flex-col items-center justify-center text-center mt-8">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=200" alt="Kafe Logo" class="w-32 h-32 mb-6 object-cover drop-shadow-md rounded-full bg-cafe-cream p-1 border-4 border-cafe-brown">
                <h2 class="text-4xl md:text-5xl font-heading font-bold mb-4">Kafemize Hoş Geldiniz</h2>
                <p class="text-lg text-gray-700 mb-8 max-w-2xl">En taze kahve çekirdekleri ve enfes tatlılarımızla sizleri ağırlamaktan mutluluk duyarız.</p>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" alt="Taze Kahve" class="w-full max-w-2xl rounded-lg shadow-lg object-cover h-64 md:h-96">
            </div>
        `,
        '/hakkinda': `
            <div class="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2 inline-block">Hakkımızda</h2>
                <p class="text-gray-700 leading-relaxed mb-4">
                    2010 yılından beri, şehrin kalbinde en kaliteli kahveyi sunmak için çalışıyoruz. Amacımız sadece bir içecek değil, aynı zamanda sıcak ve samimi bir atmosferde unutulmaz bir deneyim yaşatmaktır.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    Özenle seçilmiş çekirdeklerimiz, usta baristalarımızın ellerinde sanata dönüşüyor. Sizi de bu deneyimi paylaşmaya bekliyoruz.
                </p>
            </div>
        `,
        '/destek': `
             <div class="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2 inline-block">Destek</h2>
                <p class="text-gray-700 leading-relaxed mb-4">
                    Müşteri memnuniyeti bizim için ön plandadır. Herhangi bir sorunuz, öneriniz veya şikayetiniz varsa lütfen bizimle iletişime geçmekten çekinmeyin.
                </p>
                <div class="bg-cafe-cream/30 p-4 rounded mt-6">
                    <p class="font-bold text-cafe-brown">Sıkça Sorulan Sorular</p>
                    <ul class="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Nasıl sipariş verebilirim?</li>
                        <li>Vegan seçenekleriniz var mı?</li>
                        <li>Toplu etkinlikler için rezervasyon yapıyor musunuz?</li>
                    </ul>
                </div>
            </div>
        `,
        '/iletisim': `
             <div class="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2 inline-block">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                        <p class="text-gray-700 mb-2"><strong>Adres:</strong> Kahve Sokak No: 1, Kadıköy, İstanbul</p>
                        <p class="text-gray-700 mb-2"><strong>Telefon:</strong> 0(216) 123 45 67</p>
                        <p class="text-gray-700 mb-2"><strong>E-posta:</strong> info@bizimkafe.com</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-4">Çalışma Saatleri</h3>
                        <p class="text-gray-700 mb-2">Pazartesi - Cuma: 08:00 - 22:00</p>
                        <p class="text-gray-700 mb-2">Cumartesi - Pazar: 09:00 - 23:00</p>
                    </div>
                </div>
            </div>
        `,
        '/subeler': `
             <div class="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2 inline-block">Şube Konumları</h2>
                <div class="space-y-6 mt-4">
                    <div class="border-l-4 border-cafe-brown pl-4">
                        <h3 class="text-xl font-bold">Merkez Şube - Kadıköy</h3>
                        <p class="text-gray-600">Moda Caddesi, No: 123</p>
                    </div>
                    <div class="border-l-4 border-cafe-brown pl-4">
                        <h3 class="text-xl font-bold">Beşiktaş Şubesi</h3>
                        <p class="text-gray-600">Barbaros Bulvarı, No: 45</p>
                    </div>
                    <div class="border-l-4 border-cafe-brown pl-4">
                        <h3 class="text-xl font-bold">Alsancak Şubesi - İzmir</h3>
                        <p class="text-gray-600">Kıbrıs Şehitleri Caddesi, No: 89</p>
                    </div>
                </div>
            </div>
        `,
        '/menu': `
             <div class="mt-8">
                <h2 class="text-3xl font-heading font-bold mb-8 text-center">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center">
                            <div class="w-16 h-16 bg-cafe-cream rounded-full flex items-center justify-center mb-4 text-2xl">☕</div>
                            <h3 class="text-xl font-bold mb-2">${item.name}</h3>
                            <p class="text-gray-500 text-sm mt-auto">Taze hazırlanmış ${item.name.toLowerCase()}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
             <div class="mt-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-cafe-brown pb-2 inline-block">Fiyat Listesi</h2>
                <ul class="divide-y divide-gray-200 mt-4">
                    ${menuItems.map(item => `
                        <li class="py-4 flex justify-between items-center">
                            <span class="text-lg font-medium text-gray-800">${item.name}</span>
                            <span class="text-xl font-bold text-cafe-brown">${item.price}₺</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `,
    };

    function router() {
        // Get path from hash, default to '/'
        let path = window.location.hash.slice(1) || '/';

        // Handle trailing slashes or unknown paths
        if (path !== '/' && path.endsWith('/')) {
             path = path.slice(0, -1);
        }

        const viewContent = views[path] || `
            <div class="text-center mt-20">
                <h2 class="text-4xl font-bold text-cafe-brown">404</h2>
                <p class="text-gray-600 mt-4">Sayfa bulunamadı.</p>
                <a href="#/" class="inline-block mt-6 px-6 py-2 bg-cafe-brown text-cafe-cream rounded hover:bg-cafe-brown/90 transition">Ana Sayfaya Dön</a>
            </div>
        `;

        appContent.innerHTML = viewContent;
        window.scrollTo(0, 0); // scroll to top on route change
    }

    // Initialize router and listen for changes
    window.addEventListener('hashchange', router);
    router(); // Load initial route
});