document.addEventListener('DOMContentLoaded', () => {
    // --- Sidebar Logic ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('#nav-links a');

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');

        // Ensure body doesn't scroll when sidebar is open
        if(sidebar.classList.contains('-translate-x-full')) {
            document.body.style.overflow = '';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    hamburgerBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click (especially useful for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
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

    // --- Routing Logic ---
    const appContainer = document.getElementById('app');

    const routes = {
        '': homePage,
        '#hakkinda': hakkindaPage,
        '#destek': destekPage,
        '#iletisim': iletisimPage,
        '#sube-konumlari': subelerPage,
        '#menu-icerikleri': menuPage,
        '#fiyatlar': fiyatlarPage
    };

    function router() {
        let hash = window.location.hash;
        let view = routes[hash];

        // Default to home if route not found
        if (!view) {
            view = homePage;
        }

        // Inject content and add animation
        appContainer.innerHTML = view();

        // Reset animation
        appContainer.classList.remove('fade-in');
        void appContainer.offsetWidth; // trigger reflow
        appContainer.classList.add('fade-in');
    }

    // Listen to hash changes
    window.addEventListener('hashchange', router);
    // Initial load
    router();

    // --- Page Views ---

    function homePage() {
        return `
            <div class="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto h-full mt-10">
                <div class="mb-8">
                    <!-- Large Logo SVG -->
                    <svg class="w-32 h-32 mx-auto text-[#3E2723]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 21h18v-2H2v2zm15-11c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4C2.9 2 2 2.9 2 4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-4h1zm-2 0H4V4h11v6zm-4.5 4h-3v-2h3v2zm6-3v2c0 2.21-1.79 4-4 4h-1v-2h1c1.1 0 2-.9 2-2v-2h2z"/>
                    </svg>
                </div>
                <h1 class="text-4xl md:text-5xl font-heading font-bold text-[#3E2723] mb-6">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="text-xl text-[#5D4037] mb-10 max-w-2xl font-body">En taze çekirdekler ve özenli sunumumuzla, günün her saatinde keyifli bir mola için buradayız.</p>

                <!-- Stock Coffee Image -->
                <div class="w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sıcak Kahve" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
                </div>
            </div>
        `;
    }

    function hakkindaPage() {
        return `
            <div class="w-full max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] mb-6 border-b border-[#5D4037] pb-2">Hakkımızda</h2>
                <p class="text-lg text-[#5D4037] mb-4 leading-relaxed">Kahve Dükkanı, 2010 yılından bu yana şehrin kalbinde, kahve tutkunlarına hizmet vermektedir. Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize sıcak, samimi ve ilham verici bir atmosfer sunmaktır.</p>
                <p class="text-lg text-[#5D4037] leading-relaxed">Dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini, ustalıkla kavuruyor ve deneyimli baristalarımızla fincanınıza taşıyoruz.</p>
            </div>
        `;
    }

    function destekPage() {
        return `
            <div class="w-full max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] mb-6 border-b border-[#5D4037] pb-2">Destek</h2>
                <p class="text-lg text-[#5D4037] mb-4">Siparişleriniz, geri bildirimleriniz veya herhangi bir sorunuz için buradayız. Sıkça sorulan sorular (SSS) bölümümüz yakında eklenecektir.</p>
                <div class="bg-[#FFFDD0] p-6 rounded-lg mt-6 border border-[#5D4037]">
                    <h3 class="text-xl font-bold text-[#3E2723] mb-2">Nasıl yardımcı olabiliriz?</h3>
                    <p class="text-[#5D4037]">Müşteri hizmetleri ekibimize haftanın 7 günü 09:00 - 18:00 saatleri arasında ulaşabilirsiniz.</p>
                </div>
            </div>
        `;
    }

    function iletisimPage() {
        return `
            <div class="w-full max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] mb-6 border-b border-[#5D4037] pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 class="text-xl font-bold text-[#3E2723] mb-4">İletişim Bilgileri</h3>
                        <ul class="space-y-4 text-[#5D4037] text-lg">
                            <li class="flex items-center"><svg class="w-6 h-6 mr-3 text-[#3E2723]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +90 555 123 4567</li>
                            <li class="flex items-center"><svg class="w-6 h-6 mr-3 text-[#3E2723]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> info@kahvedukkani.com</li>
                            <li class="flex items-start"><svg class="w-6 h-6 mr-3 mt-1 text-[#3E2723]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Kahve Caddesi, No:123 Kadıköy/İstanbul</li>
                        </ul>
                    </div>
                    <form class="flex flex-col space-y-4">
                        <input type="text" placeholder="Adınız" class="p-3 border border-gray-300 rounded focus:outline-none focus:border-[#3E2723]">
                        <input type="email" placeholder="E-posta Adresiniz" class="p-3 border border-gray-300 rounded focus:outline-none focus:border-[#3E2723]">
                        <textarea rows="4" placeholder="Mesajınız" class="p-3 border border-gray-300 rounded focus:outline-none focus:border-[#3E2723]"></textarea>
                        <button type="button" class="bg-[#3E2723] text-[#FFFDD0] py-3 rounded font-bold hover:bg-[#5D4037] transition duration-300">Gönder</button>
                    </form>
                </div>
            </div>
        `;
    }

    function subelerPage() {
        return `
            <div class="w-full max-w-4xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] mb-6 border-b border-[#5D4037] pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <div class="border border-[#5D4037] rounded-lg p-6 bg-[#FFFDD0] shadow hover:shadow-md transition">
                        <h3 class="text-xl font-bold text-[#3E2723] mb-2">Kadıköy Merkez Şube</h3>
                        <p class="text-[#5D4037] mb-2">Moda Caddesi No:45<br>Kadıköy, İstanbul</p>
                        <p class="text-sm italic text-gray-600">Her gün 08:00 - 23:00</p>
                    </div>
                    <div class="border border-[#5D4037] rounded-lg p-6 bg-[#FFFDD0] shadow hover:shadow-md transition">
                        <h3 class="text-xl font-bold text-[#3E2723] mb-2">Beşiktaş Şube</h3>
                        <p class="text-[#5D4037] mb-2">Barbaros Bulvarı No:12<br>Beşiktaş, İstanbul</p>
                        <p class="text-sm italic text-gray-600">Her gün 07:30 - 22:30</p>
                    </div>
                    <div class="border border-[#5D4037] rounded-lg p-6 bg-[#FFFDD0] shadow hover:shadow-md transition">
                        <h3 class="text-xl font-bold text-[#3E2723] mb-2">Karaköy Şube</h3>
                        <p class="text-[#5D4037] mb-2">Kemankeş Caddesi No:8<br>Beyoğlu, İstanbul</p>
                        <p class="text-sm italic text-gray-600">Her gün 08:00 - 00:00</p>
                    </div>
                </div>
            </div>
        `;
    }

    function menuPage() {
        let menuHTML = menuItems.map(item => `
            <div class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm bg-white">
                <div class="w-12 h-12 bg-[#3E2723] rounded-full flex items-center justify-center text-[#FFFDD0] mr-4 shadow-inner">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21h18v-2H2v2zm15-11c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4C2.9 2 2 2.9 2 4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-4h1zm-2 0H4V4h11v6zm-4.5 4h-3v-2h3v2zm6-3v2c0 2.21-1.79 4-4 4h-1v-2h1c1.1 0 2-.9 2-2v-2h2z"/></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-[#3E2723]">${item.name}</h3>
                </div>
            </div>
        `).join('');

        return `
            <div class="w-full max-w-4xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] mb-8 text-center bg-white py-4 rounded shadow">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuHTML}
                </div>
            </div>
        `;
    }

    function fiyatlarPage() {
         let pricesHTML = menuItems.map(item => `
            <div class="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition">
                <span class="text-xl text-[#5D4037] font-medium">${item.name}</span>
                <span class="text-xl font-bold text-[#3E2723] bg-[#FFFDD0] px-4 py-1 rounded shadow-sm">${item.price}</span>
            </div>
        `).join('');

        return `
            <div class="w-full max-w-2xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-heading font-bold text-[#3E2723] mb-6 border-b border-[#5D4037] pb-2 text-center">Fiyat Listesi</h2>
                <div class="flex flex-col mt-4">
                    ${pricesHTML}
                </div>
                <div class="mt-8 text-center text-sm text-gray-500 italic">
                    * Tüm fiyatlarımıza KDV dahildir.
                </div>
            </div>
        `;
    }
});
