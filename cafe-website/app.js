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
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const appContainer = document.getElementById('app');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked (for mobile friendliness)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Pages Content
    const pages = {
        home: `
            <div class="text-center animate-fade-in">
                <h1 class="text-4xl md:text-5xl font-playfair font-bold text-coffee-brown mb-4">Kafe Keyfi'ne Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-coffee-light mb-8 max-w-2xl mx-auto">Günün stresini enfes bir kahve eşliğinde geride bırakın. Özenle seçilmiş çekirdeklerimiz ve taptaze atıştırmalıklarımızla sizleri bekliyoruz.</p>
                <div class="rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto border-4 border-coffee-white">
                    <img src="./Images/coffee-main.jpg" alt="Taze Kahve" class="w-full h-auto object-cover max-h-[500px]">
                </div>
            </div>
        `,
        about: `
            <div class="bg-coffee-white p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h2 class="text-3xl font-playfair font-bold text-coffee-brown mb-6 border-b-2 border-coffee-border pb-2">Hakkımızda</h2>
                <p class="mb-4 text-lg leading-relaxed">2010 yılından bu yana, şehrin kalbinde kahve tutkunlarına hizmet veriyoruz. Amacımız sadece kahve satmak değil, misafirlerimize kendilerini evlerinde hissedebilecekleri sıcak bir atmosfer sunmaktır.</p>
                <p class="text-lg leading-relaxed">Dünyanın dört bir yanından özenle seçtiğimiz kahve çekirdeklerini, ustalarımızın ellerinde sanata dönüştürüyoruz.</p>
            </div>
        `,
        support: `
            <div class="bg-coffee-white p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h2 class="text-3xl font-playfair font-bold text-coffee-brown mb-6 border-b-2 border-coffee-border pb-2">Destek</h2>
                <p class="mb-6 text-lg">Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili herhangi bir sorun yaşarsanız, müşteri hizmetleri ekibimiz size yardımcı olmaktan mutluluk duyacaktır.</p>
                <div class="bg-coffee-cream p-6 rounded-lg border border-coffee-border">
                    <h3 class="font-playfair text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li>Glutensiz ürünleriniz var mı?</li>
                        <li>Toplu sipariş verebilir miyim?</li>
                        <li>Hediye kartı satıyor musunuz?</li>
                    </ul>
                </div>
            </div>
        `,
        contact: `
            <div class="bg-coffee-white p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h2 class="text-3xl font-playfair font-bold text-coffee-brown mb-6 border-b-2 border-coffee-border pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-playfair text-xl font-bold mb-4">Bize Ulaşın</h3>
                        <p class="mb-2"><strong>Telefon:</strong> 0 (555) 123 45 67</p>
                        <p class="mb-2"><strong>E-posta:</strong> merhaba@kafekeyfi.com</p>
                        <p class="mb-4"><strong>Adres:</strong> Kahveciler Sokak No:42, Kadıköy / İstanbul</p>
                    </div>
                    <form class="space-y-4">
                        <input type="text" placeholder="Adınız" class="w-full p-3 rounded bg-coffee-cream border border-coffee-border focus:outline-none focus:border-coffee-brown">
                        <textarea placeholder="Mesajınız" rows="3" class="w-full p-3 rounded bg-coffee-cream border border-coffee-border focus:outline-none focus:border-coffee-brown"></textarea>
                        <button type="button" class="bg-coffee-brown text-coffee-cream px-6 py-2 rounded hover:bg-coffee-light transition-colors w-full font-bold">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        locations: `
            <div class="bg-coffee-white p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h2 class="text-3xl font-playfair font-bold text-coffee-brown mb-6 border-b-2 border-coffee-border pb-2">Şube Konumları</h2>
                <div class="space-y-6">
                    <div class="p-4 border border-coffee-border rounded-lg bg-coffee-cream">
                        <h3 class="font-playfair text-xl font-bold text-coffee-brown">Kadıköy Merkez (Ana Şube)</h3>
                        <p>Kahveciler Sokak No:42, Kadıköy / İstanbul</p>
                        <p class="text-sm text-coffee-light mt-2">Çalışma Saatleri: 07:00 - 23:00</p>
                    </div>
                    <div class="p-4 border border-coffee-border rounded-lg bg-coffee-cream">
                        <h3 class="font-playfair text-xl font-bold text-coffee-brown">Beşiktaş Şubesi</h3>
                        <p>Barbaros Bulvarı No:15, Beşiktaş / İstanbul</p>
                        <p class="text-sm text-coffee-light mt-2">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                    <div class="p-4 border border-coffee-border rounded-lg bg-coffee-cream">
                        <h3 class="font-playfair text-xl font-bold text-coffee-brown">Karşıyaka Şubesi</h3>
                        <p>Cemal Gürsel Caddesi No:88, Karşıyaka / İzmir</p>
                        <p class="text-sm text-coffee-light mt-2">Çalışma Saatleri: 08:00 - 00:00</p>
                    </div>
                </div>
            </div>
        `,
        'menu-items': `
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-playfair font-bold text-coffee-brown mb-8 text-center border-b-2 border-coffee-border pb-4 inline-block mx-auto">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="menu-grid">
                    <!-- Menu items will be generated here -->
                </div>
            </div>
        `,
        prices: `
            <div class="bg-coffee-white p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
                <h2 class="text-3xl font-playfair font-bold text-coffee-brown mb-8 text-center border-b-2 border-coffee-border pb-4">Fiyat Listesi</h2>
                <ul class="space-y-4" id="price-list">
                    <!-- Price list will be generated here -->
                </ul>
            </div>
        `
    };

    // Routing Logic
    function router() {
        // Get hash from URL, default to 'home'
        let hash = window.location.hash.substring(1) || 'home';

        // Check if page exists, otherwise default to home
        if (!pages[hash]) {
            hash = 'home';
        }

        // Render content
        appContainer.innerHTML = pages[hash];

        // Post-render logic for specific pages
        if (hash === 'menu-items') {
            const menuGrid = document.getElementById('menu-grid');
            let html = '';
            menuItems.forEach(item => {
                html += `
                    <div class="bg-coffee-white p-6 rounded-lg shadow-md border-b-4 border-coffee-brown hover:transform hover:-translate-y-1 transition-transform">
                        <h3 class="text-xl font-playfair font-bold text-coffee-brown mb-2">${item.name}</h3>
                        <p class="text-coffee-light">Özenle hazırlanmış enfes lezzet.</p>
                    </div>
                `;
            });
            menuGrid.innerHTML = html;
        }

        if (hash === 'prices') {
            const priceList = document.getElementById('price-list');
            let html = '';
            menuItems.forEach(item => {
                html += `
                    <li class="flex justify-between items-center text-lg md:text-xl border-b border-coffee-border pb-2 border-dashed">
                        <span class="font-playfair font-bold">${item.name}</span>
                        <span class="text-coffee-brown font-bold bg-coffee-cream px-3 py-1 rounded">${item.price}</span>
                    </li>
                `;
            });
            priceList.innerHTML = html;
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});