document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const appContainer = document.getElementById('app');

    // Toggle Sidebar
    const toggleSidebar = () => {
        const isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
            sidebar.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
        } else {
            sidebar.classList.remove('-translate-x-full');
            sidebarOverlay.classList.remove('hidden');
        }
    };

    hamburgerBtn.addEventListener('click', toggleSidebar);
    closeSidebarBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar on link click
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
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

    // Page Content Renderers
    const pages = {
        home: () => `
            <div class="text-center">
                <h1 class="font-heading text-4xl md:text-5xl font-bold mb-4 text-brand-brown">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="text-lg mb-8 max-w-2xl mx-auto">En taze kahve çekirdekleriyle hazırlanan enfes içeceklerimizle gününüze lezzet katın. Minimalist ve huzurlu ortamımızda sizleri ağırlamaktan mutluluk duyarız.</p>
                <div class="max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden mb-8 h-64 md:h-96 relative bg-brand-brown flex items-center justify-center text-white text-2xl font-heading">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Kahve Fotoğrafı" class="absolute inset-0 w-full h-full object-cover opacity-80" loading="lazy">
                    <div class="relative z-10 bg-brand-brown/70 p-4 rounded text-center">
                        <span class="block text-3xl mb-2">Kahve Dükkanı</span>
                        <span class="text-lg">Taze • Lezzetli • Huzurlu</span>
                    </div>
                </div>
            </div>
        `,
        hakkinda: () => `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">Hakkımızda</h2>
                <p class="mb-4 text-lg">Kahve Dükkanı olarak 2023 yılında, en kaliteli kahve çekirdeklerini en saf haliyle sunmak amacıyla yola çıktık.</p>
                <p class="mb-4 text-lg">Misyonumuz, misafirlerimize hem görsel bir şölen hem de eşsiz bir tat deneyimi yaşatmaktır. Modern ve minimalist yaklaşımımızla kahve kültürünü yeniden tanımlıyoruz.</p>
            </div>
        `,
        destek: () => `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">Destek</h2>
                <p class="mb-4 text-lg">Müşteri memnuniyeti bizim için her şeyden önemlidir. Herhangi bir sorunuz veya öneriniz varsa, lütfen bizimle iletişime geçmekten çekinmeyin.</p>
                <div class="bg-brand-cream p-4 rounded-md mt-6">
                    <p class="font-bold">Sıkça Sorulan Sorular</p>
                    <ul class="list-disc pl-5 mt-2 space-y-2">
                        <li>Çalışma saatleriniz nedir? <span class="text-sm block text-gray-600">Hafta içi ve hafta sonu 08:00 - 22:00 saatleri arasında hizmet veriyoruz.</span></li>
                        <li>Glutensiz ürünleriniz var mı? <span class="text-sm block text-gray-600">Evet, özel diyet gereksinimlerine uygun seçeneklerimiz mevcuttur.</span></li>
                    </ul>
                </div>
            </div>
        `,
        iletisim: () => `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-heading text-xl font-bold mb-4">Bize Ulaşın</h3>
                        <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 1, Beşiktaş / İstanbul</p>
                        <p class="mb-2"><strong>Telefon:</strong> +90 555 123 45 67</p>
                        <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                    </div>
                    <div>
                        <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                            <div>
                                <label class="block text-sm font-medium mb-1" for="name">Adınız</label>
                                <input class="w-full px-3 py-2 border border-brand-brown/30 rounded focus:outline-none focus:border-brand-brown" type="text" id="name" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="email">E-posta</label>
                                <input class="w-full px-3 py-2 border border-brand-brown/30 rounded focus:outline-none focus:border-brand-brown" type="email" id="email" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="message">Mesajınız</label>
                                <textarea class="w-full px-3 py-2 border border-brand-brown/30 rounded focus:outline-none focus:border-brand-brown h-32" id="message" required></textarea>
                            </div>
                            <button type="submit" class="bg-brand-brown text-brand-cream px-6 py-2 rounded hover:bg-opacity-90 transition-opacity">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `,
        'sube-konumlari': () => `
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2">Şube Konumları</h2>
                <div class="space-y-6">
                    <div class="p-4 border border-brand-brown/20 rounded hover:shadow-lg transition-shadow">
                        <h3 class="font-heading text-xl font-bold mb-2">Beşiktaş Merkez Şubesi</h3>
                        <p>Kahve Sokak No: 1, Beşiktaş / İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                    <div class="p-4 border border-brand-brown/20 rounded hover:shadow-lg transition-shadow">
                        <h3 class="font-heading text-xl font-bold mb-2">Kadıköy Moda Şubesi</h3>
                        <p>Moda Caddesi No: 42, Kadıköy / İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 09:00 - 23:00</p>
                    </div>
                    <div class="p-4 border border-brand-brown/20 rounded hover:shadow-lg transition-shadow">
                        <h3 class="font-heading text-xl font-bold mb-2">Nişantaşı Şubesi</h3>
                        <p>Valikonağı Caddesi No: 15, Şişli / İstanbul</p>
                        <p class="text-sm text-gray-500 mt-2">Çalışma Saatleri: 08:30 - 21:30</p>
                    </div>
                </div>
            </div>
        `,
        'menu-icerikleri': () => `
            <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2 text-center">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-4 border-b border-brand-brown/10 hover:bg-brand-cream/50 transition-colors rounded">
                            <span class="font-bold text-lg">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: () => `
            <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 class="font-heading text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-brown/20 pb-2 text-center">Fiyatlar</h2>
                <div class="space-y-4">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center p-4 bg-brand-cream/30 rounded-lg hover:bg-brand-cream transition-colors">
                            <span class="font-bold text-lg font-heading">${item.name}</span>
                            <span class="text-xl font-bold text-brand-brown bg-white px-4 py-1 rounded-full shadow-sm">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    };

    // Router
    const router = () => {
        let hash = window.location.hash.substring(1);

        // Default to home if no hash or invalid hash
        if (!hash || !pages[hash]) {
            hash = 'home';
            window.location.hash = hash;
        }

        // Render page
        appContainer.innerHTML = pages[hash]();

        // Scroll to top
        window.scrollTo(0, 0);

        // Update active link in sidebar
        sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + hash) {
                link.classList.add('bg-brand-brown', 'text-brand-cream', 'font-bold');
                link.classList.remove('hover:bg-brand-cream', 'hover:text-brand-brown');
                link.style.backgroundColor = '#5D4037'; // Slightly lighter brown for active state
            } else {
                link.classList.remove('bg-brand-brown', 'text-brand-cream', 'font-bold');
                link.classList.add('hover:bg-brand-cream', 'hover:text-brand-brown');
                link.style.backgroundColor = '';
            }
        });
    };

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});