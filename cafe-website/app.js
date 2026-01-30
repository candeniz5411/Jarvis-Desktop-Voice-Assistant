document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const sidebar = document.getElementById('sidebar');
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const closeBtn = document.getElementById('close-menu');
    const overlay = document.getElementById('overlay');
    const app = document.getElementById('app');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Menu Data
    const menuItems = [
        { name: 'Espresso', price: 45, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=400&auto=format&fit=crop' },
        { name: 'Cappuccino', price: 55, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&auto=format&fit=crop' },
        { name: 'Latte', price: 60, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=400&auto=format&fit=crop' },
        { name: 'Türk Kahvesi', price: 40, image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=400&auto=format&fit=crop' },
        { name: 'Çay', price: 25, image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=400&auto=format&fit=crop' },
        { name: 'Cheesecake', price: 70, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop' },
        { name: 'Kruvasan', price: 50, image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=400&auto=format&fit=crop' },
        { name: 'Sandviç', price: 80, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400&auto=format&fit=crop' },
        { name: 'Soğuk Kahve', price: 65, image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c73562?q=80&w=400&auto=format&fit=crop' },
        { name: 'Limonata', price: 35, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop' }
    ];

    // Navigation Logic
    function openMenu() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        // Trigger reflow/wait for frame to ensure transition happens
        requestAnimationFrame(() => {
            overlay.classList.remove('opacity-0');
            overlay.classList.add('opacity-100');
        });
    }

    function closeMenu() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            if(sidebar.classList.contains('-translate-x-full')) {
                overlay.classList.add('hidden');
            }
        }, 300); // Match transition duration
    }

    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
             if(window.innerWidth < 1024) {
                 closeMenu();
             }
        });
    });

    // Content Generation Functions
    const pages = {
        home: () => `
            <div class="h-full flex flex-col items-center justify-center text-center fade-in pb-20">
                <div class="mb-8 p-4 bg-white rounded-full shadow-lg">
                     <i class="fas fa-mug-hot text-6xl text-[#4E342E]"></i>
                </div>
                <h1 class="text-4xl md:text-6xl font-bold text-[#4E342E] mb-4">Kafe Keyfi</h1>
                <p class="text-xl text-gray-600 mb-8 italic">"Bir fincan kahve, bin yıllık hatır."</p>
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop"
                     alt="Cafe Ambience"
                     class="w-full max-w-2xl rounded-lg shadow-xl object-cover h-64 md:h-96">
                <a href="#menu" class="mt-8 px-8 py-3 bg-[#4E342E] text-white rounded-full font-semibold shadow-md hover:bg-[#3E2723] transition transform hover:scale-105">
                    Menüyü İncele
                </a>
            </div>
        `,
        about: () => `
            <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 fade-in">
                <h1 class="text-3xl font-bold text-[#4E342E] mb-6 border-b pb-2">Hakkımızda</h1>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">
                    Kafe Keyfi, şehrin gürültüsünden uzaklaşıp huzur bulabileceğiniz, sıcak atmosferi ve lezzetli kahveleriyle tanınan bir buluşma noktasıdır.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Yılların verdiği deneyimle, en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlere en iyi deneyimi sunmak için çalışıyoruz.
                </p>
            </div>
        `,
        support: () => `
             <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 fade-in">
                <h1 class="text-3xl font-bold text-[#4E342E] mb-6 border-b pb-2">Destek</h1>
                <p class="text-lg text-gray-700 mb-4">
                    Size nasıl yardımcı olabiliriz?
                </p>
                <div class="bg-[#FFF3E0] p-4 rounded-lg">
                    <h3 class="font-bold mb-2 text-[#4E342E]">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li>Rezervasyon gerekli mi? - Hayır, dilediğiniz zaman gelebilirsiniz.</li>
                        <li>Paket servisiniz var mı? - Evet, tüm ürünlerimizde paket servis mevcuttur.</li>
                        <li>İnternet bağlantısı var mı? - Evet, müşterilerimiz için ücretsiz Wi-Fi hizmetimiz vardır.</li>
                    </ul>
                </div>
            </div>
        `,
        contact: () => `
             <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 fade-in">
                <h1 class="text-3xl font-bold text-[#4E342E] mb-6 border-b pb-2">İletişim</h1>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-semibold mb-4 text-[#4E342E]">Bize Ulaşın</h3>
                        <p class="mb-2 text-gray-700"><i class="fas fa-phone mr-2 text-[#4E342E]"></i> +90 212 123 45 67</p>
                        <p class="mb-2 text-gray-700"><i class="fas fa-envelope mr-2 text-[#4E342E]"></i> info@kafekeyfi.com</p>
                        <p class="mb-2 text-gray-700"><i class="fas fa-map-marker-alt mr-2 text-[#4E342E]"></i> Bağdat Caddesi No: 123, Kadıköy, İstanbul</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-4 text-[#4E342E]">Çalışma Saatleri</h3>
                        <p class="mb-2 text-gray-700">Hafta İçi: 08:00 - 22:00</p>
                        <p class="mb-2 text-gray-700">Hafta Sonu: 09:00 - 23:00</p>
                    </div>
                </div>
            </div>
        `,
        locations: () => `
             <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 fade-in">
                <h1 class="text-3xl font-bold text-[#4E342E] mb-6 border-b pb-2">Şube Konumları</h1>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="border border-[#EFEBE9] p-4 rounded hover:shadow-lg transition bg-white">
                        <h3 class="font-bold text-xl mb-2 text-[#4E342E]">Kadıköy Merkez</h3>
                        <p class="text-gray-700">Bağdat Caddesi No: 123</p>
                        <p class="text-sm text-gray-500 mt-2">Ana Şube</p>
                    </div>
                    <div class="border border-[#EFEBE9] p-4 rounded hover:shadow-lg transition bg-white">
                        <h3 class="font-bold text-xl mb-2 text-[#4E342E]">Beşiktaş Şube</h3>
                        <p class="text-gray-700">Çarşı İçi Sokak No: 45</p>
                        <p class="text-sm text-gray-500 mt-2">Deniz Manzaralı Teras</p>
                    </div>
                    <div class="border border-[#EFEBE9] p-4 rounded hover:shadow-lg transition bg-white">
                        <h3 class="font-bold text-xl mb-2 text-[#4E342E]">Karaköy Şube</h3>
                        <p class="text-gray-700">Kemankeş Caddesi No: 12</p>
                        <p class="text-sm text-gray-500 mt-2">Tarihi Atmosfer</p>
                    </div>
                </div>
            </div>
        `,
        menu: () => `
             <div class="max-w-6xl mx-auto p-4 mt-10 fade-in">
                <h1 class="text-4xl font-bold text-[#4E342E] mb-8 text-center">Menü İçerikleri</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${menuItems.map(item => `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 group">
                            <div class="overflow-hidden h-48">
                                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                            </div>
                            <div class="p-4">
                                <div class="flex justify-between items-center mb-2">
                                    <h3 class="text-xl font-bold text-[#4E342E]">${item.name}</h3>
                                    <span class="text-lg font-bold text-[#4E342E] bg-[#FFF3E0] px-3 py-1 rounded-full border border-[#4E342E]/20">${item.price}₺</span>
                                </div>
                                <p class="text-gray-600 text-sm">Özenle hazırlanmış lezzet.</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        prices: () => `
             <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 fade-in">
                <h1 class="text-3xl font-bold text-[#4E342E] mb-6 border-b pb-2 text-center">Fiyat Listesi</h1>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead class="bg-[#4E342E] text-white">
                            <tr>
                                <th class="p-4 rounded-tl-lg">Ürün</th>
                                <th class="p-4 rounded-tr-lg text-right">Fiyat</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 border border-gray-200">
                             ${menuItems.map(item => `
                                <tr class="hover:bg-[#FFF3E0]/50 transition">
                                    <td class="p-4 font-medium text-gray-700">${item.name}</td>
                                    <td class="p-4 text-right font-bold text-[#4E342E]">${item.price}₺</td>
                                </tr>
                             `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `
    };

    // Router Logic
    function router() {
        let hash = window.location.hash.slice(1);
        if (!hash) hash = 'home';

        // Handle undefined routes
        const renderFn = pages[hash] || pages['home'];

        // Update active state in sidebar
        menuLinks.forEach(link => {
            const href = link.getAttribute('href').slice(1);
            if(href === hash) {
                link.classList.add('bg-[#3E2723]', 'text-white');
            } else {
                link.classList.remove('bg-[#3E2723]', 'text-white');
            }
        });

        app.innerHTML = renderFn();
        app.scrollTop = 0;
    }

    // Initialize
    window.addEventListener('hashchange', router);
    router(); // Initial load
});
