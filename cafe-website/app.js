document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const appContent = document.getElementById('app-content');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // --- Sidebar Logic ---
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
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // --- Data ---
    const menuItems = [
        { name: 'Espresso', price: '45₺', category: 'Sıcak İçecekler', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80' },
        { name: 'Cappuccino', price: '55₺', category: 'Sıcak İçecekler', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80' },
        { name: 'Latte', price: '60₺', category: 'Sıcak İçecekler', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=400&q=80' },
        { name: 'Türk Kahvesi', price: '40₺', category: 'Sıcak İçecekler', image: 'https://images.unsplash.com/photo-1544062608-8e6f14e212f4?auto=format&fit=crop&w=400&q=80' },
        { name: 'Çay', price: '25₺', category: 'Sıcak İçecekler', image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=400&q=80' },
        { name: 'Soğuk Kahve', price: '65₺', category: 'Soğuk İçecekler', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80' },
        { name: 'Limonata', price: '35₺', category: 'Soğuk İçecekler', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
        { name: 'Cheesecake', price: '70₺', category: 'Tatlılar', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80' },
        { name: 'Kruvasan', price: '50₺', category: 'Atıştırmalıklar', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80' },
        { name: 'Sandviç', price: '80₺', category: 'Atıştırmalıklar', image: 'https://images.unsplash.com/photo-1528735602780-2ea5624b4ce6?auto=format&fit=crop&w=400&q=80' }
    ];

    // --- Views ---
    const views = {
        home: () => `
            <div class="flex-grow flex flex-col items-center justify-center text-center p-6 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative">
                <div class="absolute inset-0 bg-black/60 z-0"></div>
                <div class="relative z-10 bg-cream/90 p-8 rounded-lg shadow-xl max-w-2xl border-2 border-coffee-800">
                    <h2 class="text-4xl md:text-5xl font-heading font-bold text-coffee-800 mb-4">Kahve Dükkanına Hoş Geldiniz!</h2>
                    <p class="text-lg md:text-xl text-coffee-900 mb-6">Taze kavrulmuş kahvelerimiz ve lezzetli atıştırmalıklarımızla size en iyi deneyimi sunmak için buradayız.</p>
                    <a href="#menu-content" class="inline-block bg-coffee-800 text-cream px-8 py-3 rounded-full font-semibold hover:bg-coffee-900 transition shadow-md">Menümüzü Keşfedin</a>
                </div>
            </div>
        `,
        about: () => `
            <div class="container mx-auto px-4 py-12 max-w-4xl">
                <h2 class="text-3xl font-heading font-bold text-coffee-800 mb-6 border-b-2 border-coffee-100 pb-2">Hakkımızda</h2>
                <div class="bg-white p-8 rounded-lg shadow-md border border-coffee-100">
                    <p class="text-lg mb-4 leading-relaxed">Kahve Dükkanı, 2024 yılında en kaliteli kahve çekirdeklerini kahveseverlerle buluşturmak amacıyla kuruldu. Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize sıcak, samimi ve huzurlu bir ortam sunmaktır.</p>
                    <p class="text-lg leading-relaxed">Uzman baristalarımız, her bir fincanı özenle hazırlar. Kahvelerimizin yanında sunduğumuz tatlı ve tuzlu atıştırmalıklarımız da günlük ve taze olarak üretilmektedir.</p>
                </div>
            </div>
        `,
        support: () => `
            <div class="container mx-auto px-4 py-12 max-w-4xl">
                <h2 class="text-3xl font-heading font-bold text-coffee-800 mb-6 border-b-2 border-coffee-100 pb-2">Destek</h2>
                <div class="bg-white p-8 rounded-lg shadow-md border border-coffee-100">
                    <h3 class="text-xl font-semibold mb-4 text-coffee-900">Sıkça Sorulan Sorular</h3>
                    <div class="space-y-4">
                        <div>
                            <h4 class="font-bold text-coffee-800">Siparişimi nasıl iptal edebilirim?</h4>
                            <p class="text-gray-700 mt-1">Siparişinizi verdikten sonraki 5 dakika içerisinde iletişim numaramızdan bize ulaşarak iptal edebilirsiniz.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-coffee-800">Vegan seçenekleriniz var mı?</h4>
                            <p class="text-gray-700 mt-1">Evet, menümüzde bitkisel süt seçenekleri (badem, yulaf, soya) ve vegan atıştırmalıklar bulunmaktadır.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-coffee-800">Wi-Fi hizmetiniz var mı?</h4>
                            <p class="text-gray-700 mt-1">Tüm şubelerimizde misafirlerimiz için ücretsiz ve hızlı Wi-Fi hizmeti sunmaktayız.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        contact: () => `
            <div class="container mx-auto px-4 py-12 max-w-4xl">
                <h2 class="text-3xl font-heading font-bold text-coffee-800 mb-6 border-b-2 border-coffee-100 pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-lg shadow-md border border-coffee-100">
                        <h3 class="text-xl font-semibold mb-4 text-coffee-900">Bize Ulaşın</h3>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <svg class="w-6 h-6 text-coffee-800 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Kahve Caddesi, No: 42<br>Kadıköy, İstanbul</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-coffee-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+90 555 123 45 67</span>
                            </li>
                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-coffee-800 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>iletisim@kahvedukkani.com</span>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-md border border-coffee-100">
                        <form class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-coffee-900 mb-1">Adınız</label>
                                <input type="text" class="w-full border-coffee-100 rounded-md shadow-sm focus:border-coffee-800 focus:ring focus:ring-coffee-800 focus:ring-opacity-50 p-2 border" placeholder="Adınız Soyadınız">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-coffee-900 mb-1">Mesajınız</label>
                                <textarea class="w-full border-coffee-100 rounded-md shadow-sm focus:border-coffee-800 focus:ring focus:ring-coffee-800 focus:ring-opacity-50 p-2 border" rows="4" placeholder="Mesajınızı buraya yazın..."></textarea>
                            </div>
                            <button type="button" class="w-full bg-coffee-800 text-cream py-2 px-4 rounded-md hover:bg-coffee-900 transition">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        `,
        locations: () => `
            <div class="container mx-auto px-4 py-12 max-w-4xl">
                <h2 class="text-3xl font-heading font-bold text-coffee-800 mb-6 border-b-2 border-coffee-100 pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-md border border-coffee-100">
                        <h3 class="text-xl font-bold text-coffee-900 mb-2">Kadıköy Merkez</h3>
                        <p class="text-gray-700 mb-4">Caferağa Mah. Moda Cad. No: 12<br>Kadıköy / İstanbul</p>
                        <p class="text-sm font-medium text-coffee-800">Çalışma Saatleri: 08:00 - 23:00</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-coffee-100">
                        <h3 class="text-xl font-bold text-coffee-900 mb-2">Beşiktaş Şube</h3>
                        <p class="text-gray-700 mb-4">Sinanpaşa Mah. Ihlamurdere Cad. No: 34<br>Beşiktaş / İstanbul</p>
                        <p class="text-sm font-medium text-coffee-800">Çalışma Saatleri: 07:30 - 22:30</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-coffee-100">
                        <h3 class="text-xl font-bold text-coffee-900 mb-2">Karaköy Şube</h3>
                        <p class="text-gray-700 mb-4">Kemankeş Karamustafa Paşa Mah. Mumhane Cad. No: 56<br>Beyoğlu / İstanbul</p>
                        <p class="text-sm font-medium text-coffee-800">Çalışma Saatleri: 09:00 - 24:00</p>
                    </div>
                </div>
            </div>
        `,
        'menu-content': () => `
            <div class="container mx-auto px-4 py-12">
                <h2 class="text-3xl font-heading font-bold text-coffee-800 mb-8 text-center border-b-2 border-coffee-100 pb-2 inline-block mx-auto">Menü İçerikleri</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white rounded-xl overflow-hidden shadow-lg border border-coffee-100 transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
                            <div class="h-48 overflow-hidden bg-coffee-100">
                                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                            </div>
                            <div class="p-5 flex flex-col flex-grow">
                                <div class="flex justify-between items-start mb-2">
                                    <h3 class="text-xl font-bold text-coffee-900">${item.name}</h3>
                                    <span class="text-lg font-bold text-coffee-800 bg-coffee-100 px-3 py-1 rounded-full">${item.price}</span>
                                </div>
                                <p class="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">${item.category}</p>
                                <div class="mt-auto">
                                   <button class="w-full bg-coffee-800 text-cream py-2 rounded hover:bg-coffee-900 transition font-medium">Sipariş Ver</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        prices: () => `
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <h2 class="text-3xl font-heading font-bold text-coffee-800 mb-8 text-center border-b-2 border-coffee-100 pb-2">Fiyat Listesi</h2>
                <div class="bg-white rounded-lg shadow-md border border-coffee-100 overflow-hidden">
                    <ul class="divide-y divide-coffee-100">
                        ${menuItems.map(item => `
                            <li class="p-4 hover:bg-coffee-50 flex justify-between items-center transition">
                                <div>
                                    <span class="font-bold text-lg text-coffee-900 block">${item.name}</span>
                                    <span class="text-sm text-gray-500">${item.category}</span>
                                </div>
                                <span class="text-xl font-bold text-coffee-800">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    // --- Routing ---
    const router = () => {
        let hash = window.location.hash.substring(1); // Remove the '#'

        // Default to home if no hash or invalid hash
        if (!hash || !views[hash]) {
            hash = 'home';
            // Update URL without reloading
            window.history.replaceState(null, null, '#home');
        }

        // Render the view
        appContent.innerHTML = views[hash]();

        // Scroll to top
        window.scrollTo(0, 0);

        // Update active state in sidebar (optional enhancement)
        sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === `#${hash}`) {
                link.classList.add('bg-coffee-100', 'text-coffee-800');
            } else {
                link.classList.remove('bg-coffee-100', 'text-coffee-800');
            }
        });
    };

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});