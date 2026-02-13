document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    // Menu Data
    const menuItems = [
        { name: 'Espresso', price: '45₺', type: 'Sıcak İçecek' },
        { name: 'Cappuccino', price: '55₺', type: 'Sıcak İçecek' },
        { name: 'Latte', price: '60₺', type: 'Sıcak İçecek' },
        { name: 'Türk Kahvesi', price: '40₺', type: 'Sıcak İçecek' },
        { name: 'Çay', price: '25₺', type: 'Sıcak İçecek' },
        { name: 'Soğuk Kahve', price: '65₺', type: 'Soğuk İçecek' },
        { name: 'Limonata', price: '35₺', type: 'Soğuk İçecek' },
        { name: 'Cheesecake', price: '70₺', type: 'Yiyecek' },
        { name: 'Kruvasan', price: '50₺', type: 'Yiyecek' },
        { name: 'Sandviç', price: '80₺', type: 'Yiyecek' },
    ];

    // Functions
    function toggleSidebar() {
        const isOpen = sidebar.classList.contains('translate-x-0'); // Tailwind class check or custom class
        // Since we used custom class in CSS but transform in Tailwind logic in HTML,
        // let's stick to the custom class defined in style.css or standard class manipulation

        // Actually, in style.css I defined .sidebar-open { transform: translateX(0) !important; }
        // The default class is -translate-x-full

        sidebar.classList.toggle('sidebar-open');

        if (sidebar.classList.contains('sidebar-open')) {
             overlay.classList.add('overlay-active');
             overlay.classList.remove('opacity-0', 'pointer-events-none');
        } else {
             overlay.classList.remove('overlay-active');
             overlay.classList.add('opacity-0', 'pointer-events-none');
        }
    }

    function closeSidebar() {
        sidebar.classList.remove('sidebar-open');
        overlay.classList.remove('overlay-active');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    }

    function renderMenuHtml() {
        return `
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-playfair mb-8 text-center border-b-2 border-coffee-light inline-block pb-2">Menü İçerikleri</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-center border-b border-coffee-cream border-opacity-50 pb-2">
                            <div>
                                <h3 class="text-xl font-bold">${item.name}</h3>
                                <span class="text-sm text-coffee-light">${item.type}</span>
                            </div>
                            <span class="text-xl font-bold font-playfair">${item.price}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    function renderPricesHtml() {
        // Reuse menu HTML but maybe focused just on list view or identical since prices are requested
        return `
             <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-playfair mb-8 border-b-2 border-coffee-light inline-block pb-2">Fiyat Listesi</h2>
                <ul class="space-y-4">
                    ${menuItems.map(item => `
                        <li class="flex justify-between items-center text-lg bg-white bg-opacity-50 p-3 rounded shadow-sm">
                            <span>${item.name}</span>
                            <span class="font-bold font-playfair text-coffee-dark">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    function renderContent() {
        const hash = window.location.hash;

        // Default content (Home)
        let html = `
            <div class="text-center mt-10 animate-fade-in">
                <h2 class="text-4xl font-playfair mb-6 text-coffee-dark">Hoş Geldiniz</h2>
                <p class="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Kahve tutkunları için özel olarak seçilmiş çekirdekler, sıcak bir atmosfer ve unutulmaz tatlar. Gününüze keyif katmak için buradayız.</p>
                <div class="w-full max-w-3xl mx-auto h-80 bg-coffee-dark rounded-lg flex items-center justify-center shadow-2xl relative overflow-hidden group">
                     <!-- Simple CSS Coffee Cup Representation -->
                     <div class="relative">
                        <div class="w-32 h-24 bg-coffee-cream rounded-b-full relative z-10"></div>
                        <div class="absolute top-2 -right-8 w-10 h-12 border-4 border-coffee-cream rounded-r-full"></div>
                        <div class="absolute -top-10 left-4 w-4 h-10 bg-gray-200 opacity-50 rounded-full animate-pulse"></div>
                        <div class="absolute -top-12 left-12 w-4 h-12 bg-gray-200 opacity-50 rounded-full animate-pulse delay-100"></div>
                        <div class="absolute -top-8 left-20 w-4 h-8 bg-gray-200 opacity-50 rounded-full animate-pulse delay-200"></div>
                     </div>
                     <span class="absolute bottom-4 text-coffee-cream font-playfair tracking-widest opacity-80">KAHVE DÜKKANI</span>
                </div>
            </div>
        `;

        if (hash === '#hakkinda') {
            html = `
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-playfair mb-6">Hakkımızda</h2>
                    <p class="text-lg leading-loose mb-4">
                        Kahve Dükkanı, 2010 yılından bu yana şehrin en iyi kahvelerini sunmak için tutkuyla çalışıyor.
                        Sadece en kaliteli çekirdekleri kullanıyor, her fincanda mükemmelliği hedefliyoruz.
                    </p>
                    <p class="text-lg leading-loose">
                        Misyonumuz, misafirlerimize sadece bir kahve değil, aynı zamanda huzurlu bir mola ve
                        keyifli bir deneyim sunmaktır.
                    </p>
                </div>
            `;
        } else if (hash === '#destek') {
            html = `
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-playfair mb-6">Destek</h2>
                    <p class="text-lg mb-8">Size nasıl yardımcı olabiliriz? Görüşleriniz bizim için değerlidir.</p>
                    <div class="bg-white p-8 rounded-lg shadow-md inline-block text-left">
                        <h3 class="text-xl font-bold mb-4">Sıkça Sorulan Sorular</h3>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Wi-Fi hizmetiniz var mı? - Evet, tüm şubelerimizde ücretsiz yüksek hızlı internet mevcuttur.</li>
                            <li>Rezervasyon yapıyor musunuz? - Hafta sonları için rezervasyon öneriyoruz.</li>
                            <li>Vegan seçenekleriniz var mı? - Evet, süt alternatiflerimiz ve vegan atıştırmalıklarımız mevcuttur.</li>
                        </ul>
                    </div>
                </div>
            `;
        } else if (hash === '#iletisim') {
            html = `
                 <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-playfair mb-6">İletişim</h2>
                    <div class="grid md:grid-cols-2 gap-8 text-left">
                        <div class="bg-coffee-dark text-coffee-cream p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-bold mb-4 border-b border-coffee-cream pb-2">Bize Ulaşın</h3>
                            <p class="mb-2"><strong>Tel:</strong> +90 212 555 12 34</p>
                            <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                            <p><strong>Adres:</strong> Kahve Sokak No: 1, İstanbul</p>
                        </div>
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-bold mb-4 text-coffee-dark border-b border-coffee-dark pb-2">Çalışma Saatleri</h3>
                            <p class="mb-2"><strong>Hafta İçi:</strong> 07:00 - 22:00</p>
                            <p class="mb-2"><strong>Cumartesi:</strong> 08:00 - 23:00</p>
                            <p><strong>Pazar:</strong> 09:00 - 21:00</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (hash === '#subeler') {
             html = `
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-playfair mb-8">Şube Konumları</h2>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded shadow hover:shadow-lg transition">
                            <h3 class="text-xl font-bold text-coffee-dark mb-2">Kadıköy</h3>
                            <p class="text-gray-600">Moda Caddesi No:10</p>
                        </div>
                        <div class="bg-white p-6 rounded shadow hover:shadow-lg transition">
                            <h3 class="text-xl font-bold text-coffee-dark mb-2">Beşiktaş</h3>
                            <p class="text-gray-600">Çarşı İçi No:5</p>
                        </div>
                        <div class="bg-white p-6 rounded shadow hover:shadow-lg transition">
                            <h3 class="text-xl font-bold text-coffee-dark mb-2">Karaköy</h3>
                            <p class="text-gray-600">İskele Meydanı No:20</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (hash === '#menu') {
            html = renderMenuHtml();
        } else if (hash === '#fiyatlar') {
            html = renderPricesHtml();
        }

        content.innerHTML = html;
        window.scrollTo(0, 0);
    }

    // Event Listeners
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSidebar();
    });

    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking outside (on content) if needed,
    // but overlay handles this mostly. Adding specific handler for sidebar links.
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });

    // Handle routing
    window.addEventListener('hashchange', renderContent);

    // Initial Render
    renderContent();
});
