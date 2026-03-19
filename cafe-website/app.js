// app.js

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const appContent = document.getElementById('app-content');
    const navLinks = sidebar.querySelectorAll('a');

    // Sidebar Toggle Logic
    const toggleSidebar = () => {
        const isClosed = sidebar.classList.contains('-translate-x-full');
        if (isClosed) {
            // Open sidebar
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.remove('opacity-0'), 10); // Trigger transition
            document.body.style.overflow = 'hidden'; // Prevent scrolling on main body
        } else {
            // Close sidebar
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300); // Wait for transition
            document.body.style.overflow = ''; // Restore scrolling
        }
    };

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked (useful on mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleSidebar();
            }
        });
    });

    // Menu Data
    const menuItems = [
        { name: 'Espresso', price: 45, category: 'Sıcak İçecekler', desc: 'Yoğun aromalı, saf kahve deneyimi.' },
        { name: 'Cappuccino', price: 55, category: 'Sıcak İçecekler', desc: 'Espresso üzerine yoğun süt köpüğü.' },
        { name: 'Latte', price: 60, category: 'Sıcak İçecekler', desc: 'Bol sütlü, yumuşak içimli espresso.' },
        { name: 'Türk Kahvesi', price: 40, category: 'Sıcak İçecekler', desc: 'Geleneksel lezzet, lokum ile servis edilir.' },
        { name: 'Çay', price: 25, category: 'Sıcak İçecekler', desc: 'Taze demlenmiş siyah çay.' },
        { name: 'Soğuk Kahve', price: 65, category: 'Soğuk İçecekler', desc: 'Buzlu, ferahlatıcı filtre kahve.' },
        { name: 'Limonata', price: 35, category: 'Soğuk İçecekler', desc: 'Taze sıkılmış, ev yapımı limonata.' },
        { name: 'Cheesecake', price: 70, category: 'Tatlılar', desc: 'Orman meyveli soslu, nefis cheesecake.' },
        { name: 'Kruvasan', price: 50, category: 'Atıştırmalıklar', desc: 'Tereyağlı, taze pişmiş kruvasan.' },
        { name: 'Sandviç', price: 80, category: 'Atıştırmalıklar', desc: 'Kaşar ve hindi fümeli taze sandviç.' }
    ];

    // Page Content Rendering Functions
    const renderHome = () => `
        <div class="fade-in max-w-4xl mx-auto text-center">
            <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cafe-dark mb-6">Kahve Dükkanı'na Hoş Geldiniz</h1>
            <p class="font-sans text-lg md:text-xl text-cafe-light mb-8 max-w-2xl mx-auto">Taze çekilmiş kahve çekirdeklerinin büyüleyici kokusu eşliğinde, sıcacık bir atmosferde günün yorgunluğunu atın.</p>

            <div class="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl mb-12">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Kahve Dükkanı Atmosferi" class="w-full h-full object-cover object-center">
                <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <span class="text-cafe-cream font-serif text-2xl md:text-3xl italic font-semibold px-4 text-center">Her yudumda tutku...</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md menu-card border-t-4 border-cafe-dark">
                    <h3 class="font-serif text-xl font-bold text-cafe-dark mb-2">Kaliteli Çekirdekler</h3>
                    <p class="text-gray-600 text-sm">Dünyanın dört bir yanından özenle seçilmiş, en kaliteli kahve çekirdekleri.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md menu-card border-t-4 border-cafe-light">
                    <h3 class="font-serif text-xl font-bold text-cafe-dark mb-2">Usta Baristalar</h3>
                    <p class="text-gray-600 text-sm">Eğitimli baristalarımızın ellerinden çıkan sanat eseri kahveler.</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md menu-card border-t-4 border-cafe-accent">
                    <h3 class="font-serif text-xl font-bold text-cafe-dark mb-2">Sıcak Atmosfer</h3>
                    <p class="text-gray-600 text-sm">Arkadaşlarınızla keyifli vakit geçirebileceğiniz, huzurlu bir ortam.</p>
                </div>
            </div>
        </div>
    `;

    const renderHakkinda = () => `
        <div class="fade-in max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <h2 class="font-serif text-3xl md:text-4xl font-semibold text-cafe-dark mb-6 text-center border-b-2 border-cafe-accent pb-4">Hakkımızda</h2>
            <div class="prose prose-cafe mx-auto text-gray-700 space-y-4">
                <p class="font-sans text-base md:text-lg leading-relaxed">
                    <strong>Kahve Dükkanı</strong>, 2010 yılından bu yana şehrin kalbinde, kahve tutkunlarına eşsiz bir deneyim sunmak amacıyla hizmet vermektedir. Yola çıkış amacımız sadece bir içecek sunmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği bir yaşam alanı yaratmaktı.
                </p>
                <p class="font-sans text-base md:text-lg leading-relaxed">
                    Kahve çekirdeklerimizi, adil ticaret kurallarına uyan üreticilerden özenle seçiyor ve kendi tesislerimizde kavuruyoruz. Her bir fincan kahvede, tarladan bardağa uzanan emeğin ve kalitenin izlerini taşıyoruz.
                </p>
                <p class="font-sans text-base md:text-lg leading-relaxed">
                    Modern ve minimalist tasarım anlayışıyla dekore ettiğimiz mekanımızda, misafirlerimize hem dinlendirici bir atmosfer hem de eşsiz lezzetler sunmaktan gurur duyuyoruz.
                </p>
            </div>
        </div>
    `;

    const renderDestek = () => `
        <div class="fade-in max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 class="font-serif text-3xl font-semibold text-cafe-dark mb-6 text-center border-b-2 border-cafe-accent pb-4">Destek Merkezi</h2>
            <p class="text-center text-gray-600 mb-8">Sıkça sorulan sorulara göz atabilir veya bizimle doğrudan iletişime geçebilirsiniz.</p>

            <div class="space-y-4">
                <details class="bg-cafe-cream p-4 rounded-lg cursor-pointer group">
                    <summary class="font-serif font-semibold text-cafe-dark flex justify-between items-center outline-none">
                        Çalışma saatleriniz nelerdir?
                        <span class="transform group-open:rotate-180 transition-transform text-cafe-light">▼</span>
                    </summary>
                    <p class="mt-2 text-sm text-gray-700 pl-2 border-l-2 border-cafe-light">Haftanın her günü 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                </details>

                <details class="bg-cafe-cream p-4 rounded-lg cursor-pointer group">
                    <summary class="font-serif font-semibold text-cafe-dark flex justify-between items-center outline-none">
                        Vegan/Glutensiz seçenekleriniz var mı?
                        <span class="transform group-open:rotate-180 transition-transform text-cafe-light">▼</span>
                    </summary>
                    <p class="mt-2 text-sm text-gray-700 pl-2 border-l-2 border-cafe-light">Evet, menümüzde bitkisel süt seçenekleri (badem, yulaf, soya) ve glutensiz tatlı alternatiflerimiz bulunmaktadır.</p>
                </details>

                <details class="bg-cafe-cream p-4 rounded-lg cursor-pointer group">
                    <summary class="font-serif font-semibold text-cafe-dark flex justify-between items-center outline-none">
                        Rezervasyon yapıyor musunuz?
                        <span class="transform group-open:rotate-180 transition-transform text-cafe-light">▼</span>
                    </summary>
                    <p class="mt-2 text-sm text-gray-700 pl-2 border-l-2 border-cafe-light">Hafta içi grup etkinlikleri için rezervasyon alıyoruz. Hafta sonları ise "ilk gelen oturur" prensibiyle çalışıyoruz.</p>
                </details>
            </div>
        </div>
    `;

    const renderIletisim = () => `
        <div class="fade-in max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 class="font-serif text-3xl font-semibold text-cafe-dark mb-6 text-center border-b-2 border-cafe-accent pb-4">İletişim</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-serif text-xl font-bold text-cafe-dark mb-4">Bize Ulaşın</h3>
                    <ul class="space-y-4 text-gray-700">
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-cafe-light mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>Kahve Sokak No:42<br>Kadıköy, İstanbul</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-6 h-6 text-cafe-light mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span>+90 (216) 555 12 34</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-6 h-6 text-cafe-light mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span>merhaba@kahvedukkani.com</span>
                        </li>
                    </ul>

                    <div class="mt-8">
                        <h4 class="font-serif font-bold text-cafe-dark mb-2">Sosyal Medya</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="text-cafe-light hover:text-cafe-dark transition-colors">Instagram</a>
                            <a href="#" class="text-cafe-light hover:text-cafe-dark transition-colors">Twitter</a>
                            <a href="#" class="text-cafe-light hover:text-cafe-dark transition-colors">Facebook</a>
                        </div>
                    </div>
                </div>

                <form class="bg-cafe-cream p-6 rounded-lg" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <h3 class="font-serif text-xl font-bold text-cafe-dark mb-4">Mesaj Gönderin</h3>
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Adınız</label>
                        <input type="text" id="name" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-light bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                        <input type="email" id="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-light bg-white">
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                        <textarea id="message" rows="4" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-light bg-white"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-cafe-dark text-cafe-cream font-bold py-2 px-4 rounded-md hover:bg-cafe-light transition-colors duration-300">Gönder</button>
                </form>
            </div>
        </div>
    `;

    const renderSubeKonumlari = () => `
        <div class="fade-in max-w-4xl mx-auto">
            <h2 class="font-serif text-3xl font-semibold text-cafe-dark mb-8 text-center border-b-2 border-cafe-accent pb-4 inline-block mx-auto">Şube Konumları</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col menu-card">
                    <div class="h-48 bg-gray-200 relative">
                        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Kadıköy Merkez Şube" class="w-full h-full object-cover">
                        <div class="absolute bottom-0 left-0 bg-cafe-dark text-cafe-cream px-3 py-1 rounded-tr-lg font-serif font-bold">Merkez</div>
                    </div>
                    <div class="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 class="font-serif text-2xl font-bold text-cafe-dark mb-2">Kadıköy Şubesi</h3>
                            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Caferağa Mah. Moda Cad. No:45<br>Kadıköy / İstanbul</p>
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <p class="text-sm font-semibold text-cafe-light">Çalışma Saatleri:</p>
                            <p class="text-sm text-gray-500">Pzt - Paz: 08:00 - 23:00</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col menu-card">
                    <div class="h-48 bg-gray-200 relative">
                        <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Beşiktaş Şube" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 class="font-serif text-2xl font-bold text-cafe-dark mb-2">Beşiktaş Şubesi</h3>
                            <p class="text-gray-600 mb-4 text-sm leading-relaxed">Sinanpaşa Mah. Hasfırın Cad. No:12<br>Beşiktaş / İstanbul</p>
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <p class="text-sm font-semibold text-cafe-light">Çalışma Saatleri:</p>
                            <p class="text-sm text-gray-500">Pzt - Paz: 07:30 - 22:30</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const renderMenuIcerikleri = () => {
        let content = `
            <div class="fade-in max-w-5xl mx-auto">
                <h2 class="font-serif text-3xl font-semibold text-cafe-dark mb-8 text-center border-b-2 border-cafe-accent pb-4 inline-block mx-auto">Menü İçerikleri</h2>
                <p class="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Özenle hazırladığımız kahvelerimiz ve lezzetli atıştırmalıklarımızla tanışın.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        `;

        menuItems.forEach(item => {
            content += `
                <div class="bg-white rounded-lg p-6 shadow-md border-l-4 border-cafe-light menu-card hover:border-cafe-dark transition-colors">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-serif text-xl font-bold text-cafe-dark">${item.name}</h3>
                        <span class="bg-cafe-cream text-cafe-dark px-2 py-1 rounded text-sm font-semibold whitespace-nowrap">${item.price}₺</span>
                    </div>
                    <span class="inline-block text-xs uppercase tracking-wider text-gray-500 mb-3">${item.category}</span>
                    <p class="text-gray-600 text-sm leading-relaxed">${item.desc}</p>
                </div>
            `;
        });

        content += `
                </div>
            </div>
        `;
        return content;
    };

    const renderFiyatlar = () => {
        // Group items by category
        const categories = {};
        menuItems.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = [];
            }
            categories[item.category].push(item);
        });

        let content = `
            <div class="fade-in max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
                <h2 class="font-serif text-3xl font-semibold text-cafe-dark mb-8 text-center border-b-2 border-cafe-accent pb-4">Fiyat Listesi</h2>
        `;

        for (const [category, items] of Object.entries(categories)) {
            content += `
                <div class="mb-8 last:mb-0">
                    <h3 class="font-serif text-2xl font-bold text-cafe-light mb-4 border-b border-gray-200 pb-2">${category}</h3>
                    <ul class="space-y-3">
            `;

            items.forEach(item => {
                content += `
                    <li class="flex justify-between items-center group">
                        <span class="font-sans text-lg text-gray-800 group-hover:text-cafe-dark transition-colors">${item.name}</span>
                        <div class="flex-grow border-b border-dotted border-gray-300 mx-4 mt-2"></div>
                        <span class="font-serif font-bold text-cafe-dark text-lg">${item.price}₺</span>
                    </li>
                `;
            });

            content += `
                    </ul>
                </div>
            `;
        }

        content += `</div>`;
        return content;
    };

    // Routing Logic
    const routes = {
        '/': renderHome,
        '/hakkinda': renderHakkinda,
        '/destek': renderDestek,
        '/iletisim': renderIletisim,
        '/sube-konumlari': renderSubeKonumlari,
        '/menu-icerikleri': renderMenuIcerikleri,
        '/fiyatlar': renderFiyatlar
    };

    const router = () => {
        // Get path from URL hash, default to '/'
        let path = window.location.hash.slice(1) || '/';

        // Remove trailing slash if present (except for root)
        if (path !== '/' && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        // Get render function for current route, default to Home if not found
        const renderFunc = routes[path] || routes['/'];

        // Render content
        appContent.innerHTML = renderFunc();

        // Scroll to top on route change
        window.scrollTo(0, 0);

        // Update active state in sidebar
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${path}` || (path==='/' && link.getAttribute('href')==='#/')) {
                link.classList.add('bg-cafe-accent', 'border-l-4', 'border-cafe-dark');
            } else {
                link.classList.remove('bg-cafe-accent', 'border-l-4', 'border-cafe-dark');
            }
        });
    };

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial load
    router();
});