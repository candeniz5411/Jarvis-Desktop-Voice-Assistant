document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');

    // Toggle sidebar
    const toggleSidebar = () => {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    const navLinks = document.querySelectorAll('#sidebar a');
    navLinks.forEach(link => {
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

    // Page Content Generators
    const pages = {
        home: () => `
            <div class="text-center max-w-4xl mx-auto flex flex-col items-center">
                <h1 class="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Kafemize Hoş Geldiniz</h1>
                <p class="text-lg text-brown-600 mb-8 max-w-2xl">Özenle seçilmiş kahve çekirdeklerimiz ve taptaze lezzetlerimizle size huzur dolu bir mola sunuyoruz.</p>
                <div class="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl">
                    <img src="./Images/coffee.jpg" alt="Kahve ve Atmosfer" class="w-full h-auto object-cover">
                </div>
            </div>
        `,
        hakkinda: () => `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Hakkımızda</h2>
                <p class="text-brown-800 leading-relaxed mb-4 text-lg">
                    Şehrin gürültüsünden uzak, sıcak ve samimi bir ortamda en kaliteli kahveyi sunmak için yola çıktık. Yılların deneyimi ve kahveye olan tutkumuzla, her fincanda size eşsiz bir deneyim yaşatmayı hedefliyoruz.
                </p>
                <p class="text-brown-800 leading-relaxed text-lg">
                    Sadece kahve değil, aynı zamanda günlük olarak hazırlanan taze tatlılarımız ve atıştırmalıklarımızla da keyifli anlarınıza eşlik ediyoruz. Sizleri de bu lezzet yolculuğuna davet ediyoruz.
                </p>
            </div>
        `,
        destek: () => `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Destek</h2>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-brown-100">
                    <h3 class="text-xl font-semibold mb-4 text-brown-800">Size Nasıl Yardımcı Olabiliriz?</h3>
                    <p class="text-brown-700 mb-4">Siparişleriniz, özel istekleriniz veya her türlü sorunuz için destek ekibimizle iletişime geçebilirsiniz.</p>
                    <ul class="list-disc list-inside text-brown-700 space-y-2">
                        <li>Sıkça Sorulan Sorular (SSS)</li>
                        <li>Sipariş Takibi</li>
                        <li>Geri Bildirim Formu</li>
                    </ul>
                </div>
            </div>
        `,
        iletisim: () => `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">İletişim</h2>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-brown-100 flex flex-col md:flex-row gap-8">
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-4 text-brown-800">Bize Ulaşın</h3>
                        <div class="space-y-4 text-brown-700">
                            <p><strong>Adres:</strong> Kahve Sokak, No: 42, Lezzet Mahallesi, İstanbul</p>
                            <p><strong>Telefon:</strong> +90 (555) 123 45 67</p>
                            <p><strong>E-posta:</strong> info@kafemiz.com</p>
                            <p><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        subeler: () => `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-brown-100">
                        <h3 class="text-xl font-semibold mb-2 text-brown-800">Merkez Şube</h3>
                        <p class="text-brown-600 mb-2">Kadıköy / İstanbul</p>
                        <p class="text-sm text-brown-500">Moda Caddesi üzerinde, deniz manzaralı huzurlu bir köşe.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-brown-100">
                        <h3 class="text-xl font-semibold mb-2 text-brown-800">Şehir Şubesi</h3>
                        <p class="text-brown-600 mb-2">Beşiktaş / İstanbul</p>
                        <p class="text-sm text-brown-500">Şehrin kalbinde, hareketli ve enerjik bir atmosfer.</p>
                    </div>
                </div>
            </div>
        `,
        menu: () => `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Menü İçerikleri</h2>
                <p class="text-brown-700 mb-6 text-lg">Özenle seçilmiş kahvelerimiz ve günlük olarak hazırlanan taze yiyeceklerimiz:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${menuItems.map(item => `
                        <div class="bg-white p-4 rounded-lg shadow-sm border border-brown-100 flex items-center justify-between hover:bg-brown-50 transition-colors">
                            <span class="font-semibold text-brown-800 text-lg">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        fiyatlar: () => `
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold mb-6 text-brown-900 border-b-2 border-brown-200 pb-2">Fiyatlar</h2>
                <div class="bg-white rounded-lg shadow-sm border border-brown-100 overflow-hidden">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-brown-100">
                                <th class="p-4 font-semibold text-brown-900 border-b border-brown-200">Ürün</th>
                                <th class="p-4 font-semibold text-brown-900 border-b border-brown-200 text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${menuItems.map((item, index) => `
                                <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-brown-50'} border-b border-brown-100 last:border-0 hover:bg-brown-100 transition-colors">
                                    <td class="p-4 text-brown-800 font-medium">${item.name}</td>
                                    <td class="p-4 text-brown-900 font-bold text-right">${item.price}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    };

    // Router
    const router = () => {
        let hash = window.location.hash.substring(1) || 'home';

        // Handle invalid routes
        if (!pages[hash]) {
            hash = 'home';
        }

        // Render content
        content.innerHTML = pages[hash]();

        // Scroll to top
        window.scrollTo(0, 0);
    };

    // Initialize router and listen for changes
    window.addEventListener('hashchange', router);
    router(); // Load initial page
});