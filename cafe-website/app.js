document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------
    // Sidebar Navigation Logic
    // -----------------------------------------
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // -----------------------------------------
    // Content Data
    // -----------------------------------------
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

    // -----------------------------------------
    // Routing Logic
    // -----------------------------------------
    const appContent = document.getElementById('app-content');

    const routes = {
        '#/': renderHome,
        '#/hakkinda': renderAbout,
        '#/destek': renderSupport,
        '#/iletisim': renderContact,
        '#/subeler': renderLocations,
        '#/menu': renderMenu,
        '#/fiyatlar': renderPrices
    };

    function handleRoute() {
        let hash = window.location.hash || '#/';

        // Remove animation class before re-adding it for re-trigger
        appContent.classList.remove('fade-in');

        // Ensure DOM updates slightly before adding class back to trigger animation
        setTimeout(() => {
            if (routes[hash]) {
                appContent.innerHTML = routes[hash]();
            } else {
                appContent.innerHTML = render404();
            }
            appContent.classList.add('fade-in');
        }, 10);
    }

    window.addEventListener('hashchange', handleRoute);

    // Initial load
    handleRoute();

    // -----------------------------------------
    // Render Functions
    // -----------------------------------------

    function renderHome() {
        return `
            <div class="flex flex-col items-center justify-center text-center space-y-8 py-12">
                <h1 class="text-4xl md:text-6xl font-heading font-bold text-coffee-brown">Hoş Geldiniz!</h1>
                <p class="text-xl md:text-2xl text-gray-600 max-w-2xl font-body">
                    Kahve Dükkanı'nda en taze çekirdeklerle hazırlanan leziz kahvelerin ve atıştırmalıkların tadını çıkarın.
                </p>

                <div class="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl mt-8">
                    <!-- Using a realistic coffee shop placeholder image from Unsplash Source -->
                    <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                         alt="Kahve Dükkanı İç Mekan"
                         class="w-full h-auto object-cover max-h-[500px]">
                </div>

                <div class="mt-8 flex gap-4">
                    <a href="#/menu" class="bg-coffee-brown text-coffee-cream px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors shadow-md">Menüyü İncele</a>
                </div>
            </div>
        `;
    }

    function renderAbout() {
        return `
            <div class="max-w-3xl mx-auto py-8">
                <h2 class="text-3xl font-heading font-bold text-coffee-brown mb-6 border-b-2 border-coffee-brown pb-2">Hakkında</h2>
                <div class="bg-white p-8 rounded-lg shadow-md space-y-4 text-lg">
                    <p>Kahve Dükkanı, 2010 yılından beri kahve tutkunlarına en kaliteli hizmeti sunmak için çalışmaktadır.</p>
                    <p>Dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini kendi kavurma tesisimizde işliyor, usta baristalarımızın ellerinden sizlere ulaştırıyoruz.</p>
                    <p>Amacımız sadece bir kahve satmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği sıcak bir ortam sunmaktır.</p>
                </div>
            </div>
        `;
    }

    function renderSupport() {
        return `
            <div class="max-w-3xl mx-auto py-8">
                <h2 class="text-3xl font-heading font-bold text-coffee-brown mb-6 border-b-2 border-coffee-brown pb-2">Destek</h2>
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Nasıl yardımcı olabiliriz?</h3>
                    <p class="mb-6 text-gray-600">Sıkça sorulan sorulara göz atabilir veya destek ekibimizle iletişime geçebilirsiniz.</p>

                    <div class="space-y-4">
                        <details class="bg-gray-50 p-4 rounded border">
                            <summary class="font-bold cursor-pointer text-coffee-brown">Siparişimi nasıl iptal edebilirim?</summary>
                            <p class="mt-2 text-gray-600">Siparişiniz hazırlanmaya başlamadıysa uygulama üzerinden iptal edebilirsiniz. Aksi takdirde mağaza ile iletişime geçiniz.</p>
                        </details>
                        <details class="bg-gray-50 p-4 rounded border">
                            <summary class="font-bold cursor-pointer text-coffee-brown">Alerjen bilgisi alabilir miyim?</summary>
                            <p class="mt-2 text-gray-600">Menümüzde yer alan tüm ürünlerin alerjen bilgileri mağazalarımızda mevcuttur. Lütfen baristalarımıza danışın.</p>
                        </details>
                        <details class="bg-gray-50 p-4 rounded border">
                            <summary class="font-bold cursor-pointer text-coffee-brown">Vegan seçenekleriniz var mı?</summary>
                            <p class="mt-2 text-gray-600">Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve vegan atıştırmalıklarımız mevcuttur.</p>
                        </details>
                    </div>
                </div>
            </div>
        `;
    }

    function renderContact() {
        return `
            <div class="max-w-3xl mx-auto py-8">
                <h2 class="text-3xl font-heading font-bold text-coffee-brown mb-6 border-b-2 border-coffee-brown pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                        <ul class="space-y-4 text-gray-700">
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-coffee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                +90 (555) 123 45 67
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-5 h-5 text-coffee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                info@kahvedukkani.com
                            </li>
                            <li class="flex items-start gap-3">
                                <svg class="w-5 h-5 text-coffee-brown mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Kahve Sokak, No: 1<br>Kadıköy, İstanbul</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                            <div>
                                <label class="block text-sm font-bold mb-1">Adınız</label>
                                <input type="text" class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-coffee-brown" required>
                            </div>
                            <div>
                                <label class="block text-sm font-bold mb-1">E-posta</label>
                                <input type="email" class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-coffee-brown" required>
                            </div>
                            <div>
                                <label class="block text-sm font-bold mb-1">Mesajınız</label>
                                <textarea rows="4" class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-coffee-brown" required></textarea>
                            </div>
                            <button type="submit" class="bg-coffee-brown text-coffee-cream px-4 py-2 rounded font-bold w-full hover:bg-opacity-90">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    function renderLocations() {
        return `
            <div class="max-w-4xl mx-auto py-8">
                <h2 class="text-3xl font-heading font-bold text-coffee-brown mb-6 border-b-2 border-coffee-brown pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-brown">
                        <h3 class="text-xl font-bold font-heading mb-2">Kadıköy Merkez</h3>
                        <p class="text-gray-600 mb-2">Caferağa Mah. Moda Cad. No:123<br>Kadıköy / İstanbul</p>
                        <p class="text-sm font-bold text-green-600">Açık: 08:00 - 23:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-brown">
                        <h3 class="text-xl font-bold font-heading mb-2">Beşiktaş Çarşı</h3>
                        <p class="text-gray-600 mb-2">Sinanpaşa Mah. Şair Leyla Sok. No:45<br>Beşiktaş / İstanbul</p>
                        <p class="text-sm font-bold text-green-600">Açık: 07:30 - 22:30</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-brown">
                        <h3 class="text-xl font-bold font-heading mb-2">Alsancak Sahil</h3>
                        <p class="text-gray-600 mb-2">Kültür Mah. Kordonboyu Cad. No:88<br>Konak / İzmir</p>
                        <p class="text-sm font-bold text-green-600">Açık: 08:00 - 00:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-brown">
                        <h3 class="text-xl font-bold font-heading mb-2">Tunalı Hilmi</h3>
                        <p class="text-gray-600 mb-2">Kavaklıdere Mah. Tunalı Hilmi Cad. No:56<br>Çankaya / Ankara</p>
                        <p class="text-sm font-bold text-green-600">Açık: 08:00 - 22:00</p>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMenu() {
        // Group items for aesthetic display
        const coffees = menuItems.filter(i => i.name.includes("Kahve") || i.name === "Espresso" || i.name === "Cappuccino" || i.name === "Latte");
        const others = menuItems.filter(i => !coffees.includes(i));

        let coffeeHtml = coffees.map(item => `
            <div class="flex justify-between items-center border-b border-gray-200 py-3">
                <span class="text-lg font-bold">${item.name}</span>
                <span class="text-xl text-coffee-brown font-heading font-bold">${item.price}₺</span>
            </div>
        `).join('');

        let otherHtml = others.map(item => `
            <div class="flex justify-between items-center border-b border-gray-200 py-3">
                <span class="text-lg font-bold">${item.name}</span>
                <span class="text-xl text-coffee-brown font-heading font-bold">${item.price}₺</span>
            </div>
        `).join('');

        return `
            <div class="max-w-4xl mx-auto py-8">
                <h2 class="text-3xl font-heading font-bold text-coffee-brown mb-8 text-center">Menü İçerikleri</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <h3 class="text-2xl font-heading font-bold text-coffee-brown mb-6 border-b pb-2 flex items-center gap-2"><span>☕</span> Kahveler</h3>
                        <div class="space-y-2">
                            ${coffeeHtml}
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-lg shadow-md">
                        <h3 class="text-2xl font-heading font-bold text-coffee-brown mb-6 border-b pb-2 flex items-center gap-2"><span>🥐</span> Diğer Lezzetler</h3>
                        <div class="space-y-2">
                            ${otherHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderPrices() {
        // Sort by price
        const sortedItems = [...menuItems].sort((a, b) => b.price - a.price);

        let tableRows = sortedItems.map((item, index) => `
            <tr class="${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-coffee-cream hover:bg-opacity-50 transition-colors">
                <td class="py-3 px-6 border-b border-gray-200 font-bold">${item.name}</td>
                <td class="py-3 px-6 border-b border-gray-200 text-right font-heading font-bold text-lg text-coffee-brown">${item.price}₺</td>
            </tr>
        `).join('');

        return `
            <div class="max-w-3xl mx-auto py-8">
                <h2 class="text-3xl font-heading font-bold text-coffee-brown mb-6 border-b-2 border-coffee-brown pb-2">Fiyat Listesi</h2>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-coffee-brown text-coffee-cream">
                                <th class="py-4 px-6 font-bold text-lg">Ürün</th>
                                <th class="py-4 px-6 font-bold text-lg text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    function render404() {
        return `
            <div class="flex flex-col items-center justify-center text-center space-y-4 py-16">
                <h2 class="text-5xl font-heading font-bold text-coffee-brown">404</h2>
                <p class="text-xl text-gray-600">Aradığınız sayfa bulunamadı.</p>
                <a href="#/" class="mt-4 bg-coffee-brown text-coffee-cream px-6 py-2 rounded hover:bg-opacity-90 transition-colors">Ana Sayfaya Dön</a>
            </div>
        `;
    }
});
