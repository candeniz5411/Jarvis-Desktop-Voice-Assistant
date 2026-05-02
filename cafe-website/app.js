document.addEventListener('DOMContentLoaded', () => {
    // === Sidebar Logic ===
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

    function toggleSidebar() {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    }

    hamburgerBtn.addEventListener('click', toggleSidebar);
    closeSidebarBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // === Data ===
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

    // === Routing Logic ===
    const app = document.getElementById('app');

    const routes = {
        '': renderHome,
        '#hakkinda': renderAbout,
        '#destek': renderSupport,
        '#iletisim': renderContact,
        '#subeler': renderLocations,
        '#menu-icerikleri': renderMenuContents,
        '#fiyatlar': renderPrices
    };

    function router() {
        const hash = window.location.hash;
        const renderFunction = routes[hash] || renderHome;
        app.innerHTML = ''; // Clear current content
        app.appendChild(renderFunction());
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);
    // Initial route load
    router();

    // === Render Functions ===
    function renderHome() {
        const container = document.createElement('div');
        container.className = 'flex flex-col items-center justify-center text-center py-12';

        container.innerHTML = `
            <h1 class="text-4xl md:text-5xl heading-font font-bold mb-4">Kafe'ye Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl text-brown-500 mb-8 max-w-2xl">En iyi kahve çekirdekleri ve taze lezzetlerle dolu sıcak bir ortam.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" alt="Kahve ve Atmosfer" class="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700">
            </div>
        `;
        return container;
    }

    function renderAbout() {
        const container = document.createElement('div');
        container.className = 'max-w-3xl mx-auto py-8 bg-white p-8 rounded-xl shadow-md border border-brown-100 mt-4';

        container.innerHTML = `
            <h2 class="text-3xl heading-font font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">Hakkımızda</h2>
            <p class="mb-4 leading-relaxed text-brown-700">2010 yılından beri, tutkuyla kavurduğumuz kahve çekirdekleri ve özenle hazırladığımız lezzetlerle misafirlerimizi ağırlıyoruz. Amacımız sadece kahve satmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği sıcak bir yuva olmaktır.</p>
            <p class="leading-relaxed text-brown-700">Her bir fincan kahvede ustalarımızın emeği ve kaliteli çekirdeklerin benzersiz aroması gizlidir. Sizi de bu deneyimi paylaşmaya bekliyoruz.</p>
        `;
        return container;
    }

    function renderSupport() {
        const container = document.createElement('div');
        container.className = 'max-w-3xl mx-auto py-8 bg-white p-8 rounded-xl shadow-md border border-brown-100 mt-4';

        container.innerHTML = `
            <h2 class="text-3xl heading-font font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">Destek</h2>
            <p class="mb-6 leading-relaxed text-brown-700">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Sıkça sorulan sorulara göz atabilir veya destek ekibimize ulaşabilirsiniz.</p>
            <div class="space-y-4">
                <div class="p-4 bg-brown-100/30 rounded-lg">
                    <h3 class="font-bold text-brown-900 mb-1">Online sipariş verebilir miyim?</h3>
                    <p class="text-sm text-brown-700">Evet, çok yakında online sipariş sistemimiz aktif olacaktır.</p>
                </div>
                <div class="p-4 bg-brown-100/30 rounded-lg">
                    <h3 class="font-bold text-brown-900 mb-1">Alerjen bilgisine nereden ulaşabilirim?</h3>
                    <p class="text-sm text-brown-700">Menü içerikleri sayfamızdan veya doğrudan şubelerimizdeki baristalarımızdan bilgi alabilirsiniz.</p>
                </div>
            </div>
        `;
        return container;
    }

    function renderContact() {
        const container = document.createElement('div');
        container.className = 'max-w-3xl mx-auto py-8 bg-white p-8 rounded-xl shadow-md border border-brown-100 mt-4';

        container.innerHTML = `
            <h2 class="text-3xl heading-font font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">İletişim</h2>
            <p class="mb-6 text-brown-700">Görüş, öneri ve sorularınız için bizimle iletişime geçebilirsiniz.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 class="font-bold text-brown-900 mb-2">Merkez Ofis</h3>
                    <p class="text-brown-700">Kahve Sokak No:42<br>Kadıköy, İstanbul</p>
                    <p class="text-brown-700 mt-2"><strong>Tel:</strong> 0216 123 45 67</p>
                    <p class="text-brown-700"><strong>E-posta:</strong> merhaba@kafeportali.com</p>
                </div>
                <div>
                    <h3 class="font-bold text-brown-900 mb-2">Çalışma Saatleri</h3>
                    <p class="text-brown-700">Pazartesi - Cuma: 07:30 - 22:00</p>
                    <p class="text-brown-700">Cumartesi - Pazar: 08:30 - 23:00</p>
                </div>
            </div>
        `;
        return container;
    }

    function renderLocations() {
        const container = document.createElement('div');
        container.className = 'max-w-4xl mx-auto py-8 bg-white p-8 rounded-xl shadow-md border border-brown-100 mt-4';

        container.innerHTML = `
            <h2 class="text-3xl heading-font font-bold mb-6 text-brown-900 border-b border-brown-100 pb-2">Şube Konumları</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border border-brown-300 p-6 rounded-lg hover:shadow-lg transition-shadow bg-cream/30">
                    <h3 class="text-xl font-bold text-brown-900 mb-2 heading-font">Kadıköy Şubesi</h3>
                    <p class="text-brown-700 mb-4">Moda Caddesi, Deniz Sokak No:12<br>Kadıköy / İstanbul</p>
                    <button class="text-sm bg-brown-700 text-white px-4 py-2 rounded hover:bg-brown-900 transition-colors">Haritada Gör</button>
                </div>
                <div class="border border-brown-300 p-6 rounded-lg hover:shadow-lg transition-shadow bg-cream/30">
                    <h3 class="text-xl font-bold text-brown-900 mb-2 heading-font">Beşiktaş Şubesi</h3>
                    <p class="text-brown-700 mb-4">Barbaros Bulvarı No:45<br>Beşiktaş / İstanbul</p>
                    <button class="text-sm bg-brown-700 text-white px-4 py-2 rounded hover:bg-brown-900 transition-colors">Haritada Gör</button>
                </div>
                <div class="border border-brown-300 p-6 rounded-lg hover:shadow-lg transition-shadow bg-cream/30">
                    <h3 class="text-xl font-bold text-brown-900 mb-2 heading-font">Alsancak Şubesi</h3>
                    <p class="text-brown-700 mb-4">Kıbrıs Şehitleri Caddesi No:88<br>Konak / İzmir</p>
                    <button class="text-sm bg-brown-700 text-white px-4 py-2 rounded hover:bg-brown-900 transition-colors">Haritada Gör</button>
                </div>
            </div>
        `;
        return container;
    }

    function renderMenuContents() {
        const container = document.createElement('div');
        container.className = 'max-w-4xl mx-auto py-8 mt-4';

        let itemsHtml = menuItems.map(item => `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-brown-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <h3 class="text-xl font-bold text-brown-900 mb-2 heading-font">${item.name}</h3>
                <p class="text-sm text-brown-500 mt-2 border-t border-brown-100 pt-2">Taze ve özenle hazırlanmış.</p>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="bg-white p-8 rounded-xl shadow-md border border-brown-100 mb-8">
                <h2 class="text-3xl heading-font font-bold mb-2 text-brown-900">Menü İçerikleri</h2>
                <p class="text-brown-500 mb-6">Kafemizde bulabileceğiniz birbirinden lezzetli ürünlerimiz.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    ${itemsHtml}
                </div>
            </div>
        `;
        return container;
    }

    function renderPrices() {
        const container = document.createElement('div');
        container.className = 'max-w-3xl mx-auto py-8 bg-white p-8 rounded-xl shadow-md border border-brown-100 mt-4';

        let itemsHtml = menuItems.map(item => `
            <div class="flex justify-between items-center py-3 border-b border-brown-100/50 last:border-0 hover:bg-cream/20 px-2 transition-colors rounded">
                <span class="font-medium text-brown-900">${item.name}</span>
                <span class="font-bold text-brown-700">${item.price}</span>
            </div>
        `).join('');

        container.innerHTML = `
            <h2 class="text-3xl heading-font font-bold mb-2 text-brown-900">Fiyat Listesi</h2>
            <p class="text-brown-500 mb-8 pb-4 border-b border-brown-100">Güncel ürün fiyatlarımız.</p>

            <div class="bg-cream/10 p-4 rounded-lg border border-brown-100">
                ${itemsHtml}
            </div>
        `;
        return container;
    }
});
