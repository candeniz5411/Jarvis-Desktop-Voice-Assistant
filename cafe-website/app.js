document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const appContainer = document.getElementById('app');

    // Sidebar Toggle Logic
    const toggleSidebar = () => {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            sidebar.classList.remove('-translate-x-full');
            sidebarOverlay.classList.remove('hidden');
        } else {
            sidebar.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
        }
    };

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Menu Items Data
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

    // Page Content Rendering Logic
    const renderHome = () => {
        return `
            <div class="text-center mt-10">
                <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Kafe Lale'ye Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl mb-8">En iyi kahve deneyimi için doğru yerdesiniz.</p>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Kahve" class="rounded-lg shadow-md mx-auto max-w-full h-auto object-cover max-h-[400px]">
            </div>
        `;
    };

    const renderHakkinda = () => {
        return `
            <div class="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center border-b pb-4 border-cafe-accent">Hakkımızda</h2>
                <p class="mb-4 leading-relaxed">Kafe Lale, şehrin kalbinde, kahve tutkunları için özenle tasarlanmış sıcak bir mekandır. Yılların deneyimiyle en kaliteli kahve çekirdeklerini seçiyor ve sizlere sunuyoruz.</p>
                <p class="leading-relaxed">Misyonumuz, sadece bir kahve dükkanı olmak değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz, çalışabileceğiniz ve dinlenebileceğiniz bir yaşam alanı yaratmaktır.</p>
            </div>
        `;
    };

    const renderDestek = () => {
        return `
            <div class="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center border-b pb-4 border-cafe-accent">Destek</h2>
                <p class="mb-4 text-center">Soru, görüş ve önerileriniz bizim için değerlidir. Müşteri hizmetlerimiz size yardımcı olmaktan mutluluk duyacaktır.</p>
                <div class="bg-cafe-light p-4 rounded-lg border border-cafe-accent">
                    <p class="font-bold mb-2">Sıkça Sorulan Sorular:</p>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>Çalışma saatleriniz nelerdir?</strong> Haftanın her günü 08:00 - 23:00 arası açığız.</li>
                        <li><strong>Wi-Fi var mı?</strong> Evet, misafirlerimiz için ücretsiz ve hızlı Wi-Fi hizmetimiz mevcuttur.</li>
                        <li><strong>Paket servisiniz var mı?</strong> Evet, seçili bölgelere paket servisimiz bulunmaktadır.</li>
                    </ul>
                </div>
            </div>
        `;
    };

    const renderIletisim = () => {
        return `
            <div class="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center border-b pb-4 border-cafe-accent">İletişim</h2>
                <div class="flex flex-col md:flex-row gap-8">
                    <div class="flex-1">
                        <p class="mb-2"><strong>Adres:</strong> Kahveciler Sokak No: 12, Merkez/İstanbul</p>
                        <p class="mb-2"><strong>Telefon:</strong> +90 555 123 45 67</p>
                        <p class="mb-2"><strong>E-posta:</strong> iletisim@kafelale.com</p>
                    </div>
                    <div class="flex-1">
                        <form class="flex flex-col gap-4">
                            <input type="text" placeholder="Adınız" class="p-2 border border-cafe-accent rounded focus:outline-none focus:ring-2 focus:ring-cafe-dark" required>
                            <input type="email" placeholder="E-posta Adresiniz" class="p-2 border border-cafe-accent rounded focus:outline-none focus:ring-2 focus:ring-cafe-dark" required>
                            <textarea placeholder="Mesajınız" rows="4" class="p-2 border border-cafe-accent rounded focus:outline-none focus:ring-2 focus:ring-cafe-dark" required></textarea>
                            <button type="submit" class="bg-cafe-dark text-cafe-light py-2 px-4 rounded hover:bg-cafe-hover transition-colors font-bold">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    };

    const renderSubeler = () => {
        return `
            <div class="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center border-b pb-4 border-cafe-accent">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-cafe-accent rounded-lg p-4 bg-cafe-light hover:shadow-md transition-shadow">
                        <h3 class="text-xl font-heading font-bold mb-2">Merkez Şube</h3>
                        <p>Kahveciler Sokak No: 12, Merkez/İstanbul</p>
                    </div>
                    <div class="border border-cafe-accent rounded-lg p-4 bg-cafe-light hover:shadow-md transition-shadow">
                        <h3 class="text-xl font-heading font-bold mb-2">Kadıköy Şubesi</h3>
                        <p>Moda Caddesi No: 34, Kadıköy/İstanbul</p>
                    </div>
                    <div class="border border-cafe-accent rounded-lg p-4 bg-cafe-light hover:shadow-md transition-shadow">
                        <h3 class="text-xl font-heading font-bold mb-2">Beşiktaş Şubesi</h3>
                        <p>Çarşı İçi Sokak No: 8, Beşiktaş/İstanbul</p>
                    </div>
                </div>
            </div>
        `;
    };

    const renderMenuIcerikleri = () => {
        const itemsList = menuItems.map(item => `
            <div class="flex justify-between items-center border-b border-cafe-accent py-3">
                <span class="text-lg font-semibold">${item.name}</span>
            </div>
        `).join('');

        return `
            <div class="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center border-b pb-4 border-cafe-accent">Menü İçerikleri</h2>
                <div class="flex flex-col">
                    ${itemsList}
                </div>
            </div>
        `;
    };

    const renderFiyatlar = () => {
        const itemsList = menuItems.map(item => `
            <div class="flex justify-between items-center border-b border-cafe-accent py-3 hover:bg-cafe-light transition-colors px-2 rounded">
                <span class="text-lg">${item.name}</span>
                <span class="text-lg font-bold text-cafe-hover">${item.price}</span>
            </div>
        `).join('');

        return `
            <div class="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
                <h2 class="text-3xl font-heading font-bold mb-6 text-center border-b pb-4 border-cafe-accent">Fiyatlar</h2>
                <div class="flex flex-col">
                    ${itemsList}
                </div>
            </div>
        `;
    };

    // Routing Logic
    const route = () => {
        const hash = window.location.hash || '#home';

        switch (hash) {
            case '#hakkinda':
                appContainer.innerHTML = renderHakkinda();
                break;
            case '#destek':
                appContainer.innerHTML = renderDestek();
                break;
            case '#iletisim':
                appContainer.innerHTML = renderIletisim();
                break;
            case '#subeler':
                appContainer.innerHTML = renderSubeler();
                break;
            case '#menu-icerikleri':
                appContainer.innerHTML = renderMenuIcerikleri();
                break;
            case '#fiyatlar':
                appContainer.innerHTML = renderFiyatlar();
                break;
            case '#home':
            default:
                appContainer.innerHTML = renderHome();
                break;
        }
        window.scrollTo(0, 0);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', route);

    // Initial load
    route();
});
