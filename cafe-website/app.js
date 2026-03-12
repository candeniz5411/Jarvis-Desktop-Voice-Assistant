document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = sidebar.querySelectorAll('a');

    // Toggle Sidebar Function
    const toggleSidebar = () => {
        const isOpen = !sidebar.classList.contains('-translate-x-full');

        if (isOpen) {
            sidebar.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
        } else {
            sidebar.classList.remove('-translate-x-full');
            sidebarOverlay.classList.remove('hidden');
        }
    };

    // Event Listeners for Sidebar
    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked (useful for mobile)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Menu Data
    const menuData = [
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

    // Routing System
    const routes = {
        '/': `
            <div class="text-center space-y-8">
                <h2 class="heading text-4xl md:text-5xl font-bold mb-4">Kahve Dükkanı'na Hoş Geldiniz</h2>
                <p class="text-xl text-gray-700 max-w-2xl mx-auto">En taze çekirdeklerle hazırladığımız eşsiz kahve deneyimini keşfedin.</p>

                <div class="mt-8 rounded-xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200&h=600" alt="Taze Kahve Çekirdekleri ve Kahve" class="w-full h-auto object-cover max-h-[500px]">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div class="bg-white p-6 rounded-lg shadow-md border border-brand-accent/30">
                        <h3 class="heading text-xl font-bold mb-2">Taze Çekirdekler</h3>
                        <p class="text-gray-600">Dünyanın dört bir yanından özenle seçilmiş premium kahve çekirdekleri.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-brand-accent/30">
                        <h3 class="heading text-xl font-bold mb-2">Usta Baristalar</h3>
                        <p class="text-gray-600">Sanatını tutkuyla icra eden deneyimli baristalarımızın elinden.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md border border-brand-accent/30">
                        <h3 class="heading text-xl font-bold mb-2">Sıcak Ortam</h3>
                        <p class="text-gray-600">Kahvenizi yudumlarken kitabınızı okuyabileceğiniz huzurlu bir atmosfer.</p>
                    </div>
                </div>
            </div>
        `,
        '/hakkinda': `
            <div class="bg-white rounded-xl shadow-lg p-8 border border-brand-accent/30">
                <h2 class="heading text-3xl font-bold mb-6 border-b border-brand-accent pb-4">Hakkımızda</h2>
                <div class="space-y-4 text-gray-700 leading-relaxed">
                    <p>Kahve Dükkanı, 2010 yılında kahve tutkusunu herkesle paylaşmak amacıyla küçük bir sokak arasında kuruldu. Amacımız sadece bir içecek sunmak değil, aynı zamanda misafirlerimize sıcak, samimi ve huzurlu bir ortam sağlamaktır.</p>
                    <p>Her fincanda kaliteyi hissetmeniz için dünyanın en iyi kahve tarlalarından özenle seçtiğimiz çekirdekleri kullanıyoruz. Kavurma işleminden sunuma kadar her aşamada titizlikle çalışıyoruz.</p>
                    <p>Bizim için kahve bir içecekten öte, bir kültür, bir yaşam tarzı ve insanları bir araya getiren güçlü bir bağdır. Sizleri de bu ailenin bir parçası olmaya davet ediyoruz.</p>
                </div>
            </div>
        `,
        '/destek': `
            <div class="bg-white rounded-xl shadow-lg p-8 border border-brand-accent/30">
                <h2 class="heading text-3xl font-bold mb-6 border-b border-brand-accent pb-4">Destek Merkezi</h2>
                <p class="mb-6 text-gray-700">Size nasıl yardımcı olabiliriz? Sıkça sorulan sorulara göz atın veya bizimle iletişime geçin.</p>

                <div class="space-y-4">
                    <details class="bg-brand-light p-4 rounded-lg cursor-pointer">
                        <summary class="font-bold text-brand-dark">Siparişimi nasıl iptal edebilirim?</summary>
                        <p class="mt-2 text-gray-600">Siparişinizi verdikten sonraki 5 dakika içinde müşteri hizmetlerimizi arayarak iptal işlemi gerçekleştirebilirsiniz.</p>
                    </details>
                    <details class="bg-brand-light p-4 rounded-lg cursor-pointer">
                        <summary class="font-bold text-brand-dark">Vegan süt seçenekleriniz var mı?</summary>
                        <p class="mt-2 text-gray-600">Evet, badem sütü, yulaf sütü ve soya sütü seçeneklerimiz tüm şubelerimizde mevcuttur.</p>
                    </details>
                    <details class="bg-brand-light p-4 rounded-lg cursor-pointer">
                        <summary class="font-bold text-brand-dark">Sadakat programınız var mı?</summary>
                        <p class="mt-2 text-gray-600">Kahve Kulübü uygulamamızı indirerek her alışverişinizde puan kazanabilir ve bedava kahve fırsatlarından yararlanabilirsiniz.</p>
                    </details>
                </div>
            </div>
        `,
        '/iletisim': `
            <div class="bg-white rounded-xl shadow-lg p-8 border border-brand-accent/30">
                <h2 class="heading text-3xl font-bold mb-6 border-b border-brand-accent pb-4">İletişim</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-bold text-xl mb-4 text-brand-dark">Bize Ulaşın</h3>
                        <ul class="space-y-4 text-gray-700">
                            <li class="flex items-start gap-3">
                                <svg class="w-6 h-6 text-brand-dark mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Kahve Caddesi No: 42<br>Kadıköy, İstanbul</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+90 (216) 555 01 23</span>
                            </li>
                            <li class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>merhaba@kahvedukkani.com</span>
                            </li>
                        </ul>
                    </div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi. Teşekkür ederiz!');">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Adınız</label>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded focus:ring-brand-dark focus:border-brand-dark" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                            <input type="email" class="w-full p-2 border border-gray-300 rounded focus:ring-brand-dark focus:border-brand-dark" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                            <textarea rows="4" class="w-full p-2 border border-gray-300 rounded focus:ring-brand-dark focus:border-brand-dark" required></textarea>
                        </div>
                        <button type="submit" class="w-full bg-brand-dark text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        `,
        '/subeler': `
            <div class="bg-white rounded-xl shadow-lg p-8 border border-brand-accent/30">
                <h2 class="heading text-3xl font-bold mb-6 border-b border-brand-accent pb-4">Şube Konumları</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-brand-accent/50 rounded-lg p-6 hover:shadow-md transition-shadow bg-brand-light">
                        <h3 class="font-bold text-xl text-brand-dark mb-2">Kadıköy Merkez (Moda)</h3>
                        <p class="text-gray-600 mb-2">Moda Caddesi No: 123, Kadıköy / İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 07:00 - 23:00</p>
                    </div>
                    <div class="border border-brand-accent/50 rounded-lg p-6 hover:shadow-md transition-shadow bg-brand-light">
                        <h3 class="font-bold text-xl text-brand-dark mb-2">Beşiktaş Şube</h3>
                        <p class="text-gray-600 mb-2">Barbaros Bulvarı No: 45, Beşiktaş / İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 07:30 - 22:30</p>
                    </div>
                    <div class="border border-brand-accent/50 rounded-lg p-6 hover:shadow-md transition-shadow bg-brand-light">
                        <h3 class="font-bold text-xl text-brand-dark mb-2">Karaköy Şube</h3>
                        <p class="text-gray-600 mb-2">Kemankeş Caddesi No: 67, Beyoğlu / İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 08:00 - 00:00</p>
                    </div>
                    <div class="border border-brand-accent/50 rounded-lg p-6 hover:shadow-md transition-shadow bg-brand-light">
                        <h3 class="font-bold text-xl text-brand-dark mb-2">Nişantaşı Şube</h3>
                        <p class="text-gray-600 mb-2">Teşvikiye Caddesi No: 89, Şişli / İstanbul</p>
                        <p class="text-sm text-gray-500">Çalışma Saatleri: 08:00 - 22:00</p>
                    </div>
                </div>
            </div>
        `,
        '/menu': `
            <div class="bg-white rounded-xl shadow-lg p-8 border border-brand-accent/30">
                <h2 class="heading text-3xl font-bold mb-6 border-b border-brand-accent pb-4">Menü İçerikleri</h2>
                <p class="mb-8 text-gray-700 text-center max-w-2xl mx-auto">En kaliteli malzemelerle hazırladığımız nefis yiyecek ve içeceklerimiz.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${menuData.map(item => `
                        <div class="flex items-center p-4 border border-brand-accent/50 rounded-lg bg-brand-light hover:bg-brand-cream transition-colors">
                            <div class="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-cream mr-4 flex-shrink-0">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg text-brand-dark">${item.name}</h3>
                                <p class="text-sm text-gray-500">Taze ve lezzetli.</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        '/fiyatlar': `
            <div class="bg-white rounded-xl shadow-lg p-8 border border-brand-accent/30">
                <h2 class="heading text-3xl font-bold mb-6 border-b border-brand-accent pb-4 text-center">Fiyat Listesi</h2>

                <div class="max-w-2xl mx-auto">
                    <ul class="divide-y divide-brand-accent/50">
                        ${menuData.map(item => `
                            <li class="py-4 flex justify-between items-center hover:bg-brand-light px-4 rounded transition-colors">
                                <span class="font-bold text-lg text-gray-800">${item.name}</span>
                                <span class="text-[#3E2723] font-bold text-xl">${item.price}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `
    };

    // Router Function
    const router = () => {
        const appDiv = document.getElementById('app');
        // Get the hash part of the URL, default to '/' if empty
        let path = window.location.hash.slice(1) || '/';

        // Render content based on route, default to 404 if not found
        if (routes[path]) {
            appDiv.innerHTML = routes[path];
        } else {
            appDiv.innerHTML = `
                <div class="text-center py-20">
                    <h2 class="text-4xl font-bold text-brand-dark mb-4">404</h2>
                    <p class="text-xl text-gray-600">Sayfa bulunamadı.</p>
                    <a href="#/" class="inline-block mt-6 px-6 py-2 bg-brand-dark text-white rounded hover:bg-opacity-90">Ana Sayfaya Dön</a>
                </div>
            `;
        }

        // Re-trigger animation
        appDiv.classList.remove('animate-fade-in');
        void appDiv.offsetWidth; // trigger reflow
        appDiv.classList.add('animate-fade-in');

        // Update active link in sidebar
        sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + path || (path === '/' && link.getAttribute('href') === '#/')) {
                link.classList.add('bg-brand-accent', 'text-brand-dark');
            } else {
                link.classList.remove('bg-brand-accent', 'text-brand-dark');
            }
        });
    };

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});
