document.addEventListener("DOMContentLoaded", () => {
    // === Sidebar UI Logic ===
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

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

    // Close sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // === Data ===
    const menuItems = [
        { name: "Espresso", price: 45 },
        { name: "Cappuccino", price: 55 },
        { name: "Latte", price: 60 },
        { name: "Türk Kahvesi", price: 40 },
        { name: "Çay", price: 25 },
        { name: "Cheesecake", price: 70 },
        { name: "Kruvasan", price: 50 },
        { name: "Sandviç", price: 80 },
        { name: "Soğuk Kahve", price: 65 },
        { name: "Limonata", price: 35 }
    ];

    // === Views ===
    const views = {
        home: () => `
            <div class="fade-in text-center flex flex-col items-center justify-center min-h-[60vh]">
                <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-coffee-dark">Kahve Dükkanı'na Hoş Geldiniz</h1>
                <p class="text-lg md:text-xl text-coffee-medium max-w-2xl mb-10">Taze çekilmiş çekirdekler ve özenle hazırlanan tatlılarımızla gününüze keyif katın.</p>
                <div class="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200" alt="Kahve Görseli" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
                </div>
            </div>
        `,
        hakkinda: () => `
            <div class="fade-in max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h1 class="font-heading text-3xl font-bold mb-6 border-b-2 border-coffee-light pb-2">Hakkında</h1>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini sizin için özenle seçip demliyoruz. Amacımız sadece kahve sunmak değil, aynı zamanda dostlukların pekiştiği sıcak bir atmosfer yaratmaktır.</p>
                <p class="text-lg text-gray-700 leading-relaxed">Modern ve minimalist tasarımımızla, şehrin gürültüsünden uzaklaşıp huzur bulabileceğiniz bir mekan tasarladık. Her bir fincan kahvede ustalığımızı ve tutkumuzu hissedeceksiniz.</p>
            </div>
        `,
        destek: () => `
            <div class="fade-in max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h1 class="font-heading text-3xl font-bold mb-6 border-b-2 border-coffee-light pb-2">Destek</h1>
                <p class="text-lg text-gray-700 mb-6">Müşteri memnuniyeti bizim için en öncelikli konudur. Her türlü soru, görüş ve öneriniz için buradayız.</p>
                <div class="bg-cream p-6 rounded-lg border border-coffee-light">
                    <h3 class="font-bold text-xl mb-2 text-coffee-dark">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Siparişimi nasıl iptal edebilirim?</li>
                        <li>Glutensiz ürün seçenekleriniz var mı?</li>
                        <li>Toplu sipariş veriyor musunuz?</li>
                    </ul>
                    <p class="mt-4 text-sm text-coffee-medium italic">Cevaplar için iletişim sayfasından bize ulaşabilirsiniz.</p>
                </div>
            </div>
        `,
        iletisim: () => `
            <div class="fade-in max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h1 class="font-heading text-3xl font-bold mb-6 border-b-2 border-coffee-light pb-2">İletişim</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-bold text-xl mb-4 text-coffee-dark">Bize Ulaşın</h3>
                        <p class="flex items-center text-gray-700 mb-3"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> info@kahvedukkani.com</p>
                        <p class="flex items-center text-gray-700 mb-3"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +90 555 123 45 67</p>
                        <p class="flex items-start text-gray-700"><svg class="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Kahve Cad. Lezzet Sok. No:1, İstanbul</p>
                    </div>
                    <form class="space-y-4">
                        <input type="text" placeholder="Adınız" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-light">
                        <input type="email" placeholder="E-posta" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-light">
                        <textarea placeholder="Mesajınız" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-light"></textarea>
                        <button type="button" class="w-full bg-coffee-dark text-white font-bold py-2 px-4 rounded hover:bg-coffee-medium transition duration-300">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        subeler: () => `
            <div class="fade-in max-w-4xl mx-auto">
                <h1 class="font-heading text-3xl font-bold mb-8 text-center border-b-2 border-coffee-light pb-2 inline-block">Şube Konumları</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-coffee-dark">
                        <h2 class="font-bold text-xl mb-2 text-coffee-dark">Kadıköy Şubesi</h2>
                        <p class="text-gray-600 mb-2">Moda Caddesi No:45, Kadıköy / İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 08:00 - 23:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-coffee-dark">
                        <h2 class="font-bold text-xl mb-2 text-coffee-dark">Beşiktaş Şubesi</h2>
                        <p class="text-gray-600 mb-2">Barbaros Bulvarı No:12, Beşiktaş / İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 07:30 - 22:30</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-coffee-dark">
                        <h2 class="font-bold text-xl mb-2 text-coffee-dark">Alsancak Şubesi</h2>
                        <p class="text-gray-600 mb-2">Kıbrıs Şehitleri Caddesi No:88, Konak / İzmir</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 08:30 - 00:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-coffee-dark">
                        <h2 class="font-bold text-xl mb-2 text-coffee-dark">Çankaya Şubesi</h2>
                        <p class="text-gray-600 mb-2">Tunalı Hilmi Caddesi No:50, Çankaya / Ankara</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                </div>
            </div>
        `,
        menu: () => {
            const menuHTML = menuItems.map(item => `
                <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span class="font-bold text-lg text-coffee-dark">${item.name}</span>
                    <span class="text-coffee-medium font-semibold">${item.price}₺</span>
                </div>
            `).join('');

            return `
                <div class="fade-in max-w-3xl mx-auto">
                    <h1 class="font-heading text-3xl font-bold mb-8 text-center border-b-2 border-coffee-light pb-2 inline-block">Menü İçerikleri</h1>
                    <p class="text-center text-gray-600 mb-8">En taze malzemelerle hazırlanan lezzetlerimiz.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${menuHTML}
                    </div>
                </div>
            `;
        },
        fiyatlar: () => {
            const priceHTML = menuItems.map(item => `
                <tr class="border-b border-gray-200 hover:bg-cream transition-colors">
                    <td class="py-3 px-4 text-left font-medium text-coffee-dark">${item.name}</td>
                    <td class="py-3 px-4 text-right font-bold text-coffee-medium">${item.price}₺</td>
                </tr>
            `).join('');

            return `
                <div class="fade-in max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
                    <h1 class="font-heading text-3xl font-bold mb-6 text-center border-b-2 border-coffee-light pb-2 inline-block">Fiyat Listesi</h1>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full table-auto">
                            <thead>
                                <tr class="bg-coffee-dark text-white rounded-t-lg">
                                    <th class="py-3 px-4 text-left rounded-tl-lg">Ürün</th>
                                    <th class="py-3 px-4 text-right rounded-tr-lg">Fiyat</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${priceHTML}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }
    };

    // === Router ===
    const appContainer = document.getElementById('app');

    function router() {
        // Get the hash without the '#' or default to 'home'
        let hash = window.location.hash.substring(1) || 'home';

        // If route doesn't exist, fallback to home
        if (!views[hash]) {
            hash = 'home';
        }

        // Render the view
        appContainer.innerHTML = views[hash]();

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
