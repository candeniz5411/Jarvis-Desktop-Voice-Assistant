document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const appDiv = document.getElementById('app');

    // Toggle Sidebar Function
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

    // Event Listeners for Sidebar
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

    // Data
    const menuItems = [
        { name: 'Espresso', price: 45 },
        { name: 'Cappuccino', price: 55 },
        { name: 'Latte', price: 60 },
        { name: 'Türk Kahvesi', price: 40 },
        { name: 'Çay', price: 25 },
        { name: 'Cheesecake', price: 70 },
        { name: 'Kruvasan', price: 50 },
        { name: 'Sandviç', price: 80 },
        { name: 'Soğuk Kahve', price: 65 },
        { name: 'Limonata', price: 35 }
    ];

    // Views
    const views = {
        '/': `
            <div class="text-center">
                <h1 class="text-3xl md:text-4xl font-heading font-bold text-cafe-dark mb-4">Kahve Dükkanına Hoş Geldiniz</h1>
                <p class="text-lg text-gray-600 mb-8 font-body">Gününüzü güzelleştirecek taze kahvelerimiz ve enfes atıştırmalıklarımızla hizmetinizdeyiz.</p>
                <div class="rounded-xl overflow-hidden shadow-md max-w-2xl mx-auto">
                    <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" alt="Kahve ve Çekirdekler" class="w-full h-auto object-cover">
                </div>
            </div>
        `,
        '/hakkinda': `
            <div>
                <h2 class="text-3xl font-heading font-bold text-cafe-dark mb-6 border-b pb-2">Hakkında</h2>
                <p class="text-lg text-gray-700 font-body mb-4 leading-relaxed">
                    Kahve Dükkanı olarak, dünyanın en iyi kahve çekirdeklerini özenle seçiyor ve usta baristalarımızla size sunuyoruz.
                    Amacımız, her yudumda size huzur ve enerji veren eşsiz bir deneyim yaşatmak.
                </p>
                <p class="text-lg text-gray-700 font-body leading-relaxed">
                    Sıcak ve samimi atmosferimizde, dostlarınızla sohbet edebilir, kitabınızı okuyabilir veya çalışabilirsiniz.
                    Kalite ve müşteri memnuniyeti bizim için her zaman ön plandadır.
                </p>
            </div>
        `,
        '/destek': `
            <div>
                <h2 class="text-3xl font-heading font-bold text-cafe-dark mb-6 border-b pb-2">Destek</h2>
                <p class="text-lg text-gray-700 font-body mb-6">
                    Siparişleriniz, ürünlerimiz veya diğer konularda yardıma mı ihtiyacınız var? Sıkça sorulan sorulara göz atabilir veya bizimle iletişime geçebilirsiniz.
                </p>
                <div class="space-y-4">
                    <div class="bg-cafe-cream p-4 rounded-lg">
                        <h3 class="font-bold text-cafe-dark">Online sipariş verebilir miyim?</h3>
                        <p class="text-gray-700 mt-1">Şu an için sadece şubelerimizden hizmet veriyoruz. Yakında paket servisimiz başlayacaktır.</p>
                    </div>
                    <div class="bg-cafe-cream p-4 rounded-lg">
                        <h3 class="font-bold text-cafe-dark">Özel etkinlikler için rezervasyon yapıyor musunuz?</h3>
                        <p class="text-gray-700 mt-1">Evet, özel günleriniz için iletişim bölümünden bize ulaşarak rezervasyon yaptırabilirsiniz.</p>
                    </div>
                </div>
            </div>
        `,
        '/iletisim': `
            <div>
                <h2 class="text-3xl font-heading font-bold text-cafe-dark mb-6 border-b pb-2">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <h3 class="text-xl font-bold text-cafe-dark mb-4">Bize Ulaşın</h3>
                        <ul class="space-y-3 font-body text-gray-700">
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-cafe-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +90 (555) 123 45 67
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-cafe-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                merhaba@kahvedukkani.com
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-cafe-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Kahve Sk. No: 1, Kadıköy, İstanbul
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-cafe-dark mb-4">Çalışma Saatleri</h3>
                        <ul class="space-y-2 font-body text-gray-700">
                            <li class="flex justify-between border-b pb-1"><span>Pazartesi - Cuma:</span> <span>07:30 - 22:00</span></li>
                            <li class="flex justify-between border-b pb-1"><span>Cumartesi:</span> <span>08:00 - 23:00</span></li>
                            <li class="flex justify-between border-b pb-1"><span>Pazar:</span> <span>09:00 - 22:00</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        '/sube-konumlari': `
            <div>
                <h2 class="text-3xl font-heading font-bold text-cafe-dark mb-6 border-b pb-2">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-cafe-cream p-5 rounded-lg border border-cafe-accent shadow-sm">
                        <h3 class="text-xl font-bold text-cafe-dark mb-2">Kadıköy Merkez</h3>
                        <p class="text-gray-700 mb-2 font-body">Caferağa Mah. Moda Cad. No: 42<br>Kadıköy / İstanbul</p>
                        <span class="inline-block bg-cafe-dark text-cafe-cream px-3 py-1 rounded text-sm mt-2">Açık</span>
                    </div>
                    <div class="bg-cafe-cream p-5 rounded-lg border border-cafe-accent shadow-sm">
                        <h3 class="text-xl font-bold text-cafe-dark mb-2">Beşiktaş Şube</h3>
                        <p class="text-gray-700 mb-2 font-body">Sinanpaşa Mah. Şair Nedim Cad. No: 15<br>Beşiktaş / İstanbul</p>
                        <span class="inline-block bg-cafe-dark text-cafe-cream px-3 py-1 rounded text-sm mt-2">Açık</span>
                    </div>
                    <div class="bg-cafe-cream p-5 rounded-lg border border-cafe-accent shadow-sm">
                        <h3 class="text-xl font-bold text-cafe-dark mb-2">Alsancak Şube</h3>
                        <p class="text-gray-700 mb-2 font-body">Kültür Mah. Kıbrıs Şehitleri Cad. No: 120<br>Konak / İzmir</p>
                        <span class="inline-block bg-cafe-dark text-cafe-cream px-3 py-1 rounded text-sm mt-2">Açık</span>
                    </div>
                </div>
            </div>
        `,
        '/menu-icerikleri': `
            <div>
                <h2 class="text-3xl font-heading font-bold text-cafe-dark mb-6 border-b pb-2">Menü İçerikleri</h2>
                <p class="text-gray-600 mb-6 font-body">Özenle hazırladığımız kahve ve tatlı çeşitlerimizi aşağıda bulabilirsiniz.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body">
                    ${menuItems.map(item => `
                        <div class="flex items-center p-3 hover:bg-cafe-cream rounded-lg transition-colors">
                            <div class="w-10 h-10 bg-cafe-light text-cafe-cream rounded-full flex items-center justify-center mr-4 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-lg font-medium text-cafe-dark">${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div>
                <h2 class="text-3xl font-heading font-bold text-cafe-dark mb-6 border-b pb-2">Fiyatlar</h2>
                <div class="bg-cafe-cream rounded-lg overflow-hidden shadow-sm border border-cafe-accent">
                    <ul class="divide-y divide-gray-200">
                        ${menuItems.map(item => `
                            <li class="flex justify-between items-center p-4 hover:bg-white transition-colors">
                                <span class="text-lg font-medium text-cafe-dark font-body">${item.name}</span>
                                <span class="text-xl font-bold text-cafe-light font-heading">${item.price}₺</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    // Router Function
    const router = () => {
        // Get the hash from the URL, default to '/'
        let hash = window.location.hash.slice(1) || '/';

        // Render the view
        if (views[hash]) {
            appDiv.innerHTML = views[hash];
        } else {
            appDiv.innerHTML = `
                <div class="text-center py-10">
                    <h2 class="text-3xl font-bold text-cafe-dark mb-4">Sayfa Bulunamadı</h2>
                    <p class="mb-6">Aradığınız sayfa mevcut değil.</p>
                    <a href="#/" class="bg-cafe-dark text-cafe-cream px-6 py-2 rounded hover:bg-cafe-light transition-colors">Ana Sayfaya Dön</a>
                </div>
            `;
        }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial render
    router();
});
