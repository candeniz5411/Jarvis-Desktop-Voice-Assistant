document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const appContent = document.getElementById('app-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // State
    let isSidebarOpen = false;

    // Menu Data
    const menuItems = [
        { name: 'Espresso', price: 45, category: 'Sıcak İçecekler', desc: 'Sert ve yoğun kahve deneyimi.' },
        { name: 'Cappuccino', price: 55, category: 'Sıcak İçecekler', desc: 'Espresso, sıcak süt ve bol süt köpüğü.' },
        { name: 'Latte', price: 60, category: 'Sıcak İçecekler', desc: 'Espresso ve bol sıcak süt.' },
        { name: 'Türk Kahvesi', price: 40, category: 'Sıcak İçecekler', desc: 'Geleneksel Türk kahvesi, lokum ile.' },
        { name: 'Çay', price: 25, category: 'Sıcak İçecekler', desc: 'Taze demlenmiş siyah çay.' },
        { name: 'Soğuk Kahve', price: 65, category: 'Soğuk İçecekler', desc: 'Buzlu ve ferahlatıcı kahve.' },
        { name: 'Limonata', price: 35, category: 'Soğuk İçecekler', desc: 'Taze sıkılmış ev yapımı limonata.' },
        { name: 'Cheesecake', price: 70, category: 'Tatlılar & Yiyecekler', desc: 'Frambuaz soslu enfes cheesecake.' },
        { name: 'Kruvasan', price: 50, category: 'Tatlılar & Yiyecekler', desc: 'Tereyağlı taze kruvasan.' },
        { name: 'Sandviç', price: 80, category: 'Tatlılar & Yiyecekler', desc: 'Taze yeşillikler ve peynirli sandviç.' }
    ];

    // Sidebar Logic
    function toggleSidebar() {
        isSidebarOpen = !isSidebarOpen;
        if (isSidebarOpen) {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
            // Prevent body scroll when sidebar is open
            document.body.style.overflow = 'hidden';
        } else {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking a nav link (mobile behavior)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isSidebarOpen) toggleSidebar();
        });
    });

    // Views
    const views = {
        home: () => `
            <div class="text-center animate-fade-in">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Kahve Dükkanı" class="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-coffee mb-4">Kahve Dükkanına Hoş Geldiniz</h1>
                <p class="text-xl text-coffee/80 max-w-2xl mx-auto">En taze çekirdeklerden özenle hazırlanan kahvelerimiz ve enfes tatlılarımızla sizleri bekliyoruz.</p>
                <div class="mt-8 flex justify-center gap-4">
                    <a href="#/menu-icerikleri" class="bg-coffee text-white px-6 py-3 rounded-lg font-bold hover:bg-coffee/90 transition-colors">Menüyü İncele</a>
                </div>
            </div>
        `,
        hakkinda: () => `
            <div class="max-w-3xl mx-auto animate-fade-in">
                <h1 class="text-3xl md:text-4xl font-heading font-bold text-coffee mb-6 text-center">Hakkımızda</h1>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-cream/50 prose prose-lg text-coffee/80">
                    <p class="mb-4">Kahve Dükkanı olarak hikayemiz, kaliteli kahveye olan tutkumuzla başladı. Amacımız sadece bir içecek sunmak değil, aynı zamanda dostlukların pekiştiği, sıcak ve samimi bir ortam yaratmaktır.</p>
                    <p class="mb-4">Dünyanın dört bir yanından özenle seçtiğimiz kahve çekirdeklerini, usta baristalarımızın ellerinde sanata dönüştürüyoruz.</p>
                    <p>Modern ve minimalist tasarım anlayışımızla dizayn ettiğimiz mekanımızda, şehrin gürültüsünden uzaklaşıp kahvenizin tadını çıkarabilirsiniz.</p>
                </div>
            </div>
        `,
        destek: () => `
            <div class="max-w-3xl mx-auto animate-fade-in">
                <h1 class="text-3xl md:text-4xl font-heading font-bold text-coffee mb-6 text-center">Destek</h1>
                <div class="space-y-6">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-cream/50">
                        <h3 class="text-xl font-bold text-coffee mb-2">Sıkça Sorulan Sorular</h3>
                        <div class="space-y-4 mt-4">
                            <div>
                                <h4 class="font-bold text-coffee">Çalışma saatleriniz nedir?</h4>
                                <p class="text-coffee/70">Haftanın her günü 08:00 - 23:00 saatleri arasında hizmet vermekteyiz.</p>
                            </div>
                            <div>
                                <h4 class="font-bold text-coffee">Rezervasyon yapıyor musunuz?</h4>
                                <p class="text-coffee/70">Özel etkinlikler ve kalabalık gruplar dışında rezervasyon almıyoruz, kapımız herkese açık!</p>
                            </div>
                            <div>
                                <h4 class="font-bold text-coffee">Vegan seçenekleriniz var mı?</h4>
                                <p class="text-coffee/70">Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve vegan tatlılarımız mevcuttur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        iletisim: () => `
            <div class="max-w-md mx-auto animate-fade-in">
                <h1 class="text-3xl md:text-4xl font-heading font-bold text-coffee mb-6 text-center">İletişim</h1>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-cream/50">
                    <form onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div class="mb-4">
                            <label class="block text-sm font-bold mb-2 text-coffee" for="name">Adınız</label>
                            <input class="w-full px-3 py-2 border border-cream/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee/50 bg-cream/20" id="name" type="text" placeholder="Adınız Soyadınız" required>
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-bold mb-2 text-coffee" for="email">E-posta Adresiniz</label>
                            <input class="w-full px-3 py-2 border border-cream/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee/50 bg-cream/20" id="email" type="email" placeholder="ornek@email.com" required>
                        </div>
                        <div class="mb-6">
                            <label class="block text-sm font-bold mb-2 text-coffee" for="message">Mesajınız</label>
                            <textarea class="w-full px-3 py-2 border border-cream/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee/50 bg-cream/20" id="message" rows="4" placeholder="Size nasıl yardımcı olabiliriz?" required></textarea>
                        </div>
                        <button class="w-full bg-coffee text-white font-bold py-3 px-4 rounded-lg hover:bg-coffee/90 transition-colors" type="submit">
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        `,
        subeler: () => `
            <div class="max-w-4xl mx-auto animate-fade-in">
                <h1 class="text-3xl md:text-4xl font-heading font-bold text-coffee mb-8 text-center">Şube Konumları</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-cream/50 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-coffee mb-2">Merkez Şube</h2>
                        <p class="text-coffee/80 mb-4">Kahve Caddesi No:1, Moda / İstanbul</p>
                        <p class="text-sm font-bold text-coffee/60">0216 123 45 67</p>
                    </div>
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-cream/50 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-coffee mb-2">Sahil Şube</h2>
                        <p class="text-coffee/80 mb-4">Kordon Boyu Sk. No:42, Alsancak / İzmir</p>
                        <p class="text-sm font-bold text-coffee/60">0232 987 65 43</p>
                    </div>
                     <div class="bg-white p-6 rounded-2xl shadow-sm border border-cream/50 hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-coffee mb-2">Kampüs Şube</h2>
                        <p class="text-coffee/80 mb-4">Üniversite Bulvarı, Beşevler / Ankara</p>
                        <p class="text-sm font-bold text-coffee/60">0312 456 78 90</p>
                    </div>
                </div>
            </div>
        `,
        menuIcerikleri: () => {
            // Group items by category
            const categories = [...new Set(menuItems.map(item => item.category))];

            let html = '<div class="max-w-4xl mx-auto animate-fade-in">';
            html += '<h1 class="text-3xl md:text-4xl font-heading font-bold text-coffee mb-8 text-center">Menü İçerikleri</h1>';

            categories.forEach(category => {
                html += `
                    <h2 class="text-2xl font-bold text-coffee mb-4 mt-8 pb-2 border-b-2 border-coffee/20">${category}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                `;

                menuItems.filter(i => i.category === category).forEach(item => {
                    html += `
                        <div class="bg-white p-6 rounded-2xl shadow-sm border border-cream/50 hover:shadow-md transition-shadow flex flex-col justify-between">
                            <div>
                                <h3 class="text-xl font-bold text-coffee mb-2">${item.name}</h3>
                                <p class="text-coffee/70 mb-4">${item.desc}</p>
                            </div>
                        </div>
                    `;
                });

                html += '</div>'; // close grid
            });

            html += '</div>';
            return html;
        },
        fiyatlar: () => {
            let html = '<div class="max-w-3xl mx-auto animate-fade-in">';
            html += '<h1 class="text-3xl md:text-4xl font-heading font-bold text-coffee mb-8 text-center">Fiyat Listesi</h1>';
            html += '<div class="bg-white rounded-2xl shadow-sm border border-cream/50 overflow-hidden">';

            const categories = [...new Set(menuItems.map(item => item.category))];

            categories.forEach(category => {
                html += `
                    <div class="bg-coffee text-cream px-6 py-3 font-bold text-lg">
                        ${category}
                    </div>
                    <div class="px-6 py-2">
                `;

                menuItems.filter(i => i.category === category).forEach(item => {
                    html += `
                        <div class="flex justify-between items-center border-b border-cream/50 py-3 last:border-0">
                            <span class="font-bold text-coffee">${item.name}</span>
                            <span class="font-bold text-lg text-coffee">${item.price}₺</span>
                        </div>
                    `;
                });

                html += '</div>';
            });

            html += '</div></div>';
            return html;
        }
    };

    // Router Logic
    function router() {
        let hash = window.location.hash || '#/';
        let viewName = hash.replace('#/', '') || 'home';

        // Handle kebab-case to camelCase for view keys (e.g., menu-icerikleri -> menuIcerikleri)
        if(viewName.includes('-')) {
            const parts = viewName.split('-');
            viewName = parts[0] + parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
        }

        const renderView = views[viewName] || views['home'];

        appContent.innerHTML = renderView();

        // Update active state in sidebar
        navLinks.forEach(link => {
            if(link.getAttribute('href') === hash) {
                link.classList.add('bg-cream/50', 'font-bold');
            } else {
                link.classList.remove('bg-cream/50', 'font-bold');
            }
        });

        // Scroll to top on route change
        window.scrollTo(0,0);
    }

    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
    `;
    document.head.appendChild(style);

    // Initialize Router
    window.addEventListener('hashchange', router);
    router(); // Initial load
});